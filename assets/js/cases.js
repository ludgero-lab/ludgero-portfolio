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
    title: "Programa de Integração de Segurança Interativa",
    // Caixa de frase, como os h1 dos outros dois cases. O `title` acima segue
    // em caixa alta de título: é o que aparece no card da home, onde os três
    // são iguais entre si.
    shortTitle: "Programa de integração de segurança interativa",
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
    // Nível de envolvimento em cada frente, com a evidência que o sustenta.
    // A ordem das frentes é a de ENVOLVIMENTO.frentes, não a daqui.
    involvement: [
      { area: "pesquisa", level: "lidera", note: "Iniciativa minha, fora do briefing: em campo, no centro de distribuição de Osasco, filmei e anotei o comportamento de um motorista usando o treinamento anterior no totem, para entender a operação real e os pontos de fricção antes de desenhar a jornada" },
      { area: "arquitetura", level: "lidera", note: "Defini a ideia conceitual do curso a partir do briefing do cliente: o vídeo pausa diante de uma situação de risco e o motorista responde pelo teclado, trocando a aula passiva por tomada de decisão" },
      { area: "interacao", level: "lidera", note: "Traduzi a lógica do sistema para um totem sem toque nem mouse, operado só pelo teclado numérico, e validei os caminhos de decisão em wireframes antes do desenvolvimento" },
      { area: "visual", level: "lidera", note: "Direção de design do projeto: defini o estilo de animação que substituiu a captação real e dirigi a produção das ilustrações" },
      { area: "decisoes", level: "lidera", note: "Conduzi o projeto de ponta a ponta: ajudei a decidir a virada de captação real para animação quando a pandemia inviabilizou o briefing, e propus o formato Top 10, que virou o vídeo Política de Consequências em 2024" },
      { area: "tecnologia", level: "lidera", note: "Adaptei a experiência ao hardware do totem, com o teclado numérico como única entrada, e especifiquei como esses caminhos deveriam ser montados no Adobe Captivate" },
      // Os nomes da equipe ficam na ficha técnica, não aqui: esta seção
      // responde "o que foi meu". O nível já diz onde a execução foi dividida.
      { area: "producao", level: "lidera", note: "Estive à frente da produção nos dois projetos, do início à entrega: a montagem do treinamento em 2020 e, no vídeo de 2024, narrativa, sonorização, motion graphics no After Effects e finalização no Premiere" }
    ],
    sections: [
      {
        id: "solucao",
        nav: "Solução",
        title: "A solução",
        blocks: [
          {
            type: "p",
            text: "O sistema foi implantado em totens físicos em todas as unidades Votorantim Cimentos do Brasil, atuando como treinamento obrigatório para o credenciamento de motoristas parceiros. A interface foi projetada para quebrar o escopo de vídeo passivo tradicional e transformá-lo em uma jornada de tomada de decisão em cenários de risco operacionais. A jornada começa por uma escolha do próprio motorista: quem já conhece o conteúdo vai direto à prova, em um a dois minutos; quem prefere rever assiste ao curso completo antes, em sete."
          },
          {
            // Vem antes do totem: a foto do equipamento é a mesma miniatura do
            // card na home, então abrir o case com ela repete o que o visitante
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
              { src: `${IMG}/votorantim/flow-01.jpg`, alt: "Escolha entre ir direto para a prova ou assistir ao curso antes, com os tempos estimados de cada caminho", caption: "Escolha do caminho" },
              { src: `${IMG}/votorantim/flow-02.jpg`, alt: "Tela de boas-vindas, com o caminhão do motorista chegando à unidade", caption: "Boas-vindas" },
              { src: `${IMG}/votorantim/flow-03.jpg`, alt: "Pergunta sobre calçar as rodas do caminhão, respondida com as teclas 1 e 2 do totem", caption: "Decisão em cenário de risco" }
            ]
          },
          {
            type: "split",
            title: "A jornada do motorista",
            left: [
              {
                type: "steps",
                items: [
                  "Escolha do caminho",
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
            text: "Em 2020, o briefing original previa gravações in loco com imagens reais nas unidades industriais da Votorantim. Com a chegada da pandemia de Covid-19, o plano foi integralmente inviabilizado. A virada estratégica foi migrar toda a produção de captação real para ilustrações e animações do zero. O obstáculo se tornou uma vantagem competitiva: as ilustrações permitiram encenar perigos, infrações operacionais e consequências graves com precisão pedagógica máxima, sem expor ninguém a situações reais de risco."
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
        nav: "Processo e Wireframes",
        title: "Processo, wireframes e arquitetura de decisão",
        blocks: [
          {
            type: "p",
            // O texto antigo narrava o papel ("estruturei wireframes",
            // "traduzi a lógica do sistema") com as mesmas palavras das
            // evidências de UX e tecnologia do bloco de envolvimento. Aqui
            // fica só a restrição e o que ela impõe ao produto.
            text: "O totem impõe uma restrição rara em produto digital: não há touchscreen nem mouse. Toda a interação acontece pelo teclado numérico embutido no equipamento. Isso obriga a arquitetura de decisão a caber em poucas alternativas por tela, sempre numeradas, com resposta imediata e sem navegação livre. Os wireframes abaixo testaram esses caminhos antes do desenvolvimento, e a montagem final foi programada no Adobe Captivate."
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
        title: "Evolução e retorno do cliente (2024)",
        blocks: [
          {
            type: "p",
            // A frase sobre narrativa, sonorização, After Effects e Premiere
            // saiu daqui: era cópia literal da evidência de produção.
            text: "Quatro anos após a entrega do sistema original, a Votorantim voltou a procurar a equipe para reforçar o programa de integração com um novo vídeo, desta vez sem interatividade. Em uma reunião com a equipe e o cliente, propus o formato “Top 10”: elencar de forma direta e memorável as dez maiores prioridades do programa de segurança da companhia. O conceito virou o nome oficial da peça — Política de Consequências — e o resultado foi novamente bem recebido pelos gestores do cliente."
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
              { role: "Direção de Design e UX", name: "Ludgero Ricardo Abilino" },
              { role: "Edição de Conteúdo", name: "Ana Paula Augusto" },
              { role: "Produção e Execução", name: "Karin Ueda" },
              { role: "Diagramação, Interações e Captivate", name: "Adriana Oliveira" }
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
    involvement: [
      { area: "pesquisa", level: "contribui", note: "Participei da análise do briefing técnico com a equipe e levantei referências fotográficas das plantas industriais, que viraram base dos cenários ilustrados" },
      { area: "arquitetura", level: "lidera", note: "Defini a abordagem didática e a estrutura da jornada: análise do conteúdo, roteirização e fechamento com quizzes" },
      { area: "interacao", level: "lidera", note: "Defini as interações e o template de animações e transições que padronizou a experiência em todos os módulos" },
      { area: "visual", level: "lidera", note: "Identidade visual dos materiais, modelo de personas e direção dos cenários ilustrados a partir das fotos reais das plantas" },
      { area: "decisoes", level: "lidera", note: "Designer líder de ponta a ponta: da definição do modelo do projeto à aprovação de personagens e cenários com o cliente" },
      { area: "tecnologia", level: "lidera", note: "Especifiquei a montagem da solução e usei IA generativa como acelerador na criação dos avatares, com refinamento ilustrado depois" },
      { area: "producao", level: "lidera", note: "Motion design completo e finalização do material audiovisual entregue; construí também o manual base que padronizou a reprodução do modelo em novos projetos" }
    ],
    sections: [
      {
        id: "solucao",
        nav: "Solução",
        title: "A solução",
        blocks: [
          {
            type: "p",
            // Sem a frase "Atuei como designer líder...": a seção "Meu
            // envolvimento", logo acima, já diz isso com nível e evidência.
            text: "Foi desenvolvida uma solução de treinamento digital estruturada para transformar conteúdos técnicos em uma experiência acessível, interativa e escalável, alinhando necessidades operacionais com estratégias de aprendizagem."
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
            label: "Solução",
            alt: "Demonstração da solução digital implementada para a Stefani",
            caption: "Reprodução da solução digital implementada"
          }
          // A nota de créditos que ficava aqui repetia, uma a uma, as quatro
          // pessoas que a ficha técnica deste mesmo case já lista com função.
        ]
      },
      {
        id: "desafio",
        nav: "O Desafio",
        title: "O desafio",
        blocks: [
          {
            type: "p",
            text: "O desafio da Stefani era transformar seu conteúdo instrucional, voltado a motoristas parceiros, antes apresentado de forma presencial, em um formato digital e interativo. Os conteúdos eram complexos e densos, o que limitava a praticidade e a autonomia dos treinamentos. Era necessário adotar métodos interativos como estratégia de ensino para aumentar o engajamento das equipes e otimizar as operações."
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
              { role: "Direção de Design", name: "Ludgero Ricardo Abilino" },
              { role: "Edição de Conteúdo", name: "Ana Paula Augusto" },
              { role: "Produção e Execução", name: "Karin Ueda" },
              { role: "Diagramação, Interações e Captivate", name: "Adriana Oliveira" },
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
    shortName: "Benkyou Game",
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
    involvement: [
      { area: "pesquisa", level: "acompanha", note: "Trouxe boas práticas de usabilidade como referência ao longo do processo; não houve validação formal com usuários, o que aponto como aprendizado na ficha do case" },
      { area: "arquitetura", level: "lidera", note: "Defini a arquitetura de navegação da plataforma, do acesso às trilhas de conteúdo, mantendo a mesma hierarquia em todos os clientes" },
      { area: "interacao", level: "lidera", note: "Desenhei os fluxos e as telas iterativamente, a navegação dos modos Explorador e Prático e os wireframes do editor de perfil, com edição livre e confirmação antes de sair" },
      { area: "visual", level: "lidera", note: "Concebi o sistema visual que adapta a interface a cada cliente: proporções e tamanhos fixos, identidade trocável em cores, HUD, perfil e recompensas" },
      { area: "decisoes", level: "contribui", note: "A divisão em dois modos de acesso foi definida com a liderança; o sistema de recompensas foi simplificado depois de um estudo de viabilidade técnica, e documentei a proposta original" },
      { area: "tecnologia", level: "lidera", note: "Entreguei o protótipo navegável em Adobe XD como especificação de front-end para o time e negociei escopo com o desenvolvimento" },
      { area: "producao", level: "acompanha", note: "O desenvolvimento em Unity e a modelagem 3D foram conduzidos pela equipe, a partir das minhas especificações" }
    ],
    sections: [
      {
        id: "contexto",
        nav: "Contexto",
        title: "O contexto",
        blocks: [
          {
            type: "p",
            text: "Em 2020, o Grupo Boticário buscava um novo parceiro para seus programas de capacitação interna, já com experiência prévia em treinamentos gamificados e o objetivo de evoluir esse modelo com uma solução mais conectada à sua cultura. A Benkyou identificou nessa demanda uma oportunidade além do projeto pontual: desenvolver uma plataforma própria de aprendizagem gamificada e imersiva, capaz de abrigar conteúdos multimídia, criar ambientes tridimensionais personalizados por cliente e engajar colaboradores através de mecânicas de jogo. O resultado foi o Benkyou Game, lançado em 2021 com a primeira temporada do programa Connect do Grupo Boticário. Uma vez estabelecido o modelo, outros clientes adotaram a plataforma — entre eles Cielo, Norton e Ibema — cada um com seu próprio ambiente 3D e identidade visual adaptados."
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
            // O parágrafo "Atuei como UX/UI Designer..." saiu daqui: repetia,
            // frase por frase, quatro evidências do bloco de envolvimento
            // (arquitetura, fluxos, protótipo em XD, boas práticas). As cinco
            // etiquetas que vinham depois eram a mesma lista pela terceira vez.
            //
            // O diagrama fica: ele diz algo que o bloco não diz — a posição
            // entre a estratégia da liderança e a viabilidade do time.
            type: "diagram",
            items: [
              { label: "Visão", title: "Estratégia / CEO", note: "Direção pedagógica e de negócio" },
              { label: "Minha posição", title: "UX/UI Design", note: "Princípios de usabilidade", self: true },
              { label: "Viabilidade", title: "Desenvolvimento", note: "Restrições e possibilidades técnicas" }
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
            text: "A plataforma foi concebida com um sistema visual flexível que permitia adaptar a experiência a cada cliente sem reconstruir a interface do zero. A partir da tela de loading, todos os elementos visuais podiam ser personalizados com a identidade do cliente: cores, imagens de fundo, elementos da HUD, telas de perfil e área de recompensas — sempre dentro de um framework de proporções e tamanhos pré-estabelecidos, garantindo consistência de uso independentemente do tema aplicado. O resultado foi um produto que se comportava como um sistema, não como um projeto único."
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
            text: "Nem todo colaborador chega ao treinamento com o mesmo perfil ou disponibilidade. A solução foi bifurcar a experiência logo após o loading: o modo Explorador leva o usuário direto ao ambiente 3D com avatar e HUD do jogo, enquanto o modo Prático direciona para a tela de objetivos com acesso direto aos conteúdos das trilhas. Os dois caminhos convergem no mesmo conteúdo educacional, garantindo que a escolha do modo não criasse cidadãos de segunda classe dentro da plataforma: ambos os perfis tinham acesso às mesmas trilhas, avaliações e recompensas."
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
            text: "A identidade do jogador dentro da plataforma era construída através do editor de perfil, uma área dedicada à personalização do avatar que tornava a experiência mais pessoal e aumentava o vínculo do colaborador com o jogo. O fluxo foi pensado para ser exploratório: o usuário podia experimentar combinações livremente, visualizar as mudanças em tempo real com rotação 3D e reverter as alterações antes de salvar. Uma confirmação final antes de sair garantia que nenhuma edição fosse perdida por acidente."
          },
          {
            type: "grid",
            cols: 3,
            items: [
              { src: `${IMG}/benkyou/perfil-itens.jpg`, alt: "Editor de perfil com seleção de itens", caption: "Editor de perfil — seleção de itens" },
              { src: `${IMG}/benkyou/perfil-cores.jpg`, alt: "Editor de perfil com paleta de cores", caption: "Editor de perfil — paleta de cores" },
              { src: `${IMG}/benkyou/perfil-confirma.jpg`, alt: "Editor de perfil com confirmação de edição", caption: "Editor de perfil — confirmação de edição" }
            ]
          },
          {
            // A ressalva estava no fim do parágrafo, longe das imagens que ela
            // descreve. Aqui ela fica colada no que o leitor está vendo.
            type: "fineprint",
            text: "As telas acima são os wireframes estruturais que entreguei; o design visual final foi desenvolvido por outro profissional da equipe."
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
            text: "Independentemente do modo de acesso escolhido, todos os colaboradores acessavam o mesmo conteúdo educacional organizado em trilhas de aprendizagem, com módulos exibindo status de progresso, pontuação disponível e condição de obrigatoriedade. A avaliação acontecia ao final de cada módulo através de quizzes com feedback imediato: resposta correta destacada, contador de questões, acertos, erros e performance final em percentual. O sistema foi projetado para ser transparente — o usuário sabia exatamente como estava se saindo a cada etapa."
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
            type: "kpiCards",
            items: [
              { value: "2021", title: "1.470 jogadores", note: "24h de conteúdo" },
              { value: "2022", title: "1.758 jogadores", note: "19h de conteúdo" },
              { value: "2023", title: "2.062 jogadores", note: "19,5h de conteúdo" },
              { value: "2024", title: "2.700 jogadores", note: "19h de conteúdo" }
            ]
          },
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
            type: "quote",
            text: "É nítida a constante evolução da plataforma. Obrigada a todos os envolvidos!",
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
      { id: "pesquisa",    nome: "Pesquisa e descoberta",                 curto: "pesquisa" },
      { id: "arquitetura", nome: "Arquitetura da informação e do conteúdo", curto: "arquitetura do conteúdo" },
      { id: "interacao",   nome: "Design de interação (UX)",              curto: "UX" },
      { id: "visual",      nome: "Interface e direção visual",            curto: "direção visual" },
      { id: "decisoes",    nome: "Decisões de produto e escopo",          curto: "decisões de produto" },
      { id: "tecnologia",  nome: "Integração com a tecnologia",           curto: "tecnologia" },
      { id: "producao",    nome: "Desenvolvimento e produção",            curto: "produção" }
    ],
    niveis: {
      lidera:    { nome: "Liderei",    peso: 3, descricao: "decidi ou conduzi" },
      contribui: { nome: "Contribuí",  peso: 2, descricao: "participei ativamente, com decisão ou execução dividida" },
      acompanha: { nome: "Acompanhei", peso: 1, descricao: "outra pessoa conduziu" }
    }
  };

  global.PORTFOLIO_DATA = { CASES: CASES, TOOLS: TOOLS, ENVOLVIMENTO: ENVOLVIMENTO };
})(window);
