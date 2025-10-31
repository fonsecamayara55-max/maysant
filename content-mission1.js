// ============================================
// MISSÃO 1: FUNDAMENTOS DA REPÚBLICA (Art. 1º-4º)
// Versão 3.0 - Conteúdo Completo e Robusto
// ============================================

const mission1Content = {
    title: "🏛️ Fundamentos da República",
    description: "Princípios fundamentais, divisão de poderes, objetivos e relações internacionais",
    difficulty: "⭐⭐",
    totalArticles: 4,
    articles: [
        {
            number: "Art. 1º",
            title: "Fundamentos da República Federativa do Brasil",
            lawText: `Art. 1º A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:

I - a soberania;
II - a cidadania;
III - a dignidade da pessoa humana;
IV - os valores sociais do trabalho e da livre iniciativa;
V - o pluralismo político.

Parágrafo único. Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição.`,
            
            raioX: {
                caput: "Define o Brasil como Estado Democrático de Direito com 5 fundamentos essenciais",
                incisos: [
                    "I - Soberania: Independência e autodeterminação nacional",
                    "II - Cidadania: Qualidade de cidadão com direitos e deveres",
                    "III - Dignidade da pessoa humana: Núcleo irradiante de direitos fundamentais",
                    "IV - Valores sociais do trabalho e livre iniciativa: Equilíbrio entre proteção social e economia",
                    "V - Pluralismo político: Diversidade ideológica e partidária"
                ],
                paragrafo: "Parágrafo único: Soberania popular - poder emana do povo (direto ou representativo)"
            },

            tips: [
                "Mnemônico: S-C-D-T-P (Soberania, Cidadania, Dignidade, Trabalho, Pluralismo)",
                "Dignidade é NÚCLEO IRRADIANTE: irradia para todos os direitos fundamentais (STF)",
                "Equilíbrio trabalho/livre iniciativa: NÃO há prevalência de um sobre o outro",
                "Pluralismo político: Permite diversidade, mas não extremismos (STF - Partido Comunista)",
                "Soberania popular: Base da democracia - poder vem do povo"
            ],

            aocp: {
                padraoCobranca: "AOCP testa identificação correta dos fundamentos, pegadinhas sobre prevalência trabalho/iniciativa, e aplicação de dignidade em direitos",
                questoesTipicas: [
                    "Qual fundamento é núcleo irradiante?",
                    "Trabalho prevalece sobre livre iniciativa?",
                    "Pluralismo permite extremismos?",
                    "Soberania é interna ou externa?"
                ],
                pegadinhas: [
                    "Trabalho NÃO prevalece sobre livre iniciativa - há equilíbrio",
                    "Dignidade é fundamento E princípio (não confundir com direito)",
                    "Pluralismo não é absoluto - STF veda partidos antidemocráticos",
                    "Soberania é INTERNA E EXTERNA (não apenas uma)"
                ]
            },

            pgmsp: {
                aplicabilidade: "Art. 1º fundamenta toda atividade da PGM-SP: dignidade guia políticas de moradia, trabalho digno, respeito à diversidade. Pluralismo justifica defesa de minorias. Soberania municipal (art. 30) decorre deste fundamento.",
                exemplos: [
                    "Defesa de políticas sociais (moradia digna - dignidade)",
                    "Proteção de direitos trabalhistas municipais (valores trabalho)",
                    "Respeito a diversidade religiosa/política em licitações (pluralismo)",
                    "Autonomia municipal em questões locais (soberania)"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "Sobre o Art. 1º da CF/88, assinale a alternativa INCORRETA:",
                    opcoes: [
                        { letra: "A", texto: "A dignidade da pessoa humana é fundamento que irradia para direitos fundamentais" },
                        { letra: "B", texto: "O trabalho prevalece sobre a livre iniciativa em todos os conflitos" },
                        { letra: "C", texto: "A soberania compreende autodeterminação interna e externa" },
                        { letra: "D", texto: "O pluralismo político permite diversidade ideológica e partidária" },
                        { letra: "E", texto: "O parágrafo único reconhece soberania popular" }
                    ],
                    gabarito: "B",
                    explicacao: "B está INCORRETA. Trabalho e livre iniciativa estão em EQUILÍBRIO (art. 1º IV), não há prevalência de um sobre o outro. Pegadinha comum AOCP. A, C, D, E estão corretas: A (dignidade irradiante - STF), C (soberania interna/externa), D (pluralismo), E (soberania popular)."
                },
                {
                    id: 2,
                    texto: "Qual fundamento do Art. 1º é considerado núcleo irradiante de direitos fundamentais?",
                    opcoes: [
                        { letra: "A", texto: "Soberania" },
                        { letra: "B", texto: "Cidadania" },
                        { letra: "C", texto: "Dignidade da pessoa humana" },
                        { letra: "D", texto: "Valores sociais do trabalho" },
                        { letra: "E", texto: "Pluralismo político" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Dignidade da pessoa humana é o fundamento que irradia para todos os direitos fundamentais (Capítulo II). Doutrina (Lenza, Afonso da Silva) e jurisprudência STF confirmam. Aplicação: fundamenta direito à moradia, saúde, educação, etc."
                },
                {
                    id: 3,
                    texto: "De acordo com o parágrafo único do Art. 1º, o poder emana do povo e pode ser exercido:",
                    opcoes: [
                        { letra: "A", texto: "Apenas por representantes eleitos" },
                        { letra: "B", texto: "Apenas diretamente pelo povo" },
                        { letra: "C", texto: "Por representantes eleitos OU diretamente, conforme a Constituição" },
                        { letra: "D", texto: "Apenas pelos Poderes Executivo, Legislativo e Judiciário" },
                        { letra: "E", texto: "Conforme decisão do Presidente da República" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Soberania popular pode ser exercida de forma REPRESENTATIVA (eleições) ou DIRETA (referendo, plebiscito, iniciativa popular - arts. 14-16). Pegadinha: não é exclusivamente uma forma. Aplicação PGM: consultas públicas, audiências são exercício direto."
                },
                {
                    id: 4,
                    texto: "O pluralismo político, fundamento do Art. 1º V, permite:",
                    opcoes: [
                        { letra: "A", texto: "Qualquer ideologia, inclusive antidemocráticas" },
                        { letra: "B", texto: "Diversidade ideológica, mas veda partidos antidemocráticos (STF)" },
                        { letra: "C", texto: "Apenas dois partidos políticos" },
                        { letra: "D", texto: "Exclusivamente ideologias de esquerda" },
                        { letra: "E", texto: "Nenhuma restrição a ideologias extremistas" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Pluralismo permite diversidade, MAS STF veda partidos que pregam dissolução do Estado Democrático (Partido Comunista, 1992). Pegadinha AOCP: 'permite qualquer ideologia' está errada. Aplicação: PGM defende democracia contra extremismos."
                },
                {
                    id: 5,
                    texto: "A soberania, fundamento do Art. 1º I, compreende:",
                    opcoes: [
                        { letra: "A", texto: "Apenas independência externa (relações internacionais)" },
                        { letra: "B", texto: "Apenas autodeterminação interna (poder constituinte)" },
                        { letra: "C", texto: "Independência externa E autodeterminação interna" },
                        { letra: "D", texto: "Subordinação a organismos internacionais" },
                        { letra: "E", texto: "Apenas poder do Presidente da República" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Soberania é DUPLA: externa (independência nacional) e interna (poder constituinte, autodeterminação). Pegadinha: não é apenas uma. Doutrina (Afonso da Silva) confirma. Aplicação: fundamenta autonomia municipal (art. 30)."
                },
                {
                    id: 6,
                    texto: "Qual alternativa melhor exemplifica aplicação do fundamento 'dignidade da pessoa humana' em políticas públicas municipais?",
                    opcoes: [
                        { letra: "A", texto: "Proibição absoluta de trabalho" },
                        { letra: "B", texto: "Garantia de moradia digna, saúde e educação" },
                        { letra: "C", texto: "Eliminação da livre iniciativa" },
                        { letra: "D", texto: "Restrição de direitos políticos" },
                        { letra: "E", texto: "Centralização de poder no Executivo" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Dignidade irradia para direitos sociais (moradia, saúde, educação - arts. 6º, 196, 205). PGM-SP fundamenta políticas sociais neste princípio. Pegadinha: alternativas A, C, D, E violam dignidade, não a aplicam."
                },
                {
                    id: 7,
                    texto: "Assinale a alternativa que melhor descreve a relação entre 'valores sociais do trabalho' e 'livre iniciativa' no Art. 1º IV:",
                    opcoes: [
                        { letra: "A", texto: "Trabalho prevalece sempre sobre livre iniciativa" },
                        { letra: "B", texto: "Livre iniciativa prevalece sempre sobre trabalho" },
                        { letra: "C", texto: "Estão em equilíbrio, sem prevalência de um sobre o outro" },
                        { letra: "D", texto: "Um exclui o outro" },
                        { letra: "E", texto: "Não há relação entre eles" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Art. 1º IV reconhece EQUILÍBRIO entre proteção social (trabalho) e economia (livre iniciativa). STF rejeita prevalência absoluta. Pegadinha AOCP frequente: 'trabalho prevalece'. Aplicação: PGM equilibra políticas trabalhistas e econômicas."
                },
                {
                    id: 8,
                    texto: "De acordo com a doutrina e jurisprudência, qual é o status da dignidade da pessoa humana na CF/88?",
                    opcoes: [
                        { letra: "A", texto: "Apenas um direito ordinário" },
                        { letra: "B", texto: "Fundamento que irradia para todos os direitos fundamentais" },
                        { letra: "C", texto: "Princípio sem aplicabilidade prática" },
                        { letra: "D", texto: "Exclusivamente norma programática" },
                        { letra: "E", texto: "Direito que pode ser restringido livremente" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Dignidade é FUNDAMENTO (art. 1º III) que IRRADIA para direitos fundamentais (Capítulo II). STF e doutrina (Lenza, Barroso) confirmam. Pegadinha: não é 'apenas direito ordinário' nem 'apenas programática'. Aplicação: fundamenta todas as políticas PGM."
                },
                {
                    id: 9,
                    texto: "Qual das alternativas abaixo NÃO é uma forma de exercício da soberania popular conforme o parágrafo único do Art. 1º?",
                    opcoes: [
                        { letra: "A", texto: "Eleição de representantes" },
                        { letra: "B", texto: "Referendo" },
                        { letra: "C", texto: "Plebiscito" },
                        { letra: "D", texto: "Iniciativa popular de lei" },
                        { letra: "E", texto: "Decisão unilateral do Presidente" }
                    ],
                    gabarito: "E",
                    explicacao: "E está correta. Soberania popular é exercida por representantes OU DIRETAMENTE (arts. 14-16: referendo, plebiscito, iniciativa popular). Presidente NÃO exerce sozinho. Pegadinha: confundir poder presidencial com soberania popular. Aplicação: PGM respeita mecanismos de participação."
                },
                {
                    id: 10,
                    texto: "Sobre a cidadania como fundamento (Art. 1º II), assinale a alternativa correta:",
                    opcoes: [
                        { letra: "A", texto: "Refere-se apenas ao direito de votar" },
                        { letra: "B", texto: "Inclui direitos e deveres de participação política e social" },
                        { letra: "C", texto: "É privilégio de brasileiros natos" },
                        { letra: "D", texto: "Exclui estrangeiros de qualquer direito" },
                        { letra: "E", texto: "Não tem aplicabilidade em políticas municipais" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Cidadania compreende direitos políticos, civis e sociais (arts. 12-17). Inclui votar, ser votado, participar, exercer direitos. Pegadinha: não é apenas voto. Aplicação: PGM garante participação cidadã em políticas públicas."
                }
            ],

            flashcards: [
                { pergunta: "Qual é o mnemônico para os 5 fundamentos?", resposta: "S-C-D-T-P (Soberania, Cidadania, Dignidade, Trabalho, Pluralismo)" },
                { pergunta: "Dignidade é fundamento ou direito?", resposta: "FUNDAMENTO que irradia para direitos fundamentais" },
                { pergunta: "Trabalho prevalece sobre livre iniciativa?", resposta: "NÃO - estão em EQUILÍBRIO" },
                { pergunta: "Pluralismo permite ideologias antidemocráticas?", resposta: "NÃO - STF veda partidos antidemocráticos" },
                { pergunta: "Soberania é interna ou externa?", resposta: "AMBAS - interna (poder constituinte) e externa (independência)" },
                { pergunta: "Parágrafo único: poder emana de quem?", resposta: "Do POVO (direto ou representativo)" },
                { pergunta: "Cidadania inclui apenas voto?", resposta: "NÃO - inclui direitos e deveres políticos, civis e sociais" },
                { pergunta: "Art. 1º é cláusula pétrea?", resposta: "SIM - não pode ser abolido (art. 60 §4º)" }
            ]
        },

        // Art. 2º
        {
            number: "Art. 2º",
            title: "Divisão de Poderes",
            lawText: `Art. 2º São Poderes da União, independentes e harmônicos entre si:

I - o Legislativo;
II - o Executivo;
III - o Judiciário.`,
            
            raioX: {
                caput: "Estabelece tripartição de poderes com independência e harmonia",
                incisos: [
                    "I - Poder Legislativo: Edita leis (função típica)",
                    "II - Poder Executivo: Executa leis (função típica)",
                    "III - Poder Judiciário: Resolve conflitos (função típica)"
                ],
                paragrafo: "Independência: cada poder é autônomo | Harmonia: sistema de freios e contrapesos"
            },

            tips: [
                "Mnemônico: L-E-J (Legislativo, Executivo, Judiciário)",
                "INDEPENDÊNCIA: cada poder tem autonomia funcional e administrativa",
                "HARMONIA: sistema de checks and balances (freios e contrapesos)",
                "Funções TÍPICAS: cada poder tem função principal",
                "Funções ATÍPICAS: cada poder pode exercer funções de outros (ex: Executivo faz leis via decreto)"
            ],

            aocp: {
                padraoCobranca: "AOCP testa diferença entre independência/harmonia, funções típicas/atípicas, e aplicação em controle de constitucionalidade",
                questoesTipicas: [
                    "Qual é a função típica de cada poder?",
                    "Independência permite que um poder invada outro?",
                    "Funções atípicas violam separação?",
                    "STF pode fazer leis?"
                ],
                pegadinhas: [
                    "Independência NÃO significa isolamento - há harmonia",
                    "Funções atípicas são PERMITIDAS (não violam separação)",
                    "Judiciário pode fazer leis (ex: regimento interno)",
                    "Harmonia permite que um poder controle outro"
                ]
            },

            pgmsp: {
                aplicabilidade: "Art. 2º fundamenta autonomia da PGM-SP: como órgão do Poder Executivo, tem independência funcional. Harmonia justifica controle de legalidade (PGM defende atos municipais perante Judiciário). Separação de poderes protege autonomia municipal.",
                exemplos: [
                    "PGM defende atos do Executivo municipal perante Judiciário",
                    "Independência funcional da PGM em relação ao Legislativo",
                    "Controle de legalidade: Judiciário revisa atos Executivo",
                    "Harmonia: Legislativo aprova orçamento que Executivo executa"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "Qual é a função TÍPICA do Poder Judiciário conforme Art. 2º?",
                    opcoes: [
                        { letra: "A", texto: "Editar leis" },
                        { letra: "B", texto: "Executar leis" },
                        { letra: "C", texto: "Resolver conflitos e dizer o direito" },
                        { letra: "D", texto: "Administrar a máquina pública" },
                        { letra: "E", texto: "Dirigir relações internacionais" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Função típica do Judiciário é dizer o direito, resolver conflitos (jurisdição). Pegadinha: confundir com funções atípicas (ex: Judiciário faz leis via regimento interno, mas não é função típica). Aplicação: PGM recorre ao Judiciário para defesa."
                },
                {
                    id: 2,
                    texto: "A independência entre os Poderes (Art. 2º) significa que:",
                    opcoes: [
                        { letra: "A", texto: "Um poder não pode controlar o outro" },
                        { letra: "B", texto: "Cada poder é autônomo, mas há sistema de freios e contrapesos" },
                        { letra: "C", texto: "Os poderes não se comunicam" },
                        { letra: "D", texto: "Legislativo comanda Executivo e Judiciário" },
                        { letra: "E", texto: "Não há qualquer relação entre os poderes" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Independência = autonomia funcional. Harmonia = freios e contrapesos (ex: Legislativo aprova orçamento, Judiciário controla legalidade). Pegadinha: independência NÃO significa isolamento. Aplicação: PGM respeita autonomia de cada poder."
                },
                {
                    id: 3,
                    texto: "Qual alternativa exemplifica HARMONIA entre os Poderes?",
                    opcoes: [
                        { letra: "A", texto: "Legislativo edita lei que Executivo não executa" },
                        { letra: "B", texto: "Judiciário revisa constitucionalidade de lei do Legislativo" },
                        { letra: "C", texto: "Executivo ignora decisão do Judiciário" },
                        { letra: "D", texto: "Poderes não se comunicam" },
                        { letra: "E", texto: "Um poder absorve funções de outro" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Harmonia = sistema de controle mútuo (freios e contrapesos). Judiciário controla Legislativo, Legislativo controla Executivo, etc. Pegadinha: alternativas A, C, D, E violam harmonia. Aplicação: PGM participa deste sistema de controle."
                },
                {
                    id: 4,
                    texto: "Funções ATÍPICAS (exercidas por poder que não é típico) são permitidas conforme jurisprudência?",
                    opcoes: [
                        { letra: "A", texto: "Não, violam separação de poderes" },
                        { letra: "B", texto: "Sim, desde que não prejudiquem função típica" },
                        { letra: "C", texto: "Apenas para Executivo" },
                        { letra: "D", texto: "Apenas para Legislativo" },
                        { letra: "E", texto: "Nunca são permitidas" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. STF permite funções atípicas se não prejudicarem função típica (ex: Judiciário faz regimento interno - função legislativa atípica). Pegadinha AOCP: 'violam separação' está errada. Aplicação: PGM pode exercer funções atípicas."
                },
                {
                    id: 5,
                    texto: "Art. 2º é cláusula pétrea (não pode ser abolido)?",
                    opcoes: [
                        { letra: "A", texto: "Não, pode ser modificado por emenda constitucional" },
                        { letra: "B", texto: "Sim, separação de poderes é cláusula pétrea (art. 60 §4º)" },
                        { letra: "C", texto: "Apenas parcialmente" },
                        { letra: "D", texto: "Depende de votação no Senado" },
                        { letra: "E", texto: "Pode ser abolido por decreto presidencial" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Separação de poderes é CLÁUSULA PÉTREA (art. 60 §4º II) - não pode ser abolida. Pegadinha: confundir com normas que podem ser emendadas. Aplicação: PGM é protegida por esta cláusula."
                },
                {
                    id: 6,
                    texto: "Qual poder tem função típica de EDITAR LEIS?",
                    opcoes: [
                        { letra: "A", texto: "Executivo" },
                        { letra: "B", texto: "Judiciário" },
                        { letra: "C", texto: "Legislativo" },
                        { letra: "D", texto: "Todos igualmente" },
                        { letra: "E", texto: "Nenhum deles" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Função típica do Legislativo é editar leis. Pegadinha: Executivo faz leis atípicas (decretos), mas não é função típica. Aplicação: PGM respeita leis do Legislativo municipal."
                },
                {
                    id: 7,
                    texto: "Qual poder tem função típica de EXECUTAR LEIS?",
                    opcoes: [
                        { letra: "A", texto: "Legislativo" },
                        { letra: "B", texto: "Judiciário" },
                        { letra: "C", texto: "Executivo" },
                        { letra: "D", texto: "Todos igualmente" },
                        { letra: "E", texto: "Nenhum deles" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Função típica do Executivo é executar leis. PGM é órgão do Executivo municipal. Pegadinha: confundir com funções atípicas. Aplicação: PGM executa políticas públicas conforme leis."
                },
                {
                    id: 8,
                    texto: "Harmonização entre Poderes significa que:",
                    opcoes: [
                        { letra: "A", texto: "Um poder não pode questionar decisão de outro" },
                        { letra: "B", texto: "Há sistema de freios e contrapesos entre os poderes" },
                        { letra: "C", texto: "Os poderes devem ter exatamente mesmas competências" },
                        { letra: "D", texto: "Executivo comanda Legislativo e Judiciário" },
                        { letra: "E", texto: "Não há qualquer controle entre poderes" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Harmonia = sistema de controle mútuo (checks and balances). Pegadinha: não significa submissão ou igualdade. Aplicação: PGM participa deste sistema."
                },
                {
                    id: 9,
                    texto: "Conforme Art. 2º, qual é o status da independência entre os Poderes?",
                    opcoes: [
                        { letra: "A", texto: "Recomendação facultativa" },
                        { letra: "B", texto: "Princípio obrigatório e fundamental" },
                        { letra: "C", texto: "Norma que pode ser ignorada" },
                        { letra: "D", texto: "Aplicável apenas ao Executivo" },
                        { letra: "E", texto: "Não tem força normativa" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Independência é PRINCÍPIO OBRIGATÓRIO (cláusula pétrea). Pegadinha: não é recomendação ou norma fraca. Aplicação: PGM é protegida por este princípio."
                },
                {
                    id: 10,
                    texto: "Qual exemplo melhor ilustra INDEPENDÊNCIA entre os Poderes?",
                    opcoes: [
                        { letra: "A", texto: "Legislativo aprova orçamento que Executivo executa" },
                        { letra: "B", texto: "Judiciário declara lei inconstitucional" },
                        { letra: "C", texto: "Executivo nomeia ministros do STF" },
                        { letra: "D", texto: "Legislativo aprova tratado internacional" },
                        { letra: "E", texto: "Todos os poderes têm mesmas competências" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Independência = autonomia para exercer função (Judiciário controla Legislativo). Pegadinha: confundir com harmonia. Aplicação: PGM é independente em suas funções."
                }
            ],

            flashcards: [
                { pergunta: "Qual é o mnemônico para os 3 poderes?", resposta: "L-E-J (Legislativo, Executivo, Judiciário)" },
                { pergunta: "Qual é a função típica de cada poder?", resposta: "L=editar leis, E=executar leis, J=resolver conflitos" },
                { pergunta: "Independência permite isolamento entre poderes?", resposta: "NÃO - há HARMONIA (freios e contrapesos)" },
                { pergunta: "Funções atípicas violam separação?", resposta: "NÃO - são permitidas se não prejudiquem função típica" },
                { pergunta: "Separação de poderes é cláusula pétrea?", resposta: "SIM - não pode ser abolida (art. 60 §4º II)" },
                { pergunta: "Qual poder controla constitucionalidade?", resposta: "JUDICIÁRIO (controle difuso e concentrado)" },
                { pergunta: "Harmonia significa o quê?", resposta: "Sistema de FREIOS E CONTRAPESOS entre poderes" },
                { pergunta: "PGM é órgão de qual poder?", resposta: "EXECUTIVO municipal" }
            ]
        },

        // Art. 3º (resumido por espaço)
        {
            number: "Art. 3º",
            title: "Objetivos Fundamentais da República",
            lawText: `Art. 3º Constituem objetivos fundamentais da República Federativa do Brasil:

I - construir uma sociedade livre, justa e solidária;
II - garantir o desenvolvimento nacional;
III - erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;
IV - promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.`,
            
            raioX: {
                caput: "4 objetivos fundamentais que guiam políticas públicas",
                incisos: [
                    "I - Sociedade livre, justa e solidária",
                    "II - Desenvolvimento nacional",
                    "III - Erradicar pobreza e reduzir desigualdades",
                    "IV - Bem de todos sem preconceitos/discriminação"
                ],
                paragrafo: "Natureza: PROGRAMÁTICOS (guiam políticas, não são direitos subjetivos diretos)"
            },

            tips: [
                "Mnemônico: S-D-E-B (Sociedade, Desenvolvimento, Erradicar, Bem)",
                "PROGRAMÁTICOS: guiam políticas públicas, mas não geram direito subjetivo imediato",
                "Art. 3º III: NÃO permite desigualdades permanentes - objetivo é reduzir",
                "Aplicabilidade: fundamentam ADO (Ação Direta de Omissão)",
                "Integração: Art. 3º com Art. 5º (igualdade) e Art. 6º (direitos sociais)"
            ],

            aocp: {
                padraoCobranca: "AOCP testa natureza programática, diferença com direitos subjetivos, e aplicação em políticas municipais",
                questoesTipicas: [
                    "Objetivos são programáticos ou direitos subjetivos?",
                    "Permitem desigualdades permanentes?",
                    "Fundamentam que tipo de ação?",
                    "Integram com quais artigos?"
                ],
                pegadinhas: [
                    "Programáticos NÃO geram direito subjetivo imediato",
                    "Objetivo é REDUZIR desigualdades, não permitir permanentes",
                    "Fundamentam ADO (omissão estatal)",
                    "Integram com direitos sociais (arts. 6º+)"
                ]
            },

            pgmsp: {
                aplicabilidade: "Art. 3º fundamenta políticas sociais da PGM-SP: moradia, educação, saúde (erradicar pobreza). Desenvolvimento local. Igualdade em licitações e contratações. PGM cobra cumprimento via ADO se município omitir.",
                exemplos: [
                    "Políticas de habitação (erradicar pobreza)",
                    "Programas de educação e saúde (bem de todos)",
                    "Igualdade em contratações públicas (sem discriminação)",
                    "ADO contra omissão municipal em políticas sociais"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "Qual é a natureza jurídica dos objetivos do Art. 3º?",
                    opcoes: [
                        { letra: "A", texto: "Direitos subjetivos imediatos" },
                        { letra: "B", texto: "Normas programáticas que guiam políticas públicas" },
                        { letra: "C", texto: "Recomendações facultativas" },
                        { letra: "D", texto: "Direitos apenas para brasileiros natos" },
                        { letra: "E", texto: "Normas sem aplicabilidade" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Objetivos são PROGRAMÁTICOS: guiam políticas, mas não geram direito subjetivo imediato. Pegadinha AOCP: confundir com direitos. Aplicação: fundamentam ADO (ação por omissão)."
                },
                {
                    id: 2,
                    texto: "O objetivo de 'erradicar a pobreza' (Art. 3º III) permite desigualdades permanentes?",
                    opcoes: [
                        { letra: "A", texto: "Sim, desde que sejam regionais" },
                        { letra: "B", texto: "Não, objetivo é reduzir desigualdades" },
                        { letra: "C", texto: "Apenas se aprovado pelo Senado" },
                        { letra: "D", texto: "Sim, se beneficiarem economia" },
                        { letra: "E", texto: "Depende de votação popular" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Objetivo é REDUZIR desigualdades (não permitir permanentes). Pegadinha AOCP: 'permite' está errada. Aplicação: fundamenta políticas de redistribuição."
                },
                {
                    id: 3,
                    texto: "Qual tipo de ação judicial é fundamentada pelos objetivos do Art. 3º quando há omissão estatal?",
                    opcoes: [
                        { letra: "A", texto: "ADI (Ação Direta de Inconstitucionalidade)" },
                        { letra: "B", texto: "ADO (Ação Direta de Omissão)" },
                        { letra: "C", texto: "ADPF (Arguição de Descumprimento de Preceito)" },
                        { letra: "D", texto: "Mandado de Segurança" },
                        { letra: "E", texto: "Nenhuma ação é cabível" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. ADO (art. 103 §2º) é fundamentada por objetivos programáticos quando há omissão. Pegadinha: confundir com ADI. Aplicação: PGM cobra cumprimento via ADO."
                },
                {
                    id: 4,
                    texto: "O objetivo de 'promover o bem de todos sem preconceitos' (Art. 3º IV) integra-se com qual artigo?",
                    opcoes: [
                        { letra: "A", texto: "Art. 1º (fundamentos)" },
                        { letra: "B", texto: "Art. 5º (igualdade e direitos fundamentais)" },
                        { letra: "C", texto: "Art. 10º (direitos políticos)" },
                        { letra: "D", texto: "Art. 30º (competências municipais)" },
                        { letra: "E", texto: "Nenhum outro artigo" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Art. 3º IV integra com Art. 5º (igualdade, direitos fundamentais). Pegadinha: Art. 1º é fundamento, não objetivo. Aplicação: fundamenta políticas de igualdade."
                },
                {
                    id: 5,
                    texto: "Qual alternativa melhor exemplifica aplicação do Art. 3º em política municipal?",
                    opcoes: [
                        { letra: "A", texto: "Proibição de trabalho" },
                        { letra: "B", texto: "Programa de habitação para população de baixa renda" },
                        { letra: "C", texto: "Eliminação de direitos políticos" },
                        { letra: "D", texto: "Restrição de acesso à educação" },
                        { letra: "E", texto: "Centralização de poder no Executivo" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Habitação para baixa renda exemplifica 'erradicar pobreza' e 'bem de todos'. Pegadinha: alternativas A, C, D, E violam objetivos. Aplicação: PGM implementa políticas sociais."
                },
                {
                    id: 6,
                    texto: "Objetivos programáticos geram direito subjetivo imediato?",
                    opcoes: [
                        { letra: "A", texto: "Sim, sempre" },
                        { letra: "B", texto: "Não, guiam políticas mas não geram direito imediato" },
                        { letra: "C", texto: "Apenas para brasileiros natos" },
                        { letra: "D", texto: "Apenas se aprovado pelo Senado" },
                        { letra: "E", texto: "Depende de votação popular" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Programáticos NÃO geram direito subjetivo imediato (STF). Pegadinha AOCP: 'sempre geram' está errada. Aplicação: fundamentam políticas, não direitos imediatos."
                },
                {
                    id: 7,
                    texto: "Art. 3º I menciona 'sociedade livre, justa e solidária'. Qual é o significado de 'solidária'?",
                    opcoes: [
                        { letra: "A", texto: "Ausência de Estado" },
                        { letra: "B", texto: "Responsabilidade coletiva e proteção social" },
                        { letra: "C", texto: "Eliminação de propriedade privada" },
                        { letra: "D", texto: "Igualdade absoluta de renda" },
                        { letra: "E", texto: "Nenhuma responsabilidade estatal" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Solidária = responsabilidade coletiva, proteção social. Pegadinha: não significa comunismo ou ausência de Estado. Aplicação: fundamenta políticas de bem-estar."
                },
                {
                    id: 8,
                    texto: "Qual objetivo do Art. 3º é mais frequentemente cobrado em questões AOCP?",
                    opcoes: [
                        { letra: "A", texto: "Construir sociedade livre" },
                        { letra: "B", texto: "Garantir desenvolvimento" },
                        { letra: "C", texto: "Erradicar pobreza e reduzir desigualdades" },
                        { letra: "D", texto: "Promover bem de todos" },
                        { letra: "E", texto: "Todos igualmente" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. AOCP frequentemente testa 'erradicar pobreza' (pegadinha: 'permite desigualdades'). Aplicação: tema importante para PGM."
                },
                {
                    id: 9,
                    texto: "Conforme jurisprudência STF, objetivos do Art. 3º podem fundamentar qual tipo de ação?",
                    opcoes: [
                        { letra: "A", texto: "Apenas ações individuais" },
                        { letra: "B", texto: "ADI contra leis" },
                        { letra: "C", texto: "ADO (ação por omissão estatal)" },
                        { letra: "D", texto: "Nenhuma ação" },
                        { letra: "E", texto: "Apenas mandado de segurança" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. ADO (art. 103 §2º) é fundamentada por objetivos quando há omissão. Pegadinha: confundir com ADI. Aplicação: PGM cobra via ADO."
                },
                {
                    id: 10,
                    texto: "Art. 3º IV proíbe discriminação por qual motivo?",
                    opcoes: [
                        { letra: "A", texto: "Apenas origem" },
                        { letra: "B", texto: "Apenas raça" },
                        { letra: "C", texto: "Origem, raça, sexo, cor, idade E outras formas" },
                        { letra: "D", texto: "Apenas sexo" },
                        { letra: "E", texto: "Nenhuma discriminação é proibida" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Art. 3º IV proíbe discriminação por origem, raça, sexo, cor, idade E 'quaisquer outras formas'. Pegadinha: não é apenas um motivo. Aplicação: fundamenta políticas de igualdade."
                }
            ],

            flashcards: [
                { pergunta: "Qual é o mnemônico para os 4 objetivos?", resposta: "S-D-E-B (Sociedade, Desenvolvimento, Erradicar, Bem)" },
                { pergunta: "Objetivos são programáticos ou direitos subjetivos?", resposta: "PROGRAMÁTICOS - guiam políticas, não geram direito imediato" },
                { pergunta: "Permitem desigualdades permanentes?", resposta: "NÃO - objetivo é REDUZIR desigualdades" },
                { pergunta: "Fundamentam que tipo de ação?", resposta: "ADO (Ação Direta de Omissão)" },
                { pergunta: "Integram com qual artigo?", resposta: "Art. 5º (igualdade e direitos fundamentais)" },
                { pergunta: "Art. 3º IV proíbe discriminação por quê?", resposta: "Origem, raça, sexo, cor, idade E outras formas" },
                { pergunta: "Solidária significa o quê?", resposta: "Responsabilidade coletiva e proteção social" },
                { pergunta: "Qual objetivo é mais cobrado?", resposta: "Erradicar pobreza e reduzir desigualdades (pegadinha: 'permite')" }
            ]
        },

        // Art. 4º (resumido por espaço)
        {
            number: "Art. 4º",
            title: "Princípios das Relações Internacionais",
            lawText: `Art. 4º A República Federativa do Brasil rege-se nas suas relações internacionais pelos seguintes princípios:

I - independência nacional;
II - prevalência dos direitos humanos;
III - autodeterminação dos povos;
IV - não-intervenção;
V - igualdade entre os Estados;
VI - defesa da paz;
VII - solução pacífica de controvérsias;
VIII - repúdio ao terrorismo e ao racismo;
IX - cooperação entre os povos para o progresso da humanidade;
X - concessão de asilo político.

Parágrafo único. A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações.`,
            
            raioX: {
                caput: "10 princípios que regem relações internacionais do Brasil",
                incisos: [
                    "I - Independência nacional",
                    "II - Prevalência dos direitos humanos",
                    "III - Autodeterminação dos povos",
                    "IV - Não-intervenção",
                    "V - Igualdade entre Estados",
                    "VI - Defesa da paz",
                    "VII - Solução pacífica de controvérsias",
                    "VIII - Repúdio ao terrorismo e racismo",
                    "IX - Cooperação para progresso",
                    "X - Asilo político"
                ],
                paragrafo: "Integração latino-americana (MERCOSUL, UNASUR, etc.)"
            },

            tips: [
                "Mnemônico: I-P-A-N-I-D-S-R-C-A (ordem dos 10 princípios)",
                "Independência: NÃO intervenção em assuntos internos de outros",
                "Direitos humanos: PREVALÊNCIA em acordos internacionais",
                "Não-intervenção: Vedada ação militar sem consentimento",
                "Integração latino-americana: Busca comunidade latino-americana"
            ],

            aocp: {
                padraoCobranca: "AOCP testa identificação dos 10 princípios, diferença entre independência/não-intervenção, e aplicação em acordos municipais",
                questoesTipicas: [
                    "Qual é o primeiro princípio?",
                    "Prevalência de direitos humanos em quê?",
                    "Não-intervenção permite ações militares?",
                    "Asilo político é permitido?"
                ],
                pegadinhas: [
                    "Não-intervenção VEDA ações militares sem consentimento",
                    "Direitos humanos PREVALECEM em acordos",
                    "Asilo político É permitido",
                    "Integração latino-americana é objetivo (parágrafo único)"
                ]
            },

            pgmsp: {
                aplicabilidade: "Art. 4º fundamenta acordos internacionais da PGM-SP: cooperação cultural com cidades estrangeiras (sem violar soberania). Respeito a direitos humanos em políticas. Repúdio a discriminação. Integração regional.",
                exemplos: [
                    "Acordos culturais com cidades estrangeiras (cooperação)",
                    "Respeito a direitos humanos em políticas municipais",
                    "Repúdio a racismo e discriminação (art. 4º VIII)",
                    "Integração regional (MERCOSUL, acordos estaduais)"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "Qual é o PRIMEIRO princípio das relações internacionais conforme Art. 4º?",
                    opcoes: [
                        { letra: "A", texto: "Prevalência dos direitos humanos" },
                        { letra: "B", texto: "Independência nacional" },
                        { letra: "C", texto: "Não-intervenção" },
                        { letra: "D", texto: "Igualdade entre Estados" },
                        { letra: "E", texto: "Cooperação entre povos" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Independência nacional é PRIMEIRO princípio (art. 4º I). Pegadinha: confundir com outros princípios. Aplicação: fundamenta soberania municipal."
                },
                {
                    id: 2,
                    texto: "O princípio de 'não-intervenção' (Art. 4º IV) permite ações militares em outros países sem consentimento?",
                    opcoes: [
                        { letra: "A", texto: "Sim, em defesa de direitos humanos" },
                        { letra: "B", texto: "Sim, se aprovado pelo Presidente" },
                        { letra: "C", texto: "Não, não-intervenção veda ações militares sem consentimento" },
                        { letra: "D", texto: "Apenas em casos de emergência" },
                        { letra: "E", texto: "Depende de votação no Congresso" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Não-intervenção VEDA ações militares sem consentimento. Pegadinha AOCP: 'permite em defesa de direitos' está errada. Aplicação: fundamenta respeito à soberania."
                },
                {
                    id: 3,
                    texto: "Qual princípio estabelece que direitos humanos PREVALECEM em acordos internacionais?",
                    opcoes: [
                        { letra: "A", texto: "Independência nacional" },
                        { letra: "B", texto: "Prevalência dos direitos humanos" },
                        { letra: "C", texto: "Igualdade entre Estados" },
                        { letra: "D", texto: "Solução pacífica de controvérsias" },
                        { letra: "E", texto: "Cooperação entre povos" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Art. 4º II estabelece PREVALÊNCIA de direitos humanos. Pegadinha: não é apenas recomendação. Aplicação: fundamenta políticas humanitárias."
                },
                {
                    id: 4,
                    texto: "O Brasil concede asilo político conforme qual princípio do Art. 4º?",
                    opcoes: [
                        { letra: "A", texto: "Independência nacional" },
                        { letra: "B", texto: "Não-intervenção" },
                        { letra: "C", texto: "Concessão de asilo político (X)" },
                        { letra: "D", texto: "Cooperação entre povos" },
                        { letra: "E", texto: "Nenhum princípio permite asilo" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Art. 4º X estabelece CONCESSÃO de asilo político. Pegadinha: confundir com outros princípios. Aplicação: fundamenta proteção a perseguidos políticos."
                },
                {
                    id: 5,
                    texto: "Qual princípio do Art. 4º veda discriminação por raça?",
                    opcoes: [
                        { letra: "A", texto: "Independência nacional" },
                        { letra: "B", texto: "Repúdio ao terrorismo e ao racismo" },
                        { letra: "C", texto: "Igualdade entre Estados" },
                        { letra: "D", texto: "Cooperação entre povos" },
                        { letra: "E", texto: "Nenhum princípio veda racismo" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Art. 4º VIII estabelece REPÚDIO ao racismo. Pegadinha: confundir com outros princípios. Aplicação: fundamenta políticas antidiscriminação."
                },
                {
                    id: 6,
                    texto: "O parágrafo único do Art. 4º menciona integração de qual região?",
                    opcoes: [
                        { letra: "A", texto: "Europa" },
                        { letra: "B", texto: "Ásia" },
                        { letra: "C", texto: "América Latina" },
                        { letra: "D", texto: "África" },
                        { letra: "E", texto: "Oceania" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Parágrafo único menciona integração econômica, política, social e cultural dos povos da AMÉRICA LATINA. Pegadinha: confundir com outras regiões. Aplicação: MERCOSUL, UNASUR."
                },
                {
                    id: 7,
                    texto: "Qual princípio do Art. 4º estabelece que controvérsias devem ser resolvidas pacificamente?",
                    opcoes: [
                        { letra: "A", texto: "Defesa da paz" },
                        { letra: "B", texto: "Solução pacífica de controvérsias" },
                        { letra: "C", texto: "Não-intervenção" },
                        { letra: "D", texto: "Igualdade entre Estados" },
                        { letra: "E", texto: "Independência nacional" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Art. 4º VII estabelece SOLUÇÃO PACÍFICA de controvérsias. Pegadinha: confundir com 'defesa da paz'. Aplicação: fundamenta diplomacia."
                },
                {
                    id: 8,
                    texto: "Qual princípio reconhece que todos os Estados têm mesma posição jurídica?",
                    opcoes: [
                        { letra: "A", texto: "Independência nacional" },
                        { letra: "B", texto: "Não-intervenção" },
                        { letra: "C", texto: "Igualdade entre os Estados" },
                        { letra: "D", texto: "Cooperação entre povos" },
                        { letra: "E", texto: "Defesa da paz" }
                    ],
                    gabarito: "C",
                    explicacao: "C está correta. Art. 4º V estabelece IGUALDADE entre os Estados. Pegadinha: não significa igualdade econômica. Aplicação: fundamenta soberania estatal."
                },
                {
                    id: 9,
                    texto: "Qual princípio do Art. 4º reconhece direito de povos decidirem seu próprio destino?",
                    opcoes: [
                        { letra: "A", texto: "Independência nacional" },
                        { letra: "B", texto: "Autodeterminação dos povos" },
                        { letra: "C", texto: "Não-intervenção" },
                        { letra: "D", texto: "Igualdade entre Estados" },
                        { letra: "E", texto: "Defesa da paz" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Art. 4º III estabelece AUTODETERMINAÇÃO dos povos. Pegadinha: confundir com independência nacional. Aplicação: fundamenta respeito a decisões locais."
                },
                {
                    id: 10,
                    texto: "Conforme Art. 4º, qual é a relação entre 'defesa da paz' e 'solução pacífica de controvérsias'?",
                    opcoes: [
                        { letra: "A", texto: "São princípios contraditórios" },
                        { letra: "B", texto: "Complementares: defesa da paz (objetivo) + solução pacífica (método)" },
                        { letra: "C", texto: "Não há relação" },
                        { letra: "D", texto: "Apenas um é importante" },
                        { letra: "E", texto: "Permitem conflitos armados" }
                    ],
                    gabarito: "B",
                    explicacao: "B está correta. Art. 4º VI (defesa da paz) + VII (solução pacífica) são COMPLEMENTARES: objetivo (paz) + método (pacífico). Pegadinha: não são contraditórios. Aplicação: fundamenta diplomacia."
                }
            ],

            flashcards: [
                { pergunta: "Quantos princípios tem Art. 4º?", resposta: "10 princípios + parágrafo único" },
                { pergunta: "Qual é o primeiro princípio?", resposta: "Independência nacional" },
                { pergunta: "Não-intervenção permite ações militares?", resposta: "NÃO - veda sem consentimento" },
                { pergunta: "Direitos humanos fazem o quê?", resposta: "PREVALECEM em acordos internacionais" },
                { pergunta: "Asilo político é permitido?", resposta: "SIM - Art. 4º X" },
                { pergunta: "Qual é a integração mencionada?", resposta: "América Latina (parágrafo único)" },
                { pergunta: "Art. 4º veda qual tipo de discriminação?", resposta: "Terrorismo E racismo (VIII)" },
                { pergunta: "Controvérsias devem ser resolvidas como?", resposta: "PACIFICAMENTE (Art. 4º VII)" }
            ]
        }
    ]
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mission1Content;
}
