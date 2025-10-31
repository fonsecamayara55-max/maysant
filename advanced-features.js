// ============================================
// FUNCIONALIDADES AVANÇADAS DO PLAYBOOK
// ============================================

// ============================================
// 1. SISTEMA DE GAMIFICAÇÃO AVANÇADO
// ============================================

class GamificationSystem {
    constructor() {
        this.achievements = {
            'first-step': {
                name: 'Primeiro Passo',
                icon: '🌟',
                description: 'Estude seu primeiro artigo',
                condition: () => appState.userProgress.articlesStudied >= 1
            },
            'week-fire': {
                name: 'Semana de Fogo',
                icon: '🔥',
                description: 'Estude 7 dias seguidos',
                condition: () => appState.userProgress.streakDays >= 7
            },
            'specialist': {
                name: 'Especialista',
                icon: '🎓',
                description: 'Complete 3 missões',
                condition: () => appState.userProgress.missionsCompleted >= 3
            },
            'master': {
                name: 'Mestre da CF',
                icon: '👑',
                description: 'Complete todas as 7 missões',
                condition: () => appState.userProgress.missionsCompleted >= 7
            },
            'hundred-points': {
                name: 'Centésimo',
                icon: '💯',
                description: 'Acumule 100 pontos',
                condition: () => appState.userProgress.points >= 100
            },
            'error-master': {
                name: 'Aprendiz de Erros',
                icon: '📔',
                description: 'Registre 10 erros e revise',
                condition: () => appState.userProgress.errors.length >= 10
            }
        };
    }

    checkAchievements() {
        Object.keys(this.achievements).forEach(key => {
            const achievement = this.achievements[key];
            if (achievement.condition() && !appState.userProgress.achievements.includes(key)) {
                appState.userProgress.achievements.push(key);
                this.unlockAchievement(key);
            }
        });
    }

    unlockAchievement(key) {
        const achievement = this.achievements[key];
        showToast(`🏆 Conquista Desbloqueada: ${achievement.name}!`, 'success');
        saveUserData();
    }

    getAchievementProgress() {
        return {
            total: Object.keys(this.achievements).length,
            unlocked: appState.userProgress.achievements.length,
            percentage: Math.round((appState.userProgress.achievements.length / Object.keys(this.achievements).length) * 100)
        };
    }
}

const gamification = new GamificationSystem();

// ============================================
// 2. SISTEMA DE MARCA-TEXTO AVANÇADO
// ============================================

class HighlightSystem {
    constructor() {
        this.highlights = [];
        this.highlightColor = '#ffeb3b';
        this.isActive = false;
    }

    activate() {
        this.isActive = true;
        document.getElementById('lawText').addEventListener('mouseup', () => this.handleSelection());
        showToast('Modo marca-texto ativado! Selecione o texto para destacar.', 'info');
    }

    deactivate() {
        this.isActive = false;
        document.getElementById('lawText').removeEventListener('mouseup', () => this.handleSelection());
        showToast('Modo marca-texto desativado.', 'info');
    }

    handleSelection() {
        if (!this.isActive) return;

        const selection = window.getSelection();
        if (selection.toString().length > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.className = 'highlight';
            span.style.backgroundColor = this.highlightColor;
            span.style.cursor = 'pointer';

            try {
                range.surroundContents(span);
                this.highlights.push({
                    text: selection.toString(),
                    timestamp: new Date(),
                    color: this.highlightColor
                });
                selection.removeAllRanges();
            } catch (e) {
                console.log('Erro ao destacar texto complexo');
            }
        }
    }

    changeColor(color) {
        this.highlightColor = color;
    }

    clearAll() {
        const lawText = document.getElementById('lawText');
        lawText.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            while (el.firstChild) {
                parent.insertBefore(el.firstChild, el);
            }
            parent.removeChild(el);
        });
        this.highlights = [];
        showToast('Todos os destaques foram removidos!', 'success');
    }

    getHighlights() {
        return this.highlights;
    }

    exportHighlights() {
        const article = appState.currentArticle;
        if (article !== null) {
            const missionKey = `mission${appState.currentMission}`;
            const articleNumber = articlesData[missionKey][article].number;
            
            const highlightsData = {
                article: articleNumber,
                date: new Date().toLocaleDateString('pt-BR'),
                highlights: this.highlights
            };

            return JSON.stringify(highlightsData, null, 2);
        }
    }
}

const highlightSystem = new HighlightSystem();

// ============================================
// 3. SISTEMA DE ANOTAÇÕES AVANÇADO
// ============================================

class NotesSystem {
    constructor() {
        this.notes = {};
        this.tags = [];
    }

    saveNote(articleNumber, content, tags = []) {
        this.notes[articleNumber] = {
            content: content,
            tags: tags,
            timestamp: new Date(),
            lastModified: new Date()
        };
        appState.userProgress.notes[articleNumber] = content;
        saveUserData();
    }

    getNote(articleNumber) {
        return this.notes[articleNumber] || null;
    }

    deleteNote(articleNumber) {
        delete this.notes[articleNumber];
        delete appState.userProgress.notes[articleNumber];
        saveUserData();
    }

    searchNotes(keyword) {
        const results = [];
        Object.keys(this.notes).forEach(articleNumber => {
            if (this.notes[articleNumber].content.toLowerCase().includes(keyword.toLowerCase())) {
                results.push({
                    article: articleNumber,
                    note: this.notes[articleNumber]
                });
            }
        });
        return results;
    }

    exportNotes() {
        const notesData = {
            date: new Date().toLocaleDateString('pt-BR'),
            totalNotes: Object.keys(this.notes).length,
            notes: this.notes
        };
        return JSON.stringify(notesData, null, 2);
    }
}

const notesSystem = new NotesSystem();

// ============================================
// 4. SISTEMA DE CADERNO DE ERROS AVANÇADO
// ============================================

class ErrorNotebook {
    constructor() {
        this.errors = [];
    }

    addError(errorText, articleNumber, questionId = null) {
        const error = {
            id: this.errors.length + 1,
            text: errorText,
            article: articleNumber,
            question: questionId,
            date: new Date(),
            reviewed: false,
            reviewCount: 0
        };
        this.errors.push(error);
        appState.userProgress.errors.push(error);
        saveUserData();
        return error.id;
    }

    reviewError(errorId) {
        const error = this.errors.find(e => e.id === errorId);
        if (error) {
            error.reviewed = true;
            error.reviewCount++;
            error.lastReviewDate = new Date();
        }
        saveUserData();
    }

    getUnreviewedErrors() {
        return this.errors.filter(e => !e.reviewed);
    }

    getErrorsByArticle(articleNumber) {
        return this.errors.filter(e => e.article === articleNumber);
    }

    getFrequentErrors() {
        const frequency = {};
        this.errors.forEach(error => {
            frequency[error.article] = (frequency[error.article] || 0) + 1;
        });
        return Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    }

    exportErrors() {
        const errorsData = {
            date: new Date().toLocaleDateString('pt-BR'),
            totalErrors: this.errors.length,
            unreviewedErrors: this.getUnreviewedErrors().length,
            errors: this.errors
        };
        return JSON.stringify(errorsData, null, 2);
    }
}

const errorNotebook = new ErrorNotebook();

// ============================================
// 5. SISTEMA DE FLASHCARDS AVANÇADO
// ============================================

class FlashcardSystem {
    constructor() {
        this.flashcards = [];
        this.currentIndex = 0;
        this.reviewStats = {
            totalReviewed: 0,
            correctCount: 0,
            incorrectCount: 0
        };
    }

    loadFlashcards(articleFlashcards) {
        this.flashcards = articleFlashcards || [];
        this.currentIndex = 0;
    }

    getCurrentFlashcard() {
        return this.flashcards[this.currentIndex] || null;
    }

    nextFlashcard() {
        this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
        return this.getCurrentFlashcard();
    }

    previousFlashcard() {
        this.currentIndex = (this.currentIndex - 1 + this.flashcards.length) % this.flashcards.length;
        return this.getCurrentFlashcard();
    }

    markCorrect() {
        this.reviewStats.correctCount++;
        this.reviewStats.totalReviewed++;
        appState.userProgress.points += 5;
        saveUserData();
    }

    markIncorrect() {
        this.reviewStats.incorrectCount++;
        this.reviewStats.totalReviewed++;
        saveUserData();
    }

    getAccuracy() {
        if (this.reviewStats.totalReviewed === 0) return 0;
        return Math.round((this.reviewStats.correctCount / this.reviewStats.totalReviewed) * 100);
    }

    shuffleFlashcards() {
        for (let i = this.flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
        }
    }
}

const flashcardSystem = new FlashcardSystem();

// ============================================
// 6. SISTEMA DE PROGRESSO AVANÇADO
// ============================================

class ProgressTracker {
    constructor() {
        this.sessionStart = new Date();
        this.sessionTime = 0;
    }

    calculateProgress() {
        const totalArticles = 58; // Total de artigos no playbook
        const studied = appState.userProgress.articlesStudied;
        return Math.round((studied / totalArticles) * 100);
    }

    getMissionProgress(missionNumber) {
        const missionKey = `mission${missionNumber}`;
        const articles = articlesData[missionKey] || [];
        const completed = articles.filter(a => 
            appState.userProgress.completedArticles.includes(a.number)
        ).length;
        return Math.round((completed / articles.length) * 100);
    }

    getSessionTime() {
        const now = new Date();
        return Math.round((now - this.sessionStart) / 60000); // em minutos
    }

    getStudyStreak() {
        // Implementar lógica de dias consecutivos
        return appState.userProgress.streakDays;
    }

    updateStreak() {
        const lastStudyDate = localStorage.getItem('lastStudyDate');
        const today = new Date().toDateString();

        if (lastStudyDate === today) {
            // Mesmo dia, não incrementa
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastStudyDate === yesterday.toDateString()) {
            // Dia consecutivo
            appState.userProgress.streakDays++;
        } else {
            // Quebrou a sequência
            appState.userProgress.streakDays = 1;
        }

        localStorage.setItem('lastStudyDate', today);
        saveUserData();
    }
}

const progressTracker = new ProgressTracker();

// ============================================
// 7. SISTEMA DE DICAS INTELIGENTES
// ============================================

class SmartTips {
    constructor() {
        this.tips = [
            "Use a técnica de Feynman: explique o artigo em voz alta como se estivesse ensinando alguém.",
            "Revise com espaçamento: 1º dia, 3º dia, 7º dia, 14º dia.",
            "Use mnemônicos para memorizar listas de fundamentos e direitos.",
            "Registre seus erros no Caderno de Erros e revise regularmente.",
            "Estude em sessões de 25 minutos (Técnica Pomodoro) com 5 minutos de pausa.",
            "Use o marca-texto para destacar os pontos mais importantes.",
            "Crie flashcards para testar sua memorização.",
            "Estude os artigos mais cobrados primeiro: 5º, 37º e 102º.",
            "Leia as questões AOCP para entender o padrão de cobrança.",
            "Mantenha a consistência: estude um pouco todos os dias.",
            "Use o modo noturno se estudar à noite para evitar fadiga ocular.",
            "Revise os artigos já estudados regularmente para consolidar.",
            "Preste atenção nas pegadinhas identificadas para cada artigo.",
            "Estude a aplicabilidade prática na PGM-SP para contextualizar.",
            "Participe de simulados para testar seu aprendizado."
        ];
    }

    getDailyTip() {
        const day = new Date().getDate();
        return this.tips[day % this.tips.length];
    }

    getRandomTip() {
        return this.tips[Math.floor(Math.random() * this.tips.length)];
    }

    getTipForArticle(articleNumber) {
        const tips = {
            'Art. 5º': 'Este é o artigo MAIS cobrado em concursos. Memorize os 10 primeiros incisos.',
            'Art. 37': 'Foco em princípios da administração pública e regime de servidores.',
            'Art. 102': 'Competências do STF - tema frequente em provas AOCP.',
            'Art. 1º': 'Mnemônico: SCDVP (Soberania, Cidadania, Dignidade, Valores, Pluralismo)',
            'Art. 3º': 'Diferença crucial: Fundamentos (Art. 1º) vs Objetivos (Art. 3º)'
        };
        return tips[articleNumber] || this.getRandomTip();
    }
}

const smartTips = new SmartTips();

// ============================================
// 8. INTEGRAÇÃO COM CONTEÚDO
// ============================================

function loadMissionContent(missionNumber) {
    const missionKey = `mission${missionNumber}`;
    
    // Carregar dados da missão
    let missionData = null;
    
    if (missionNumber === 1 && typeof mission1Content !== 'undefined') {
        missionData = mission1Content;
    } else if (missionNumber === 2 && typeof mission2Content !== 'undefined') {
        missionData = mission2Content;
    }
    
    if (missionData) {
        articlesData[missionKey] = missionData.articles;
        return missionData;
    }
    
    return null;
}

// ============================================
// 9. FUNÇÕES AUXILIARES AVANÇADAS
// ============================================

function getArticleStats(articleNumber) {
    const isCompleted = appState.userProgress.completedArticles.includes(articleNumber);
    const notes = appState.userProgress.notes[articleNumber] || '';
    const errors = errorNotebook.getErrorsByArticle(articleNumber);
    
    return {
        articleNumber: articleNumber,
        isCompleted: isCompleted,
        hasNotes: notes.length > 0,
        errorCount: errors.length,
        pointsEarned: isCompleted ? 50 : 0
    };
}

function getRecommendedArticles() {
    // Recomenda artigos não estudados ou com muitos erros
    const recommended = [];
    
    Object.keys(articlesData).forEach(missionKey => {
        articlesData[missionKey].forEach(article => {
            const stats = getArticleStats(article.number);
            if (!stats.isCompleted || stats.errorCount > 0) {
                recommended.push({
                    article: article.number,
                    title: article.title,
                    priority: stats.errorCount > 0 ? 'high' : 'normal'
                });
            }
        });
    });
    
    return recommended.sort((a, b) => 
        (b.priority === 'high' ? 1 : 0) - (a.priority === 'high' ? 1 : 0)
    ).slice(0, 5);
}

function generateStudyPlan() {
    const recommended = getRecommendedArticles();
    const plan = {
        date: new Date().toLocaleDateString('pt-BR'),
        articlesPerDay: 3,
        recommendedArticles: recommended,
        estimatedTime: recommended.length * 15 // 15 min por artigo
    };
    return plan;
}

// ============================================
// 10. INICIALIZAÇÃO DE FUNCIONALIDADES
// ============================================

function initializeAdvancedFeatures() {
    console.log('Inicializando funcionalidades avançadas...');
    
    // Carregar conteúdo das missões
    loadMissionContent(1);
    loadMissionContent(2);
    
    // Verificar conquistas
    gamification.checkAchievements();
    
    // Atualizar streak
    progressTracker.updateStreak();
    
    // Dica do dia
    document.getElementById('dailyTip').textContent = smartTips.getDailyTip();
    
    console.log('✅ Funcionalidades avançadas inicializadas!');
}

// Inicializar quando o documento estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAdvancedFeatures);
} else {
    initializeAdvancedFeatures();
}
