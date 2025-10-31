// ============================================
// CONTEÚDO DIDÁTICO - MISSÃO 2
// Direitos e Garantias Fundamentais (Art. 5º a 17)
// ============================================

const mission2Content = {
    mission: 2,
    title: "📜 Direitos e Garantias Fundamentais",
    description: "Art. 5º a 17 - Direitos Individuais, Coletivos e Sociais",
    difficulty: 3,
    totalArticles: 13,
    articles: [
        {
            number: "Art. 5º",
            title: "Direitos e Deveres Individuais e Coletivos",
            lawText: `Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:

I - homens e mulheres são iguais em direitos e obrigações, nos termos desta Constituição;
II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;
III - ninguém será submetido a tortura nem a tratamento desumano ou degradante;
IV - é livre a manifestação do pensamento, sendo vedado o anonimato;
V - é assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano moral, material ou à imagem;
VI - é inviolável a liberdade de consciência e de crença, sendo assegurado o livre exercício dos cultos religiosos e garantida, na forma da lei, a proteção aos locais de culto e a suas liturgias;
VII - é assegurada, nos termos da lei, a liberdade de associação para fins lícitos, vedada a de caráter paramilitar;
VIII - ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa, fixada em lei;
IX - é livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença;
X - são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação;
[... continua com mais incisos ...]`,
            
            raioX: {
                caput: "O artigo mais importante da CF/88. Garante direitos fundamentais a todos (brasileiros e estrangeiros residentes). Estabelece 5 direitos invioláveis: vida, liberdade, igualdade, segurança e propriedade.",
                principios: [
                    "Igualdade formal: todos iguais perante a lei",
                    "Igualdade material: ações afirmativas para grupos vulneráveis",
                    "Legalidade: ninguém obrigado a fazer senão por lei",
                    "Dignidade: base de todos os direitos"
                ],
                incisos: [
                    "I - Igualdade de gênero",
                    "II - Princípio da legalidade",
                    "III - Proibição de tortura e tratamento desumano",
                    "IV - Liberdade de manifestação do pensamento",
                    "V - Direito de resposta",
                    "VI - Liberdade de consciência e crença religiosa",
                    "VII - Liberdade de associação",
                    "VIII - Proteção contra discriminação por crença",
                    "IX - Liberdade de expressão intelectual e artística",
                    "X - Inviolabilidade de intimidade, vida privada, honra e imagem"
                ]
            },

            tips: [
                "🎯 Este é o artigo MAIS cobrado em concursos jurídicos",
                "💡 Memorize os 10 primeiros incisos (I a X)",
                "🔑 Diferença: Liberdade de expressão (Art. 5º, IV) vs Liberdade de imprensa (Art. 5º, IX)",
                "⚠️ Pegadinha: Anonimato é vedado na manifestação do pensamento (Art. 5º, IV)",
                "📌 Art. 5º, § 1º: direitos e garantias são imediatamente aplicáveis"
            ],

            aocp: {
                padraoCobranca: "Questões sobre direitos fundamentais, liberdades públicas e garantias constitucionais são frequentíssimas na AOCP.",
                questoesTipicas: [
                    "Qual direito está sendo violado em...?",
                    "O inciso X do Art. 5º protege...",
                    "A liberdade de expressão permite...?",
                    "Qual é o limite da liberdade religiosa?"
                ],
                pegadinhas: [
                    "Confundir liberdade de expressão com direito ao anonimato",
                    "Esquecer que direitos fundamentais têm limites",
                    "Não reconhecer que estrangeiros residentes também têm direitos"
                ]
            },

            pgmsp: {
                aplicabilidade: "A PGM-SP defende direitos dos munícipes com base no Art. 5º em ações civis. É a base para ações de direitos humanos.",
                exemplos: [
                    "Ações contra discriminação (racial, sexual, religiosa)",
                    "Defesa de direitos de minorias",
                    "Ações por violação de direitos fundamentais",
                    "Proteção à liberdade de expressão e associação"
                ]
            },

            questoes: [
                {
                    id: 1,
                    texto: "De acordo com o artigo 5º da CF/88, qual dos seguintes NÃO é um direito inviolável?",
                    opcoes: [
                        { letra: "A", texto: "Vida" },
                        { letra: "B", texto: "Liberdade" },
                        { letra: "C", texto: "Igualdade" },
                        { letra: "D", texto: "Democracia direta" },
                        { letra: "E", texto: "Segurança" }
                    ],
                    gabarito: "D",
                    explicacao: "O artigo 5º estabelece como direitos invioláveis: vida, liberdade, igualdade, segurança e propriedade. Democracia direta não é um direito inviolável listado no artigo."
                },
                {
                    id: 2,
                    texto: "O inciso IV do artigo 5º garante liberdade de manifestação do pensamento. Qual é o limite estabelecido?",
                    opcoes: [
                        { letra: "A", texto: "Nenhum limite" },
                        { letra: "B", texto: "Vedado o anonimato" },
                        { letra: "C", texto: "Permitido apenas em manifestações públicas" },
                        { letra: "D", texto: "Permitido apenas em mídia impressa" },
                        { letra: "E", texto: "Limitado a maiores de idade" }
                    ],
                    gabarito: "B",
                    explicacao: "O inciso IV é claro: 'é livre a manifestação do pensamento, sendo vedado o anonimato'. Isso significa que a liberdade de expressão é garantida, mas não pode ser anônima."
                },
                {
                    id: 3,
                    texto: "Qual inciso do artigo 5º protege a intimidade, vida privada, honra e imagem?",
                    opcoes: [
                        { letra: "A", texto: "Inciso IV" },
                        { letra: "B", texto: "Inciso VI" },
                        { letra: "C", texto: "Inciso X" },
                        { letra: "D", texto: "Inciso VIII" },
                        { letra: "E", texto: "Inciso IX" }
                    ],
                    gabarito: "C",
                    explicacao: "O inciso X estabelece: 'são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação'."
                }
            ],

            flashcards: [
                {
                    pergunta: "Quais são os 5 direitos invioláveis do Art. 5º?",
                    resposta: "Vida, Liberdade, Igualdade, Segurança e Propriedade"
                },
                {
                    pergunta: "O anonimato é permitido na manifestação do pensamento?",
                    resposta: "Não, o anonimato é vedado (Art. 5º, IV)"
                },
                {
                    pergunta: "Estrangeiros têm direitos fundamentais no Brasil?",
                    resposta: "Sim, estrangeiros residentes no país têm direitos fundamentais (Art. 5º, caput)"
                },
                {
                    pergunta: "Qual é o princípio da legalidade?",
                    resposta: "Ninguém será obrigado a fazer ou deixar de fazer algo senão em virtude de lei (Art. 5º, II)"
                }
            ]
        },

        {
            number: "Art. 6º",
            title: "Direitos Sociais",
            lawText: `São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição.`,
            
            raioX: {
                caput: "Define os direitos sociais. Diferente dos direitos individuais (Art. 5º), os direitos sociais exigem ação positiva do Estado.",
                direitos: [
                    "Educação",
                    "Saúde",
                    "Alimentação",
                    "Trabalho",
                    "Moradia",
                    "Transporte",
                    "Lazer",
                    "Segurança",
                    "Previdência social",
                    "Proteção à maternidade e infância",
                    "Assistência aos desamparados"
                ]
            },

            tips: [
                "💡 Direitos sociais = direitos prestacionais (exigem ação do Estado)",
                "🔑 Diferença: Direitos individuais (Art. 5º) vs Direitos sociais (Art. 6º)",
                "⚠️ Pegadinha: Direitos sociais não são absolutos - dependem de políticas públicas"
            ],

            aocp: {
                padraoCobranca: "Questões sobre direitos sociais e políticas públicas"
            },

            pgmsp: {
                aplicabilidade: "A PGM-SP defende direitos sociais dos munícipes, especialmente saúde, educação e moradia.",
                exemplos: [
                    "Ações por direito à saúde",
                    "Defesa de políticas educacionais",
                    "Ações por direito à moradia"
                ]
            },

            questoes: [],
            flashcards: [
                {
                    pergunta: "Qual é a diferença entre direitos individuais e direitos sociais?",
                    resposta: "Direitos individuais são liberdades (não fazer algo), direitos sociais exigem ação positiva do Estado (fazer algo)"
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mission2Content;
}
