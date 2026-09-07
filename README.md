# LRA · Portfólio — Ludgero Ricardo Abilino

Portfólio de Product Design implementado a partir do arquivo Figma
**Portfolio_Ludgero026** (`a53P25kAwAGVJPiE0gDIl1`), com tema claro/escuro,
navegação entre home e cases e camada de interação própria.

## Como rodar

Não há build nem dependências. Basta abrir `index.html` no navegador.

Para servir por HTTP (recomendado — evita restrições de `file://`):

```bash
powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 5173
```

Depois acesse `http://localhost:5173`.

## Estrutura

```
index.html              Shell da aplicação + markup da home
serve.ps1               Servidor estático mínimo (PowerShell, sem dependências)
assets/
  css/styles.css        Design system: tokens, temas, componentes, responsivo
  js/cases.js           Conteúdo dos 3 cases, descrito como dados
  js/app.js             Roteador, tema, scrollspy, reveal, lightbox, vídeo
  img/                  Imagens dos cases (JPEG otimizado; 1 PNG com recorte)
  logos/                Logotipos SVG, versões negativa e positiva
  video/                Vídeos das demonstrações
  cv/                   Currículo em PDF
```

## Logotipos e tema

Cada marca tem duas versões — `*-neg.svg` (arte branca) e `*-pos.svg` (cores
institucionais). O CSS mostra a que combina com o tema ativo, em vez de
inverter por filtro, o que distorceria as cores das marcas.

Os logotipos dos clientes do case Benkyou seguem o mesmo padrão — todas as
sete marcas do site têm o par `-neg` / `-pos`:

| Marca | Escuro (`-neg`) | Claro (`-pos`) |
|---|---|---|
| Grupo Boticário | cinza | cor da marca |
| Cielo | cinza | azul da marca |
| Ibema | cinza | preto |
| Norton | cinza | amarelo da marca |

O logo colorido do Grupo Boticário foi reconstruído a partir do *Brand Book
2022*: o nome já estava no cinza oficial (`#6E6E6E`); as seis faixas de cinza
do símbolo foram mapeadas para as cores da marca comparando o render do SVG
com o render da página 75 do PDF, pixel a pixel.

| cinza | cor |
|---|---|
| `#A5A7AA` | `#F5821F` |
| `#E5E6E7` | `#D6DF22` |
| `#BABCBE` | `#3B9CD6` |
| `#CFD1D2` | `#8DC53E` |
| `#919396` | `#F05A21` |
| `#808083` | `#1074AB` |

**Atenção ao limpar SVGs exportados**: retângulos dentro de `<defs>/<clipPath>`
são a máscara de recorte e não podem ser removidos — só os retângulos de fundo
no nível do documento (o Figma exporta o fundo da página junto).

### Telas de origem no Figma

| Rota | Nó no Figma | Tela |
|---|---|---|
| `#/` | `8:2` | Home Page Portfolio |
| `#/case/votorantim` | `19:4` | Case Votorantim — Desktop |
| `#/case/stefani` | `31:4` | Case Stefani — Desktop |
| `#/case/benkyou-game` | `44:4` | Case Benkyou Game — Desktop |

## Sistema de temas

O tema é controlado por `data-theme` no `<html>` e todo o CSS consome tokens
semânticos (`--bg`, `--fg`, `--line`, `--accent`…), definidos em `:root` para o
escuro e sobrescritos em `[data-theme="light"]`.

**Sem preferência salva o site abre no escuro**, que é o tema em que ele foi
desenhado. O seletor no header tem **três estados**: claro, sistema e escuro, e a
escolha de quem visita passa a valer nas visitas seguintes. A preferência
fica em `localStorage` (`lra-theme`); no modo *sistema*, a interface acompanha o
`prefers-color-scheme` em tempo real. Um script inline no `<head>` aplica o tema
antes da primeira pintura, então não há flash ao carregar — o padrão
desse script e o do `app.js` precisam continuar iguais, senão o tema troca
depois da primeira pintura.

Decisão de design: os logotipos de marca são artes brancas, então no tema claro
eles recebem uma placa escura (`--logo-plate`) em vez de serem invertidos — o que
distorceria as cores das marcas.

Atalho: tecla **T** alterna claro/escuro.

## Interações

- Roteamento por hash com transição de view e restauração de scroll ao voltar
- Barra de progresso de leitura no topo
- Header que se recolhe ao descer e reaparece ao subir
- Parallax sutil no hero
- Contadores animados nos números da home
- *Reveal* progressivo por `IntersectionObserver`
- Scrollspy no menu do topo (home) e na sidebar (cases)
- Lightbox nas imagens dos cases, com teclado (`←` `→` `Esc`) e foco preso no diálogo
- Paginador de duas direções ao final de cada case
- Copiar e-mail com feedback em toast
- Todo o movimento respeita `prefers-reduced-motion`

## Menu mobile

Abaixo de 860px o topo fica só com a marca e o botão do menu: três filetes
de 2px — a mesma espessura dos marcadores de acento do site — que giram e
viram um X ao abrir, com o glifo passando para a cor de acento. O painel
abre sob o header e reúne navegação, tema, idioma, contato e social, cada
bloco numa faixa entre filetes com microrrótulo, a mesma gramática das
faixas do corpo dos cases. O rodapé, no mobile, fica só com a assinatura e o
copyright.

Os controles **não são duplicados**: o `app.js` move os elementos reais do
header e do rodapé para dentro do painel e os devolve acima de 860px. Existe
um único seletor de tema, um único botão de idioma e um único botão de
copiar e-mail — mesmos handlers, sem IDs repetidos e sem estado para
sincronizar. Nas páginas de case a navegação da home **continua no painel**: é
o caminho de volta para Cases e Sobre. Os links resolvem isso sozinhos, porque
o roteador lê `#cases` como home + âncora — e uma âncora explícita tem
precedência sobre a posição lembrada da home. No header, onde quem orienta é a
navegação de seções do case, ela continua sumindo.

### Navegação do case no mobile

No desktop as seções do case ficam na coluna fixa à esquerda. Abaixo de
860px essa mesma navegação sai do fluxo e vira um **menu flutuante**: um
botão no rodapé da tela, ao lado do "voltar ao topo", que mostra em que
seção a leitura está (`02/06`) e abre a lista por cima do conteúdo. Assim as
seções ficam ao alcance em qualquer ponto da rolagem sem ocupar altura
permanente — antes era uma régua horizontal rolável que sumia ao rolar.

O rótulo do botão é alimentado pelo mesmo scrollspy que marca a coluna do
desktop; não há segundo estado para manter em sincronia.

**Cuidado**: a classe `.view-enter` é removida no `animationend`. Com
`fill-mode: both` ela deixava um transform identidade aplicado para sempre, e
um elemento com transform vira bloco de contenção — o menu flutuante, que é
`position: fixed`, passava a se posicionar dentro da view em vez da
viewport, indo parar a 14.000px do topo.

## Acessibilidade

Landmarks semânticos, *skip link*, `aria-current` na navegação ativa, grupo de
rádio ARIA no seletor de tema (navegável por setas), `alt` descritivo em todas as
imagens, foco visível e ordem de tabulação preservada.

## Imagens

Os PNGs exportados do Figma somavam **29,6 MB**. Foram reprocessados para
**4,55 MB** (−85%): redimensionados para no máximo 1600 px de largura e
recodificados em JPEG q85.

Uma única imagem continua PNG: `votorantim/totem.png`, o recorte do totem (75%
de pixels transparentes, exibido com `object-fit: contain` sobre o fundo do
tema). As demais tinham só de 0,1% a 3% de pixels semitransparentes — o
antialiasing das bordas arredondadas do Figma, descartado pelo enquadramento
`cover`.

WebP/AVIF renderia mais ainda, mas esta máquina não tem codificador disponível
(sem Node, Python, ImageMagick ou ffmpeg). Se for publicar em um serviço com
otimização automática de imagem, ele cobre esse último passo.

## Vídeos

Os dois vídeos usam `preload="none"` com poster: nada é baixado antes de
alguém apertar o play, então o peso do arquivo não entra no carregamento da
página. Só um vídeo toca por vez, e trocar de rota pausa o que estiver
tocando.

| Arquivo | Peso | Onde |
|---|---|---|
| `votorantim-animacao.mp4` | 10,5 MB | Case Votorantim · O Desafio |
| `stefani-solucao.mp4` | 48 MB | Case Stefani · Solução e Atuação |

O da Stefani é pesado para streaming em conexão móvel. Vale recomprimir
(1080p, ~2–3 Mbps) antes de publicar, ou trocar por uma versão mais curta.

## Ícones das ferramentas

As marcas vêm do [Simple Icons](https://simpleicons.org) (licença CC0),
baixadas para `assets/icons/` e embutidas como path em
`assets/js/tool-icons.js` — sem requisição de rede em tempo de execução.

Os ícones da Adobe são o ladrilho inteiro com as letras vazadas: o path é
pintado na cor escura da marca sobre um retângulo na cor viva, o que
reproduz o ícone real do aplicativo. O Miro é só a marca, centralizada sobre
o ladrilho amarelo.

As cores saem da paleta oficial de cada app. **Premiere e After Effects
usam a mesma dupla** (`#00005b` / `#9999ff`): é a paleta da família de vídeo
da Adobe, e no ícone real a distinção entre os dois é a abreviação, não a
cor — não trocar por variedade. O roxo/magenta que o Premiere tinha antes
era da geração anterior do ícone.

O **Adobe Captivate** não existe no Simple Icons e usa o ladrilho com a
abreviação de duas letras — a mesma anatomia dos demais apps da Adobe.

Para regenerar depois de acrescentar um SVG em `assets/icons/`, o script que
extrai os paths está no histórico desta conversa; o formato do arquivo é
`{ type: "tile" | "glyph", d: "<path>" }`.

## Vocabulário visual

Todo componente estrutural usa a mesma gramática — **filetes de 1px, colunas
divididas e microrrótulos em caixa alta** — em vez de caixas com fundo e
cantos arredondados. Cada faixa se diferencia pelo que carrega o peso, não
pelo invólucro:

| Faixa | O que a distingue |
|---|---|
| Números (home) / Indicadores | o número em Barlow Black |
| Linha do tempo / Antes-depois | eixo com marcador de acento por etapa |
| Frentes de atuação | microrrótulos, com acento na coluna do autor |
| Frentes de estratégia | matriz 2 colunas, sem acento — nenhuma se destaca |
| Percurso | régua de acento que cresce a cada etapa |
| Lista de etapas | linha por etapa, ordinal em microrrótulo |
| Lista de itens | linha por item, sem marcador — o filete separa |
| Paginador entre cases | célula dividida, com régua de acento ao apontar |

Nenhum componente estrutural usa seta — nem glifo (`→`, `↔`, `➔`) nem
desenho — nem ponto de bullet nem aspas decorativas: a estrutura carrega o
significado. No percurso, o sentido do avanço vem do ordinal e do
comprimento da régua de acento. A seta só aparece onde é afordância de
link (voltar, ver case, paginador), e sempre animada no hover, como é
convenção de navegação.

Raios de canto ficam restritos a quatro tokens: `--radius`, `--radius-sm`,
`--radius-pill` e `--radius-glass` — este último exclusivo das superfícies de
vidro descritas abaixo.

### Vidro

As superfícies que **flutuam sobre o conteúdo** — o menu de seções do case no
mobile e o botão de voltar ao topo — usam um material translúcido: desfoque de
26 a 30px com saturação em 180%, filete de contorno, realce especular de 1px no
topo e canto largo. É o único lugar do projeto com preenchimento, e por um motivo:
são os únicos elementos que precisam se separar do conteúdo por cima do qual
passam.

Os tokens `--glass-*` definem o material nos dois temas. A opacidade é de
**86%**, e não menos: o painel pode passar por cima de uma imagem clara, e
abaixo disso os tons apagados do texto não alcançam 4.5:1. Pelo mesmo motivo o
contador e a seta do botão usam `--fg-3` em vez de `--fg-5`, e o botão aberto
**não troca para a cor de acento** — o acento sobre vidro claro fica em 3.7:1.

Onde o desfoque não existe (`@supports`) ou onde a pessoa pediu menos
transparência no sistema (`prefers-reduced-transparency`), o material vira
sólido: o vidro é acabamento, não suporte de leitura.

### Grade justificada

Quando duas imagens de proporções diferentes dividem a mesma linha, colunas
iguais deixariam alturas diferentes (e um vão sob a mais baixa) e um
enquadramento fixo cortaria as fotos. Nesses casos o bloco recebe
`justify: true`: o `app.js` lê a proporção real do arquivo e a grava em
`--aspecto`, que vira o `flex-grow` da coluna. As larguras ficam
proporcionais, as alturas idênticas, nada é cortado e a linha preenche de
ponta a ponta. Abaixo de 860px a grade empilha e `--aspecto` deixa de reger.

### Ritmo

32px entre blocos de uma seção, 80px entre seções, medido e uniforme em todos
os cases. Todo bloco começa no mesmo eixo da coluna de conteúdo.

### Blocos de duas colunas

No bloco `split` o título atravessa as duas colunas, em vez de ficar dentro
da coluna da esquerda. É isso que faz as duas partirem da mesma linha: antes
o lado direito precisava ser centralizado para não encostar num título que
não era dele, e o vazio se acumulava acima da mídia. A única exceção é o
recorte transparente (o totem), que não tem borda para ancorar e por isso
continua centralizado contra a lista.

### Grade dos cases

A faixa de KPIs e o corpo do case dividem **a mesma grade de três colunas**,
ambos sangrando até a borda da página. A navegação lateral ocupa o primeiro
terço e o conteúdo os dois últimos — em qualquer largura, porque as colunas
são fracionárias.

O alinhamento é **texto com texto, não texto com filete**: as células da
faixa recuam um gutter a partir do divisor, então a coluna de conteúdo recua
o mesmo. Numa tela de 1400px o texto do 2º KPI e a coluna de conteúdo
começam ambos em 523, e o 3º KPI e a coluna terminam ambos em 1323.

O recuo da página fica **dentro das células**, não no contêiner: é isso que
permite as divisórias correrem de ponta a ponta e, ao mesmo tempo, o texto
ancorar no gutter. Título do hero, texto da faixa de KPIs e links da
navegação caem todos no mesmo eixo.

Abaixo de 860px a grade de terços some, o recuo volta para o contêiner e a
navegação vira uma régua horizontal rolável.

### Exceção deliberada

O thumb do case Votorantim (`.case-card__thumb--contain`) é um recorte
transparente e fica **sem moldura, sem fundo e sem canto arredondado**,
diferente dos outros dois. É intencional — não "corrigir por consistência".

### Contraste

Auditado nas 4 rotas × 2 temas: todo texto passa em 4.5:1 (3:1 para títulos
grandes). Os degraus `--fg-7` e `--fg-8` ficam abaixo disso e são usados
apenas em separadores decorativos (`|`, `·`) e no conector do percurso.

## Pontos em aberto

- **Versão EN**: o seletor de idioma está presente mas ainda sem tradução.
- **Recompressão do vídeo da Stefani**, como descrito acima.
