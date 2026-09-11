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
    logo: { neg: `${LOGO}/votorantim-neg.svg`, pos: `${LOGO}/votorantim-pos.svg` },
    logoAlt: "Votorantim Cimentos",
    title: "Programa de Integração de Segurança Interativa",
    shortTitle: "Programa de Integração de Segurança Interativa",
    summary:
      "Ecossistema nacional gamificado de simulação e tomada de decisão implementado em totens físicos proprietários.",
    // O recorte do totem substitui a arte que trazia o logotipo embutido —
    // a marca agora entra no layout, como SVG.
    thumb: `${IMG}/votorantim/totem.png`,
    thumbFit: "contain",
    thumbAlt: "Totem interativo de atendimento ao motorista da Votorantim Cimentos",
    tags: ["Learning Experience Design", "UX Design", "B2B"],
    heroTags: ["B2B", "Learning Experience Design", "UX Design", "2020 — 2024"],
    homeKpi: { label: "KPI Principal", value: "Escala Nacional", note: "Totens interativos homologados em 100% das unidades do país" },
    kpis: [
      { value: "+9.000", note: "Sessões de uso por mês em escala nacional" },
      { value: "4 Anos", note: "Em uso contínuo e evolução desde 2020" },
      { value: "100%", note: "Das unidades integradas via totens físicos" }
    ],
    sections: [
      {
        id: "solucao",
        nav: "Solução Final",
        title: "A solução final",
        blocks: [
          {
            type: "p",
            text: "O sistema foi implantado em totens físicos em todas as unidades Votorantim Cimentos do Brasil, atuando como treinamento obrigatório para o credenciamento de motoristas parceiros. A interface foi projetada para quebrar o escopo de vídeo passivo tradicional e transformá-lo em uma jornada de tomada de decisão em cenários de risco operacionais."
          },
          {
            type: "split",
            title: "A jornada do motorista",
            left: [
              {
                type: "steps",
                items: [
                  "Boas-vindas",
                  "Vídeo de instrução",
                  "Vídeo de fixação",
                  "Feedback imediato",
                  "Quiz com nota mínima 7",
                  "Tela de encerramento"
                ]
              }
            ],
            right: [
              {
                type: "figure",
                src: `${IMG}/votorantim/totem.png`,
                alt: "Totem físico com a interface do treinamento",
                fit: "bare"
              }
            ]
          },
          {
            // As três telas são etapas de um mesmo fluxo: quase encostadas,
            // lêem-se como sequência, não como peças soltas.
            type: "grid",
            cols: 3,
            gap: 8,
            caption: "Fluxo da jornada do motorista",
            items: [
              { src: `${IMG}/votorantim/flow-01.jpg`, alt: "Tela de boas-vindas do treinamento" },
              { src: `${IMG}/votorantim/flow-02.jpg`, alt: "Cenário de decisão em situação de risco" },
              { src: `${IMG}/votorantim/flow-03.jpg`, alt: "Tela de feedback imediato após a resposta" }
            ]
          }
        ]
      },
      {
        id: "desafio",
        nav: "O Desafio",
        title: "O desafio e a virada da pandemia",
        blocks: [
          {
            type: "p",
            text: "Em 2020, o briefing original previa gravações em loco com imagens reais nas unidades industriais da Votorantim. Com a chegada da pandemia de Covid-19, o plano foi integralmente inviabilizado. A virada estratégica foi migrar toda a produção de captação real para ilustrações e animações do zero. O obstáculo se tornou uma vantagem competitiva: as ilustrações permitiram encenar perigos, infrações operacionais e consequências graves com precisão pedagógica máxima, sem expor ninguém a situações reais de risco."
          },
          {
            type: "grid",
            cols: 2,
            items: [
              {
                src: `${IMG}/votorantim/storyboard.jpg`,
                alt: "Storyboard e planejamento do processo de animação",
                caption: "Storyboard / planejamento do processo"
              },
              {
                // Também no Vimeo, pelo mesmo motivo do vídeo da Stefani.
                // Sem `poster`: a miniatura vem de lá.
                vimeo: "1224800204",
                vimeoHash: "7f1ab5847e",
                label: "Animação",
                alt: "Demonstração do vídeo em animação produzido para o treinamento",
                caption: "Demonstração do vídeo em animação"
              }
            ]
          }
        ]
      },
      {
        id: "processo",
        nav: "Processo e Wireframe",
        title: "Mentalidade de processo, wireframes e arquitetura",
        blocks: [
          {
            type: "p",
            text: "A montagem final e a programação foram desenvolvidas no Adobe Captivate. O principal desafio de UX Design consistiu em traduzir a lógica de todo o sistema interativo para um input físico limitado do totem: uma interface sem suporte a touchscreen ou mouse, onde o motorista interage estritamente através do teclado numérico físico integrado. Para validar a usabilidade e a arquitetura das tomadas de decisão antes do desenvolvimento final, estruturei wireframes focados em caminhos lógicos simples e de rápida resposta."
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
            caption: "Wireframe do projeto — validação da ideia",
            items: [
              {
                src: `${IMG}/votorantim/wireframes-fluxo.jpg`,
                alt: "Wireframes das telas de abertura, apresentação e dos dois vídeos do treinamento",
                ratio: "full"
              },
              {
                src: `${IMG}/votorantim/wireframes-decisao.jpg`,
                alt: "Wireframe da tela de decisão, com as alternativas A e B respondidas pelo teclado do totem",
                ratio: "full"
              }
            ]
          }
        ]
      },
      {
        id: "evolucao",
        nav: "Evolução 2024",
        title: "Evolução e retorno de conta (2024)",
        blocks: [
          {
            type: "p",
            text: "Quatro anos após a entrega do sistema original, a Votorantim nos procurou novamente para reforçar o programa de integração com um novo vídeo, desta vez sem necessidade de interatividade. Em uma reunião com a equipe e o cliente, propus o desenvolvimento conceitual do formato “Top 10”, elencando de forma direta e memorável as dez maiores prioridades do programa de segurança da companhia. O conceito evoluiu para o nome oficial do vídeo: Política de Consequências. Atuei diretamente na definição da narrativa conceitual, sonorização, motion graphics no After Effects e edição e finalização no Premiere. O resultado foi novamente bem recebido pelos gestores do cliente."
          },
          {
            type: "extLink",
            href: "https://vimeo.com/1189995196?fl=tl&fe=ec",
            label: "Ver a solução publicada",
            note: "Política de Consequências · Vimeo"
          }
        ]
      },
      {
        id: "ficha",
        nav: "Ficha Técnica",
        title: "Reflexões e ficha técnica",
        blocks: [
          {
            type: "p",
            lead: true,
            text: "O maior aprendizado foi entender que a proposta mais simples nem sempre é a mais eficaz. Um vídeo passivo comum teria cumprido o briefing inicial, mas a experiência interativa desenhada cumpriu o verdadeiro objetivo de negócio: mudar o comportamento em campo."
          },
          {
            type: "credits",
            items: [
              { role: "Direção de Design e Dev", name: "Ludgero Ricardo Abilino" },
              { role: "Edição de Conteúdo", name: "Ana Paula Augusto" },
              { role: "Produção e Execução", name: "Karin Ueda" },
              { role: "Diagramação e Interações", name: "Adriana Oliveira" }
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
    clientAlso: "Andritz • Grupo Equatorial",
    logo: { neg: `${LOGO}/stefani-neg.svg`, pos: `${LOGO}/stefani-pos.svg` },
    logoAlt: "Stefani",
    title: "Transformação Digital de Treinamentos Corporativos",
    shortTitle: "Transformação de treinamentos presenciais em experiência digital interativa",
    summary:
      "Concepção de produto SaaS escalável que migrou mais de 60 horas de treinamentos presenciais densos para uma jornada digital.",
    thumb: `${IMG}/home/case-stefani.jpg`,
    thumbAlt: "Plataforma Benkyou Learn desenvolvida para a Stefani",
    tags: ["Design Instrucional", "UI/UX", "B2B SaaS"],
    heroTags: ["B2B", "Learning Experience Design", "Design Instrucional", "2023"],
    homeKpi: { label: "KPI Principal", value: "+60h", note: "de conteúdo denso digitalizado" },
    kpis: [
      { value: "300+", note: "Usuários ativos por mês na plataforma" },
      { value: "60h", note: "De conteúdo técnico transformadas em treinamento digital" },
      { value: "30%+", note: "Eficácia com feedback imediato" }
    ],
    sections: [
      {
        id: "solucao",
        nav: "Solução e Atuação",
        title: "Solução e atuação",
        blocks: [
          {
            type: "p",
            text: "Foi desenvolvida uma solução de treinamento digital estruturada para transformar conteúdos técnicos em uma experiência acessível, interativa e escalável, alinhando necessidades operacionais com estratégias de aprendizagem. Atuei como designer líder do projeto, responsável pela concepção pedagógica e pela execução visual e técnica da solução."
          },
          {
            type: "split",
            title: "Minha atuação, ponto a ponto",
            left: [
              {
                type: "steps",
                items: [
                  "Participação na análise do briefing técnico ao lado da equipe",
                  "Definição da abordagem didática e indicação de elementos de suporte ao conteúdo",
                  "Criação do modelo das personas a partir do briefing fornecido pela Stefani",
                  "Direção e criação dos cenários ilustrados a partir de referências fotográficas",
                  "Definição da identidade visual aplicada aos materiais interativos",
                  "Criação do template de animações, transições e motion design completo",
                  "Apresentação e aprovação do modelo de personagens e cenários com o cliente"
                ]
              },
              {
                // Dentro da coluna da lista: assim a nota herda a mesma
                // medida e termina onde o texto acima termina, em vez de
                // atravessar por baixo do vídeo.
                type: "fineprint",
                text: "Contei com o apoio da equipe Benkyou: Ana Paula Augusto na edição do conteúdo didático; Karin Ueda na produção de ilustrações; Adriana Oliveira na diagramação e interações; e Talita Cristine Borosch na edição de áudio."
              }
            ],
            right: [
              {
                type: "video",
                // Hospedado no Vimeo: o player entrega bitrate adaptativo, o
                // que importa num vídeo de quase oito minutos aberto no
                // celular. Sem `poster`, a miniatura vem do próprio Vimeo.
                vimeo: "1193806255",
                vimeoHash: "53c8f60c2d",
                label: "Solução",
                alt: "Demonstração da solução digital implementada para a Stefani",
                caption: "Reprodução da solução digital implementada"
              }
            ]
          }
        ]
      },
      {
        id: "desafio",
        nav: "O Desafio",
        title: "O desafio",
        blocks: [
          {
            type: "p",
            text: "O desafio da Stefani era transformar seu conteúdo instrucional, voltado a motoristas parceiros, antes apresentado de forma presencial, para um formato digital e interativo. Os conteúdos eram complexos e densos, o que limitava a praticidade e a autonomia dos treinamentos. Era necessário adotar métodos interativos como estratégia de ensino para aumentar o engajamento das equipes e otimizar as operações."
          },
          { type: "h3", text: "Objetivos de aprendizagem" },
          {
            type: "bullets",
            items: [
              "Garantir a compreensão e aplicação dos conteúdos obrigatórios",
              "Assegurar a realização dos treinamentos dentro dos parâmetros definidos",
              "Promover autonomia no processo de aprendizagem",
              "Estruturar a rastreabilidade da jornada dos usuários",
              "Contribuir para a conformidade e mitigação de riscos operacionais"
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
              { src: `${IMG}/stefani/presencial.jpg`, alt: "Modelo tradicional de treinamento presencial", caption: "Modelo tradicional presencial", ratio: "full" },
              { src: `${IMG}/stefani/digital.jpg`, alt: "Experiência digital implementada", caption: "Experiência digital implementada", ratio: "full" }
            ]
          }
        ]
      },
      {
        id: "processo",
        nav: "Processo Criativo",
        title: "Processo criativo e estratégia instrucional",
        blocks: [
          {
            type: "p",
            text: "Para humanizar e conectar o conteúdo técnico aos motoristas, construímos avatares e personificações utilizando inteligência artificial generativa como ferramenta de aceleração conceitual."
          },
          { type: "flow", items: ["Briefing", "IA Generativa", "Refinamento Ilustrado"] },
          {
            // Personagens: recortes sem fundo, apresentados sem moldura.
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/stefani/persona-andre.png`, alt: "André, instrutor", caption: "André · instrutor", ratio: "stand", fit: "bare", center: true },
              { src: `${IMG}/stefani/persona-ana.png`, alt: "Ana, técnica em segurança", caption: "Ana · técnica em segurança", ratio: "stand", fit: "bare", center: true },
              { src: `${IMG}/stefani/persona-antonio.png`, alt: "Antônio, motorista", caption: "Antônio · motorista", ratio: "stand", fit: "bare", center: true }
            ]
          },
          {
            type: "p",
            text: "Os cenários foram desenvolvidos do zero com base em referências fotográficas reais das plantas industriais, garantindo familiaridade e alto senso de realismo operacional."
          },
          { type: "flow", items: ["Foto de Referência", "Vetorização", "Aplicação no Treinamento"] },
          {
            type: "grid",
            cols: 2,
            items: [
              { src: `${IMG}/stefani/ref-foto.jpg`, alt: "Referência fotográfica da planta industrial", caption: "Referência fotográfica" },
              { src: `${IMG}/stefani/cenario-ilustrado.jpg`, alt: "Cenário ilustrado desenvolvido a partir da referência", caption: "Cenário ilustrado" }
            ]
          },
          { type: "h3", text: "Estratégia instrucional de impacto" },
          {
            type: "pillars",
            items: [
              { title: "Análise de conteúdo", text: "Estruturação do material técnico para definição da jornada de aprendizagem" },
              { title: "Storytelling", text: "Contextualização dos conteúdos para aumentar engajamento" },
              { title: "Roteirização", text: "Organização lógica e progressiva das informações" },
              { title: "Edição gráfica", text: "Aplicação de recursos visuais para simplificar conteúdos complexos" },
              { title: "Diagramação", text: "Estruturação visual para garantir clareza e hierarquia da informação" },
              { title: "Fechamento", text: "Quizzes e atividades para reforço do aprendizado" }
            ]
          }
        ]
      },
      {
        id: "resultados",
        nav: "Resultados e Expansão",
        title: "Resultados e expansão do projeto",
        blocks: [
          {
            type: "p",
            text: "A validação do modelo com mais de 300 usuários ativos provou a eficácia da abordagem interativa em larga escala:"
          },
          {
            type: "kpiCards",
            items: [
              { value: "+60%", title: "Engajamento", note: "com treinamentos interativos" },
              { value: "+30%", title: "Eficácia", note: "com feedback imediato" },
              { value: "+70%", title: "Retenção", note: "de conteúdo com abordagens gamificadas" },
              { value: "+50%", title: "Participação", note: "em treinamentos online" }
            ]
          },
          {
            type: "p",
            text: "O sucesso desse modelo deu origem à marca de produtos de aprendizagem digital Benkyou Learn, que expandiu a atuação para outros grandes players como a Andritz em 2024 e o Grupo Equatorial em 2025."
          },
          {
            type: "grid",
            cols: 2,
            justify: true,
            items: [
              { src: `${IMG}/stefani/andritz.jpg`, alt: "Projeto desenvolvido para a Andritz em 2024", caption: "Projeto Andritz — 2024", ratio: "full" },
              { src: `${IMG}/stefani/equatorial.jpg`, alt: "Projeto desenvolvido para o Grupo Equatorial em 2025", caption: "Projeto Grupo Equatorial — 2025", ratio: "full" }
            ]
          }
        ]
      },
      {
        id: "ficha",
        nav: "Ficha Técnica",
        title: "Reflexões e ficha técnica",
        blocks: [
          {
            type: "p",
            lead: true,
            text: "Este projeto consolidou a importância de escalar o design instrucional através de metodologias ágeis e do uso consciente de IA. Liderar um projeto end-to-end — desde a concepção pedagógica até a direção de arte e entrega técnica — demonstrou que a inovação didática é o motor principal para transformar a cultura de segurança operacional de uma organização."
          },
          {
            type: "credits",
            items: [
              { role: "Direção de Design e Dev", name: "Ludgero Ricardo Abilino" },
              { role: "Edição de Conteúdo", name: "Ana Paula Augusto" },
              { role: "Produção e Execução", name: "Karin Ueda" },
              { role: "Diagramação e Interações", name: "Adriana Oliveira" },
              { role: "Edição de Áudio", name: "Talita Cristine Borosch" }
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
    clientAlso: "Grupo Boticário • Cielo • Norton • Ibema",
    logo: { neg: `${LOGO}/benkyou-neg.svg`, pos: `${LOGO}/benkyou-pos.svg` },
    logoAlt: "Benkyou Game",
    title: "Plataforma de Aprendizagem Gamificada e Imersiva",
    shortTitle: "Plataforma de aprendizagem gamificada e imersiva",
    summary:
      "Arquitetura de produto multi-tenant com ambientes 3D customizados, alcançando crescimento consistente por 5 temporadas consecutivas.",
    thumb: `${IMG}/home/case-benkyou.jpg`,
    thumbAlt: "Ambiente 3D da plataforma Benkyou Game",
    tags: ["UX/UI Design", "B2B2C", "Plataformas Escaláveis"],
    heroTags: ["B2B", "UX/UI Design", "Game Design", "2021 — 2025"],
    homeKpi: { label: "KPI Principal", value: "2.700", note: "jogadores ativos e +84% de crescimento" },
    kpis: [
      { value: "2.700", note: "Colaboradores ativos por temporada no Grupo Boticário" },
      { value: "+84%", note: "De crescimento em jogadores ativos entre 2021 e 2024" },
      { value: "5 Anos", note: "Em operação contínua, com renovação de contrato a cada temporada" }
    ],
    sections: [
      {
        id: "contexto",
        nav: "Contexto e Atuação",
        title: "Contexto e atuação",
        blocks: [
          {
            type: "p",
            text: "Em 2020, o Grupo Boticário buscava um novo parceiro para seus programas de capacitação interna, já com experiência prévia em treinamentos gamificados e o objetivo de evoluir esse modelo com uma solução mais conectada à sua cultura. A Benkyou identificou nessa demanda uma oportunidade além do projeto pontual: desenvolver uma plataforma própria de aprendizagem gamificada e imersiva, capaz de acondicionar conteúdos multimídia, criar ambientes tridimensionais personalizados por cliente e engajar colaboradores através de mecânicas de jogo. O resultado foi o Benkyou Game, lançado em 2021 com a primeira temporada do programa Connect do Grupo Boticário. Uma vez estabelecido o modelo, outros clientes adotaram a plataforma — entre eles Cielo, Norton e Ibema — cada um com seu próprio ambiente 3D e identidade visual adaptados."
          },
          {
            type: "timeline",
            items: [
              { year: "2020", text: "Início do desenvolvimento" },
              { year: "2021", text: "Boticário / Connect · 1ª temporada" },
              { year: "2022–2023", text: "2ª e 3ª temporada · Expansão e evolução · Projeto Cielo" },
              { year: "2024–2025", text: "4ª e 5ª temporada · Projeto Norton · Ibema" }
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
            type: "p",
            text: "Atuei como UX/UI Designer responsável pela interface da plataforma, trabalhando na interseção entre três frentes: a visão estratégica e pedagógica da CEO da Benkyou, as restrições e possibilidades técnicas levantadas pelos desenvolvedores, e as boas práticas de usabilidade que trouxe como referência ao longo de todo o processo. A partir dos briefings e direcionamentos da liderança, desenvolvi as telas iterativamente, propondo fluxos, definindo a arquitetura de navegação e entregando o protótipo navegável em Adobe XD como especificação de front-end para o time de desenvolvimento. Também fiz parte do estúdio de criação da Benkyou, contribuindo para a adaptação visual da plataforma a cada novo cliente, utilizando o Miro como espaço colaborativo para definir linhas de construção de cenário, paleta de cores e diretrizes visuais."
          },
          {
            type: "diagram",
            items: [
              { label: "Visão", title: "Estratégia / CEO", note: "Direção pedagógica e de negócio" },
              { label: "Minha atuação", title: "UX/UI Design", note: "Princípios de usabilidade", self: true },
              { label: "Viabilidade", title: "Desenvolvimento", note: "Restrições e possibilidades técnicas" }
            ]
          },
          {
            type: "chips",
            items: [
              "Arquitetura de navegação",
              "Wireframes e fluxos",
              "Protótipo navegável (XD)",
              "Especificação de front-end",
              "Adaptação visual por cliente"
            ]
          }
        ]
      },
      {
        id: "estrutura",
        nav: "Estrutura e Onboarding",
        title: "A plataforma — estrutura e onboarding",
        blocks: [
          {
            type: "p",
            text: "A plataforma foi concebida com um sistema visual flexível que permitia adaptar a experiência a cada cliente sem reconstruir a interface do zero. A partir da tela de loading, todos os elementos visuais podiam ser personalizados com a identidade do cliente: cores, imagens de fundo, elementos da HUD, telas de perfil e área de recompensas — sempre dentro de um framework de proporções e tamanhos pré-estabelecidos, garantindo consistência de uso independente do tema aplicado. O resultado foi um produto que se comportava como um sistema, não como um projeto único."
          },
          {
            type: "grid",
            cols: 2,
            items: [
              { src: `${IMG}/benkyou/login.jpg`, alt: "Tela de login da plataforma", caption: "Tela de login adaptável por cliente" },
              { src: `${IMG}/benkyou/loading.jpg`, alt: "Tela de loading personalizada do projeto Connect", caption: "Tela de loading personalizada — Projeto Connect" }
            ]
          },
          {
            type: "p",
            text: "Nem todo colaborador chega ao treinamento com o mesmo perfil ou disponibilidade. A solução, definida em conjunto com a liderança da Benkyou, foi bifurcar a experiência logo após o loading: o modo Explorador leva o usuário direto ao ambiente 3D com avatar e HUD do jogo, enquanto o modo Prático direciona para a tela de objetivos com acesso direto aos conteúdos das trilhas. Os dois caminhos convergem no mesmo conteúdo educacional, garantindo que a escolha do modo não criasse cidadãos de segunda classe dentro da plataforma: ambos os perfis tinham acesso às mesmas trilhas, avaliações e recompensas."
          },
          {
            type: "figure",
            src: `${IMG}/benkyou/modo.jpg`,
            alt: "Tela de seleção entre o modo Explorador e o modo Prático",
            caption: "Tela de seleção de modo — Explorador / Prático",
            ratio: "video"
          }
        ]
      },
      {
        id: "jornada",
        nav: "Jornada de Jogo",
        title: "Jornada de jogo",
        blocks: [
          {
            type: "p",
            text: "Ao escolher o modo Explorador, o usuário é lançado diretamente no ambiente 3D com seu avatar. A interface foi projetada para se integrar à temática visual de cada temporada ou cliente, com os elementos da HUD adaptados em cores, texturas e estilo gráfico, mantendo sempre a mesma arquitetura de posicionamento e hierarquia de informação: informações de status no topo, ações de navegação na base. O usuário precisava saber onde estava e o que ainda faltava completar sem precisar sair do ambiente de jogo para isso."
          },
          {
            type: "figure",
            src: `${IMG}/benkyou/hud.jpg`,
            alt: "Tela de jogo com HUD, ambiente 3D e avatar",
            caption: "Tela de jogo com HUD — ambiente 3D e avatar",
            ratio: "video"
          },
          {
            type: "p",
            text: "A identidade do jogador dentro da plataforma era construída através do editor de perfil, uma área dedicada à personalização do avatar que tornava a experiência mais pessoal e aumentava o vínculo do colaborador com o jogo. O fluxo foi pensado para ser exploratório: o usuário podia experimentar combinações livremente, visualizar as mudanças em tempo real com rotação 3D e reverter as alterações antes de salvar. Uma confirmação final antes de sair garantia que nenhuma edição fosse perdida por acidente. As telas de editor de perfil apresentadas aqui refletem o nível de wireframe estrutural que entreguei; o design visual final foi desenvolvido por outro profissional da equipe."
          },
          {
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/benkyou/perfil-itens.jpg`, alt: "Editor de perfil com seleção de itens", caption: "Editor de perfil — seleção de itens" },
              { src: `${IMG}/benkyou/perfil-cores.jpg`, alt: "Editor de perfil com paleta de cores", caption: "Editor de perfil — paleta de cores" },
              { src: `${IMG}/benkyou/perfil-confirma.jpg`, alt: "Editor de perfil com confirmação de edição", caption: "Editor de perfil — confirmação de edição" }
            ]
          }
        ]
      },
      {
        id: "conteudo",
        nav: "Conteúdo e Engajamento",
        title: "Conteúdo e engajamento",
        blocks: [
          {
            type: "p",
            text: "Independente do modo de acesso escolhido, todos os colaboradores acessavam o mesmo conteúdo educacional organizado em trilhas de aprendizagem, com módulos exibindo status de progresso, pontuação disponível e condição de obrigatoriedade. A avaliação acontecia ao final de cada módulo através de quizzes com feedback imediato: resposta correta destacada, contador de questões, acertos, erros e performance final em percentual. O sistema foi projetado para ser transparente — o usuário sabia exatamente como estava se saindo a cada etapa."
          },
          {
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/benkyou/trilhas.jpg`, alt: "Tela de objetivos e trilhas de aprendizagem", caption: "Tela de objetivos e trilhas" },
              { src: `${IMG}/benkyou/atividade.jpg`, alt: "Atividade interativa de conteúdo", caption: "Atividade interativa de conteúdo" },
              { src: `${IMG}/benkyou/quiz.jpg`, alt: "Tela de resultados do quiz", caption: "Tela de resultados do quiz" }
            ]
          },
          {
            type: "p",
            text: "O engajamento sustentado ao longo das temporadas dependia de dois mecanismos complementares: recompensas tangíveis pelo desempenho e competição social entre os colaboradores. As moedas conquistadas ao longo das trilhas podiam ser trocadas por prêmios reais através de uma integração com uma loja externa, com saldo, histórico de resgates e regulamento visíveis dentro da própria plataforma — uma decisão intencional de transparência, para que o colaborador confiasse que seus pontos tinham valor real e rastreável. O componente social era estruturado em duas camadas: o ranking individual e o sistema de equipes, centralizados num único painel de perfil do jogador."
          },
          {
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/benkyou/recompensas.jpg`, alt: "Tela de resgate de recompensas", caption: "Tela de resgate de recompensas" },
              { src: `${IMG}/benkyou/perfil-jogador.jpg`, alt: "Painel de perfil do jogador", caption: "Perfil do jogador" },
              { src: `${IMG}/benkyou/ranking.jpg`, alt: "Tela de ranking e equipes", caption: "Ranking e equipes" }
            ]
          }
        ]
      },
      {
        id: "resultados",
        nav: "Evolução e Resultados",
        title: "Evolução e resultados",
        blocks: [
          {
            type: "p",
            text: "O sistema de recompensas foi projetado em 2023, quando a plataforma já contava com uma base funcional consolidada. A primeira versão, com histórico de resgate detalhado, feedback visual por cores e filtro de dados, foi simplificada após estudo de viabilidade técnica e implementada em uma versão mais direta no início de 2024, já no lançamento da nova temporada do Connect."
          },
          {
            type: "compare",
            before: {
              label: "Antes · 2023",
              src: `${IMG}/benkyou/resgate-2023.jpg`,
              alt: "Proposta original da tela de resgate de pontos",
              caption: "Proposta original de resgate de pontos"
            },
            after: {
              label: "Depois · 2024",
              src: `${IMG}/benkyou/resgate-2024.jpg`,
              alt: "Tela de resgate implementada em 2024",
              caption: "Tela de resgate implementada"
            }
          },
          {
            type: "p",
            text: "A plataforma foi estruturada comercialmente em dois modelos que definiam o nível de personalização disponível: no modelo Standard, o cliente escolhia entre mapas pré-construídos com personalização limitada à paleta de cores e HUD — usado por Cielo e Norton; no modelo Premium, todo o ambiente era desenvolvido sob medida a partir de um briefing exclusivo, tanto o mapa externo quanto os ambientes internos — modelo operado pelo Grupo Boticário, com mundos 3D completamente distintos a cada temporada. Essa distinção não era apenas comercial: ela definia o escopo real do meu trabalho em cada projeto, entre adaptação visual dentro de um sistema existente e construção conceitual ampla do zero."
          },
          {
            type: "grid",
            cols: 2,
            items: [
              { src: `${IMG}/benkyou/standard-norton.jpg`, alt: "Ambiente interno de jogo no modelo Standard, projeto Norton", caption: "Modelo Standard, ambiente interno — Norton, 2024/25" },
              { src: `${IMG}/benkyou/premium-boticario.jpg`, alt: "Ambiente externo de jogo no modelo Premium, Grupo Boticário", caption: "Modelo Premium, ambiente externo — Grupo Boticário, 2025" }
            ]
          },
          {
            type: "p",
            text: "O Benkyou Game permaneceu em operação por cinco temporadas consecutivas com o Grupo Boticário, com renovação anual do contrato refletindo a consistência do produto e a confiança construída com o cliente. Entre 2021 e 2024, a plataforma cresceu 84% em número de jogadores ativos só no Grupo Boticário, passando de 1.470 para 2.700 colaboradores por temporada, mantendo uma média de 19 a 24 horas de conteúdo consumido por jogador. O modelo estabelecido viabilizou a entrada de novos clientes — Cielo, Norton e Ibema — confirmando que a arquitetura da plataforma era escalável e adaptável a diferentes contextos corporativos."
          },
          {
            type: "kpiCards",
            items: [
              { value: "2021", title: "1.470 jogadores", note: "24h de conteúdo" },
              { value: "2022", title: "1.758 jogadores", note: "19h de conteúdo" },
              { value: "2023", title: "2.062 jogadores", note: "19,5h de conteúdo" },
              { value: "2024", title: "2.700 jogadores", note: "19h de conteúdo" }
            ]
          },
          {
            type: "quote",
            text: "É nítido a constante evolução da plataforma. Obrigada a todos os envolvidos!",
            cite: "Grupo Boticário"
          },
          {
            type: "quoteCards",
            items: [
              { text: "A qualidade do conhecimento repassado é excelente!", cite: "Grupo Boticário" },
              { text: "Achei muito mais atrativa essa temática selva, praia.", cite: "Grupo Boticário" }
            ]
          }
        ]
      },
      {
        id: "ficha",
        nav: "Ficha Técnica",
        title: "Reflexões e ficha técnica",
        blocks: [
          {
            type: "p",
            lead: true,
            text: "Construir uma plataforma do zero em um contexto de startup, com demandas crescentes e prazos curtos, exigiu constantes adaptações entre o ideal em design e o que era tecnicamente viável. Uma das principais tensões esteve na relação com o desenvolvimento, que frequentemente priorizava funcionalidades de back-end em detrimento de melhorias de usabilidade e interface, como no sistema de recompensas. Aprendi a negociar escopo sem abrir mão do raciocínio de UX, documentando propostas mesmo quando não eram implementadas. Em retrospecto, a ausência de validações formais com usuários também foi um ponto de aprendizado, especialmente em fluxos como onboarding e navegação pelo mapa 3D. Por fim, trabalhar em um produto que se reinventava a cada temporada ampliou minha capacidade de pensar em sistemas, e não apenas em telas isoladas."
          },
          {
            type: "credits",
            items: [
              { role: "UX/UI Design", name: "Ludgero Ricardo Abilino" },
              { role: "Design Instrucional / Conteúdo", name: "Ana Paula Augusto" },
              { role: "Ilustração e Modelagem 3D", name: "Karin Ueda" },
              { role: "Modelagem 3D e Unity", name: "Talita Cristine Borosch" },
              { role: "Game Dev e Unity", name: "Larissa" }
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

  global.PORTFOLIO_DATA = { CASES: CASES, TOOLS: TOOLS };
})(window);
