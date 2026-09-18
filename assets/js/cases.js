/* =============================================================================
   Conteúdo dos cases.
   Cada case é descrito como dados; o app.js transforma em HTML.
   Isso mantém a estrutura editável sem mexer em markup.

   Script clássico (não módulo) de propósito: assim o portfólio também abre
   direto do sistema de arquivos, sem precisar de servidor.
   ========================================================================== */

(function (global) {
  "use strict";

  const IMG = "assets/img";
  const LOGO = "assets/logos";

  const CASES = [
  /* ------------------------------------------------------------------ 01 */
  {
    slug: "votorantim",
    index: "01",
    client: "Votorantim Cimentos",
    shortName: "Votorantim",
    logo: { neg: `${LOGO}/votorantim-neg.svg`, pos: `${LOGO}/votorantim-pos.svg` },
    logoAlt: "Votorantim Cimentos",
    // "Integração", aqui, é o credenciamento do motorista parceiro — em inglês
    // isso é onboarding, não "integration".
    title: { pt: "Programa de Integração de Segurança Interativa",
             en: "Interactive Safety Onboarding Program" },
    // Caixa de frase, como os h1 dos outros dois cases. O `title` acima segue
    // em caixa alta de título: é o que aparece no card da home, onde os três
    // são iguais entre si.
    shortTitle: { pt: "Programa de integração de segurança interativa",
                  en: "Interactive safety onboarding program" },
    summary: {
      pt: "Ecossistema nacional gamificado de simulação e tomada de decisão implementado em totens físicos proprietários.",
      en: "A nationwide gamified system of simulation and decision-making, deployed on the company's own physical kiosks."
    },
    // O recorte do totem substitui a arte que trazia o logotipo embutido —
    // a marca agora entra no layout, como SVG.
    thumb: `${IMG}/votorantim/totem.png`,
    thumbFit: "contain",
    thumbAlt: { pt: "Totem interativo de atendimento ao motorista da Votorantim Cimentos",
                en: "Votorantim Cimentos interactive kiosk for driver check-in" },
    tags: ["Learning Experience Design", "UX Design", "B2B"],
    heroTags: ["B2B", "Learning Experience Design", "UX Design", "2020 — 2024"],
    homeKpi: {
      label: { pt: "KPI Principal", en: "Headline KPI" },
      value: { pt: "Escala Nacional", en: "Nationwide" },
      note: { pt: "Totens interativos homologados em 100% das unidades do país",
              en: "Interactive kiosks approved across 100% of the company's sites in Brazil" }
    },
    kpis: [
      { value: { pt: "+9.000", en: "9,000+" },
        note: { pt: "Sessões de uso por mês em escala nacional",
                en: "Sessions per month across the country" } },
      { value: { pt: "4 Anos", en: "4 Years" },
        note: { pt: "Em uso contínuo e evolução desde 2020",
                en: "In continuous use and evolving since 2020" } },
      { value: "100%",
        note: { pt: "Das unidades integradas via totens físicos",
                en: "Of the company's sites covered by physical kiosks" } }
    ],
    // Nível de envolvimento em cada frente, com a evidência que o sustenta.
    // A ordem das frentes é a de ENVOLVIMENTO.frentes, não a daqui.
    involvement: [
      { area: "pesquisa", level: "lidera", note: {
        pt: "Iniciativa minha, fora do briefing: em campo, no centro de distribuição de Osasco, filmei e anotei o comportamento de um motorista usando o treinamento anterior no totem, para entender a operação real e os pontos de fricção antes de desenhar a jornada",
        en: "My own initiative, outside the brief: in the field, at the Osasco distribution center, I filmed and took notes on a driver using the previous training on the kiosk, to understand the real operation and its friction points before designing the journey" } },
      { area: "arquitetura", level: "lidera", note: {
        pt: "Defini a ideia conceitual do curso a partir do briefing do cliente: o vídeo pausa diante de uma situação de risco e o motorista responde pelo teclado, trocando a aula passiva por tomada de decisão",
        en: "I shaped the concept of the course from the client's brief: the video pauses at a hazardous situation and the driver answers on the keypad, trading a passive lesson for decision-making" } },
      { area: "interacao", level: "lidera", note: {
        pt: "Traduzi a lógica do sistema para um totem sem toque nem mouse, operado só pelo teclado numérico, e validei os caminhos de decisão em wireframes antes do desenvolvimento",
        en: "I translated the logic of the system to a kiosk with no touchscreen and no mouse, driven only by a numeric keypad, and validated the decision paths in wireframes before development" } },
      { area: "visual", level: "lidera", note: {
        pt: "Direção de design do projeto: defini o estilo de animação que substituiu a captação real e dirigi a produção das ilustrações",
        en: "Design direction for the project: I set the animation style that replaced live-action filming and directed the production of the illustrations" } },
      { area: "decisoes", level: "lidera", note: {
        pt: "Conduzi o projeto de ponta a ponta: ajudei a decidir a virada de captação real para animação quando a pandemia inviabilizou o briefing, e propus o formato Top 10, que virou o vídeo Política de Consequências em 2024",
        en: "I led the project end to end: I helped decide the shift from live action to animation when the pandemic made the original brief impossible, and proposed the Top 10 format that became the 2024 video Política de Consequências" } },
      { area: "tecnologia", level: "lidera", note: {
        pt: "Adaptei a experiência ao hardware do totem, com o teclado numérico como única entrada, e especifiquei como esses caminhos deveriam ser montados no Adobe Captivate",
        en: "I adapted the experience to the kiosk hardware, with the numeric keypad as the only input, and specified how those paths should be assembled in Adobe Captivate" } },
      // Os nomes da equipe ficam na ficha técnica, não aqui: esta seção
      // responde "o que foi meu". O nível já diz onde a execução foi dividida.
      { area: "producao", level: "lidera", note: {
        pt: "Estive à frente da produção nos dois projetos, do início à entrega: a montagem do treinamento em 2020 e, no vídeo de 2024, narrativa, sonorização, motion graphics no After Effects e finalização no Premiere",
        en: "I was at the front of production on both projects, from start to delivery: assembling the 2020 training and, on the 2024 video, narrative, sound design, motion graphics in After Effects and finishing in Premiere" } }
    ],
    sections: [
      {
        id: "desafio",
        nav: { pt: "O Desafio", en: "The Challenge" },
        title: { pt: "O desafio e a virada da pandemia",
                 en: "The challenge and the pandemic pivot" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "Em 2020, o briefing original previa gravações in loco com imagens reais nas unidades industriais da Votorantim. Com a chegada da pandemia de Covid-19, o plano foi integralmente inviabilizado. A virada estratégica foi migrar toda a produção de captação real para ilustrações e animações do zero. O obstáculo se tornou uma vantagem competitiva: as ilustrações permitiram encenar perigos, infrações operacionais e consequências graves com precisão pedagógica máxima, sem expor ninguém a situações reais de risco.",
              en: "In 2020 the original brief called for on-site filming with real footage at Votorantim's industrial plants. When the Covid-19 pandemic arrived, that plan became impossible. The strategic pivot was to move the entire production from live action to illustration and animation built from scratch. The obstacle turned into an advantage: illustration made it possible to stage hazards, operational violations and severe consequences with full instructional precision, without putting anyone in real danger."
            }
          },
          {
            type: "grid",
            cols: 2,
            items: [
              {
                src: `${IMG}/votorantim/storyboard.jpg`,
                alt: { pt: "Storyboard e planejamento do processo de animação",
                       en: "Storyboard and planning for the animation process" },
                caption: { pt: "Storyboard / planejamento do processo",
                           en: "Storyboard / process planning" }
              },
              {
                // Também no Vimeo, pelo mesmo motivo do vídeo da Stefani.
                // Sem `poster`: a miniatura vem de lá.
                vimeo: "1224800204",
                vimeoHash: "7f1ab5847e",
                label: { pt: "Animação", en: "Animation" },
                alt: { pt: "Demonstração do vídeo em animação produzido para o treinamento",
                       en: "Demo of the animated video produced for the training" },
                caption: { pt: "Demonstração do vídeo em animação",
                           en: "Demo of the animated video" }
              }
            ]
          }
        ]
      },
      {
        id: "solucao",
        nav: { pt: "Solução", en: "Solution" },
        title: { pt: "A solução", en: "The solution" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "O sistema foi implantado em totens físicos em todas as unidades Votorantim Cimentos do Brasil, atuando como treinamento obrigatório para o credenciamento de motoristas parceiros. A interface foi projetada para quebrar o escopo de vídeo passivo tradicional e transformá-lo em uma jornada de tomada de decisão em cenários de risco operacionais. A jornada começa por uma escolha do próprio motorista: quem já conhece o conteúdo vai direto à prova, em um a dois minutos; quem prefere rever assiste ao curso completo antes, em sete.",
              en: "The system was rolled out on physical kiosks at every Votorantim Cimentos site in Brazil, as mandatory training for the clearance of partner drivers. The interface was designed to break out of the traditional passive-video format and turn it into a journey of decision-making in real operational hazard scenarios. The journey opens with a choice the driver makes: those who already know the content go straight to the test, in one to two minutes; those who would rather review it watch the full course first, in seven."
            }
          },
          {
            // Vem antes do totem: a foto do equipamento é a mesma miniatura do
            // card na home, então abrir a seção com ela repete o que o visitante
            // acabou de clicar. Quem chega aqui quer ver a interface.
            //
            // As três telas são etapas de um mesmo fluxo: quase encostadas,
            // lêem-se como sequência, não como peças soltas. A ordem dos
            // arquivos já era a da jornada; o que estava trocado eram os textos
            // alternativos, que descreviam telas que não eram as suas.
            type: "grid",
            cols: 3,
            gap: 8,
            items: [
              { src: `${IMG}/votorantim/flow-01.jpg`,
                alt: { pt: "Escolha entre ir direto para a prova ou assistir ao curso antes, com os tempos estimados de cada caminho",
                       en: "A choice between going straight to the test or watching the course first, with the estimated time for each path" },
                caption: { pt: "Escolha do caminho", en: "Path selection" } },
              { src: `${IMG}/votorantim/flow-02.jpg`,
                alt: { pt: "Tela de boas-vindas, com o caminhão do motorista chegando à unidade",
                       en: "Welcome screen, with the driver's truck arriving at the site" },
                caption: { pt: "Boas-vindas", en: "Welcome" } },
              // "Calço" é wheel chock — o termo técnico, não "wedge".
              { src: `${IMG}/votorantim/flow-03.jpg`,
                alt: { pt: "Pergunta sobre calçar as rodas do caminhão, respondida com as teclas 1 e 2 do totem",
                       en: "A question about placing chocks under the truck's wheels, answered with keys 1 and 2 on the kiosk" },
                caption: { pt: "Decisão em cenário de risco", en: "Decision in a hazard scenario" } }
            ]
          },
          {
            type: "split",
            title: { pt: "A jornada do motorista", en: "The driver's journey" },
            left: [
              {
                type: "steps",
                items: [
                  { pt: "Escolha do caminho",     en: "Path selection" },
                  { pt: "Boas-vindas",            en: "Welcome" },
                  { pt: "Vídeo de instrução",     en: "Instruction video" },
                  { pt: "Vídeo de fixação",       en: "Reinforcement video" },
                  { pt: "Feedback imediato",      en: "Immediate feedback" },
                  { pt: "Quiz com nota mínima 7", en: "Quiz, minimum score of 7" },
                  { pt: "Tela de encerramento",   en: "Closing screen" }
                ]
              }
            ],
            right: [
              {
                type: "figure",
                src: `${IMG}/votorantim/totem.png`,
                alt: { pt: "Totem físico com a interface do treinamento",
                       en: "The physical kiosk running the training interface" },
                fit: "bare"
              }
            ]
          }
        ]
      },
      {
        id: "processo",
        nav: { pt: "Processo e Wireframes", en: "Process and Wireframes" },
        title: { pt: "Processo, wireframes e arquitetura de decisão",
                 en: "Process, wireframes and decision architecture" },
        blocks: [
          {
            type: "p",
            // O texto antigo narrava o papel ("estruturei wireframes",
            // "traduzi a lógica do sistema") com as mesmas palavras das
            // evidências de UX e tecnologia do bloco de envolvimento. Aqui
            // fica só a restrição e o que ela impõe ao produto.
            text: {
              pt: "O totem impõe uma restrição rara em produto digital: não há touchscreen nem mouse. Toda a interação acontece pelo teclado numérico embutido no equipamento. Isso obriga a arquitetura de decisão a caber em poucas alternativas por tela, sempre numeradas, com resposta imediata e sem navegação livre. Os wireframes abaixo testaram esses caminhos antes do desenvolvimento, e a montagem final foi programada no Adobe Captivate.",
              en: "The kiosk imposes a constraint that is rare in digital product work: there is no touchscreen and no mouse. Every interaction happens through the numeric keypad built into the unit. That forces the decision architecture to fit into a handful of options per screen, always numbered, with an immediate response and no free navigation. The wireframes below tested those paths before development, and the final build was programmed in Adobe Captivate."
            }
          },
          {
            // Duas metades do mesmo wireframe, separadas para caberem lado a
            // lado no desktop e empilharem no mobile — juntas numa única imagem
            // panorâmica, no celular ficavam pequenas demais para ler.
            // "full" preserva a proporção de cada arquivo: as duas têm 792x460,
            // então saem com a mesma altura sem precisar de justify.
            type: "grid",
            cols: 2,
            // O vao entre os dois grupos na arte original tinha 17px em 1600 de
            // largura; nesta escala isso dá ~9px. Mantém a separação que a imagem
            // já tinha, em vez dos 24px padrão das grades de peças independentes.
            gap: 9,
            caption: { pt: "Wireframe do projeto — validação da ideia",
                       en: "Project wireframes — validating the idea" },
            items: [
              {
                src: `${IMG}/votorantim/wireframes-fluxo.jpg`,
                alt: { pt: "Wireframes das telas de abertura, apresentação e dos dois vídeos do treinamento",
                       en: "Wireframes of the opening and introduction screens and of the two training videos" },
                ratio: "full"
              },
              {
                src: `${IMG}/votorantim/wireframes-decisao.jpg`,
                alt: { pt: "Wireframe da tela de decisão, com as alternativas A e B respondidas pelo teclado do totem",
                       en: "Wireframe of the decision screen, with options A and B answered on the kiosk keypad" },
                ratio: "full"
              }
            ]
          }
        ]
      },
      {
        id: "evolucao",
        nav: { pt: "Evolução 2024", en: "2024 Evolution" },
        title: { pt: "Evolução e retorno do cliente (2024)",
                 en: "Evolution and the client's return (2024)" },
        blocks: [
          {
            type: "p",
            // A frase sobre narrativa, sonorização, After Effects e Premiere
            // saiu daqui: era cópia literal da evidência de produção.
            //
            // "Política de Consequências" é o nome oficial da peça entregue ao
            // cliente: fica no original, com a tradução entre parênteses na
            // primeira aparição.
            text: {
              pt: "Quatro anos após a entrega do sistema original, a Votorantim voltou a procurar a equipe para reforçar o programa de integração com um novo vídeo, desta vez sem interatividade. Em uma reunião com a equipe e o cliente, propus o formato “Top 10”: elencar de forma direta e memorável as dez maiores prioridades do programa de segurança da companhia. O conceito virou o nome oficial da peça — Política de Consequências — e o resultado foi novamente bem recebido pelos gestores do cliente.",
              en: "Four years after the original system was delivered, Votorantim came back to the team to reinforce the onboarding program with a new video, this time without interactivity. In a meeting with the team and the client, I proposed the “Top 10” format: naming the ten highest priorities of the company's safety program in a direct, memorable way. The concept became the official name of the piece — Política de Consequências (Consequence Policy) — and the result was again well received by the client's managers."
            }
          },
          {
            type: "extLink",
            href: "https://vimeo.com/1189995196?fl=tl&fe=ec",
            label: { pt: "Ver a solução publicada", en: "Watch the published piece" },
            note: "Política de Consequências · Vimeo"
          }
        ]
      },
      {
        id: "ficha",
        nav: { pt: "Ficha Técnica", en: "Credits" },
        title: { pt: "Reflexões e ficha técnica", en: "Reflections and credits" },
        blocks: [
          {
            type: "p",
            lead: true,
            text: {
              pt: "O maior aprendizado foi entender que a proposta mais simples nem sempre é a mais eficaz. Um vídeo passivo comum teria cumprido o briefing inicial, mas a experiência interativa desenhada cumpriu o verdadeiro objetivo de negócio: mudar o comportamento em campo.",
              en: "The biggest lesson was that the simplest proposal is not always the most effective one. An ordinary passive video would have met the initial brief, but the interactive experience we designed met the real business goal: changing behavior in the field."
            }
          },
          {
            type: "credits",
            items: [
              { role: { pt: "Direção de Design e UX", en: "Design Direction and UX" },
                name: "Ludgero Ricardo Abilino" },
              { role: { pt: "Edição de Conteúdo", en: "Content Editing" },
                name: "Ana Paula Augusto" },
              { role: { pt: "Produção e Execução", en: "Production and Artwork" },
                name: "Karin Ueda" },
              { role: { pt: "Diagramação, Interações e Captivate", en: "Layout, Interactions and Captivate" },
                name: "Adriana Oliveira" }
            ]
          },
          { type: "tools", items: ["ai", "ae", "pr", "cp"] }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 02 */
  {
    slug: "stefani",
    index: "02",
    client: "Stefani · Benkyou Learn",
    shortName: "Stefani",
    clientAlso: "Andritz • Grupo Equatorial",
    logo: { neg: `${LOGO}/stefani-neg.svg`, pos: `${LOGO}/stefani-pos.svg` },
    logoAlt: "Stefani",
    title: { pt: "Transformação Digital de Treinamentos Corporativos",
             en: "Digital Transformation of Corporate Training" },
    shortTitle: { pt: "Transformação de treinamentos presenciais em experiência digital interativa",
                  en: "Turning in-person training into an interactive digital experience" },
    summary: {
      pt: "Concepção de produto SaaS escalável que migrou mais de 60 horas de treinamentos presenciais densos para uma jornada digital.",
      en: "A scalable SaaS product that moved more than 60 hours of dense in-person training into a digital journey."
    },
    thumb: `${IMG}/home/case-stefani.jpg`,
    thumbAlt: { pt: "Plataforma Benkyou Learn desenvolvida para a Stefani",
                en: "Benkyou Learn platform built for Stefani" },
    tags: [{ pt: "Design Instrucional", en: "Instructional Design" }, "UI/UX", "B2B SaaS"],
    heroTags: ["B2B", "Learning Experience Design",
               { pt: "Design Instrucional", en: "Instructional Design" }, "2023"],
    homeKpi: {
      label: { pt: "KPI Principal", en: "Headline KPI" },
      value: { pt: "+60h", en: "60h+" },
      note: { pt: "de conteúdo denso digitalizado", en: "of dense content taken digital" }
    },
    kpis: [
      { value: "300+",
        note: { pt: "Usuários ativos por mês na plataforma",
                en: "Monthly active users on the platform" } },
      { value: "60h",
        note: { pt: "De conteúdo técnico transformadas em treinamento digital",
                en: "Of technical content turned into digital training" } },
      { value: "30%+",
        note: { pt: "Eficácia com feedback imediato",
                en: "Gain in effectiveness with immediate feedback" } }
    ],
    involvement: [
      { area: "pesquisa", level: "contribui", note: {
        pt: "Participei da análise do briefing técnico com a equipe e levantei referências fotográficas das plantas industriais, que viraram base dos cenários ilustrados",
        en: "I took part in analyzing the technical brief with the team and gathered photographic references from the industrial plants, which became the basis for the illustrated scenes" } },
      { area: "arquitetura", level: "lidera", note: {
        pt: "Defini a abordagem didática e a estrutura da jornada: análise do conteúdo, roteirização e fechamento com quizzes",
        en: "I defined the instructional approach and the structure of the journey: content analysis, scripting and closing with quizzes" } },
      { area: "interacao", level: "lidera", note: {
        pt: "Defini as interações e o template de animações e transições que padronizou a experiência em todos os módulos",
        en: "I defined the interactions and the animation and transition template that standardized the experience across every module" } },
      { area: "visual", level: "lidera", note: {
        pt: "Identidade visual dos materiais, modelo de personas e direção dos cenários ilustrados a partir das fotos reais das plantas",
        en: "Visual identity for the materials, the persona model, and art direction of the illustrated scenes built from real photographs of the plants" } },
      { area: "decisoes", level: "lidera", note: {
        pt: "Designer líder de ponta a ponta: da definição do modelo do projeto à aprovação de personagens e cenários com o cliente",
        en: "Lead designer end to end: from defining the project model to signing off characters and scenes with the client" } },
      { area: "tecnologia", level: "lidera", note: {
        pt: "Especifiquei a montagem da solução e usei IA generativa como acelerador na criação dos avatares, com refinamento ilustrado depois",
        en: "I specified how the solution should be assembled and used generative AI to accelerate the creation of the avatars, refined by hand in illustration afterwards" } },
      { area: "producao", level: "lidera", note: {
        pt: "Motion design completo e finalização do material audiovisual entregue; construí também o manual base que padronizou a reprodução do modelo em novos projetos",
        en: "All of the motion design and the finishing of the delivered footage; I also wrote the base manual that standardized how the model is reproduced on new projects" } }
    ],
    sections: [
      {
        id: "desafio",
        nav: { pt: "O Desafio", en: "The Challenge" },
        title: { pt: "O desafio", en: "The challenge" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "O desafio da Stefani era transformar seu conteúdo instrucional, voltado a motoristas parceiros, antes apresentado de forma presencial, em um formato digital e interativo. Os conteúdos eram complexos e densos, o que limitava a praticidade e a autonomia dos treinamentos. Era necessário adotar métodos interativos como estratégia de ensino para aumentar o engajamento das equipes e otimizar as operações.",
              en: "Stefani's challenge was to turn its instructional content for partner drivers, until then delivered in person, into a digital and interactive format. The material was complex and dense, which limited how practical the training could be and how far people could go on their own. Interactive methods were needed as a teaching strategy, to raise engagement across the teams and streamline operations."
            }
          },
          { type: "h3", text: { pt: "Objetivos de aprendizagem", en: "Learning objectives" } },
          {
            type: "bullets",
            items: [
              { pt: "Garantir a compreensão e aplicação dos conteúdos obrigatórios",
                en: "Ensure the mandatory content is understood and applied" },
              { pt: "Assegurar a realização dos treinamentos dentro dos parâmetros definidos",
                en: "Ensure training is completed within the defined parameters" },
              { pt: "Promover autonomia no processo de aprendizagem",
                en: "Foster autonomy in the learning process" },
              { pt: "Estruturar a rastreabilidade da jornada dos usuários",
                en: "Build traceability into the user's journey" },
              { pt: "Contribuir para a conformidade e mitigação de riscos operacionais",
                en: "Support compliance and the mitigation of operational risk" }
            ]
          },
          {
            // "full" preserva a proporção de cada arquivo (num enquadramento
            // fixo estas fotos perdiam de 10% a 19% no topo e na base) e
            // "justify" iguala as alturas ajustando a largura de cada coluna.
            type: "grid",
            cols: 2,
            justify: true,
            items: [
              { src: `${IMG}/stefani/presencial.jpg`,
                alt: { pt: "Modelo tradicional de treinamento presencial",
                       en: "The traditional in-person training model" },
                caption: { pt: "Modelo tradicional presencial", en: "Traditional in-person model" },
                ratio: "full" },
              { src: `${IMG}/stefani/digital.jpg`,
                alt: { pt: "Experiência digital implementada", en: "The digital experience delivered" },
                caption: { pt: "Experiência digital implementada", en: "Digital experience delivered" },
                ratio: "full" }
            ]
          }
        ]
      },
      {
        id: "solucao",
        nav: { pt: "Solução", en: "Solution" },
        title: { pt: "A solução", en: "The solution" },
        blocks: [
          {
            type: "p",
            // Sem a frase "Atuei como designer líder...": a seção "Meu
            // envolvimento", logo acima, já diz isso com nível e evidência.
            text: {
              pt: "Foi desenvolvida uma solução de treinamento digital estruturada para transformar conteúdos técnicos em uma experiência acessível, interativa e escalável, alinhando necessidades operacionais com estratégias de aprendizagem.",
              en: "We built a structured digital training solution to turn technical content into an accessible, interactive and scalable experience, aligning operational needs with learning strategy."
            }
          },
          {
            // Em largura cheia: é a prova do case. A lista "ponto a ponto" que
            // dividia esta área com o vídeo repetia, item por item, o que a
            // seção "Meu envolvimento" já diz na abertura.
            type: "video",
            // Hospedado no Vimeo: o player entrega bitrate adaptativo, o que
            // importa num vídeo de quase oito minutos aberto no celular. Sem
            // `poster`, a miniatura vem do próprio Vimeo.
            vimeo: "1193806255",
            vimeoHash: "53c8f60c2d",
            label: { pt: "Solução", en: "Solution" },
            alt: { pt: "Demonstração da solução digital implementada para a Stefani",
                   en: "Walkthrough of the digital solution delivered to Stefani" },
            caption: { pt: "Reprodução da solução digital implementada",
                       en: "Walkthrough of the delivered digital solution" }
          }
          // A nota de créditos que ficava aqui repetia, uma a uma, as quatro
          // pessoas que a ficha técnica deste mesmo case já lista com função.
        ]
      },
      {
        id: "processo",
        nav: { pt: "Processo Criativo", en: "Creative Process" },
        title: { pt: "Processo criativo e estratégia instrucional",
                 en: "Creative process and instructional strategy" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "Para humanizar e conectar o conteúdo técnico aos motoristas, construímos avatares e personificações utilizando inteligência artificial generativa como ferramenta de aceleração conceitual.",
              en: "To humanize the technical content and connect it to the drivers, we built avatars and characters using generative AI as a tool to speed up the concept stage."
            }
          },
          { type: "flow", items: [
            "Briefing",
            { pt: "IA Generativa", en: "Generative AI" },
            { pt: "Refinamento Ilustrado", en: "Illustrated refinement" }
          ] },
          {
            // Personagens: recortes sem fundo, apresentados sem moldura.
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/stefani/persona-andre.png`,
                alt: { pt: "André, instrutor", en: "André, instructor" },
                caption: { pt: "André · instrutor", en: "André · instructor" },
                ratio: "stand", fit: "bare", center: true },
              { src: `${IMG}/stefani/persona-ana.png`,
                alt: { pt: "Ana, técnica em segurança", en: "Ana, safety technician" },
                caption: { pt: "Ana · técnica em segurança", en: "Ana · safety technician" },
                ratio: "stand", fit: "bare", center: true },
              { src: `${IMG}/stefani/persona-antonio.png`,
                alt: { pt: "Antônio, motorista", en: "Antônio, driver" },
                caption: { pt: "Antônio · motorista", en: "Antônio · driver" },
                ratio: "stand", fit: "bare", center: true }
            ]
          },
          {
            type: "p",
            text: {
              pt: "Os cenários foram desenvolvidos do zero com base em referências fotográficas reais das plantas industriais, garantindo familiaridade e alto senso de realismo operacional.",
              en: "The scenes were built from scratch on top of real photographic references from the industrial plants, so they would feel familiar and operationally true."
            }
          },
          { type: "flow", items: [
            { pt: "Foto de Referência",        en: "Reference photo" },
            { pt: "Vetorização",               en: "Vectorization" },
            { pt: "Aplicação no Treinamento",  en: "Applied in the training" }
          ] },
          {
            type: "grid",
            cols: 2,
            items: [
              { src: `${IMG}/stefani/ref-foto.jpg`,
                alt: { pt: "Referência fotográfica da planta industrial",
                       en: "Photographic reference from the industrial plant" },
                caption: { pt: "Referência fotográfica", en: "Photographic reference" } },
              { src: `${IMG}/stefani/cenario-ilustrado.jpg`,
                alt: { pt: "Cenário ilustrado desenvolvido a partir da referência",
                       en: "Illustrated scene developed from the reference" },
                caption: { pt: "Cenário ilustrado", en: "Illustrated scene" } }
            ]
          },
          { type: "h3", text: { pt: "Estratégia instrucional de impacto",
                                en: "Instructional strategy for impact" } },
          {
            type: "pillars",
            items: [
              { title: { pt: "Análise de conteúdo", en: "Content analysis" },
                text: { pt: "Estruturação do material técnico para definição da jornada de aprendizagem",
                        en: "Structuring the technical material to define the learning journey" } },
              { title: "Storytelling",
                text: { pt: "Contextualização dos conteúdos para aumentar engajamento",
                        en: "Giving the content context, to raise engagement" } },
              { title: { pt: "Roteirização", en: "Scripting" },
                text: { pt: "Organização lógica e progressiva das informações",
                        en: "Organizing the information logically and progressively" } },
              { title: { pt: "Edição gráfica", en: "Graphic editing" },
                text: { pt: "Aplicação de recursos visuais para simplificar conteúdos complexos",
                        en: "Using visual devices to simplify complex content" } },
              { title: { pt: "Diagramação", en: "Layout" },
                text: { pt: "Estruturação visual para garantir clareza e hierarquia da informação",
                        en: "Visual structure that keeps the information clear and hierarchical" } },
              { title: { pt: "Fechamento", en: "Closing" },
                text: { pt: "Quizzes e atividades para reforço do aprendizado",
                        en: "Quizzes and activities to reinforce what was learned" } }
            ]
          }
        ]
      },
      {
        id: "resultados",
        nav: { pt: "Resultados e Expansão", en: "Results and Expansion" },
        title: { pt: "Resultados e expansão do projeto",
                 en: "Results and how the project grew" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "A validação do modelo com mais de 300 usuários ativos provou a eficácia da abordagem interativa em larga escala:",
              en: "Validating the model with more than 300 active users proved the interactive approach works at scale:"
            }
          },
          {
            type: "kpiCards",
            items: [
              { value: "+60%", title: { pt: "Engajamento", en: "Engagement" },
                note: { pt: "com treinamentos interativos", en: "with interactive training" } },
              { value: "+30%", title: { pt: "Eficácia", en: "Effectiveness" },
                note: { pt: "com feedback imediato", en: "with immediate feedback" } },
              { value: "+70%", title: { pt: "Retenção", en: "Retention" },
                note: { pt: "de conteúdo com abordagens gamificadas",
                        en: "of content, with gamified approaches" } },
              { value: "+50%", title: { pt: "Participação", en: "Participation" },
                note: { pt: "em treinamentos online", en: "in online training" } }
            ]
          },
          {
            type: "p",
            text: {
              pt: "O sucesso desse modelo deu origem à marca de produtos de aprendizagem digital Benkyou Learn, que expandiu a atuação para outros grandes players como a Andritz em 2024 e o Grupo Equatorial em 2025.",
              en: "The success of this model gave rise to Benkyou Learn, a brand of digital learning products, which went on to serve other large players such as Andritz in 2024 and Grupo Equatorial in 2025."
            }
          },
          {
            type: "grid",
            cols: 2,
            justify: true,
            items: [
              { src: `${IMG}/stefani/andritz.jpg`,
                alt: { pt: "Projeto desenvolvido para a Andritz em 2024",
                       en: "Project delivered for Andritz in 2024" },
                caption: { pt: "Projeto Andritz — 2024", en: "Andritz project — 2024" },
                ratio: "full" },
              { src: `${IMG}/stefani/equatorial.jpg`,
                alt: { pt: "Projeto desenvolvido para o Grupo Equatorial em 2025",
                       en: "Project delivered for Grupo Equatorial in 2025" },
                caption: { pt: "Projeto Grupo Equatorial — 2025", en: "Grupo Equatorial project — 2025" },
                ratio: "full" }
            ]
          }
        ]
      },
      {
        id: "ficha",
        nav: { pt: "Ficha Técnica", en: "Credits" },
        title: { pt: "Reflexões e ficha técnica", en: "Reflections and credits" },
        blocks: [
          {
            type: "p",
            lead: true,
            text: {
              pt: "Este projeto consolidou a importância de escalar o design instrucional através de metodologias ágeis e do uso consciente de IA. Liderar um projeto end-to-end — desde a concepção pedagógica até a direção de arte e entrega técnica — demonstrou que a inovação didática é o motor principal para transformar a cultura de segurança operacional de uma organização.",
              en: "This project made clear how much instructional design gains from agile methods and from a deliberate use of AI. Leading it end to end — from the pedagogical concept through art direction to technical delivery — showed that innovation in teaching is the main engine for changing an organization's operational safety culture."
            }
          },
          {
            type: "credits",
            items: [
              { role: { pt: "Direção de Design", en: "Design Direction" },
                name: "Ludgero Ricardo Abilino" },
              { role: { pt: "Edição de Conteúdo", en: "Content Editing" },
                name: "Ana Paula Augusto" },
              { role: { pt: "Produção e Execução", en: "Production and Artwork" },
                name: "Karin Ueda" },
              { role: { pt: "Diagramação, Interações e Captivate", en: "Layout, Interactions and Captivate" },
                name: "Adriana Oliveira" },
              { role: { pt: "Edição de Áudio", en: "Audio Editing" },
                name: "Talita Cristine Borosch" }
            ]
          },
          { type: "tools", items: ["ai", "ps", "ae", "pr", "cp"] }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 03 */
  {
    slug: "benkyou-game",
    index: "03",
    client: "Benkyou Game",
    shortName: "Benkyou Game",
    clientAlso: "Grupo Boticário • Cielo • Norton • Ibema",
    logo: { neg: `${LOGO}/benkyou-neg.svg`, pos: `${LOGO}/benkyou-pos.svg` },
    logoAlt: "Benkyou Game",
    title: { pt: "Plataforma de Aprendizagem Gamificada e Imersiva",
             en: "Gamified and Immersive Learning Platform" },
    shortTitle: { pt: "Plataforma de aprendizagem gamificada e imersiva",
                  en: "Gamified and immersive learning platform" },
    summary: {
      pt: "Arquitetura de produto multi-cliente com ambientes 3D customizados, alcançando crescimento consistente por 5 temporadas consecutivas.",
      en: "A multi-tenant product architecture with custom 3D environments, growing steadily across 5 consecutive seasons."
    },
    // Aponta direto para o arquivo do case, como o totem faz no Votorantim,
    // em vez de uma segunda cópia em img/home.
    thumb: `${IMG}/benkyou/perfil-jogador.jpg`,
    thumbAlt: { pt: "Tela de perfil do jogador da plataforma Benkyou Game, com avatar, progresso, pontos e rankings",
                en: "Benkyou Game player profile screen, with avatar, progress, points and rankings" },
    tags: ["UX/UI Design", "B2B2C", { pt: "Plataformas Escaláveis", en: "Scalable Platforms" }],
    heroTags: ["B2B", "UX/UI Design", "Game Design", "2021 — 2025"],
    homeKpi: {
      label: { pt: "KPI Principal", en: "Headline KPI" },
      value: { pt: "2.700", en: "2,700" },
      note: { pt: "jogadores ativos e +84% de crescimento",
              en: "active players, up 84%" }
    },
    kpis: [
      { value: { pt: "2.700", en: "2,700" },
        note: { pt: "Colaboradores ativos por temporada no Grupo Boticário",
                en: "Active employees per season at Grupo Boticário" } },
      { value: "+84%",
        note: { pt: "De crescimento em jogadores ativos entre 2021 e 2024",
                en: "Growth in active players between 2021 and 2024" } },
      { value: { pt: "5 Anos", en: "5 Years" },
        note: { pt: "Em operação contínua, com renovação de contrato a cada temporada",
                en: "In continuous operation, with the contract renewed each season" } }
    ],
    involvement: [
      { area: "pesquisa", level: "acompanha", note: {
        pt: "Trouxe boas práticas de usabilidade como referência ao longo do processo; não houve validação formal com usuários, o que aponto como aprendizado na ficha do case",
        en: "I brought usability best practice in as a reference throughout; there was no formal validation with users, which I name as a lesson in the credits section" } },
      { area: "arquitetura", level: "lidera", note: {
        pt: "Defini a arquitetura de navegação da plataforma, do acesso às trilhas de conteúdo, mantendo a mesma hierarquia em todos os clientes",
        en: "I defined the platform's navigation architecture, from sign-in through to the content tracks, keeping the same hierarchy across every client" } },
      { area: "interacao", level: "lidera", note: {
        pt: "Desenhei os fluxos e as telas iterativamente, a navegação dos modos Explorador e Prático e os wireframes do editor de perfil, com edição livre e confirmação antes de sair",
        en: "I designed the flows and screens iteratively, the navigation for the Explorer and Practical modes, and the wireframes for the profile editor, with free editing and a confirmation before leaving" } },
      { area: "visual", level: "lidera", note: {
        pt: "Concebi o sistema visual que adapta a interface a cada cliente: proporções e tamanhos fixos, identidade trocável em cores, HUD, perfil e recompensas",
        en: "I conceived the visual system that adapts the interface to each client: fixed proportions and sizes, with a swappable identity across colors, HUD, profile and rewards" } },
      { area: "decisoes", level: "contribui", note: {
        pt: "A divisão em dois modos de acesso foi definida com a liderança; o sistema de recompensas foi simplificado depois de um estudo de viabilidade técnica, e documentei a proposta original",
        en: "The split into two access modes was decided together with leadership; the rewards system was simplified after a technical feasibility study, and I documented the original proposal" } },
      { area: "tecnologia", level: "lidera", note: {
        pt: "Entreguei o protótipo navegável em Adobe XD como especificação de front-end para o time e negociei escopo com o desenvolvimento",
        en: "I delivered the clickable prototype in Adobe XD as the front-end spec for the team, and negotiated scope with engineering" } },
      { area: "producao", level: "acompanha", note: {
        pt: "O desenvolvimento em Unity e a modelagem 3D foram conduzidos pela equipe, a partir das minhas especificações",
        en: "Unity development and 3D modeling were led by the team, working from my specifications" } }
    ],
    sections: [
      {
        id: "contexto",
        nav: { pt: "Contexto", en: "Context" },
        title: { pt: "O contexto", en: "The context" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "Em 2020, o Grupo Boticário buscava um novo parceiro para seus programas de capacitação interna, já com experiência prévia em treinamentos gamificados e o objetivo de evoluir esse modelo com uma solução mais conectada à sua cultura. A Benkyou identificou nessa demanda uma oportunidade além do projeto pontual: desenvolver uma plataforma própria de aprendizagem gamificada e imersiva, capaz de abrigar conteúdos multimídia, criar ambientes tridimensionais personalizados por cliente e engajar colaboradores através de mecânicas de jogo. O resultado foi o Benkyou Game, lançado em 2021 com a primeira temporada do programa Connect do Grupo Boticário. Uma vez estabelecido o modelo, outros clientes adotaram a plataforma — entre eles Cielo, Norton e Ibema — cada um com seu próprio ambiente 3D e identidade visual adaptados.",
              en: "In 2020 Grupo Boticário was looking for a new partner for its internal training programs. They already had experience with gamified training and wanted to take that model further, with something more closely tied to their culture. Benkyou saw in that brief an opportunity beyond a one-off project: to build a learning platform of its own, gamified and immersive, able to hold multimedia content, create three-dimensional environments customized per client and engage employees through game mechanics. The result was Benkyou Game, launched in 2021 with the first season of Grupo Boticário's Connect program. Once the model was established, other clients adopted the platform — among them Cielo, Norton and Ibema — each with its own 3D environment and visual identity."
            }
          },
          {
            type: "timeline",
            items: [
              { year: "2020", text: { pt: "Início do desenvolvimento", en: "Development begins" } },
              { year: "2021", text: { pt: "Boticário / Connect · 1ª temporada",
                                      en: "Boticário / Connect · season 1" } },
              { year: "2022–2023", text: { pt: "2ª e 3ª temporada · Expansão e evolução · Projeto Cielo",
                                           en: "Seasons 2 and 3 · Expansion and evolution · Cielo project" } },
              { year: "2024–2025", text: { pt: "4ª e 5ª temporada · Projeto Norton · Ibema",
                                           en: "Seasons 4 and 5 · Norton project · Ibema" } }
            ]
          },
          {
            // Cada marca com duas artes: `-neg` no tema escuro (a versão
            // original em cinza) e `-pos` no claro.
            type: "logos",
            items: [
              { src: { neg: `${LOGO}/boticario-neg.svg`, pos: `${LOGO}/boticario-pos.svg` }, alt: "Grupo Boticário" },
              { src: { neg: `${LOGO}/cielo-neg.svg`, pos: `${LOGO}/cielo-pos.svg` }, alt: "Cielo" },
              { src: { neg: `${LOGO}/ibema-neg.svg`, pos: `${LOGO}/ibema-pos.svg` }, alt: "Ibema" },
              { src: { neg: `${LOGO}/norton-neg.svg`, pos: `${LOGO}/norton-pos.svg` }, alt: "Norton" }
            ]
          },
          {
            // O parágrafo "Atuei como UX/UI Designer..." saiu daqui: repetia,
            // frase por frase, quatro evidências do bloco de envolvimento
            // (arquitetura, fluxos, protótipo em XD, boas práticas). As cinco
            // etiquetas que vinham depois eram a mesma lista pela terceira vez.
            //
            // O diagrama fica: ele diz algo que o bloco não diz — a posição
            // entre a estratégia da liderança e a viabilidade do time.
            type: "diagram",
            items: [
              { label: { pt: "Visão", en: "Vision" },
                title: { pt: "Estratégia / CEO", en: "Strategy / CEO" },
                note: { pt: "Direção pedagógica e de negócio",
                        en: "Pedagogical and business direction" } },
              { label: { pt: "Minha posição", en: "My position" },
                title: "UX/UI Design",
                note: { pt: "Princípios de usabilidade", en: "Usability principles" }, self: true },
              { label: { pt: "Viabilidade", en: "Feasibility" },
                title: { pt: "Desenvolvimento", en: "Engineering" },
                note: { pt: "Restrições e possibilidades técnicas",
                        en: "Technical constraints and possibilities" } }
            ]
          }
        ]
      },
      {
        id: "estrutura",
        nav: { pt: "Estrutura e Onboarding", en: "Structure and Onboarding" },
        title: { pt: "A plataforma — estrutura e onboarding",
                 en: "The platform — structure and onboarding" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "A plataforma foi concebida com um sistema visual flexível que permitia adaptar a experiência a cada cliente sem reconstruir a interface do zero. A partir da tela de loading, todos os elementos visuais podiam ser personalizados com a identidade do cliente: cores, imagens de fundo, elementos da HUD, telas de perfil e área de recompensas — sempre dentro de um framework de proporções e tamanhos pré-estabelecidos, garantindo consistência de uso independentemente do tema aplicado. O resultado foi um produto que se comportava como um sistema, não como um projeto único.",
              en: "The platform was built on a flexible visual system that let the experience be adapted to each client without rebuilding the interface from scratch. From the loading screen onward, every visual element could be themed with the client's identity: colors, backgrounds, HUD elements, profile screens and the rewards area — always inside a framework of fixed proportions and sizes, so the product behaved consistently whatever theme was applied. The result was a product that behaved like a system rather than a one-off project."
            }
          },
          {
            type: "grid",
            cols: 2,
            items: [
              { src: `${IMG}/benkyou/login.jpg`,
                alt: { pt: "Tela de login da plataforma", en: "Platform sign-in screen" },
                caption: { pt: "Tela de login adaptável por cliente",
                           en: "Sign-in screen, themed per client" } },
              { src: `${IMG}/benkyou/loading.jpg`,
                alt: { pt: "Tela de loading personalizada do projeto Connect",
                       en: "Custom loading screen for the Connect project" },
                caption: { pt: "Tela de loading personalizada — Projeto Connect",
                           en: "Custom loading screen — Connect project" } }
            ]
          },
          {
            type: "p",
            text: {
              pt: "Nem todo colaborador chega ao treinamento com o mesmo perfil ou disponibilidade. A solução foi bifurcar a experiência logo após o loading: o modo Explorador leva o usuário direto ao ambiente 3D com avatar e HUD do jogo, enquanto o modo Prático direciona para a tela de objetivos com acesso direto aos conteúdos das trilhas. Os dois caminhos convergem no mesmo conteúdo educacional, garantindo que a escolha do modo não criasse cidadãos de segunda classe dentro da plataforma: ambos os perfis tinham acesso às mesmas trilhas, avaliações e recompensas.",
              en: "Not every employee arrives at training with the same profile or the same time available. The answer was to fork the experience right after loading: Explorer mode drops the user straight into the 3D environment with an avatar and the game HUD, while Practical mode goes to the objectives screen with direct access to the content tracks. Both paths converge on the same educational content, so choosing a mode never created second-class citizens inside the platform: both profiles reached the same tracks, assessments and rewards."
            }
          },
          {
            type: "figure",
            src: `${IMG}/benkyou/modo.jpg`,
            alt: { pt: "Tela de seleção entre o modo Explorador e o modo Prático",
                   en: "Screen for choosing between Explorer mode and Practical mode" },
            caption: { pt: "Tela de seleção de modo — Explorador / Prático",
                       en: "Mode selection screen — Explorer / Practical" },
            ratio: "video"
          }
        ]
      },
      {
        id: "jornada",
        nav: { pt: "Jornada de Jogo", en: "Game Journey" },
        title: { pt: "Jornada de jogo", en: "The game journey" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "Ao escolher o modo Explorador, o usuário é lançado diretamente no ambiente 3D com seu avatar. A interface foi projetada para se integrar à temática visual de cada temporada ou cliente, com os elementos da HUD adaptados em cores, texturas e estilo gráfico, mantendo sempre a mesma arquitetura de posicionamento e hierarquia de informação: informações de status no topo, ações de navegação na base. O usuário precisava saber onde estava e o que ainda faltava completar sem precisar sair do ambiente de jogo para isso.",
              en: "Choosing Explorer mode drops the user straight into the 3D environment with their avatar. The interface was designed to sit inside the visual theme of each season or client, with HUD elements re-skinned in color, texture and graphic style while keeping the same architecture of placement and information hierarchy: status at the top, navigation actions at the bottom. The user had to know where they were and what was still left to complete without leaving the game environment to find out."
            }
          },
          {
            type: "figure",
            src: `${IMG}/benkyou/hud.jpg`,
            alt: { pt: "Tela de jogo com HUD, ambiente 3D e avatar",
                   en: "Game screen with HUD, 3D environment and avatar" },
            caption: { pt: "Tela de jogo com HUD — ambiente 3D e avatar",
                       en: "Game screen with HUD — 3D environment and avatar" },
            ratio: "video"
          },
          {
            type: "p",
            text: {
              pt: "A identidade do jogador dentro da plataforma era construída através do editor de perfil, uma área dedicada à personalização do avatar que tornava a experiência mais pessoal e aumentava o vínculo do colaborador com o jogo. O fluxo foi pensado para ser exploratório: o usuário podia experimentar combinações livremente, visualizar as mudanças em tempo real com rotação 3D e reverter as alterações antes de salvar. Uma confirmação final antes de sair garantia que nenhuma edição fosse perdida por acidente.",
              en: "The player's identity inside the platform was built through the profile editor, an area dedicated to customizing the avatar that made the experience more personal and strengthened the employee's bond with the game. The flow was designed to be exploratory: users could try combinations freely, see changes in real time with 3D rotation, and undo them before saving. A final confirmation on the way out made sure no edit was lost by accident."
            }
          },
          {
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/benkyou/perfil-itens.jpg`,
                alt: { pt: "Editor de perfil com seleção de itens",
                       en: "Profile editor with item selection" },
                caption: { pt: "Editor de perfil — seleção de itens",
                           en: "Profile editor — item selection" } },
              { src: `${IMG}/benkyou/perfil-cores.jpg`,
                alt: { pt: "Editor de perfil com paleta de cores",
                       en: "Profile editor with color palette" },
                caption: { pt: "Editor de perfil — paleta de cores",
                           en: "Profile editor — color palette" } },
              { src: `${IMG}/benkyou/perfil-confirma.jpg`,
                alt: { pt: "Editor de perfil com confirmação de edição",
                       en: "Profile editor with the edit confirmation" },
                caption: { pt: "Editor de perfil — confirmação de edição",
                           en: "Profile editor — edit confirmation" } }
            ]
          },
          {
            // A ressalva estava no fim do parágrafo, longe das imagens que ela
            // descreve. Aqui ela fica colada no que o leitor está vendo.
            type: "fineprint",
            text: {
              pt: "As telas acima são os wireframes estruturais que entreguei; o design visual final foi desenvolvido por outro profissional da equipe.",
              en: "The screens above are the structural wireframes I delivered; the final visual design was done by another designer on the team."
            }
          }
        ]
      },
      {
        id: "conteudo",
        nav: { pt: "Conteúdo e Engajamento", en: "Content and Engagement" },
        title: { pt: "Conteúdo e engajamento", en: "Content and engagement" },
        blocks: [
          {
            type: "p",
            text: {
              pt: "Independentemente do modo de acesso escolhido, todos os colaboradores acessavam o mesmo conteúdo educacional organizado em trilhas de aprendizagem, com módulos exibindo status de progresso, pontuação disponível e condição de obrigatoriedade. A avaliação acontecia ao final de cada módulo através de quizzes com feedback imediato: resposta correta destacada, contador de questões, acertos, erros e performance final em percentual. O sistema foi projetado para ser transparente — o usuário sabia exatamente como estava se saindo a cada etapa.",
              en: "Whichever access mode they chose, every employee reached the same educational content, organized into learning tracks, with modules showing progress, points available and whether they were mandatory. Assessment came at the end of each module through quizzes with immediate feedback: the correct answer highlighted, a question counter, right and wrong totals and a final score as a percentage. The system was designed to be transparent — the user knew exactly how they were doing at every step."
            }
          },
          {
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/benkyou/trilhas.jpg`,
                alt: { pt: "Tela de objetivos e trilhas de aprendizagem",
                       en: "Objectives screen with the learning tracks" },
                caption: { pt: "Tela de objetivos e trilhas", en: "Objectives and tracks screen" } },
              { src: `${IMG}/benkyou/atividade.jpg`,
                alt: { pt: "Atividade interativa de conteúdo", en: "Interactive content activity" },
                caption: { pt: "Atividade interativa de conteúdo", en: "Interactive content activity" } },
              { src: `${IMG}/benkyou/quiz.jpg`,
                alt: { pt: "Tela de resultados do quiz", en: "Quiz results screen" },
                caption: { pt: "Tela de resultados do quiz", en: "Quiz results screen" } }
            ]
          },
          {
            type: "p",
            text: {
              pt: "O engajamento sustentado ao longo das temporadas dependia de dois mecanismos complementares: recompensas tangíveis pelo desempenho e competição social entre os colaboradores. As moedas conquistadas ao longo das trilhas podiam ser trocadas por prêmios reais através de uma integração com uma loja externa, com saldo, histórico de resgates e regulamento visíveis dentro da própria plataforma — uma decisão intencional de transparência, para que o colaborador confiasse que seus pontos tinham valor real e rastreável. O componente social era estruturado em duas camadas: o ranking individual e o sistema de equipes, centralizados num único painel de perfil do jogador.",
              en: "Sustaining engagement across seasons rested on two complementary mechanisms: tangible rewards for performance, and social competition between employees. Coins earned along the tracks could be exchanged for real prizes through an integration with an external store, with balance, redemption history and the rules all visible inside the platform itself — a deliberate decision about transparency, so that employees would trust their points had real, traceable value. The social component had two layers: the individual ranking and the team system, brought together in a single player profile panel."
            }
          },
          {
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/benkyou/recompensas.jpg`,
                alt: { pt: "Tela de resgate de recompensas", en: "Rewards redemption screen" },
                caption: { pt: "Tela de resgate de recompensas", en: "Rewards redemption screen" } },
              { src: `${IMG}/benkyou/perfil-jogador.jpg`,
                alt: { pt: "Painel de perfil do jogador", en: "Player profile panel" },
                caption: { pt: "Perfil do jogador", en: "Player profile" } },
              { src: `${IMG}/benkyou/ranking.jpg`,
                alt: { pt: "Tela de ranking e equipes", en: "Ranking and teams screen" },
                caption: { pt: "Ranking e equipes", en: "Ranking and teams" } }
            ]
          }
        ]
      },
      {
        id: "resultados",
        nav: { pt: "Evolução e Resultados", en: "Evolution and Results" },
        title: { pt: "Evolução e resultados", en: "Evolution and results" },
        blocks: [
          {
            type: "kpiCards",
            items: [
              { value: "2021", title: { pt: "1.470 jogadores", en: "1,470 players" },
                note: { pt: "24h de conteúdo", en: "24h of content" } },
              { value: "2022", title: { pt: "1.758 jogadores", en: "1,758 players" },
                note: { pt: "19h de conteúdo", en: "19h of content" } },
              { value: "2023", title: { pt: "2.062 jogadores", en: "2,062 players" },
                note: { pt: "19,5h de conteúdo", en: "19.5h of content" } },
              { value: "2024", title: { pt: "2.700 jogadores", en: "2,700 players" },
                note: { pt: "19h de conteúdo", en: "19h of content" } }
            ]
          },
          {
            type: "p",
            text: {
              pt: "O sistema de recompensas foi projetado em 2023, quando a plataforma já contava com uma base funcional consolidada. A primeira versão, com histórico de resgate detalhado, feedback visual por cores e filtro de dados, foi simplificada após estudo de viabilidade técnica e implementada em uma versão mais direta no início de 2024, já no lançamento da nova temporada do Connect.",
              en: "The rewards system was designed in 2023, when the platform already had a consolidated functional base. The first version — with a detailed redemption history, color-coded visual feedback and data filtering — was simplified after a technical feasibility study and shipped in a more direct form in early 2024, in time for the new season of Connect."
            }
          },
          {
            type: "compare",
            before: {
              label: { pt: "Antes · 2023", en: "Before · 2023" },
              src: `${IMG}/benkyou/resgate-2023.jpg`,
              alt: { pt: "Proposta original da tela de resgate de pontos",
                     en: "Original proposal for the points redemption screen" },
              caption: { pt: "Proposta original de resgate de pontos",
                         en: "Original points redemption proposal" }
            },
            after: {
              label: { pt: "Depois · 2024", en: "After · 2024" },
              src: `${IMG}/benkyou/resgate-2024.jpg`,
              alt: { pt: "Tela de resgate implementada em 2024",
                     en: "The redemption screen as shipped in 2024" },
              caption: { pt: "Tela de resgate implementada", en: "Redemption screen as shipped" }
            }
          },
          {
            type: "p",
            text: {
              pt: "A plataforma foi estruturada comercialmente em dois modelos que definiam o nível de personalização disponível: no modelo Standard, o cliente escolhia entre mapas pré-construídos com personalização limitada à paleta de cores e HUD — usado por Cielo e Norton; no modelo Premium, todo o ambiente era desenvolvido sob medida a partir de um briefing exclusivo, tanto o mapa externo quanto os ambientes internos — modelo operado pelo Grupo Boticário, com mundos 3D completamente distintos a cada temporada. Essa distinção não era apenas comercial: ela definia o escopo real do meu trabalho em cada projeto, entre adaptação visual dentro de um sistema existente e construção conceitual ampla do zero.",
              en: "Commercially the platform was structured into two tiers that set how much customization was available. In the Standard tier the client picked from pre-built maps, with customization limited to the color palette and the HUD — this is what Cielo and Norton used. In the Premium tier the whole environment was built to order from an exclusive brief, both the outdoor map and the interiors — the tier Grupo Boticário operated on, with completely different 3D worlds each season. The distinction was not only commercial: it set the real scope of my work on each project, somewhere between re-skinning inside an existing system and building the concept broadly from scratch."
            }
          },
          {
            type: "grid",
            cols: 2,
            items: [
              { src: `${IMG}/benkyou/standard-norton.jpg`,
                alt: { pt: "Ambiente interno de jogo no modelo Standard, projeto Norton",
                       en: "Indoor game environment in the Standard tier, Norton project" },
                caption: { pt: "Modelo Standard, ambiente interno — Norton, 2024/25",
                           en: "Standard tier, indoor environment — Norton, 2024/25" } },
              { src: `${IMG}/benkyou/premium-boticario.jpg`,
                alt: { pt: "Ambiente externo de jogo no modelo Premium, Grupo Boticário",
                       en: "Outdoor game environment in the Premium tier, Grupo Boticário" },
                caption: { pt: "Modelo Premium, ambiente externo — Grupo Boticário, 2025",
                           en: "Premium tier, outdoor environment — Grupo Boticário, 2025" } }
            ]
          },
          {
            type: "p",
            text: {
              pt: "O Benkyou Game permaneceu em operação por cinco temporadas consecutivas com o Grupo Boticário, com renovação anual do contrato refletindo a consistência do produto e a confiança construída com o cliente. Entre 2021 e 2024, a plataforma cresceu 84% em número de jogadores ativos só no Grupo Boticário, passando de 1.470 para 2.700 colaboradores por temporada, mantendo uma média de 19 a 24 horas de conteúdo consumido por jogador. O modelo estabelecido viabilizou a entrada de novos clientes — Cielo, Norton e Ibema — confirmando que a arquitetura da plataforma era escalável e adaptável a diferentes contextos corporativos.",
              en: "Benkyou Game ran for five consecutive seasons with Grupo Boticário, with the contract renewed each year — a reflection of the product's consistency and of the trust built with the client. Between 2021 and 2024 the platform grew 84% in active players at Grupo Boticário alone, from 1,470 to 2,700 employees per season, while holding an average of 19 to 24 hours of content consumed per player. The established model opened the door to new clients — Cielo, Norton and Ibema — confirming that the platform's architecture was scalable and adaptable to different corporate contexts."
            }
          },
          // Depoimentos do cliente: tradução com a marca de fala preservada.
          {
            type: "quote",
            text: { pt: "É nítida a constante evolução da plataforma. Obrigada a todos os envolvidos!",
                    en: "The constant evolution of the platform is plain to see. Thank you to everyone involved!" },
            cite: "Grupo Boticário"
          },
          {
            type: "quoteCards",
            items: [
              { text: { pt: "A qualidade do conhecimento repassado é excelente!",
                        en: "The quality of the knowledge passed on is excellent!" },
                cite: "Grupo Boticário" },
              { text: { pt: "Achei muito mais atrativa essa temática selva, praia.",
                        en: "I found this jungle and beach theme far more appealing." },
                cite: "Grupo Boticário" }
            ]
          }
        ]
      },
      {
        id: "ficha",
        nav: { pt: "Ficha Técnica", en: "Credits" },
        title: { pt: "Reflexões e ficha técnica", en: "Reflections and credits" },
        blocks: [
          {
            type: "p",
            lead: true,
            text: {
              pt: "Construir uma plataforma do zero em um contexto de startup, com demandas crescentes e prazos curtos, exigiu constantes adaptações entre o ideal em design e o que era tecnicamente viável. Uma das principais tensões esteve na relação com o desenvolvimento, que frequentemente priorizava funcionalidades de back-end em detrimento de melhorias de usabilidade e interface, como no sistema de recompensas. Aprendi a negociar escopo sem abrir mão do raciocínio de UX, documentando propostas mesmo quando não eram implementadas. Em retrospecto, a ausência de validações formais com usuários também foi um ponto de aprendizado, especialmente em fluxos como onboarding e navegação pelo mapa 3D. Por fim, trabalhar em um produto que se reinventava a cada temporada ampliou minha capacidade de pensar em sistemas, e não apenas em telas isoladas.",
              en: "Building a platform from scratch in a startup context, with growing demand and short deadlines, meant constantly negotiating between the ideal design and what was technically feasible. One of the main tensions was with engineering, which often prioritized back-end features over improvements to usability and interface — the rewards system being one example. I learned to negotiate scope without giving up the UX reasoning, documenting proposals even when they were not built. Looking back, the absence of formal validation with users was also a lesson, particularly in flows like onboarding and navigating the 3D map. Finally, working on a product that reinvented itself every season stretched my ability to think in systems rather than in isolated screens."
            }
          },
          {
            type: "credits",
            items: [
              { role: "UX/UI Design", name: "Ludgero Ricardo Abilino" },
              { role: { pt: "Design Instrucional / Conteúdo", en: "Instructional Design / Content" },
                name: "Ana Paula Augusto" },
              { role: { pt: "Ilustração e Modelagem 3D", en: "Illustration and 3D Modeling" },
                name: "Karin Ueda" },
              { role: { pt: "Modelagem 3D e Unity", en: "3D Modeling and Unity" },
                name: "Talita Cristine Borosch" },
              { role: { pt: "Game Dev e Unity", en: "Game Dev and Unity" },
                name: "Larissa" }
            ]
          },
          { type: "tools", items: ["xd", "miro", "ps", "ai"] }
        ]
      }
    ]
  }
];

  /* --- Ferramentas ---------------------------------------------------------
     Os apps da Creative Cloud seguem sempre a mesma anatomia de ícone:
     quadrado arredondado, fundo na matiz escura da marca, borda fina e a
     abreviação de duas letras na cor viva. Reproduzimos essa anatomia com as
     cores oficiais de cada app, em vez dos retângulos genéricos anteriores.
     O Miro tem marca própria e é desenhado à parte. */
  const TOOLS = {
    ai:  { name: "Adobe Illustrator",  dark: "#330000", bright: "#ff9a00" },
    ae:  { name: "Adobe After Effects", dark: "#00005b", bright: "#9999ff" },
    // Premiere e After Effects compartilham a paleta da família de vídeo
    // da Adobe (#00005b / #9999ff): é assim no ícone real, e a distinção
    // entre os dois é feita pela abreviação, não pela cor. Não "corrigir"
    // essa repetição — o roxo/magenta anterior era da geração antiga do ícone.
    pr:  { name: "Adobe Premiere Pro",  dark: "#00005b", bright: "#9999ff" },
    ps:  { name: "Adobe Photoshop",     dark: "#001e36", bright: "#31a8ff" },
    xd:  { name: "Adobe XD",            dark: "#2e001f", bright: "#ff61f6" },
    miro: { name: "Miro",               dark: "#050038", bright: "#ffd02f" },
    // O Captivate não está no Simple Icons; segue a mesma anatomia dos
    // outros apps da Adobe, desenhada com a abreviação de duas letras.
    cp:  { name: "Adobe Captivate",     dark: "#012d2d", bright: "#03f2c4", label: "Cp" }
  };

  /* --- Envolvimento ---------------------------------------------------------
     O que eu decidi, o que dividi e o que acompanhei em cada projeto. As sete
     frentes são as mesmas nos três cases, na mesma ordem, para dar para
     comparar um com outro. O `curto` é para a linha de papel no card da home,
     onde o nome inteiro não caberia.

     Três níveis, nunca percentual: nota que a pessoa dá a si mesma não
     convence ninguém. Cada nível vem com uma linha de evidência, e é ela que
     sustenta o nível. */
  const ENVOLVIMENTO = {
    frentes: [
      { id: "pesquisa",
        nome:  { pt: "Pesquisa e descoberta", en: "Research and discovery" },
        curto: { pt: "pesquisa", en: "research" } },
      { id: "arquitetura",
        nome:  { pt: "Arquitetura da informação e do conteúdo", en: "Information and content architecture" },
        curto: { pt: "arquitetura do conteúdo", en: "content architecture" } },
      { id: "interacao",
        nome:  { pt: "Design de interação (UX)", en: "Interaction design (UX)" },
        curto: { pt: "UX", en: "UX" } },
      { id: "visual",
        nome:  { pt: "Interface e direção visual", en: "Interface and visual direction" },
        curto: { pt: "direção visual", en: "visual direction" } },
      { id: "decisoes",
        nome:  { pt: "Decisões de produto e escopo", en: "Product and scope decisions" },
        curto: { pt: "decisões de produto", en: "product decisions" } },
      { id: "tecnologia",
        nome:  { pt: "Integração com a tecnologia", en: "Technology integration" },
        curto: { pt: "tecnologia", en: "technology" } },
      { id: "producao",
        nome:  { pt: "Desenvolvimento e produção", en: "Development and production" },
        curto: { pt: "produção", en: "production" } }
    ],
    niveis: {
      lidera: {
        nome: { pt: "Liderei", en: "Led" }, peso: 3,
        descricao: { pt: "decidi ou conduzi", en: "I decided or led it" }
      },
      contribui: {
        nome: { pt: "Contribuí", en: "Contributed" }, peso: 2,
        descricao: { pt: "participei ativamente, com decisão ou execução dividida",
                     en: "I took an active part, with decisions or execution shared" }
      },
      acompanha: {
        nome: { pt: "Acompanhei", en: "Followed" }, peso: 1,
        descricao: { pt: "outra pessoa conduziu", en: "someone else led it" }
      }
    }
  };

  global.PORTFOLIO_DATA = { CASES: CASES, TOOLS: TOOLS, ENVOLVIMENTO: ENVOLVIMENTO };
})(window);
