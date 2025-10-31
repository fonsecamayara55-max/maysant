// ============================================
// CONTEÚDO DIDÁTICO - MISSÃO 1
// Fundamentos da República (Art. 1º a 4º)
// ============================================

const mission1Content = {
    mission: 1,
    title: "🏛️ Fundamentos da República",
    description: "Art. 1º a 4º - Princípios Fundamentais e Objetivos da República",
    difficulty: 2,
    totalArticles: 4,
    articles: [
        {
            number: "Art. 1º",
            title: "Fundamentos da República",
            lawText: `A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:

I - a soberania;
II - a cidadania;
III - a dignidade da pessoa humana;
IV - os valores sociais do trabalho e da livre iniciativa;
V - o pluralismo político.

Parágrafo único. Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição.`,
            
            raioX: {
                caput: "Define a forma de Estado (República Federativa) e a forma de governo (Democrático de Direito). Estabelece os 5 fundamentos sobre os quais a República se baseia.",
                estrutura: {
                    "Forma de Estado": "República Federativa - união indissolúvel de Estados, Municípios e DF",
                    "Forma de Governo": "Democrático de Direito - poder limitado pela lei",
                    "Poder": "Emana do povo, exercido por representantes ou diretamente"
                },
                incisos: [
                    "I - Soberania: poder supremo do Estado, não subordinado a nenhuma autoridade externa",
                    "II - Cidadania: vínculo político-jurídico entre pessoa e Estado",
                    "III - Dignidade da pessoa humana: valor supremo, fundamento de todos os direitos",
                    "IV - Valores sociais do trabalho e da livre iniciativa: economia de mercado com proteção social",
                    "V - Pluralismo político: diversidade de ideias, partidos e pensamentos"
                ]
            },

            tips: [
                "🎯 Mnemônico: **SCDVP** (Soberania, Cidadania, Dignidade, Valores, Pluralismo)",
                "💡 Diferença importante: **Fundamentos (Art. 1º)** = base filosófica da República vs **Objetivos (Art. 3º)** = metas a alcançar",
                "🔑 O parágrafo único é crucial: o poder vem do povo, não do Estado",
                "⚠️ Pegadinha AOCP: Não confunda 'República' (forma de Estado) com 'Democracia' (forma de governo)",
                "📌 Dignidade da pessoa humana é o fundamento mais importante - aparece em vários artigos"
            ],

            aocp: {
                padraoCobranca: "A AOCP frequentemente cobra a identificação dos fundamentos e sua aplicação em situações práticas.",
                questoesTipicas: [
                    "Qual fundamento se aplica quando...",
                    "Qual dos fundamentos NÃO está presente em...",
                    "O artigo 1º estabelece que...",
                    "Assinale a alternativa que melhor explica o fundamento de..."
                ],
                pegadinhas: [
                    "Confundir fundamentos com objetivos",
                    "Esquecer que a dignidade é fundamento, não apenas direito",
                    "Não reconhecer a soberania em contextos de direito internacional"
                ]
            },

            pgmsp: {
                aplicabilidade: "Na Procuradoria Geral do Município de São Paulo, os fundamentos do Art. 1º orientam todas as decisões jurídicas. A PGM-SP defende o Município com base nesses fundamentos.",
                exemplos: [
                    "Ação civil por direitos sociais: fundamentada na dignidade da pessoa humana",
                    "Defesa de políticas de trabalho: baseada nos valores sociais do trabalho",
                    "Ações de participação popular: apoiadas no pluralismo político",
                    "Defesa de competências municipais: fundamentada na soberania dos entes federados"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "De acordo com o artigo 1º da Constituição Federal, qual dos seguintes NÃO é fundamento da República Federativa do Brasil?",
                    opcoes: [
                        { letra: "A", texto: "Soberania" },
                        { letra: "B", texto: "Cidadania" },
                        { letra: "C", texto: "Democracia direta obrigatória" },
                        { letra: "D", texto: "Dignidade da pessoa humana" },
                        { letra: "E", texto: "Pluralismo político" }
                    ],
                    gabarito: "C",
                    explicacao: "Democracia direta obrigatória não é fundamento. O Brasil é democrático, mas não pratica democracia direta pura. O parágrafo único do Art. 1º menciona que o poder é exercido 'por meio de representantes eleitos ou diretamente', mas isso não significa democracia direta obrigatória. Os fundamentos são apenas os cinco incisos listados."
                },
                {
                    id: 2,
                    texto: "O parágrafo único do artigo 1º da CF/88 estabelece que:",
                    opcoes: [
                        { letra: "A", texto: "O poder emana do Estado e é exercido pelos representantes" },
                        { letra: "B", texto: "O poder emana do povo e é exercido por representantes eleitos ou diretamente" },
                        { letra: "C", texto: "O poder emana do povo, mas apenas representantes podem exercê-lo" },
                        { letra: "D", texto: "O poder emana do Congresso Nacional" },
                        { letra: "E", texto: "O poder emana da Constituição Federal" }
                    ],
                    gabarito: "B",
                    explicacao: "O parágrafo único é claro: 'Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição'. Isso reconhece tanto a democracia representativa quanto a democracia direta (referendo, plebiscito, iniciativa popular)."
                },
                {
                    id: 3,
                    texto: "Qual fundamento da República está relacionado à proteção dos direitos humanos e à valorização de cada pessoa?",
                    opcoes: [
                        { letra: "A", texto: "Soberania" },
                        { letra: "B", texto: "Cidadania" },
                        { letra: "C", texto: "Dignidade da pessoa humana" },
                        { letra: "D", texto: "Valores sociais do trabalho" },
                        { letra: "E", texto: "Pluralismo político" }
                    ],
                    gabarito: "C",
                    explicacao: "A dignidade da pessoa humana é o fundamento que protege os direitos humanos e valoriza cada pessoa como fim em si mesma, não como meio. Este fundamento é especialmente importante pois fundamenta todos os direitos fundamentais listados no Art. 5º."
                }
            ],

            flashcards: [
                {
                    pergunta: "O que é soberania?",
                    resposta: "Poder supremo do Estado, não subordinado a nenhuma autoridade externa. É a capacidade de autodeterminação do Estado."
                },
                {
                    pergunta: "O que é cidadania?",
                    resposta: "Vínculo político-jurídico entre pessoa e Estado. Confere direitos políticos (votar, ser votado) e deveres constitucionais."
                },
                {
                    pergunta: "Por que a dignidade da pessoa humana é considerada o fundamento mais importante?",
                    resposta: "Porque fundamenta todos os direitos fundamentais. Qualquer ação estatal que viole a dignidade é inconstitucional."
                },
                {
                    pergunta: "O que significa 'valores sociais do trabalho'?",
                    resposta: "Reconhecimento da importância do trabalho para a sociedade e proteção dos direitos dos trabalhadores."
                },
                {
                    pergunta: "O que é pluralismo político?",
                    resposta: "Reconhecimento da diversidade de ideias, partidos políticos e pensamentos. Proíbe a ditadura ideológica."
                }
            ]
        },

        {
            number: "Art. 2º",
            title: "Divisão de Poderes",
            lawText: `São Poderes da União, independentes e harmônicos entre si:

I - o Legislativo;
II - o Executivo;
III - o Judiciário.`,
            
            raioX: {
                caput: "Estabelece a separação de poderes em três: Legislativo, Executivo e Judiciário. São independentes (cada um tem autonomia) e harmônicos (devem cooperar).",
                estrutura: {
                    "Legislativo": "Cria as leis (Congresso Nacional: Câmara dos Deputados + Senado Federal)",
                    "Executivo": "Executa as leis (Presidente da República + Ministros)",
                    "Judiciário": "Aplica as leis em casos concretos (STF, STJ, Tribunais, Juízes)"
                },
                principios: [
                    "Independência: cada poder funciona autonomamente, sem subordinação",
                    "Harmonia: devem cooperar para o funcionamento do Estado",
                    "Freios e contrapesos: cada poder controla os outros (checks and balances)"
                ]
            },

            tips: [
                "🎯 Mnemônico: **LEJ** (Legislativo, Executivo, Judiciário)",
                "💡 Independência + Harmonia = cada poder é autônomo mas coopera com os outros",
                "🔑 Freios e contrapesos: exemplos práticos",
                "⚠️ Pegadinha: Confundir 'independência' com 'total isolamento' - eles devem cooperar!",
                "📌 Este artigo é base para entender competências e conflitos entre poderes"
            ],

            aocp: {
                padraoCobranca: "Questões sobre competências de cada poder, violação da separação de poderes, e sistema de freios e contrapesos.",
                questoesTipicas: [
                    "Qual poder tem competência para...",
                    "A atribuição de... viola qual princípio?",
                    "Qual é um exemplo de freio e contrapeso?",
                    "Qual poder pode..., conforme o Art. 2º?"
                ],
                pegadinhas: [
                    "Esquecer que os poderes devem ser harmônicos, não completamente isolados",
                    "Confundir competências entre os poderes",
                    "Não reconhecer exemplos de freios e contrapesos"
                ]
            },

            pgmsp: {
                aplicabilidade: "A PGM-SP atua como braço jurídico do Poder Executivo municipal, mas deve respeitar a independência e as competências dos outros poderes.",
                exemplos: [
                    "PGM-SP defende atos do Executivo municipal perante o Judiciário",
                    "Respeita decisões do Legislativo municipal (Câmara de Vereadores)",
                    "Cumpre decisões do Judiciário mesmo quando desfavoráveis ao Município",
                    "Participa de processos legislativos como consultora jurídica"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "De acordo com o artigo 2º da Constituição Federal, os Poderes da União são:",
                    opcoes: [
                        { letra: "A", texto: "Dependentes e harmônicos" },
                        { letra: "B", texto: "Independentes e conflitantes" },
                        { letra: "C", texto: "Independentes e harmônicos" },
                        { letra: "D", texto: "Subordinados ao Executivo" },
                        { letra: "E", texto: "Subordinados ao Legislativo" }
                    ],
                    gabarito: "C",
                    explicacao: "O artigo 2º é explícito: os Poderes são 'independentes e harmônicos entre si'. Independentes significa que cada um tem autonomia; harmônicos significa que devem cooperar para o funcionamento do Estado."
                },
                {
                    id: 2,
                    texto: "Qual das seguintes atribuições é do Poder Legislativo?",
                    opcoes: [
                        { letra: "A", texto: "Executar as leis" },
                        { letra: "B", texto: "Criar as leis" },
                        { letra: "C", texto: "Aplicar as leis em casos concretos" },
                        { letra: "D", texto: "Nomear os ministros do STF" },
                        { letra: "E", texto: "Administrar a máquina pública" }
                    ],
                    gabarito: "B",
                    explicacao: "O Poder Legislativo cria as leis. Executar as leis é função do Executivo, e aplicar em casos concretos é função do Judiciário. Nomear ministros do STF é competência do Executivo (Presidente), com aprovação do Senado (Legislativo)."
                }
            ],

            flashcards: [
                {
                    pergunta: "Quais são os três Poderes da União?",
                    resposta: "Legislativo, Executivo e Judiciário"
                },
                {
                    pergunta: "O que significa que os poderes são 'independentes'?",
                    resposta: "Cada poder tem autonomia para exercer suas funções, sem subordinação aos outros."
                },
                {
                    pergunta: "O que significa que os poderes são 'harmônicos'?",
                    resposta: "Os poderes devem cooperar e trabalhar juntos para o funcionamento do Estado."
                },
                {
                    pergunta: "Qual é o conceito de 'freios e contrapesos'?",
                    resposta: "Sistema onde cada poder controla os outros, evitando concentração de poder. Exemplo: Senado aprova ministros do STF."
                }
            ]
        },

        {
            number: "Art. 3º",
            title: "Objetivos Fundamentais",
            lawText: `Constituem objetivos fundamentais da República Federativa do Brasil:

I - construir uma sociedade livre, justa e solidária;
II - garantir o desenvolvimento nacional;
III - erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;
IV - promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.`,
            
            raioX: {
                caput: "Estabelece os objetivos que a República deve perseguir. Diferente dos fundamentos (que são a base), os objetivos são as metas.",
                incisos: [
                    "I - Sociedade livre, justa e solidária: liberdade individual, justiça social e cooperação",
                    "II - Desenvolvimento nacional: crescimento econômico e social do país",
                    "III - Erradicar pobreza e desigualdades: eliminar extrema pobreza e reduzir disparidades",
                    "IV - Bem de todos sem discriminação: igualdade material, não apenas formal"
                ],
                diferenca: "Fundamentos (Art. 1º) = base, valores. Objetivos (Art. 3º) = metas, o que fazer com esses valores."
            },

            tips: [
                "🎯 Mnemônico: **SDED** (Sociedade, Desenvolvimento, Erradicar, Discriminação)",
                "💡 Diferença crucial: Fundamentos = O QUE SOMOS. Objetivos = O QUE QUEREMOS SER",
                "🔑 Estes objetivos justificam políticas públicas e ações governamentais",
                "⚠️ Pegadinha: Confundir objetivos com direitos fundamentais (Art. 5º)",
                "📌 O Art. 3º é base para ações afirmativas e políticas de redução de desigualdades"
            ],

            aocp: {
                padraoCobranca: "Questões sobre políticas públicas, ações afirmativas e fundamentação constitucional de programas sociais.",
                questoesTipicas: [
                    "Qual objetivo fundamenta essa política?",
                    "O objetivo de... está previsto em qual inciso?",
                    "Assinale o objetivo que NÃO está no Art. 3º"
                ]
            },

            pgmsp: {
                aplicabilidade: "Estes objetivos justificam ações da PGM-SP em defesa de políticas sociais do Município. Fundamentam ações civis por direitos sociais.",
                exemplos: [
                    "Ações para erradicar pobreza (programas de assistência social)",
                    "Defesa de políticas de desenvolvimento municipal",
                    "Ações contra discriminação (igualdade racial, de gênero)",
                    "Defesa de direitos de grupos vulneráveis"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "Qual é a diferença entre os fundamentos (Art. 1º) e os objetivos (Art. 3º) da República?",
                    opcoes: [
                        { letra: "A", texto: "Não há diferença, são sinônimos" },
                        { letra: "B", texto: "Fundamentos são a base, objetivos são as metas a alcançar" },
                        { letra: "C", texto: "Fundamentos são internacionais, objetivos são nacionais" },
                        { letra: "D", texto: "Objetivos são mais importantes que fundamentos" },
                        { letra: "E", texto: "Fundamentos são direitos, objetivos são deveres" }
                    ],
                    gabarito: "B",
                    explicacao: "Fundamentos são os valores e princípios sobre os quais a República se baseia (o que somos). Objetivos são as metas que a República deve perseguir (o que queremos ser). Essa distinção é fundamental para entender a CF/88."
                }
            ],

            flashcards: [
                {
                    pergunta: "Qual é o primeiro objetivo fundamental da República?",
                    resposta: "Construir uma sociedade livre, justa e solidária"
                },
                {
                    pergunta: "O Art. 3º autoriza ações afirmativas?",
                    resposta: "Sim, através do objetivo de erradicar pobreza e reduzir desigualdades"
                }
            ]
        },

        {
            number: "Art. 4º",
            title: "Princípios das Relações Internacionais",
            lawText: `A República Federativa do Brasil rege-se nas suas relações internacionais pelos seguintes princípios:

I - independência nacional;
II - prevalência dos direitos humanos;
III - autodeterminação dos povos;
IV - não-intervenção;
V - igualdade entre os Estados;
VI - defesa da paz;
VII - solução pacífica dos conflitos;
VIII - repúdio ao terrorismo e ao racismo;
IX - cooperação entre os povos para o progresso da humanidade;
X - concessão de asilo político.

Parágrafo único. A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações.`,
            
            raioX: {
                caput: "Princípios que orientam a política externa brasileira. Limitam a soberania em prol da comunidade internacional.",
                incisos: [
                    "I - Independência nacional: não subordinação a potências externas",
                    "II - Prevalência dos direitos humanos: respeito aos direitos humanos nas relações internacionais",
                    "III - Autodeterminação dos povos: cada povo decide seu próprio destino",
                    "IV - Não-intervenção: não interferência nos assuntos internos de outros Estados",
                    "V - Igualdade entre os Estados: todos os Estados têm direitos iguais",
                    "VI - Defesa da paz: compromisso com a paz mundial",
                    "VII - Solução pacífica dos conflitos: resolução de disputas sem violência",
                    "VIII - Repúdio ao terrorismo e ao racismo: condenação de práticas discriminatórias",
                    "IX - Cooperação entre os povos: trabalho conjunto para progresso",
                    "X - Concessão de asilo político: proteção a perseguidos políticos"
                ]
            },

            tips: [
                "🎯 Mnemônico: **IPADNDSRCC** (Independência, Prevalência, Autodeterminação, Não-intervenção, Igualdade, Defesa, Solução, Repúdio, Cooperação, Concessão)",
                "💡 Estes princípios limitam a soberania brasileira em prol da comunidade internacional",
                "🔑 Frequentemente cobrados em questões sobre direito internacional",
                "⚠️ Pegadinha: Confundir 'não-intervenção' com 'isolacionismo'",
                "📌 O parágrafo único mostra compromisso com integração latino-americana"
            ],

            aocp: {
                padraoCobranca: "Questões sobre relações internacionais, tratados internacionais e direito internacional.",
                questoesTipicas: [
                    "Qual princípio fundamenta a posição do Brasil em...?",
                    "O Brasil pode intervir militarmente em outro país?",
                    "Qual princípio permite concessão de asilo político?"
                ]
            },

            pgmsp: {
                aplicabilidade: "Relevante quando a PGM-SP lida com questões envolvendo direito internacional, estrangeiros ou cooperação internacional.",
                exemplos: [
                    "Ações envolvendo estrangeiros e direitos humanos",
                    "Questões de asilo político",
                    "Cooperação com municípios de outros países"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "De acordo com o artigo 4º, qual é um princípio das relações internacionais do Brasil?",
                    opcoes: [
                        { letra: "A", texto: "Intervenção militar em outros países" },
                        { letra: "B", texto: "Supremacia brasileira sobre outros Estados" },
                        { letra: "C", texto: "Solução pacífica dos conflitos" },
                        { letra: "D", texto: "Isolacionismo total" },
                        { letra: "E", texto: "Subordinação a potências estrangeiras" }
                    ],
                    gabarito: "C",
                    explicacao: "O artigo 4º estabelece que a República rege-se pela 'solução pacífica dos conflitos' nas relações internacionais. Isso significa que o Brasil busca resolver disputas internacionais através de negociações, não de força."
                }
            ],

            flashcards: [
                {
                    pergunta: "Quantos princípios das relações internacionais estão no Art. 4º?",
                    resposta: "Dez princípios, do inciso I ao X"
                },
                {
                    pergunta: "O Brasil pode conceder asilo político?",
                    resposta: "Sim, conforme o inciso X do Art. 4º"
                }
            ]
        }
    ]
};

// Exportar para uso no script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mission1Content;
}
