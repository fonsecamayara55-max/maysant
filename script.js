// ============================================
// PLAYBOOK PGM-SP: LÓGICA INTERATIVA
// ============================================

// Estado Global
let appState = {
    currentMission: null,
    currentArticle: null,
    userProgress: {
        points: 0,
        missionsCompleted: 0,
        articlesStudied: 0,
        streakDays: 0,
        completedArticles: [],
        notes: {},
        errors: [],
        achievements: []
    },
    isDarkMode: localStorage.getItem('darkMode') === 'true',
    highlightMode: false,
    currentFlashcardIndex: 0
};

// Dados dos Artigos (Exemplo com alguns artigos principais)
const articlesData = {
    mission1: [
        {
            number: "Art. 1º",
            title: "Fundamentos da República",
            lawText: "A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:\nI - a soberania;\nII - a cidadania;\nIII - a dignidade da pessoa humana;\nIV - os valores sociais do trabalho e da livre iniciativa;\nV - o pluralismo político.",
            raioX: {
                caput: "Define a forma de Estado (República Federativa) e a forma de governo (Democrático de Direito).",
                incisos: [
                    "I - Soberania: poder supremo do Estado",
                    "II - Cidadania: vínculo político entre pessoa e Estado",
                    "III - Dignidade da pessoa humana: valor fundamental",
                    "IV - Valores sociais do trabalho e livre iniciativa",
                    "V - Pluralismo político: diversidade de ideias"
                ]
            },
            tips: [
                "Mnemônico: SCDVP (Soberania, Cidadania, Dignidade, Valores, Pluralismo)",
                "Este artigo é frequentemente cobrado em questões sobre princípios constitucionais",
                "Diferencie: República (forma de Estado) vs Democracia (forma de governo)"
            ],
            aocp: "A AOCP costuma cobrar a identificação dos fundamentos e sua aplicação prática. Questões típicas perguntam qual fundamento se aplica em determinada situação.",
            pgmsp: "Na PGM-SP, estes fundamentos orientam as decisões da Procuradoria em defesa do Município. A dignidade da pessoa humana é especialmente relevante em casos de direitos sociais.",
            questions: [
                {
                    id: 1,
                    text: "Qual dos seguintes NÃO é fundamento da República Federativa do Brasil?",
                    options: [
                        "A) Soberania",
                        "B) Cidadania",
                        "C) Democracia direta",
                        "D) Dignidade da pessoa humana",
                        "E) Pluralismo político"
                    ],
                    answer: "C",
                    explanation: "Democracia direta não é fundamento. O Brasil é democrático, mas não pratica democracia direta pura."
                }
            ]
        },
        {
            number: "Art. 2º",
            title: "Divisão de Poderes",
            lawText: "São Poderes da União, independentes e harmônicos entre si:\nI - o Legislativo;\nII - o Executivo;\nIII - o Judiciário.",
            raioX: {
                caput: "Estabelece a separação de poderes em três: Legislativo, Executivo e Judiciário.",
                incisos: [
                    "I - Legislativo: cria as leis",
                    "II - Executivo: executa as leis",
                    "III - Judiciário: aplica as leis em casos concretos"
                ]
            },
            tips: [
                "Mnemônico: LEJ (Legislativo, Executivo, Judiciário)",
                "Independentes: cada um tem autonomia",
                "Harmônicos: devem cooperar entre si (freios e contrapesos)"
            ],
            aocp: "Questões sobre competências de cada poder e sobre violação do princípio de separação de poderes.",
            pgmsp: "A PGM-SP atua como braço jurídico do Executivo municipal, mas deve respeitar os limites de cada poder.",
            questions: []
        },
        {
            number: "Art. 3º",
            title: "Objetivos Fundamentais",
            lawText: "Constituem objetivos fundamentais da República Federativa do Brasil:\nI - construir uma sociedade livre, justa e solidária;\nII - garantir o desenvolvimento nacional;\nIII - erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;\nIV - promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.",
            raioX: {
                caput: "Estabelece os objetivos que a República deve perseguir.",
                incisos: [
                    "I - Sociedade livre, justa e solidária",
                    "II - Desenvolvimento nacional",
                    "III - Erradicar pobreza e desigualdades",
                    "IV - Bem de todos sem discriminação"
                ]
            },
            tips: [
                "Mnemônico: SDED (Sociedade, Desenvolvimento, Erradicar, Discriminação)",
                "Estes objetivos fundamentam políticas públicas",
                "Diferença: Fundamentos (Art. 1º) vs Objetivos (Art. 3º)"
            ],
            aocp: "Questões sobre políticas públicas e sua fundamentação constitucional.",
            pgmsp: "Estes objetivos justificam ações da PGM-SP em defesa de políticas sociais do Município.",
            questions: []
        },
        {
            number: "Art. 4º",
            title: "Princípios das Relações Internacionais",
            lawText: "A República Federativa do Brasil rege-se nas suas relações internacionais pelos seguintes princípios:\nI - independência nacional;\nII - prevalência dos direitos humanos;\nIII - autodeterminação dos povos;\nIV - não-intervenção;\nV - igualdade entre os Estados;\nVI - defesa da paz;\nVII - solução pacífica dos conflitos;\nVIII - repúdio ao terrorismo e ao racismo;\nIX - cooperação entre os povos para o progresso da humanidade;\nX - concessão de asilo político.",
            raioX: {
                caput: "Princípios que orientam a política externa brasileira.",
                incisos: [
                    "I - Independência nacional",
                    "II - Prevalência dos direitos humanos",
                    "III - Autodeterminação dos povos",
                    "IV - Não-intervenção",
                    "V - Igualdade entre os Estados",
                    "VI - Defesa da paz",
                    "VII - Solução pacífica dos conflitos",
                    "VIII - Repúdio ao terrorismo e ao racismo",
                    "IX - Cooperação entre os povos",
                    "X - Concessão de asilo político"
                ]
            },
            tips: [
                "Mnemônico: IPADNDSRC (Independência, Prevalência, Autodeterminação, Não-intervenção, Igualdade, Defesa, Solução, Repúdio, Cooperação)",
                "Estes princípios limitam a soberania em prol da comunidade internacional",
                "Frequentemente cobrados em questões sobre direito internacional"
            ],
            aocp: "Questões sobre relações internacionais e tratados internacionais.",
            pgmsp: "Relevante quando a PGM-SP lida com questões envolvendo direito internacional ou estrangeiros.",
            questions: []
        }
    ],
    mission2: [
        {
            number: "Art. 5º",
            title: "Direitos e Deveres Individuais e Coletivos",
            lawText: "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:\nI - homens e mulheres são iguais em direitos e obrigações, nos termos desta Constituição;\nII - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;\n[... muitos incisos ...]",
            raioX: {
                caput: "Artigo mais importante da CF/88. Garante direitos fundamentais a todos.",
                incisos: [
                    "I - Igualdade de gênero",
                    "II - Princípio da legalidade",
                    "III - Liberdade de consciência",
                    "IV - Liberdade de expressão",
                    "V - Direito de resposta",
                    "VI - Liberdade de consciência religiosa",
                    "VII - Liberdade de crença",
                    "VIII - Liberdade de expressão da atividade intelectual",
                    "IX - Liberdade de expressão da atividade profissional",
                    "X - Inviolabilidade da intimidade, vida privada, honra e imagem"
                ]
            },
            tips: [
                "Art. 5º é o mais cobrado em provas de concursos jurídicos",
                "Memorize os principais incisos: I, II, III, IV, V, VI, VII, VIII, IX, X",
                "Igualdade formal vs igualdade material"
            ],
            aocp: "Questões sobre direitos fundamentais, liberdades públicas e garantias constitucionais são frequentíssimas.",
            pgmsp: "A PGM-SP defende direitos dos munícipes com base no Art. 5º em ações civis.",
            questions: []
        }
    ],
    mission3: [],
    mission4: [],
    mission5: [],
    mission6: [],
    mission7: []
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadUserData();
    applyTheme();
});

function initializeApp() {
    console.log('Inicializando Playbook PGM-SP...');
    updateDashboard();
}

function setupEventListeners() {
    // Navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            goToView(view);
        });
    });

    // Tema
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);

    // Abas de conteúdo
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Modo marca-texto
    document.getElementById('highlightBtn')?.addEventListener('click', toggleHighlightMode);
    document.getElementById('clearHighlightsBtn')?.addEventListener('click', clearHighlights);

    // Configurações
    document.getElementById('fontSize')?.addEventListener('change', changeFontSize);
    document.getElementById('readingMode')?.addEventListener('change', changeReadingMode);
}

// ============================================
// NAVEGAÇÃO E VIEWS
// ============================================

function goToView(viewName) {
    // Ocultar todas as views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Mostrar a view selecionada
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Atualizar botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-view') === viewName) {
            btn.classList.add('active');
        }
    });

    // Scroll para o topo
    window.scrollTo(0, 0);
}

function selectMission(missionNumber) {
    appState.currentMission = missionNumber;
    const missionKey = `mission${missionNumber}`;
    
    if (articlesData[missionKey] && articlesData[missionKey].length > 0) {
        appState.currentArticle = 0;
        loadArticle(articlesData[missionKey][0]);
        goToView('study');
    } else {
        showToast('Missão em desenvolvimento!', 'warning');
    }
}

// ============================================
// ESTUDO E CONTEÚDO
// ============================================

function loadArticle(article) {
    if (!article) return;

    // Atualizar header
    document.getElementById('articleTitle').textContent = `${article.number} - ${article.title}`;
    document.getElementById('articleNumber').textContent = article.number;

    // Lei Seca
    document.getElementById('lawText').innerHTML = `<p>${article.lawText.replace(/\n/g, '</p><p>')}</p>`;

    // Raio-X
    let raioXHtml = `<h4>${article.raioX.caput}</h4>`;
    if (article.raioX.incisos) {
        raioXHtml += '<ul>';
        article.raioX.incisos.forEach(inciso => {
            raioXHtml += `<li>${inciso}</li>`;
        });
        raioXHtml += '</ul>';
    }
    document.getElementById('raioX').innerHTML = raioXHtml;

    // Dicas
    let tipsHtml = '<div class="tips-list">';
    article.tips.forEach(tip => {
        tipsHtml += `<div class="tip-item"><strong>💡</strong> ${tip}</div>`;
    });
    tipsHtml += '</div>';
    document.getElementById('tipsContainer').innerHTML = tipsHtml;

    // Prática PGM-SP
    document.getElementById('practiceContainer').innerHTML = `
        <div class="practice-item">
            <h4>Aplicabilidade na PGM-SP</h4>
            <p>${article.pgmsp}</p>
        </div>
        <div class="practice-item">
            <h4>Perfil AOCP</h4>
            <p>${article.aocp}</p>
        </div>
    `;

    // Questões
    if (article.questions && article.questions.length > 0) {
        let questionsHtml = '';
        article.questions.forEach((q, index) => {
            questionsHtml += `
                <div class="question-item">
                    <h4>Questão ${index + 1}</h4>
                    <p>${q.text}</p>
                    <div class="options">
                        ${q.options.map((opt, i) => `
                            <label class="option">
                                <input type="radio" name="question-${index}" value="${opt[0]}">
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                    <button class="btn-secondary" onclick="checkAnswer(${index}, '${q.answer}', '${q.explanation}')">Verificar</button>
                </div>
            `;
        });
        document.getElementById('questionsContainer').innerHTML = questionsHtml;
    }

    // Carregar anotações salvas
    const savedNotes = appState.userProgress.notes[article.number] || '';
    document.getElementById('notesArea').value = savedNotes;

    // Resetar flashcard
    appState.currentFlashcardIndex = 0;
    updateFlashcard(article);
}

function switchTab(tabName) {
    // Ocultar todas as abas
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    // Mostrar a aba selecionada
    const targetPane = document.getElementById(`${tabName}-pane`);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    // Atualizar botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        }
    });
}

// ============================================
// MARCA-TEXTO
// ============================================

function toggleHighlightMode() {
    appState.highlightMode = !appState.highlightMode;
    const btn = document.getElementById('highlightBtn');
    
    if (appState.highlightMode) {
        btn.style.background = '#f39c12';
        btn.style.color = 'white';
        document.getElementById('lawText').style.cursor = 'text';
        showToast('Modo marca-texto ativado! Selecione o texto para destacar.', 'info');
    } else {
        btn.style.background = '';
        btn.style.color = '';
        document.getElementById('lawText').style.cursor = 'auto';
        showToast('Modo marca-texto desativado.', 'info');
    }
}

function clearHighlights() {
    const lawText = document.getElementById('lawText');
    lawText.querySelectorAll('.highlight').forEach(el => {
        const parent = el.parentNode;
        while (el.firstChild) {
            parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
    });
    showToast('Destaques removidos!', 'success');
}

// Implementar seleção de texto para highlight
document.addEventListener('mouseup', function() {
    if (!appState.highlightMode) return;

    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const span = document.createElement('span');
        span.className = 'highlight';
        range.surroundContents(span);
        selection.removeAllRanges();
    }
});

// ============================================
// ANOTAÇÕES E CADERNO DE ERROS
// ============================================

function saveNotes() {
    const article = appState.currentArticle;
    const notes = document.getElementById('notesArea').value;
    
    if (article !== null) {
        const missionKey = `mission${appState.currentMission}`;
        const articleNumber = articlesData[missionKey][article].number;
        appState.userProgress.notes[articleNumber] = notes;
        
        saveUserData();
        showToast('Anotações salvas!', 'success');
    }
}

function saveError() {
    const errorText = document.getElementById('errorNotes').value;
    
    if (errorText.trim()) {
        appState.userProgress.errors.push({
            date: new Date().toLocaleDateString('pt-BR'),
            text: errorText,
            article: appState.currentArticle
        });
        
        document.getElementById('errorNotes').value = '';
        saveUserData();
        showToast('Erro registrado no caderno!', 'success');
    }
}

// ============================================
// FLASHCARDS
// ============================================

function updateFlashcard(article) {
    const flashcardQuestion = `${article.number} - ${article.title}`;
    document.getElementById('flashcardQuestion').textContent = flashcardQuestion;
}

function flipFlashcard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

function nextFlashcard() {
    const missionKey = `mission${appState.currentMission}`;
    const articles = articlesData[missionKey];
    
    appState.currentFlashcardIndex = (appState.currentFlashcardIndex + 1) % articles.length;
    updateFlashcard(articles[appState.currentFlashcardIndex]);
    
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
}

// ============================================
// NAVEGAÇÃO DE ARTIGOS
// ============================================

function previousArticle() {
    const missionKey = `mission${appState.currentMission}`;
    const articles = articlesData[missionKey];
    
    if (appState.currentArticle > 0) {
        appState.currentArticle--;
        loadArticle(articles[appState.currentArticle]);
    } else {
        showToast('Este é o primeiro artigo da missão!', 'warning');
    }
}

function nextArticle() {
    const missionKey = `mission${appState.currentMission}`;
    const articles = articlesData[missionKey];
    
    if (appState.currentArticle < articles.length - 1) {
        appState.currentArticle++;
        loadArticle(articles[appState.currentArticle]);
    } else {
        showToast('Este é o último artigo da missão!', 'warning');
    }
}

function completeArticle() {
    const missionKey = `mission${appState.currentMission}`;
    const article = articlesData[missionKey][appState.currentArticle];
    
    if (!appState.userProgress.completedArticles.includes(article.number)) {
        appState.userProgress.completedArticles.push(article.number);
        appState.userProgress.articlesStudied++;
        appState.userProgress.points += 50;
        
        saveUserData();
        updateDashboard();
        showToast(`✅ Artigo ${article.number} marcado como completo! +50 pontos`, 'success');
    } else {
        showToast('Você já completou este artigo!', 'warning');
    }
}

// ============================================
// DASHBOARD
// ============================================

function updateDashboard() {
    document.getElementById('totalPoints').textContent = appState.userProgress.points;
    document.getElementById('missionsCompleted').textContent = appState.userProgress.missionsCompleted;
    document.getElementById('articlesStudied').textContent = appState.userProgress.articlesStudied;
    document.getElementById('streakDays').textContent = appState.userProgress.streakDays;
    document.getElementById('errorCount').textContent = `Você tem ${appState.userProgress.errors.length} erros registrados`;
}

// ============================================
// TEMA ESCURO
// ============================================

function toggleTheme() {
    appState.isDarkMode = !appState.isDarkMode;
    applyTheme();
    localStorage.setItem('darkMode', appState.isDarkMode);
}

function applyTheme() {
    const themeBtn = document.getElementById('themeBtn');
    
    if (appState.isDarkMode) {
        document.body.classList.add('dark-mode');
        themeBtn.textContent = '☀️ Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        themeBtn.textContent = '🌙 Modo Noturno';
    }
}

// ============================================
// CONFIGURAÇÕES
// ============================================

function changeFontSize() {
    const size = document.getElementById('fontSize').value;
    document.body.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    document.body.classList.add(`font-${size}`);
}

function changeReadingMode() {
    const mode = document.getElementById('readingMode').value;
    document.body.classList.remove('dyslexia-mode', 'high-contrast-mode');
    if (mode !== 'normal') {
        document.body.classList.add(`${mode}-mode`);
    }
}

// ============================================
// DADOS
// ============================================

function saveUserData() {
    localStorage.setItem('playbookUserData', JSON.stringify(appState.userProgress));
}

function loadUserData() {
    const saved = localStorage.getItem('playbookUserData');
    if (saved) {
        appState.userProgress = JSON.parse(saved);
        updateDashboard();
    }
}

function exportData() {
    const dataStr = JSON.stringify(appState.userProgress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `playbook-dados-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    showToast('Dados exportados!', 'success');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                appState.userProgress = JSON.parse(event.target.result);
                saveUserData();
                updateDashboard();
                showToast('Dados importados com sucesso!', 'success');
            } catch (error) {
                showToast('Erro ao importar dados!', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetData() {
    if (confirm('Tem certeza que deseja resetar todos os dados? Esta ação não pode ser desfeita!')) {
        appState.userProgress = {
            points: 0,
            missionsCompleted: 0,
            articlesStudied: 0,
            streakDays: 0,
            completedArticles: [],
            notes: {},
            errors: [],
            achievements: []
        };
        localStorage.removeItem('playbookUserData');
        updateDashboard();
        showToast('Todos os dados foram resetados!', 'success');
    }
}

// ============================================
// UTILITÁRIOS
// ============================================

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');
    
    if (type === 'success') {
        toast.style.background = '#27ae60';
    } else if (type === 'warning') {
        toast.style.background = '#f39c12';
    } else if (type === 'error') {
        toast.style.background = '#e74c3c';
    } else {
        toast.style.background = '#3498db';
    }
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function checkAnswer(questionIndex, correctAnswer, explanation) {
    const selected = document.querySelector(`input[name="question-${questionIndex}"]:checked`);
    
    if (!selected) {
        showToast('Selecione uma opção!', 'warning');
        return;
    }
    
    if (selected.value === correctAnswer) {
        showToast('✅ Resposta correta! ' + explanation, 'success');
        appState.userProgress.points += 10;
    } else {
        showToast('❌ Resposta incorreta. ' + explanation, 'error');
        saveError();
    }
    
    saveUserData();
    updateDashboard();
}

function closeModal() {
    document.getElementById('articleModal').classList.remove('active');
}

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

console.log('Playbook PGM-SP carregado com sucesso! 🎮⚖️');
