/* =============================================================================
   Textos da interface nos dois idiomas.

   Só o que está escrito no index.html e o que o app.js gera. O conteúdo dos
   cases mora no cases.js, ali mesmo onde o texto em português está, como
   { pt: "...", en: "..." } — assim a estrutura continua única e não há dois
   arquivos para sair de sincronia.

   Faltando a chave ou o `en`, o app cai no português em vez de quebrar.

   Script clássico (não módulo), como os outros: o portfólio precisa abrir
   direto do sistema de arquivos.
   ========================================================================== */

(function (global) {
  "use strict";

  const UI = {
    /* --- Cabeçalho, menu e rodapé ------------------------------------- */
    "nav.cases":        { pt: "Cases",   en: "Work" },
    "nav.sobre":        { pt: "Sobre",   en: "About" },
    "nav.contato":      { pt: "Contato", en: "Contact" },

    "tema.grupo":       { pt: "Tema da interface", en: "Interface theme" },
    "tema.claro":       { pt: "Tema claro",  en: "Light theme" },
    "tema.escuro":      { pt: "Tema escuro", en: "Dark theme" },

    "menu.abrir":       { pt: "Abrir menu",  en: "Open menu" },
    "menu.fechar":      { pt: "Fechar menu", en: "Close menu" },
    "menu.titulo":      { pt: "Menu",        en: "Menu" },
    "menu.navegacao":   { pt: "Navegação",   en: "Navigation" },
    "menu.tema":        { pt: "Tema",        en: "Theme" },
    "menu.idioma":      { pt: "Idioma",      en: "Language" },

    "idioma.rotulo":    { pt: "PT", en: "EN" },
    "idioma.aria":      { pt: "Idioma: Português (Brasil). Mudar para inglês",
                          en: "Language: English. Switch to Portuguese" },

    "pular":            { pt: "Pular para o conteúdo", en: "Skip to content" },
    "aoTopo":           { pt: "Voltar ao topo",        en: "Back to top" },

    /* --- Hero ---------------------------------------------------------- */
    "hero.tag.1":       { pt: "Product Designer Sênior",   en: "Senior Product Designer" },
    "hero.tag.2":       { pt: "Moldando Experiências de",  en: "Shaping Learning and" },
    "hero.tag.3":       { pt: "Aprendizagem e Negócios",   en: "Business Experiences" },
    "hero.role":        { pt: "Role para ver os cases",    en: "Scroll to see the work" },

    /* --- Faixa de números ---------------------------------------------- */
    "stats.aria":       { pt: "Números da carreira", en: "Career in numbers" },
    "stats.1.rotulo":   { pt: "Anos de Mercado",     en: "Years in the Field" },
    "stats.1.nota":     { pt: "Design de produto e experiência",
                          en: "Product and experience design" },
    // T&D (Treinamento e Desenvolvimento) é L&D (Learning & Development) —
    // traduzir a sigla ao pé da letra não diria nada a um recrutador.
    "stats.2.rotulo":   { pt: "Anos em EdTechs",     en: "Years in EdTech" },
    "stats.2.nota":     { pt: "Educação, T&D e produtos B2B",
                          en: "Education, L&D and B2B products" },
    "stats.3.rotulo":   { pt: "Sessões de Uso por Mês", en: "Sessions per Month" },
    "stats.3.nota":     { pt: "Rede nacional da Votorantim",
                          en: "Votorantim's nationwide network" },

    /* --- Faixa de tecnologia ------------------------------------------- */
    "tech.rotulo":      { pt: "Tecnologia",          en: "Technology" },
    "tech.1":           { pt: "IA generativa",       en: "Generative AI" },
    "tech.2":           { pt: "3D",                  en: "3D" },
    "tech.3":           { pt: "Prototipagem com IA", en: "AI prototyping" },

    /* --- Cases na home -------------------------------------------------- */
    // "Selected Work" é a convenção de portfólio em inglês; "Featured Cases"
    // soa a tradução literal.
    "cases.titulo":     { pt: "Cases de Destaque", en: "Selected Work" },
    "cases.verCase":    { pt: "Ver case",          en: "View case" },
    "cases.abrir":      { pt: "Abrir o case",      en: "Open case" },

    // Conector da última vírgula numa lista: "a, b e c" / "a, b and c".
    "lista.conector":   { pt: "e", en: "and" },
    "papel.liderei":     { pt: "Liderei",      en: "Led" },
    "papel.contribuiEm": { pt: "Contribuí em", en: "Contributed to" },
    "papel.acompanhei":  { pt: "Acompanhei",   en: "Followed" },
    // Contador "04 de 07" no bloco de envolvimento.
    "envolv.de":        { pt: "de", en: "of" },

    /* --- Interface do case ---------------------------------------------- */
    "case.voltar":      { pt: "Voltar para cases",  en: "Back to work" },
    "case.rotulo":      { pt: "Case",               en: "Case" },
    "case.secoes":      { pt: "Seções do case",     en: "Case sections" },
    "case.secoesFab":   { pt: "Seções",             en: "Sections" },
    "pager.anterior":   { pt: "Case anterior",      en: "Previous case" },
    "pager.proximo":    { pt: "Próximo case",       en: "Next case" },
    "pager.titulo":     { pt: "Continue explorando", en: "Keep exploring" },

    /* --- Sobre ---------------------------------------------------------- */
    "sobre.titulo":     { pt: "Sobre", en: "About" },
    "sobre.retratoAlt": { pt: "Retrato de Ludgero Ricardo Abilino",
                          en: "Portrait of Ludgero Ricardo Abilino" },
    "sobre.disponivel": { pt: "Disponível para<br>contratação",
                          en: "Available for<br>hire" },
    "sobre.cv":         { pt: "Ver currículo", en: "View CV" },
    "sobre.cvNota":     { pt: "(PDF, abre em nova aba)", en: "(PDF, opens in a new tab)" },

    "sobre.bio": {
      pt: "Sou Product Designer com <strong>15 anos de experiência</strong> em design e uma trajetória construída, nos últimos 10 anos, entre <strong>produtos digitais</strong>, <strong>EdTech e soluções de T&amp;D</strong>. Combino UX/UI, gamificação, prototipagem e <strong>Design Systems</strong> para transformar problemas complexos — desde regras de negócio até experiências de aprendizagem — em produtos claros, intuitivos e relevantes para quem os utiliza. Venho de uma fase sólida em <strong>direção de arte, motion design e audiovisual</strong>, o que influencia diretamente a forma como penso produto: com atenção à experiência como um todo, à coerência dos sistemas e à qualidade de execução.",
      en: "I'm a Product Designer with <strong>15 years of experience</strong> in design, the last 10 of them spent across <strong>digital products</strong>, <strong>EdTech and L&amp;D solutions</strong>. I combine UX/UI, gamification, prototyping and <strong>Design Systems</strong> to turn complex problems — from business rules to learning experiences — into products that are clear, intuitive and relevant to the people who use them. I come from a solid background in <strong>art direction, motion design and film</strong>, and that shapes the way I think about product: attentive to the experience as a whole, to the coherence of systems and to the quality of execution."
    },

    "sobre.trabalho.titulo": { pt: "Como Eu Trabalho", en: "How I Work" },
    "sobre.trabalho.texto": {
      pt: "Não acredito em processos de design rígidos. Acredito em entender o contexto, o problema e o momento do produto para definir o caminho mais adequado. Às vezes, isso significa simplificar o processo para validar uma hipótese ou colocar um MVP no mercado com mais velocidade. Em outros momentos, significa aprofundar a descoberta, conversar com usuários e testar soluções antes de avançar. Gosto de trabalhar próximo ao produto e à engenharia, porque acredito que as melhores soluções surgem do equilíbrio entre as necessidades das pessoas, os objetivos do negócio e as possibilidades da tecnologia.",
      en: "I don't believe in rigid design processes. I believe in understanding the context, the problem and the product's moment in order to choose the right path. Sometimes that means simplifying the process to validate a hypothesis or get an MVP to market faster. At other times it means going deeper into discovery, talking to users and testing solutions before moving ahead. I like working close to product and engineering, because I believe the best solutions come from the balance between what people need, what the business is after and what technology makes possible."
    },

    "sobre.busco.titulo": { pt: "O Que Busco", en: "What I'm Looking For" },
    "sobre.busco.texto": {
      pt: "Procuro equipes maduras em que o design participa de forma estratégica das decisões e existe espaço para colaboração, aprendizado e conversas honestas. Quero continuar evoluindo ao lado de pessoas boas, contribuindo com minha experiência para construir produtos digitais que resolvam problemas reais e gerem impacto consistente para o negócio.",
      en: "I'm looking for mature teams where design takes part in decisions strategically and there is room for collaboration, learning and honest conversations. I want to keep growing alongside good people, bringing my experience to build digital products that solve real problems and deliver consistent impact for the business."
    },
    "sobre.busco.fecho": {
      pt: "Se essa forma de pensar design e produto combina com os desafios da sua equipe, vamos conversar.",
      en: "If this way of thinking about design and product fits your team's challenges, let's talk."
    },

    /* --- Experiência ---------------------------------------------------- */
    "exp.titulo":       { pt: "Experiências Mais Relevantes", en: "Relevant Experience" },
    // "Pleno" não tem equivalente direto: no mercado de língua inglesa o
    // degrau do meio é "Mid-Level" (ou nada). Mantido explícito para a
    // progressão júnior → pleno → sênior continuar legível.
    "exp.1.cargo":      { pt: "Product Designer Sênior",  en: "Senior Product Designer" },
    "exp.2.cargo":      { pt: "Product Designer Pleno",   en: "Mid-Level Product Designer" },
    "exp.3.cargo":      { pt: "UX/UI Designer",           en: "UX/UI Designer" },
    "exp.4.cargo":      { pt: "Designer Digital Pleno",   en: "Mid-Level Digital Designer" },
    "exp.5.cargo":      { pt: "Designer Digital Júnior",  en: "Junior Digital Designer" },
    "exp.remoto":       { pt: "Benkyou do Brasil · B2B · Remoto",
                          en: "Benkyou do Brasil · B2B · Remote" },
    "exp.presencial":   { pt: "Benkyou do Brasil · B2B · Presencial",
                          en: "Benkyou do Brasil · B2B · On-site" },
    "exp.presencial2":  { pt: "Benkyou do Brasil · Presencial",
                          en: "Benkyou do Brasil · On-site" },
    "exp.1.data":       { pt: "Jan 2024 – Mar 2026", en: "Jan 2024 – Mar 2026" },
    "exp.2.data":       { pt: "Abr 2021 – Jan 2024", en: "Apr 2021 – Jan 2024" },
    "exp.3.data":       { pt: "Mar 2020 – Abr 2021", en: "Mar 2020 – Apr 2021" },
    "exp.4.data":       { pt: "Jan 2017 – Mar 2020", en: "Jan 2017 – Mar 2020" },
    "exp.5.data":       { pt: "Abr 2016 – Dez 2016", en: "Apr 2016 – Dec 2016" },

    /* --- Rodapé --------------------------------------------------------- */
    "rodape.contato":   { pt: "Contato", en: "Contact" },
    "rodape.social":    { pt: "Social",  en: "Social" },
    "rodape.copiar":    { pt: "Copiar endereço de e-mail", en: "Copy email address" },

    /* --- Mensagens e diálogos ------------------------------------------- */
    "lightbox.aria":    { pt: "Visualização ampliada", en: "Enlarged view" },
    "lightbox.fechar":  { pt: "Fechar",                en: "Close" },
    "lightbox.anterior":{ pt: "Imagem anterior",       en: "Previous image" },
    "lightbox.proxima": { pt: "Próxima imagem",        en: "Next image" },
    "toast.emailCopiado": { pt: "E-mail copiado", en: "Email copied" },
    "toast.temaClaro":  { pt: "Tema claro",  en: "Light theme" },
    "toast.temaEscuro": { pt: "Tema escuro", en: "Dark theme" },

    /* --- Metadados do documento ----------------------------------------- */
    "meta.titulo": {
      pt: "Ludgero Ricardo Abilino · Product Designer",
      en: "Ludgero Ricardo Abilino · Product Designer"
    },
    "meta.descricao": {
      pt: "Portfólio de Ludgero Ricardo Abilino — Product Designer com 15 anos de mercado, moldando experiências de aprendizagem e negócios em EdTech, T&D e produtos digitais B2B.",
      en: "Portfolio of Ludgero Ricardo Abilino — Product Designer with 15 years in the field, shaping learning and business experiences across EdTech, L&D and B2B digital products."
    }
  };

  global.PORTFOLIO_I18N = { UI: UI, IDIOMAS: ["pt", "en"], PADRAO: "pt" };
})(window);
