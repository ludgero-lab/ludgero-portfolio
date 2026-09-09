/* =============================================================================
   LRA · Portfólio — camada de comportamento
   Roteamento por hash, tema, scrollspy, reveal, lightbox e microinterações.
   Sem dependências externas.
   ========================================================================== */

(function () {
  "use strict";

  const { CASES, TOOLS } = window.PORTFOLIO_DATA;
  const CASE_BY_SLUG = Object.fromEntries(CASES.map((c) => [c.slug, c]));

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* Escapa texto vindo dos dados antes de injetar como HTML. */
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* Logotipo do cliente nas duas versões; o CSS mostra a que combina com o
     tema ativo. Só a versão visível carrega o texto alternativo, para o
     leitor de tela não anunciar a marca duas vezes. */
  function logoHTML(logo, alt, extraClass = "") {
    // Marca com um arquivo só (logos de cliente): a arte já lê nos dois
    // temas, sem placa por baixo.
    if (typeof logo === "string") {
      return `<span class="brand-mark ${extraClass}"><img src="${esc(logo)}" alt="${esc(alt)}" loading="lazy"></span>`;
    }
    return `<span class="brand-mark ${extraClass}">
      <img data-variant="neg" src="${esc(logo.neg)}" alt="${esc(alt)}" loading="lazy">
      <img data-variant="pos" src="${esc(logo.pos)}" alt="" aria-hidden="true" loading="lazy">
    </span>`;
  }

  /* Uma moldura, duas origens. Com `src` o arquivo é servido pelo próprio
     site; com `vimeo` (só o número do ID) quem serve é o player do Vimeo.
     Pôster, botão, rótulo e legenda são os mesmos nos dois casos — a troca
     não aparece no layout, só muda de onde vem o vídeo.

     Nos dois casos nada pesado é baixado antes do clique: no MP4 por causa
     do preload="none", no Vimeo porque o iframe só nasce no play. Enquanto
     ninguém pedir para assistir, nenhuma requisição sai para o vimeo.com e
     o site segue sem cookie de terceiro. */
  function videoHTML(v) {
    const descricao = esc(v.alt || v.caption || "Vídeo");
    const capa = `
        <button type="button" class="video-frame__poster" data-play
                aria-label="Reproduzir: ${esc(v.alt || v.caption || "vídeo")}">
          ${v.poster ? `<img src="${esc(v.poster)}" alt="" loading="lazy">` : ""}
          <span class="video-frame__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72L19 12z"/></svg>
          </span>
          ${v.label ? `<span class="video-frame__label">${esc(v.label)}</span>` : ""}
        </button>`;

    if (v.vimeo) {
      return `
      <div class="video-frame" data-video data-vimeo="${esc(String(v.vimeo))}"
           data-vimeo-h="${esc(v.vimeoHash || "")}"
           data-titulo="${descricao}">
        ${capa}
      </div>`;
    }

    return `
      <div class="video-frame" data-video>
        <video preload="none" playsinline controls
               poster="${esc(v.poster || "")}"
               aria-label="${descricao}">
          <source src="${esc(v.src || v.video)}" type="video/mp4">
          Seu navegador não reproduz este vídeo.
          <a href="${esc(v.src || v.video)}">Baixar o arquivo</a>.
        </video>
        ${capa}
      </div>`;
  }

  /* Ícone de aplicativo, montado a partir da marca oficial (assets/js/tool-icons.js).
     'tile'  — o path já é o ladrilho inteiro, com as letras vazadas: pinta-se
               o path na cor escura sobre um retângulo na cor viva, recuado o
               bastante para não escapar pelas bordas arredondadas.
     'glyph' — só a marca, centralizada sobre o ladrilho.
     'letras' — o inverso do 'tile': ladrilho escuro com as letras vivas
               por cima, que é como a Adobe desenha o Captivate.
     Sem marca oficial, cai no ladrilho com a abreviação de duas letras. */
  function toolHTML(key) {
    const t = TOOLS[key];
    if (!t) return "";
    const icon = (window.TOOL_ICONS || {})[key];
    let inner;

    if (icon && icon.type === "tile") {
      inner = `<rect x="1" y="1.3" width="22" height="21.4" rx="3.4" fill="${t.bright}"/>
               <path d="${icon.d}" fill="${t.dark}"/>`;
    } else if (icon && icon.type === "glyph") {
      inner = `<rect width="24" height="24" rx="4.3" fill="${t.bright}"/>
               <g transform="translate(4.6 4.6) scale(0.617)"><path d="${icon.d}" fill="${t.dark}"/></g>`;
    } else if (icon && icon.type === "letras") {
      inner = `<rect width="24" height="24" rx="4.3" fill="${t.dark}"/>
               <g transform="${icon.transform}"><path d="${icon.d}" fill="${t.bright}"/></g>`;
    } else {
      inner = `<rect width="24" height="24" rx="4.3" fill="${t.dark}"/>
               <rect x="0.6" y="0.6" width="22.8" height="22.8" rx="3.8" fill="none"
                     stroke="${t.bright}" stroke-opacity="0.45" stroke-width="0.7"/>
               <text x="12" y="15.9" text-anchor="middle" fill="${t.bright}"
                     font-family="Inter, system-ui, sans-serif" font-size="9.5"
                     font-weight="700" letter-spacing="-0.2">${esc(t.label || "")}</text>`;
    }

    return `
      <span class="tool" tabindex="0" role="img" aria-label="${esc(t.name)}">
        <svg viewBox="0 0 24 24" aria-hidden="true">${inner}</svg>
        <span class="tool__tip" aria-hidden="true">${esc(t.name)}</span>
      </span>`;
  }

  /* ==========================================================================
     1 · Tema (light / dark / auto)
     ========================================================================== */

  const THEME_KEY = "lra-theme";
  const sysLight = window.matchMedia("(prefers-color-scheme: light)");
  const themeSwitch = $("#theme-switch");
  const themeThumb = $("#theme-thumb");
  const ORDER = ["light", "auto", "dark"];

  function resolveTheme(pref) {
    return pref === "auto" ? (sysLight.matches ? "light" : "dark") : pref;
  }

  /* O indicador segue a posição real do botão ativo, então continua certo
     quando os tamanhos mudam no responsivo. */
  function positionThumb() {
    const pref = document.documentElement.dataset.themePref || "dark";
    const active = $(`[data-theme-set="${pref}"]`, themeSwitch);
    if (!active) return;
    themeThumb.style.width = `${active.offsetWidth}px`;
    themeThumb.style.height = `${active.offsetHeight}px`;
    themeThumb.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
  }

  function applyTheme(pref, { announce = false } = {}) {
    const resolved = resolveTheme(pref);
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePref = pref;
    try { localStorage.setItem(THEME_KEY, pref); } catch (e) {}

    $$("[data-theme-set]", themeSwitch).forEach((btn) => {
      const on = btn.dataset.themeSet === pref;
      btn.setAttribute("aria-checked", String(on));
      btn.tabIndex = on ? 0 : -1;
    });

    positionThumb();

    if (announce) {
      const names = { light: "Tema claro", dark: "Tema escuro", auto: "Tema do sistema" };
      toast(names[pref]);
    }
  }

  themeSwitch.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-set]");
    if (btn) applyTheme(btn.dataset.themeSet, { announce: true });
  });

  /* Setas navegam o grupo de rádio, como manda o padrão ARIA. */
  themeSwitch.addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    const cur = document.documentElement.dataset.themePref || "dark";
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = ORDER[(ORDER.indexOf(cur) + dir + ORDER.length) % ORDER.length];
    applyTheme(next, { announce: true });
    $(`[data-theme-set="${next}"]`, themeSwitch).focus();
  });

  sysLight.addEventListener("change", () => {
    if ((document.documentElement.dataset.themePref || "dark") === "auto") applyTheme("auto");
  });

  /* Padrão escuro: é o tema em que o portfólio foi desenhado. Quem escolher
     claro ou "seguir o sistema" tem a escolha respeitada nas visitas seguintes.
     Precisa casar com o script inline do <head>, senão há troca de tema
     depois da primeira pintura. */
  let storedPref = "dark";
  try { storedPref = localStorage.getItem(THEME_KEY) || "dark"; } catch (e) {}
  applyTheme(storedPref);

  /* ==========================================================================
     2 · Toast
     ========================================================================== */

  const toastEl = $("#toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.dataset.show = "true";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toastEl.dataset.show = "false"; }, 2200);
  }

  /* ==========================================================================
     3 · Reveal on scroll + contadores
     ========================================================================== */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  /* Numa grade justificada cada coluna cresce na proporção da sua imagem,
     o que iguala as alturas sem cortar nada. A proporção vem do arquivo, não
     dos dados, então continua correta se a imagem for trocada. */
  function justificarGrades(root = document) {
    $$(".grid--justified .figure", root).forEach((fig) => {
      const img = fig.querySelector("img");
      if (!img) return;
      const aplicar = () => {
        if (!img.naturalWidth || !img.naturalHeight) return;
        fig.style.setProperty("--aspecto", (img.naturalWidth / img.naturalHeight).toFixed(4));
      };
      if (img.complete) aplicar();
      else img.addEventListener("load", aplicar, { once: true });
    });
  }

  function observeReveals(root = document) {
    $$(".reveal", root).forEach((el) => {
      if (el.classList.contains("is-in")) return;
      revealObserver.observe(el);
    });
  }

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        countObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  function countUp(el) {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const suffix = el.dataset.suffix || "";
    const fmt = (n) => n.toLocaleString("pt-BR");

    if (prefersReduced.matches) { el.textContent = fmt(target) + suffix; return; }

    const dur = 1100;
    const start = performance.now();
    (function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(Math.round(target * eased)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    })(start);
  }

  function observeCounters(root = document) {
    $$("[data-count]", root).forEach((el) => countObserver.observe(el));
  }

  /* Miniatura vinda do Vimeo, para quando não houver pôster local.

     O pôster do repositório tem precedência de propósito: é ele que garante
     que o quadro escolhido converse com o resto da página — a arte do card
     do case, por exemplo, é a mesma imagem. A miniatura do Vimeo é o plano
     B: chega automaticamente e acompanha o que for definido lá, mas o
     recorte é decisão do Vimeo, não do layout.

     O oEmbed é público, aceita CORS e não exige token. Ainda assim é uma
     requisição a terceiro, então só sai quando a moldura chega perto da
     tela — quem nunca rolar até o vídeo nunca toca no vimeo.com. */
  const observadorVimeo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observadorVimeo.unobserve(entry.target);
        buscarMiniaturaVimeo(entry.target);
      });
    },
    { rootMargin: "300px 0px" }
  );

  function buscarMiniaturaVimeo(frame) {
    const capa = frame.querySelector("[data-play]");
    if (!frame.dataset.vimeo || !capa) return;

    // Vídeo não listado: o endereço canônico é vimeo.com/ID/HASH. Sem o
    // hash o oEmbed responde 404 e a moldura fica sem miniatura.
    const caminho = frame.dataset.vimeo
      + (frame.dataset.vimeoH ? "/" + frame.dataset.vimeoH : "");
    const alvo = encodeURIComponent("https://vimeo.com/" + caminho);
    fetch("https://vimeo.com/api/oembed.json?width=1600&url=" + alvo)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        if (!d.thumbnail_url) return;
        const img = document.createElement("img");
        img.alt = "";
        img.loading = "lazy";
        img.src = d.thumbnail_url;
        capa.prepend(img);
      })
      // Vídeo privado, offline ou rede fora do ar: a moldura fica no fundo
      // preto com o botão de play. Perde a prévia, continua funcionando.
      .catch(() => {});
  }

  function prepararVimeo(root = document) {
    $$("[data-vimeo]", root).forEach((frame) => {
      if (frame.querySelector("img")) return;
      observadorVimeo.observe(frame);
    });
  }

  /* ==========================================================================
     4 · Renderização — Home (cards de case)
     ========================================================================== */

  function renderCaseCards() {
    $("#case-list").innerHTML = CASES.map(
      (c, i) => `
      <a class="case-card reveal" href="#/case/${esc(c.slug)}" data-goto="${esc(c.slug)}"
         style="--reveal-delay:${i * 80}ms"
         aria-label="Abrir o case ${esc(c.title)}">
        <p class="case-card__meta">
          <span class="case-card__idx">${esc(c.index)}</span>
          <span class="case-card__dot" aria-hidden="true">·</span>
          <span class="case-card__client">${esc(c.client)}</span>
          ${c.clientAlso ? `<span class="case-card__also">· ${esc(c.clientAlso)}</span>` : ""}
        </p>

        <div class="tags">${c.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>

        <div class="case-card__grid">
          <div class="case-card__col-a">
            <div>
              <div class="case-card__brand">${logoHTML(c.logo, c.logoAlt)}</div>
              <h3 class="case-card__title">${esc(c.title)}</h3>
              <p class="case-card__desc">${esc(c.summary)}</p>
            </div>
            <span class="case-card__cta">[ Ver case <em aria-hidden="true">→</em> ]</span>
          </div>

          <div class="case-card__col-b">
            <div class="case-card__thumb${c.thumbFit === "contain" ? " case-card__thumb--contain" : ""}">
              <img src="${esc(c.thumb)}" alt="${esc(c.thumbAlt)}" loading="lazy" decoding="async">
            </div>
          </div>

          <div class="case-card__col-c">
            <p class="label">${esc(c.homeKpi.label)}</p>
            <p class="kpi-hero">${esc(c.homeKpi.value)}</p>
            <p>${esc(c.homeKpi.note)}</p>
          </div>
        </div>
      </a>`
    ).join("");
  }

  /* ==========================================================================
     5 · Renderização — blocos de conteúdo de case
     ========================================================================== */

  function figureHTML(f, extraClass = "") {
    // Um item de grade também pode ser um vídeo.
    if (f.video || f.vimeo || f.type === "video") {
      return `
        <figure class="figure ${f.center ? "figure--center" : ""} ${extraClass}">
          ${videoHTML(f)}
          ${f.caption ? `<figcaption>${esc(f.caption)}</figcaption>` : ""}
        </figure>`;
    }

    // Recorte transparente sem proporção declarada tira a altura da própria
    // imagem — não há caixa para cortá-la. Com proporção declarada ele ganha
    // a caixa (usada para dar altura comum a um conjunto de recortes); como
    // .media--bare não recorta o excedente, continua sem risco de corte.
    const isBare = f.fit === "bare";
    const ratio = f.ratio ? `media--${f.ratio}` : isBare ? "" : "media--video";
    const fitMap = { contain: " media--contain", bare: " media--bare" };
    const fit = fitMap[f.fit] || "";
    return `
      <figure class="figure ${f.center ? "figure--center" : ""} ${extraClass}">
        <button type="button" class="media ${ratio}${fit}" data-zoom
                data-src="${esc(f.src)}" data-cap="${esc(f.caption || f.alt || "")}"
                aria-label="Ampliar imagem: ${esc(f.alt || f.caption || "")}">
          <img src="${esc(f.src)}" alt="${esc(f.alt || "")}" loading="lazy" decoding="async">
          <span class="media__zoom" aria-hidden="true">⤢</span>
        </button>
        ${f.caption ? `<figcaption>${esc(f.caption)}</figcaption>` : ""}
      </figure>`;
  }

  const BLOCKS = {
    p: (b) => `<p${b.lead ? ' style="font-size:18px"' : ""}>${esc(b.text)}</p>`,

    h3: (b) => `<h3>${esc(b.text)}</h3>`,

    fineprint: (b) => `<p class="fineprint">${esc(b.text)}</p>`,

    steps: (b) =>
      `<ol class="steps">${b.items
        .map((t, i) => `<li><b>${String(i + 1).padStart(2, "0")}</b><span>${esc(t)}</span></li>`)
        .join("")}</ol>`,

    bullets: (b) => `<ul class="bullets">${b.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`,

    figure: (b) => figureHTML(b),

    video: (b) => figureHTML(b),

    extLink: (b) =>
      `<a class="ext-link" href="${esc(b.href)}" target="_blank" rel="noopener noreferrer">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/>
           <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>
         </svg>
         ${esc(b.label)}
         <em aria-hidden="true">↗</em>
         ${b.note ? `<span class="sr-only">— ${esc(b.note)} (abre em nova aba)</span>` : ""}
       </a>`,

    grid: (b) => {
      const inner = b.items.map((f) => figureHTML(f)).join("");
      const cls = b.justify ? "grid--justified" : b.cols === 3 ? "grid-3" : "grid-2";
      // `gap` permite fechar o espaçamento quando as imagens formam uma
      // sequência única (um fluxo), em vez de peças independentes.
      const style = b.gap != null ? ` style="gap:${Number(b.gap)}px"` : "";
      return b.caption
        ? `<div class="figure figure--center"><div class="${cls}"${style}>${inner}</div><figcaption>${esc(b.caption)}</figcaption></div>`
        : `<div class="${cls}"${style}>${inner}</div>`;
    },

    /* Duas colunas com um título que atravessa as duas. Tirar o título de
       dentro da coluna da esquerda é o que faz as duas começarem na mesma
       linha: antes o lado direito tinha de ser centralizado para não encostar
       num título que não era dele, e sobrava um vazio grande acima da mídia. */
    split: (b) =>
      `<div class="split">
         ${b.title ? `<h3 class="split__title">${esc(b.title)}</h3>` : ""}
         <div class="split__col">${b.left.map(renderBlock).join("")}</div>
         <div class="split__col">${b.right.map(renderBlock).join("")}</div>
       </div>`,

    /* Percurso: as etapas ocupam colunas divididas por filete, na mesma
       gramática das demais faixas e no mesmo eixo da grade de imagens que
       vem abaixo. O avanço é dito pelo ordinal e pela régua de acento sobre
       o filete, que ganha peso a cada etapa — sem seta. Lista ordenada
       porque a ordem é parte do conteúdo. */
    flow: (b) => {
      const n = b.items.length;
      return `<ol class="flow" style="--etapas:${n}">${b.items
        .map((t, i) => {
          // Fração percorrida: a régua da última etapa fecha a coluna inteira.
          const avanco = ((i + 1) / n).toFixed(4);
          return `<li class="flow__step" style="--avanco:${avanco}">
            <span class="flow__idx">${String(i + 1).padStart(2, "0")}</span>
            <span class="flow__label">${esc(t)}</span>
          </li>`;
        })
        .join("")}</ol>`;
    },

    timeline: (b) =>
      `<div class="timeline">${b.items
        .map((it) => `<div class="timeline__item"><b>${esc(it.year)}</b><span>${esc(it.text)}</span></div>`)
        .join("")}</div>`,

    logos: (b) =>
      `<div class="client-logos">${b.items.map((l) => logoHTML(l.src, l.alt)).join("")}</div>`,

    /* Diagrama de posição: não é uma sequência, são frentes que convivem.
       Por isso vira uma faixa de colunas divididas por filete — a mesma
       gramática das faixas de números — e não uma cadeia com setas. */
    diagram: (b) =>
      `<div class="roles">${b.items
        .map(
          (it) => `<div class="roles__col${it.self ? " roles__col--self" : ""}">
            <span class="roles__label">${esc(it.label)}</span>
            <span class="roles__title">${esc(it.title)}</span>
            ${it.note ? `<span class="roles__note">${esc(it.note)}</span>` : ""}
          </div>`
        )
        .join("")}</div>`,

    chips: (b) => `<div class="chips">${b.items.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`,

    kpiCards: (b) =>
      `<div class="kpi-cards">${b.items
        .map(
          (k) =>
            `<div class="kpi-card"><b>${esc(k.value)}</b><strong>${esc(k.title)}</strong><span>${esc(k.note)}</span></div>`
        )
        .join("")}</div>`,

    pillars: (b) =>
      `<div class="pillars">${b.items
        .map((p) => `<div class="pillar"><b>${esc(p.title)}</b><span>${esc(p.text)}</span></div>`)
        .join("")}</div>`,

    /* Sem glifo de aspas: <blockquote> já marca a citação para quem lê e
       para quem usa leitor de tela, e o filete faz o trabalho visual. */
    quote: (b) =>
      `<figure class="quote">
         <blockquote>${esc(b.text)}</blockquote>
         <figcaption><cite>${esc(b.cite)}</cite></figcaption>
       </figure>`,

    quoteCards: (b) =>
      `<div class="quote-cards">${b.items
        .map(
          (q) =>
            `<figure class="quote-card">
               <blockquote><p>${esc(q.text)}</p></blockquote>
               <figcaption><cite>${esc(q.cite)}</cite></figcaption>
             </figure>`
        )
        .join("")}</div>`,

    /* Antes/depois. A ordem é dita pelo eixo com marcadores e pelos rótulos
       datados — o mesmo recurso da linha do tempo — em vez de uma seta
       entre as duas imagens. */
    compare: (b) =>
      `<div class="compare">
         <div class="compare__stage">
           <span class="compare__label">${esc(b.before.label)}</span>
           ${figureHTML(b.before)}
         </div>
         <div class="compare__stage compare__stage--after">
           <span class="compare__label">${esc(b.after.label)}</span>
           ${figureHTML(b.after)}
         </div>
       </div>`,

    credits: (b) =>
      `<div class="credits">${b.items
        .map((c) => `<div class="credit"><span>${esc(c.role)}</span><b>${esc(c.name)}</b></div>`)
        .join("")}</div>`,

    tools: (b) => `<div class="tools">${b.items.map(toolHTML).join("")}</div>`
  };

  function renderBlock(b) {
    const fn = BLOCKS[b.type];
    return fn ? fn(b) : "";
  }

  /* ==========================================================================
     6 · Renderização — página de case
     ========================================================================== */

  /* Um lado do paginador. Quando não há case naquela direção o slot
     simplesmente não existe — a célula restante ocupa a linha inteira, e o
     atalho para a lista fica no link abaixo.
     Os dois lados têm a mesma ordem de elementos: quem diz a direção é o
     rótulo, não o espelhamento do layout. */
  function pagerSlot(target, dir) {
    if (!target) return "";
    const isPrev = dir === "prev";
    const arrow = `<em aria-hidden="true">${isPrev ? "←" : "→"}</em>`;
    const word = isPrev ? "Case anterior" : "Próximo case";

    return `
      <a class="case-pager__item case-pager__item--${dir}" href="#/case/${esc(target.slug)}" data-goto="${esc(target.slug)}">
        <span class="case-pager__body">
          <span class="case-pager__dir">${isPrev ? `${arrow} ${word}` : `${word} ${arrow}`}</span>
          <span class="case-pager__title">${esc(target.title)}</span>
          <span class="case-pager__client">${esc(target.client)}</span>
        </span>
        <span class="case-pager__thumb">
          <img src="${esc(target.thumb)}" alt="" loading="lazy" decoding="async">
        </span>
      </a>`;
  }

  function renderCase(c) {
    const i = CASES.findIndex((x) => x.slug === c.slug);
    const prev = CASES[i - 1] || null;
    const next = CASES[i + 1] || null;

    return `
      <div class="case-top">
        <button type="button" class="back-link" data-goto="/">
          <em aria-hidden="true">←</em> Voltar para cases
        </button>
        <span class="case-card__idx">Case ${esc(c.index)} / 03</span>
      </div>

      <header class="case-hero">
        <div class="reveal">${logoHTML(c.logo, c.logoAlt)}</div>

        <h1 class="case-title reveal" style="--reveal-delay:60ms">${esc(c.shortTitle)}</h1>

        <div class="tags reveal" style="--reveal-delay:120ms">
          ${c.heroTags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
        </div>

        <div class="kpi-grid reveal" style="--reveal-delay:180ms">
          ${c.kpis
            .map((k) => `<div><p class="kpi-grid__num">${esc(k.value)}</p><p>${esc(k.note)}</p></div>`)
            .join("")}
        </div>
      </header>

      <div class="case-body">
        <nav class="case-nav" id="case-nav" aria-label="Seções do case">
          ${c.sections
            .map(
              (s, i) =>
                `<a href="#${esc(s.id)}" data-section="${esc(s.id)}" ${i === 0 ? 'aria-current="true"' : ""}>${esc(s.nav)}</a>`
            )
            .join("")}
        </nav>

        <!-- Só no mobile: aciona a navegação do case como menu flutuante,
             para as seções ficarem ao alcance em qualquer ponto da rolagem. -->
        <button type="button" class="case-fab" id="case-fab"
                aria-expanded="false" aria-controls="case-nav">
          <!-- Índice em miniatura: três filetes com o do meio em acento,
               o mesmo desenho que marca a seção ativa na coluna do desktop. Diz que
               ali existe uma lista de seções, sem virar outro sanduíche. -->
          <svg class="case-fab__indice" viewBox="0 0 14 10" aria-hidden="true">
            <rect x="0" y="0" width="14" height="1" rx="0.5"/>
            <rect class="case-fab__indice-ativo" x="0" y="4.5" width="9" height="1" rx="0.5"/>
            <rect x="0" y="9" width="14" height="1" rx="0.5"/>
          </svg>
          <span class="case-fab__label" data-fab-label>Seções</span>
          <span class="case-fab__count" data-fab-count aria-hidden="true"></span>
          <span class="case-fab__caret" aria-hidden="true">▴</span>
        </button>

        <div class="case-content">
          ${c.sections
            .map(
              (s, i) => `
            <section class="case-section reveal" id="${esc(s.id)}" aria-labelledby="h-${esc(s.id)}">
              <h2 id="h-${esc(s.id)}">${esc(s.title)}</h2>
              ${s.blocks.map(renderBlock).join("")}
            </section>
            ${i < c.sections.length - 1 ? '<hr class="rule">' : ""}`
            )
            .join("")}
        </div>
      </div>

      <nav class="case-pager" aria-label="Navegar entre cases">
        <div class="case-pager__head">
          <h2 class="eyebrow">Continue explorando</h2>
          <span>${esc(c.index)} de 03</span>
        </div>
        <div class="case-pager__grid${prev && next ? "" : " case-pager__grid--single"}">
          ${pagerSlot(prev, "prev")}
          ${pagerSlot(next, "next")}
        </div>
        <a class="case-pager__all" href="#/" data-goto="/">
          [ Ver todos os cases <em aria-hidden="true">→</em> ]
        </a>
      </nav>`;
  }

  /* ==========================================================================
     7 · Roteador (hash)
     ========================================================================== */

  const viewHome = $("#view-home");
  const viewCase = $("#view-case");
  const mainNav = $("#main-nav");
  let sectionSpy = null;
  let cardSpy = null;
  let currentKey = null;
  let rotaAtual = "home";

  const keyOf = (route) => (route.name === "case" ? `case:${route.slug}` : "home");

  function parseRoute() {
    const raw = (location.hash || "#/").slice(1);
    const m = raw.match(/^\/case\/([\w-]+)/);
    if (m && CASE_BY_SLUG[m[1]]) return { name: "case", slug: m[1] };
    return { name: "home", anchor: raw.startsWith("/") ? "" : raw };
  }

  /* A classe sai assim que a animação termina. Com `fill-mode: both` ela
     deixaria um transform identidade aplicado para sempre, e um elemento com
     transform vira bloco de contenção — os filhos com `position: fixed` (o
     menu flutuante do case) passariam a se posicionar dentro da view em vez
     da viewport. */
  /* A classe precisa sair de qualquer jeito: enquanto ela está aplicada a
     view carrega um transform, e um ancestral com transform desloca a
     referência do `position: sticky` do hero. Se o animationend não vier —
     aba em segundo plano na hora da troca, movimento reduzido, animação
     interrompida —, o tempo limite tira. */
  function animarEntrada(view) {
    view.classList.remove("view-enter");
    void view.offsetWidth;
    view.classList.add("view-enter");
    const soltar = () => view.classList.remove("view-enter");
    view.addEventListener("animationend", soltar, { once: true });
    setTimeout(soltar, 1200);
  }

  /* Vindo de um case, a home acabou de ser reexibida e o documento ainda
     não tem a altura final — o navegador limita o scroll ao que existe
     naquele instante e a âncora fica pelo caminho. Por isso a posição é
     reconferida por alguns quadros, até a seção encostar no topo. */
  function irParaAncora(id, quadros = 12) {
    const el = document.getElementById(id);
    if (!el) { window.scrollTo({ top: 0, behavior: "auto" }); return; }
    el.scrollIntoView({ behavior: "auto", block: "start" });
    if (quadros > 0 && Math.abs(el.getBoundingClientRect().top) > 2) {
      requestAnimationFrame(() => irParaAncora(id, quadros - 1));
    }
  }

  function render(route, { restore = null } = {}) {
    if (sectionSpy) { sectionSpy.disconnect(); sectionSpy = null; }
    if (cardSpy) { cardSpy.disconnect(); cardSpy = null; }
    currentKey = keyOf(route);
    rotaAtual = route.name;

    if (route.name === "case") {
      const c = CASE_BY_SLUG[route.slug];
      viewCase.innerHTML = renderCase(c);
      viewCase.hidden = false;
      viewHome.hidden = true;
      // Dentro de um case nenhuma seção da home está ativa.
      $$("[data-spy]", mainNav).forEach((a) => a.setAttribute("aria-current", "false"));
      atualizarNavDaHome();
      document.title = `${c.title} · Ludgero Ricardo Abilino`;

      animarEntrada(viewCase);

      observeReveals(viewCase);
      prepararVimeo(viewCase);
      justificarGrades(viewCase);
      setupCaseSpy(c);
    } else {
      viewCase.hidden = true;
      viewCase.innerHTML = "";
      viewHome.hidden = false;
      atualizarNavDaHome();
      document.title = "Ludgero Ricardo Abilino · Product Designer";

      animarEntrada(viewHome);

      observeReveals(viewHome);
      prepararVimeo(viewHome);
      setupHomeSpy();
      setupContadorDeCases();
    }

    // Restaura a posição ao voltar; senão começa do topo (ou de uma âncora).
    requestAnimationFrame(() => {
      if (restore != null) {
        window.scrollTo({ top: restore, behavior: "auto" });
      } else if (route.name === "home" && route.anchor) {
        irParaAncora(route.anchor);

      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }

  /* Guarda o scroll da home para restaurá-lo ao voltar de um case. */
  const scrollMemory = {};

  function navigate(target) {
    const current = parseRoute();
    if (current.name === "home") scrollMemory.home = window.scrollY;

    if (target === "/") {
      history.pushState({ back: true }, "", "#/");
      render({ name: "home" }, { restore: scrollMemory.home ?? 0 });
    } else {
      history.pushState({}, "", `#/case/${target}`);
      render({ name: "case", slug: target });
    }
  }

  /* popstate e hashchange podem disparar juntos na mesma navegação; o
     guard por chave evita renderizar duas vezes e derrubar o scroll.
     Âncoras internas da home (#cases, #sobre…) resolvem para a mesma
     chave e portanto não passam pelo roteador. */
  function onHistoryNav() {
    const route = parseRoute();
    if (keyOf(route) === currentKey) return;
    /* Uma âncora explícita manda mais que a posição lembrada da home: vindo de
       um case pelo menu, "#sobre" precisa abrir na seção Sobre, e não no ponto
       onde a home havia parado. */
    const restaurar = route.name === "home" && !route.anchor ? scrollMemory.home ?? 0 : null;
    render(route, { restore: restaurar });
  }

  window.addEventListener("popstate", onHistoryNav);
  window.addEventListener("hashchange", onHistoryNav);

  /* Delegação: qualquer elemento com data-goto navega. */
  document.addEventListener("click", (e) => {
    const goto = e.target.closest("[data-goto]");
    if (goto) {
      e.preventDefault();
      navigate(goto.dataset.goto);
      return;
    }

    const scrollTo = e.target.closest("[data-scroll-to]");
    if (scrollTo) {
      e.preventDefault();
      const el = document.getElementById(scrollTo.dataset.scrollTo);
      if (el) el.scrollIntoView({ behavior: prefersReduced.matches ? "auto" : "smooth", block: "start" });
      return;
    }

    const brand = e.target.closest('.brand[data-route="/"]');
    if (brand) { e.preventDefault(); navigate("/"); }
  });

  /* ==========================================================================
     8 · Scrollspy (home e case)
     ========================================================================== */

  function makeSpy(links, sections, aoMudar) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach((a) => a.setAttribute("aria-current", String(a.dataset.spy === id || a.dataset.section === id)));
          if (aoMudar) aoMudar(id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
    return spy;
  }

  function setupHomeSpy() {
    const links = $$("[data-spy]", mainNav);
    const sections = links.map((a) => document.getElementById(a.dataset.spy)).filter(Boolean);
    sectionSpy = makeSpy(links, sections);
  }

  /* Fecha o menu flutuante ao clicar fora ou apertar Esc. Registrado uma vez
     só, no escopo do módulo: o botão é recriado a cada rota, então é
     procurado na hora do evento em vez de capturado aqui. */
  function fecharMenuDoCase(devolverFoco) {
    const fab = $("#case-fab");
    if (!fab || fab.getAttribute("aria-expanded") !== "true") return false;
    fab.setAttribute("aria-expanded", "false");
    if (devolverFoco) fab.focus();
    return true;
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("#case-fab, #case-nav")) return;
    fecharMenuDoCase(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharMenuDoCase(true);
  });

  function setupCaseSpy(c) {
    const nav = $("#case-nav");
    const links = $$("[data-section]", nav);
    const sections = c.sections.map((s) => document.getElementById(s.id)).filter(Boolean);

    /* Menu flutuante do mobile: o botão espelha a seção em que a leitura
       está — o mesmo dado que o scrollspy já escreve nos links da coluna. */
    const fab = $("#case-fab");
    const rotulo = $("[data-fab-label]", fab);
    const contador = $("[data-fab-count]", fab);
    const total = String(c.sections.length).padStart(2, "0");

    const marcarNoBotao = (id) => {
      const i = c.sections.findIndex((s) => s.id === id);
      if (i < 0) return;
      rotulo.textContent = c.sections[i].nav;
      contador.textContent = `${String(i + 1).padStart(2, "0")}/${total}`;
    };
    marcarNoBotao(c.sections[0].id);

    fab.addEventListener("click", () => {
      fab.setAttribute("aria-expanded", String(fab.getAttribute("aria-expanded") !== "true"));
    });

    sectionSpy = makeSpy(links, sections, marcarNoBotao);

    nav.addEventListener("click", (e) => {
      const a = e.target.closest("[data-section]");
      if (!a) return;
      e.preventDefault();
      fab.setAttribute("aria-expanded", "false");
      const el = document.getElementById(a.dataset.section);
      if (el) el.scrollIntoView({ behavior: prefersReduced.matches ? "auto" : "smooth", block: "start" });
    });
  }

  /* ==========================================================================
     9 · Lightbox
     ========================================================================== */

  const lb = $("#lightbox");
  const lbImg = $("#lightbox-img");
  const lbCap = $("#lightbox-cap");
  let lbItems = [];
  let lbIndex = 0;
  let lbOpener = null;

  function openLightbox(btn) {
    lbItems = $$("[data-zoom]").map((el) => ({
      src: el.dataset.src,
      cap: el.dataset.cap,
      alt: el.querySelector("img")?.alt || ""
    }));
    lbIndex = Math.max(0, $$("[data-zoom]").indexOf(btn));
    lbOpener = btn;
    showLightbox();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $('[data-lb="close"]', lb).focus();
  }

  function showLightbox() {
    const it = lbItems[lbIndex];
    if (!it) return;
    lbImg.src = it.src;
    lbImg.alt = it.alt;
    lbCap.textContent = it.cap;
    const many = lbItems.length > 1;
    $('[data-lb="prev"]', lb).hidden = !many;
    $('[data-lb="next"]', lb).hidden = !many;
  }

  function closeLightbox() {
    lb.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
    if (lbOpener) lbOpener.focus();
  }

  function stepLightbox(delta) {
    lbIndex = (lbIndex + delta + lbItems.length) % lbItems.length;
    showLightbox();
  }

  /* "Um de cada vez" vale para os dois tipos de vídeo. No MP4 é o pause
     direto; no Vimeo é um postMessage, que o próprio player entende — não
     vale carregar o SDK inteiro só para isso. */
  function pausarTudo(exceto) {
    $$("video").forEach((v) => { if (v !== exceto) v.pause(); });
    $$("iframe[src*='player.vimeo.com']").forEach((f) => {
      if (f.contentWindow) {
        f.contentWindow.postMessage('{"method":"pause"}', "https://player.vimeo.com");
      }
    });
  }

  document.addEventListener("click", (e) => {
    // Play: só aqui o vídeo começa a carregar. Um de cada vez.
    const play = e.target.closest("[data-play]");
    if (play) {
      const frame = play.closest("[data-video]");

      // Vimeo: o iframe entra agora, por cima do pôster, já tocando.
      // dnt=1 pede ao player que não rastreie a sessão — sem esse
      // parâmetro o Vimeo grava cookie, e o site não usa nenhum.
      if (frame.dataset.vimeo) {
        pausarTudo();
        const player = document.createElement("iframe");
        player.src = "https://player.vimeo.com/video/"
          + encodeURIComponent(frame.dataset.vimeo)
          + "?autoplay=1&dnt=1&title=0&byline=0&portrait=0"
          + (frame.dataset.vimeoH ? "&h=" + encodeURIComponent(frame.dataset.vimeoH) : "");
        player.title = frame.dataset.titulo || "Vídeo";
        // allow já cobre o fullscreen; repetir no allowfullscreen só gera
        // aviso no console, porque um sobrepõe o outro.
        player.allow = "autoplay; fullscreen; picture-in-picture";
        frame.appendChild(player);
        play.remove();
        player.focus();
        return;
      }

      const vid = frame.querySelector("video");
      pausarTudo(vid);
      play.hidden = true;
      vid.play().catch(() => { play.hidden = false; });
      vid.focus();
      return;
    }

    const zoom = e.target.closest("[data-zoom]");
    if (zoom) { openLightbox(zoom); return; }

    const action = e.target.closest("[data-lb]");
    if (action) {
      if (action.dataset.lb === "close") closeLightbox();
      if (action.dataset.lb === "prev") stepLightbox(-1);
      if (action.dataset.lb === "next") stepLightbox(1);
      return;
    }

    if (!lb.hidden && e.target === lb) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "Tab") {
      // Mantém o foco dentro do diálogo.
      const focusables = $$("button:not([hidden])", lb);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ==========================================================================
     10 · Header, barra de progresso, voltar ao topo, parallax
     ========================================================================== */

  const header = $("#site-header");
  const progress = $("#progress");
  const toTop = $("#to-top");
  const heroBg = $("#hero-bg");

  /* --- Hero preso à tela -------------------------------------------------
     Enquanto a pista passa, o hero fica parado, a composição do nome encolhe
     e a faixa de números sobe para o lugar que ela desocupa. O CSS faz a
     prisão (sticky) e a subida da faixa; daqui saem só as duas medidas que
     dependem do texto renderizado: quanto encolher e em que ritmo.

     A escala é calculada, não escolhida: é a maior que ainda deixa a
     composição inteira caber acima da faixa. Assim o efeito se ajusta a
     telas de alturas diferentes em vez de depender de um número fixo. */

  const pista = $("#hero-stage");
  const heroComp = $("#hero-comp");
  const faixaNumeros = $("#stats");
  const heroSecao = $(".hero");
  const heroCta = $(".hero__scroll");
  const heroFundo = $(".hero__fundo");
  const efeitoHero = window.matchMedia(
    "(min-width: 861px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)"
  );
  // O fundo preso não depende do tamanho da tela — só de haver movimento.
  const fundoSuave = window.matchMedia("(prefers-reduced-motion: no-preference)");
  const MARGEM_HERO = 72;  // o mesmo respiro de baixo do hero, em px
  const ESCALA_ALVO = 0.62; // redução desejada da composição, se couber
  const RESPIRO = 32;      // ar entre a base do texto e o topo da faixa
  let escalaFinal = ESCALA_ALVO;
  let subidaFinal = 0;
  let cursoComposicao = 1;

  /* A entrada do botão termina com `forwards`, e preenchimento de animação
     ganha de qualquer declaração normal — inclusive da opacidade que a
     rolagem quer escrever. Terminada a entrada, a animação sai do caminho.
     O tempo limite cobre o caso de o animationend não vir: aba em segundo
     plano na hora do carregamento, ou animação interrompida. */
  if (heroCta) {
    const soltarCta = () => {
      heroCta.style.animation = "none";
      heroCta.style.opacity = "1";
      heroCta.style.transform = "none";
    };
    // Sem `once`: com um filtro por alvo ele poderia ser consumido pelo
    // animationend de um filho e nunca chegar no botão.
    heroCta.addEventListener("animationend", (e) => {
      if (e.target === heroCta) soltarCta();
    });
    setTimeout(soltarCta, 3000);
  }

  /* A imagem de fundo é a única parte do efeito que vale em qualquer largura:
     conforme os blocos sobem, ela fica onde está e apaga aos poucos. O que
     muda entre desktop e mobile é só onde esse apagar começa e quanto dura.

     No desktop, com o hero preso, ela só começa a sumir quando a pista acaba
     e o bloco de texto e números sobe embora — antes disso ela é o fundo da
     composição. No mobile não há prisão, então ela segura enquanto o hero
     está na tela e apaga ao longo da faixa de números, terminando quando os
     cases chegam. */
  function atualizarFundo() {
    if (!pista || !heroFundo || viewHome.hidden) return;
    if (!fundoSuave.matches) { limparFundo(); return; }

    const alturaHero = heroSecao.offsetHeight;
    const percorrido = window.scrollY - pista.offsetTop;
    const preso = efeitoHero.matches;
    const inicio = preso ? pista.offsetHeight - alturaHero : alturaHero * 0.6;
    const janela = preso ? alturaHero * 0.7 : alturaHero;

    const saida = Math.min(1, Math.max(0, (percorrido - inicio) / janela));
    pista.style.setProperty("--fundo-op", (1 - saida).toFixed(3));
    // Some de vez no fim: uma camada do tamanho da tela não deve continuar
    // pendurada sobre o resto da página só porque está transparente.
    heroFundo.style.visibility = saida >= 1 ? "hidden" : "";

    // A deriva substitui o parallax antigo. Com a imagem presa à tela ela já
    // está no limite do efeito de profundidade; o deslocamento aqui é só um
    // resto de vida, e vai no máximo até os 8% que a imagem tem de sobra em
    // cima (.hero__bg inset: -8%). Passar disso abriria uma fresta.
    if (heroBg && !prefersReduced.matches) {
      const curso = Math.max(1, inicio + janela);
      const pTotal = Math.min(1, Math.max(0, percorrido / curso));
      heroBg.style.transform = `translate3d(0, ${(pTotal * alturaHero * 0.08).toFixed(1)}px, 0)`;
    }
  }

  function limparFundo() {
    if (!pista) return;
    pista.style.removeProperty("--fundo-op");
    if (heroFundo) heroFundo.style.removeProperty("visibility");
    if (heroBg) heroBg.style.removeProperty("transform");
  }

  /* Só o que é do hero preso. O fundo tem limpeza própria: ele continua
     valendo mesmo quando a prisão não vale. */
  function limparHero() {
    if (!pista) return;
    pista.style.removeProperty("--hero-p");
    pista.style.removeProperty("--comp-escala");
    pista.style.removeProperty("--comp-sobe");
    pista.style.removeProperty("--faixa-h");
    if (heroCta) heroCta.style.removeProperty("opacity");
  }

  function medirHero() {
    if (!pista || !efeitoHero.matches) { limparHero(); atualizarFundo(); return; }
    const alturaHero = heroSecao.offsetHeight;
    const alturaFaixa = faixaNumeros.offsetHeight;
    const alturaComp = heroComp.offsetHeight;

    // Quanto a composição precisa subir para a base dela parar acima da
    // faixa. O padding de cima da faixa já dá um afastamento, mas ele é
    // interno e o olho não lê como respiro entre os dois blocos: sem o
    // RESPIRO o texto auxiliar encosta na linha dos números.
    subidaFinal = Math.max(0, alturaFaixa - MARGEM_HERO + RESPIRO);

    // A escala é a desejada, a menos que o texto encolhido ainda assim
    // esbarre no topo. Aí ela cede o necessário, nunca abaixo de 0.45.
    const tetoDisponivel = alturaHero - MARGEM_HERO - subidaFinal - 90;
    escalaFinal = Math.max(0.45, Math.min(ESCALA_ALVO, tetoDisponivel / alturaComp));

    // O curso é a subida da faixa, e nada mais: é ela que comanda: a faixa
    // parte da dobra e sobe uma altura dela até encaixar. Amarrar o
    // encolhimento a esse mesmo número é o que faz as duas coisas serem um
    // movimento só, sem uma esperar a outra.
    cursoComposicao = Math.max(1, alturaFaixa);
    pista.style.setProperty("--faixa-h", alturaFaixa + "px");
    atualizarHero();
    atualizarFundo();
  }

  function atualizarHero() {
    if (!pista || !efeitoHero.matches || viewHome.hidden) return;
    const percorrido = window.scrollY - pista.offsetTop;
    const p = Math.min(1, Math.max(0, percorrido / cursoComposicao));
    pista.style.setProperty("--hero-p", p.toFixed(4));
    pista.style.setProperty("--comp-escala", (1 - (1 - escalaFinal) * p).toFixed(4));
    pista.style.setProperty("--comp-sobe", (subidaFinal * p).toFixed(1) + "px");
    // O botão de rolagem divide o lugar com a faixa: sai já no começo.
    if (heroCta) heroCta.style.opacity = Math.max(0, 1 - p * 4).toFixed(3);
  }

  efeitoHero.addEventListener("change", medirHero);
  fundoSuave.addEventListener("change", medirHero);
  window.addEventListener("resize", medirHero);
  window.addEventListener("load", medirHero);
  medirHero();

  const cabecalhos = Array.prototype.slice.call(document.querySelectorAll(".section-head"));
  let alturaHeader = 66;
  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    // Esconde o header ao descer, revela ao subir — sem esconder no topo.
    const goingDown = y > lastY && y > 220;
    header.dataset.hidden = String(goingDown && lb.hidden);
    lastY = y;

    toTop.dataset.show = String(y > window.innerHeight * 0.8);

    // Preso quando encosta no header: é o que acende o filete inferior.
    if (!viewHome.hidden) {
      cabecalhos.forEach((h) => {
        h.dataset.preso = String(h.getBoundingClientRect().top <= alturaHeader + 1);
      });
    }
    // O fundo vale em qualquer largura; a prisão do hero, só no desktop.
    atualizarFundo();
    if (efeitoHero.matches) atualizarHero();
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    },
    { passive: true }
  );

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReduced.matches ? "auto" : "smooth" });
  });

  /* ==========================================================================
     11 · Miudezas
     ========================================================================== */

  const copyBtn = $("#copy-email");
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      toast("E-mail copiado");
      copyBtn.dataset.copied = "true";
      setTimeout(() => { copyBtn.dataset.copied = "false"; }, 1800);
    } catch (e) {
      toast(email);
    }
  });

  /* Ao trocar de rota, nenhum vídeo deve continuar tocando fora da tela. */
  window.addEventListener("hashchange", () => $$("video").forEach((v) => v.pause()));

  $("#lang-btn").addEventListener("click", () => {
    toast("Versão em inglês em breve");
  });

  /* Atalho: T alterna o tema. */
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() !== "t" || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(input|textarea|select)$/i.test(document.activeElement?.tagName || "")) return;
    const cur = document.documentElement.dataset.themePref || "dark";
    applyTheme(cur === "dark" ? "light" : "dark", { announce: true });
  });

  /* ==========================================================================
     12 · Menu mobile
     ==========================================================================
     Os controles não são duplicados: abaixo de 860px os elementos reais do
     header e do rodapé são movidos para dentro do painel, e devolvidos ao
     lugar acima disso. Assim continua existindo um único seletor de tema, um
     único botão de idioma e um único botão de copiar e-mail — com os mesmos
     handlers, sem IDs repetidos e sem estado para sincronizar. */

  const menuBtn = $("#menu-btn");
  const drawer = $("#drawer");
  const telaEstreita = window.matchMedia("(max-width: 860px)");

  /* Cada peça guarda de onde veio para poder voltar. */
  const PECAS = [
    { el: mainNav, destino: '[data-slot="nav"]' },
    { el: themeSwitch, destino: '[data-slot="tema"]' },
    { el: $("#lang-btn"), destino: '[data-slot="idioma"]' },
    { el: $(".site-footer__cols"), destino: '[data-slot="contato"]' }
  ].filter((p) => p.el);
  PECAS.forEach((p) => { p.origem = p.el.parentElement; p.marca = p.el.nextElementSibling; });

  /* A navegação da home some do header quando se está num case: lá quem orienta
     é a navegação de seções. Já dentro do painel do mobile ela fica, porque é o
     caminho de volta para Cases e Sobre — e os links resolvem isso sozinhos:
     o roteador lê "#cases" como home + âncora. */
  function atualizarNavDaHome() {
    mainNav.hidden = rotaAtual === "case" && !telaEstreita.matches;
  }

  function sincronizarMenu() {
    PECAS.forEach((p) => {
      const alvo = telaEstreita.matches ? $(p.destino, drawer) : p.origem;
      if (alvo && p.el.parentElement !== alvo) alvo.appendChild(p.el);
      // De volta ao header, o elemento retoma a posição original.
      if (!telaEstreita.matches && p.marca && p.marca.parentElement === p.origem) {
        p.origem.insertBefore(p.el, p.marca);
      }
    });
    atualizarNavDaHome();
    positionThumb();
  }

  function abrirMenu() {
    medirHeader();
    drawer.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
    $("[data-menu-label]", menuBtn).textContent = "Fechar menu";
    document.body.style.overflow = "hidden";
    // O header não pode se esconder com o painel aberto.
    header.dataset.hidden = "false";
    positionThumb();
  }

  function fecharMenu({ devolverFoco = true } = {}) {
    if (drawer.hidden) return;
    drawer.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
    $("[data-menu-label]", menuBtn).textContent = "Abrir menu";
    document.body.style.overflow = "";
    if (devolverFoco) menuBtn.focus();
  }

  menuBtn.addEventListener("click", () => {
    drawer.hidden ? abrirMenu() : fecharMenu();
  });

  /* Qualquer link do painel leva para outro lugar: o painel se fecha junto. */
  drawer.addEventListener("click", (e) => {
    if (e.target.closest("a")) fecharMenu({ devolverFoco: false });
  });

  document.addEventListener("keydown", (e) => {
    if (drawer.hidden) return;
    if (e.key === "Escape") { fecharMenu(); return; }
    if (e.key !== "Tab") return;
    // Foco preso entre o botão do menu e o conteúdo do painel.
    const focaveis = [menuBtn, ...$$('a[href], button:not([hidden]), [tabindex="0"]', drawer)]
      .filter((el) => el.offsetParent !== null);
    if (!focaveis.length) return;
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
  });

  telaEstreita.addEventListener("change", () => {
    fecharMenu({ devolverFoco: false });
    sincronizarMenu();
  });

  sincronizarMenu();

  /* ==========================================================================
     13 · Boot
     ========================================================================== */

  /* A altura do header vira token: o cabeçalho preso da seção se apoia nela,
     e o painel do menu também. Medida em vez de fixada, para acompanhar o
     que muda entre desktop e mobile. */
  function medirHeader() {
    alturaHeader = header.offsetHeight;
    document.documentElement.style.setProperty("--header-h", alturaHeader + "px");
  }

  /* Contador da seção de cases: acompanha qual card está à frente enquanto a
     pessoa rola. A faixa de leitura começa logo abaixo do cabeçalho preso. */
  function setupContadorDeCases() {
    const contador = $(".section-head__count", viewHome);
    const cards = $$(".case-card", viewHome);
    if (!contador || !cards.length) return;
    const total = String(cards.length).padStart(2, "0");
    const marcar = (i) => { contador.textContent = String(i + 1).padStart(2, "0") + " / " + total; };
    marcar(0);
    cardSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) marcar(cards.indexOf(e.target)); });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    cards.forEach((c) => cardSpy.observe(c));
  }

  renderCaseCards();
  render(parseRoute());
  observeCounters(viewHome);
  onScroll();
  positionThumb();
  medirHeader();
  window.addEventListener("resize", () => { positionThumb(); medirHeader(); }, { passive: true });
  document.fonts?.ready.then(positionThumb);
})();
