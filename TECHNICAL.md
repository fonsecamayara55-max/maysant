# 📚 Documentação Técnica - Playbook PGM-SP

## Arquitetura do Sistema

### Estrutura de Arquivos

```
PlaybookPGMSP/
├── index.html                 # Interface principal (HTML)
├── styles.css                 # Estilos e temas (CSS)
├── script.js                  # Lógica principal (JavaScript)
├── advanced-features.js       # Funcionalidades avançadas
├── content-mission1.js        # Conteúdo Missão 1
├── content-mission2.js        # Conteúdo Missão 2
├── README.md                  # Guia de uso
└── TECHNICAL.md              # Esta documentação
```

---

## Componentes Principais

### 1. **Estado Global (appState)**

```javascript
appState = {
    currentMission: null,           // Missão atual
    currentArticle: null,           // Índice do artigo
    userProgress: {
        points: 0,                  // Pontos acumulados
        missionsCompleted: 0,       // Missões finalizadas
        articlesStudied: 0,         // Artigos estudados
        streakDays: 0,              // Dias consecutivos
        completedArticles: [],      // Array de artigos completos
        notes: {},                  // Anotações por artigo
        errors: [],                 // Caderno de erros
        achievements: []            // Conquistas desbloqueadas
    },
    isDarkMode: false,              // Tema escuro
    highlightMode: false,           // Modo marca-texto
    currentFlashcardIndex: 0        // Índice do flashcard
}
```

### 2. **Estrutura de Dados de Artigos**

```javascript
{
    number: "Art. 5º",
    title: "Direitos e Deveres Individuais",
    lawText: "...",                 // Texto completo da CF/88
    raioX: {
        caput: "...",               // Resumo do caput
        incisos: ["...", "..."]     // Resumo dos incisos
    },
    tips: ["...", "..."],           // Dicas de memorização
    aocp: {
        padraoCobranca: "...",      // Como a AOCP cobra
        questoesTipicas: ["..."],   // Tipos de questões
        pegadinhas: ["..."]         // Pegadinhas comuns
    },
    pgmsp: {
        aplicabilidade: "...",      // Aplicação na PGM-SP
        exemplos: ["..."]           // Exemplos práticos
    },
    questoes: [{...}],              // Questões AOCP
    flashcards: [{...}]             // Flashcards
}
```

---

## Sistemas Principais

### 1. **GamificationSystem**

Gerencia conquistas e progresso do usuário.

```javascript
const gamification = new GamificationSystem();

// Métodos principais
gamification.checkAchievements()      // Verifica conquistas
gamification.unlockAchievement(key)   // Desbloqueia conquista
gamification.getAchievementProgress() // Retorna progresso
```

**Conquistas Disponíveis:**
- `first-step`: Estude seu primeiro artigo
- `week-fire`: Estude 7 dias seguidos
- `specialist`: Complete 3 missões
- `master`: Complete todas as 7 missões
- `hundred-points`: Acumule 100 pontos
- `error-master`: Registre 10 erros

### 2. **HighlightSystem**

Gerencia marca-texto digital.

```javascript
const highlightSystem = new HighlightSystem();

// Métodos principais
highlightSystem.activate()            // Ativa modo marca-texto
highlightSystem.deactivate()          // Desativa modo
highlightSystem.changeColor(color)    // Muda cor do destaque
highlightSystem.clearAll()            // Remove todos os destaques
highlightSystem.getHighlights()       // Retorna destaques
highlightSystem.exportHighlights()    // Exporta como JSON
```

### 3. **NotesSystem**

Gerencia anotações do usuário.

```javascript
const notesSystem = new NotesSystem();

// Métodos principais
notesSystem.saveNote(articleNumber, content, tags)
notesSystem.getNote(articleNumber)
notesSystem.deleteNote(articleNumber)
notesSystem.searchNotes(keyword)
notesSystem.exportNotes()
```

### 4. **ErrorNotebook**

Gerencia caderno de erros.

```javascript
const errorNotebook = new ErrorNotebook();

// Métodos principais
errorNotebook.addError(text, articleNumber, questionId)
errorNotebook.reviewError(errorId)
errorNotebook.getUnreviewedErrors()
errorNotebook.getErrorsByArticle(articleNumber)
errorNotebook.getFrequentErrors()
errorNotebook.exportErrors()
```

### 5. **FlashcardSystem**

Gerencia flashcards para memorização.

```javascript
const flashcardSystem = new FlashcardSystem();

// Métodos principais
flashcardSystem.loadFlashcards(articles)
flashcardSystem.getCurrentFlashcard()
flashcardSystem.nextFlashcard()
flashcardSystem.previousFlashcard()
flashcardSystem.markCorrect()
flashcardSystem.markIncorrect()
flashcardSystem.getAccuracy()
flashcardSystem.shuffleFlashcards()
```

### 6. **ProgressTracker**

Rastreia progresso e tempo de estudo.

```javascript
const progressTracker = new ProgressTracker();

// Métodos principais
progressTracker.calculateProgress()       // % geral
progressTracker.getMissionProgress(num)   // % por missão
progressTracker.getSessionTime()          // Tempo em minutos
progressTracker.getStudyStreak()          // Dias consecutivos
progressTracker.updateStreak()            // Atualiza streak
```

### 7. **SmartTips**

Fornece dicas inteligentes de estudo.

```javascript
const smartTips = new SmartTips();

// Métodos principais
smartTips.getDailyTip()               // Dica do dia
smartTips.getRandomTip()              // Dica aleatória
smartTips.getTipForArticle(number)    // Dica para artigo
```

---

## Fluxo de Dados

### Salvamento de Dados

```
Ação do Usuário
    ↓
Atualizar appState
    ↓
saveUserData()
    ↓
localStorage.setItem('playbookUserData', JSON.stringify(...))
```

### Carregamento de Dados

```
DOMContentLoaded
    ↓
loadUserData()
    ↓
localStorage.getItem('playbookUserData')
    ↓
Restaurar appState
    ↓
updateDashboard()
```

---

## Funcionalidades Principais

### 1. **Navegação entre Views**

```javascript
goToView('dashboard')   // Vai para dashboard
goToView('missions')    // Vai para missões
goToView('study')       // Vai para estudo
goToView('progress')    // Vai para progresso
goToView('settings')    // Vai para configurações
```

### 2. **Seleção de Missão**

```javascript
selectMission(1)  // Seleciona Missão 1
// Carrega artigos da missão
// Abre view de estudo
// Carrega primeiro artigo
```

### 3. **Carregamento de Artigo**

```javascript
loadArticle(article)
// Atualiza título
// Carrega lei seca
// Carrega raio-x
// Carrega dicas
// Carrega questões
// Carrega anotações salvas
```

### 4. **Abas de Conteúdo**

```javascript
switchTab('law-text')      // Lei Seca
switchTab('raio-x')        // Raio-X Esquematizado
switchTab('tips')          // Dicas AOCP
switchTab('practice')      // Prática PGM-SP
switchTab('questions')     // Questões
```

---

## Armazenamento Local

### Estrutura localStorage

```javascript
{
    'playbookUserData': {
        points: 150,
        missionsCompleted: 1,
        articlesStudied: 5,
        streakDays: 3,
        completedArticles: ['Art. 1º', 'Art. 2º', ...],
        notes: {
            'Art. 1º': 'Minhas anotações...',
            'Art. 5º': '...'
        },
        errors: [
            {
                date: '30/10/2025',
                text: 'Confundi...',
                article: 'Art. 5º'
            }
        ],
        achievements: ['first-step', 'week-fire']
    },
    'darkMode': true,
    'lastStudyDate': '30/10/2025'
}
```

---

## Temas e Estilos

### Variáveis CSS

```css
--primary-color: #2c3e50
--secondary-color: #3498db
--accent-color: #e74c3c
--success-color: #27ae60
--warning-color: #f39c12
--danger-color: #e74c3c
--bg-light: #ecf0f1
--bg-white: #ffffff
--text-dark: #2c3e50
--text-light: #7f8c8d
```

### Classes de Tema

- `dark-mode`: Ativa modo noturno
- `dyslexia-mode`: Modo amigável para dislexia
- `high-contrast-mode`: Alto contraste
- `font-small`: Fonte pequena
- `font-normal`: Fonte normal
- `font-large`: Fonte grande
- `font-extra-large`: Fonte muito grande

---

## Pontuação e Gamificação

### Sistema de Pontos

| Ação | Pontos |
|------|--------|
| Completar artigo | +50 |
| Responder questão corretamente | +10 |
| Marcar flashcard como correto | +5 |
| Desbloquear conquista | +20 |

### Cálculo de Progresso

```
Progresso (%) = (Artigos Estudados / Total de Artigos) × 100
```

Total de artigos: 58 (distribuídos entre 7 missões)

---

## Extensibilidade

### Adicionar Nova Missão

1. Criar arquivo `content-mission3.js` com estrutura similar
2. Definir `mission3Content` com artigos
3. Importar em `index.html`
4. Adicionar card em `missions-view`

### Adicionar Novo Artigo

```javascript
{
    number: "Art. XX",
    title: "Título",
    lawText: "...",
    raioX: {...},
    tips: [...],
    aocp: {...},
    pgmsp: {...},
    questoes: [...],
    flashcards: [...]
}
```

### Adicionar Nova Conquista

```javascript
'achievement-key': {
    name: 'Nome da Conquista',
    icon: '🏆',
    description: 'Descrição',
    condition: () => /* condição booleana */
}
```

---

## Performance

### Otimizações Implementadas

- ✅ Lazy loading de conteúdo
- ✅ Armazenamento local (sem requisições ao servidor)
- ✅ CSS otimizado com variáveis
- ✅ JavaScript modular e reutilizável
- ✅ Transições suaves (GPU-accelerated)

### Tamanho dos Arquivos

| Arquivo | Tamanho Aproximado |
|---------|-------------------|
| index.html | 20 KB |
| styles.css | 35 KB |
| script.js | 25 KB |
| advanced-features.js | 20 KB |
| content-mission1.js | 15 KB |
| content-mission2.js | 10 KB |
| **Total** | **~125 KB** |

---

## Compatibilidade

### Navegadores Suportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### APIs Utilizadas

- `localStorage`: Armazenamento local
- `window.getSelection()`: Seleção de texto
- `Date`: Data e hora
- `JSON`: Serialização de dados
- `CSS Grid/Flexbox`: Layout responsivo

---

## Segurança

### Considerações

- ✅ Sem requisições externas (offline-first)
- ✅ Dados armazenados localmente (não enviados a servidor)
- ✅ Sem autenticação necessária (uso pessoal)
- ✅ Sem dependências externas (vanilla JS)

---

## Debugging

### Console Logs

```javascript
console.log('Playbook PGM-SP carregado com sucesso! 🎮⚖️');
console.log('Inicializando funcionalidades avançadas...');
console.log('✅ Funcionalidades avançadas inicializadas!');
```

### Verificar Estado

```javascript
console.log(appState)
console.log(appState.userProgress)
console.log(localStorage.getItem('playbookUserData'))
```

---

## Roadmap Futuro

- [ ] Integração com backend (sincronização em nuvem)
- [ ] Modo colaborativo (compartilhar progresso)
- [ ] Mais missões (Direito Administrativo, Processual)
- [ ] Simulados completos
- [ ] Análise de desempenho
- [ ] Integração com redes sociais
- [ ] App mobile (React Native)
- [ ] Integração com IA para dicas personalizadas

---

## Suporte

Para dúvidas técnicas ou bugs, consulte o README.md ou entre em contato com a equipe de desenvolvimento.

---

**Versão**: 1.0.0  
**Última Atualização**: 30/10/2025  
**Desenvolvido para**: Residência Jurídica PGM-SP
