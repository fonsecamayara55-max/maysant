// ============================================
// CONTENT LOADER - Carrega missões do JSON
// ============================================

let allMissions = [];

async function loadAllMissions() {
    const missionFiles = [
        'content-data/mission1.json',
        'content-data/mission2.json',
        'content-data/mission3.json',
        'content-data/mission4.json',
        'content-data/mission5.json',
        'content-data/mission6.json',
        'content-data/mission7.json'
    ];

    for (const file of missionFiles) {
        try {
            const response = await fetch(file);
            const data = await response.json();
            allMissions.push(data);
            console.log(`✅ Carregado: ${data.title}`);
        } catch (error) {
            console.error(`❌ Erro ao carregar ${file}:`, error);
        }
    }

    console.log(`🎉 Total de ${allMissions.length} missões carregadas!`);
    return allMissions;
}

function getMission(missionIndex) {
    return allMissions[missionIndex] || null;
}

function getArticle(missionIndex, articleIndex) {
    const mission = getMission(missionIndex);
    return mission ? mission.articles[articleIndex] : null;
}

function getQuestoes(missionIndex, articleIndex) {
    const article = getArticle(missionIndex, articleIndex);
    return article ? article.questoes : [];
}

function verificarResposta(missionIndex, articleIndex, questaoIndex, respostaUsuario) {
    const questoes = getQuestoes(missionIndex, articleIndex);
    if (questaoIndex >= questoes.length) return null;
    
    const questao = questoes[questaoIndex];
    const correta = respostaUsuario === questao.gabarito;
    
    return {
        correta: correta,
        gabarito: questao.gabarito,
        explicacao: questao.explicacao,
        pontos: correta ? 10 : 0
    };
}

// Carregar ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadAllMissions();
});
