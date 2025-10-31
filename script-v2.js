// ============================================
// PLAYBOOK PGM-SP v2.0 - SCRIPT PRINCIPAL
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

// Dados dos Artigos
let articlesData = {
    mission1: [],
    mission2: [],
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
    loadMissionContent();
});

function initializeApp() {
    console.log('🎮 Playbook PGM-SP v2.0 inicializado!');
    updateDashboard();
}

function setupEventListeners() {
    // Navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            const view = this.getAttribute('data-view');
            if (view) {
                e.preventDefault();
                goToView(view);
                updateActiveNav(this);
            }
        });
    });

    // Tema
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Marca-texto
    document.getElementById('highlightBtn')?.addEventListener('click', toggleHighlightMode);
    document.getElementById('clearHighlightsBtn')?.addEventListener('click', clearHighlights);

    // Configurações
    document.getElementById('fontSize')?.addEventListener('change', changeFontSize);
    document.getElementById('readingMode')?.addEventListener('change', changeReadingMode);
}

// ============================================
// NAVEGAÇÃO
// ============================================

function goToView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
    }

    window.scrollTo(0, 0);
}

function updateActiveNav(element) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
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
// CARREGAMENTO DE CONTEÚDO
// ============================================

function loadMissionContent() {
    if (typeof mission1Content !== 'undefined') {
        articlesData.mission1 = mission1Content.articles;
    }
    if (typeof mission2Content !== 'undefined') {
        articlesData.mission2 = mission2Content.articles;
    }
}

function loadArticle(article) {
    if (!article) return;

    // Header
    document.getElementById('articleTitle').textContent = `${article.number} - ${article.title}`;

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
    let tipsHtml = '';
    article.tips.forEach(tip => {
        tipsHtml += `<p><strong>💡</strong> ${tip}</p>`;
    });
    document.getElementById('tipsContainer').innerHTML = tipsHtml;

    // Prática
    document.getElementById('practiceContainer').innerHTML = `
        <h4>Aplicabilidade na PGM-SP</h4>
        <p>${article.pgmsp.aplicabilidade}</p>
        <h4>Perfil AOCP</h4>
        <p>${article.aocp.padraoCobranca}</p>
    `;

    // Questões
    if (article.questoes && article.questoes.length > 0) {
        let questionsHtml = '';
        article.questoes.forEach((q, index) => {
            questionsHtml += `
                <div class="question-item">
                    <h4>Questão ${index + 1}</h4>
                    <p>${q.texto}</p>
                    <div class="options">
                        ${q.opcoes.map((opt, i) => `
                            <label>
                                <input type="radio" name="question-${index}" value="${opt.letra}">
                                ${opt.letra}) ${opt.texto}
                            </label>
                        `).join('')}
                    </div>
                    <button class="btn-secondary" onclick="checkAnswer(${index}, '${q.gabarito}', '${q.explicacao}')">Verificar</button>
                </div>
            `;
        });
        document.getElementById('questionsContainer').innerHTML = questionsHtml;
    }

    // Anotações
    const savedNotes = appState.userProgress.notes[article.number] || '';
    document.getElementById('notesArea').value = savedNotes;

    // Flashcards
    if (article.flashcards) {
        appState.currentFlashcardIndex = 0;
        updateFlashcard(article.flashcards[0]);
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    const targetPane = document.getElementById(`${tabName}-pane`);
    if (targetPane) {
        targetPane.classList.add('active');
    }

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
        showToast('Modo marca-texto ativado!', 'info');
    } else {
        btn.style.background = '';
        btn.style.color = '';
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

// ============================================
// ANOTAÇÕES
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
        showToast('Erro registrado!', 'success');
    }
}

// ============================================
// FLASHCARDS
// ============================================

function updateFlashcard(flashcard) {
    document.getElementById('flashcardQuestion').textContent = flashcard.pergunta;
}

function flipFlashcard() {
    const flashcard = document.getElementById('flashcard');
    const missionKey = `mission${appState.currentMission}`;
    const article = articlesData[missionKey][appState.currentArticle];
    
    if (article.flashcards) {
        const current = article.flashcards[appState.currentFlashcardIndex];
        const text = document.getElementById('flashcardQuestion').textContent;
        
        if (text === current.pergunta) {
            document.getElementById('flashcardQuestion').textContent = current.resposta;
        } else {
            document.getElementById('flashcardQuestion').textContent = current.pergunta;
        }
    }
}

function nextFlashcard() {
    const missionKey = `mission${appState.currentMission}`;
    const article = articlesData[missionKey][appState.currentArticle];
    
    if (article.flashcards) {
        appState.currentFlashcardIndex = (appState.currentFlashcardIndex + 1) % article.flashcards.length;
        updateFlashcard(article.flashcards[appState.currentFlashcardIndex]);
    }
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
        showToast('Primeiro artigo da missão!', 'warning');
    }
}

function nextArticle() {
    const missionKey = `mission${appState.currentMission}`;
    const articles = articlesData[missionKey];
    
    if (appState.currentArticle < articles.length - 1) {
        appState.currentArticle++;
        loadArticle(articles[appState.currentArticle]);
    } else {
        showToast('Último artigo da missão!', 'warning');
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
        showToast(`✅ ${article.number} completo! +50 pontos`, 'success');
    } else {
        showToast('Você já completou este artigo!', 'warning');
    }
}

// ============================================
// DASHBOARD
// ============================================

function updateDashboard() {
    document.getElementById('totalPoints').textContent = appState.userProgress.points;
    document.getElementById('articlesStudied').textContent = appState.userProgress.articlesStudied;
    document.getElementById('streakDays').textContent = appState.userProgress.streakDays;
    
    const totalArticles = 58;
    const progress = Math.round((appState.userProgress.articlesStudied / totalArticles) * 100);
    document.getElementById('progressPercent').textContent = progress + '%';
    document.getElementById('progressPercent2').textContent = progress + '%';
}

// ============================================
// TEMA
// ============================================

function toggleTheme() {
    appState.isDarkMode = !appState.isDarkMode;
    applyTheme();
    localStorage.setItem('darkMode', appState.isDarkMode);
}

function applyTheme() {
    if (appState.isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('themeToggle').textContent = '🌙';
    }
}

// ============================================
// CONFIGURAÇÕES
// ============================================

function changeFontSize() {
    const size = document.getElementById('fontSize').value;
    document.body.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    if (size !== 'normal') {
        document.body.classList.add(`font-${size}`);
    }
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
                showToast('Dados importados!', 'success');
            } catch (error) {
                showToast('Erro ao importar!', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetData() {
    if (confirm('Resetar todos os dados? Não pode ser desfeito!')) {
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
        showToast('Dados resetados!', 'success');
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
        toast.style.background = '#667eea';
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
        showToast('✅ Correto! ' + explanation, 'success');
        appState.userProgress.points += 10;
    } else {
        showToast('❌ Incorreto. ' + explanation, 'error');
    }
    
    saveUserData();
    updateDashboard();
}

console.log('✅ Playbook PGM-SP v2.0 carregado com sucesso! 🎮⚖️');
