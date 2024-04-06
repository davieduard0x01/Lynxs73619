document.addEventListener('DOMContentLoaded', function() {
    var skills = ["", "", "", ""];
    var skillsList = document.getElementById('skills-list');
    skills.forEach(function(skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    var projects = [
        { name: "Projeto 1 - JOGO BINGO - C#", description: "Cada jogador pode usar de 1 a 4 cartelas de 24 números aleatórios de 1 a 75. A cada rodada um número é sorteado e o jogador verifica se ele está na sua cartela. O jogador completa sua(s) cartela(s) marcando os números sorteados. O objetivo é completar linhas, colunas ou diagonais, de acordo com o padrão da fase.", link: "https://github.com/davieduard0x01/GAME-BINGO-ON-CSHARP" },
        { name: "Projeto 2 - JOGO LUDO - C#", description: "O jogo é formado basicamente de 1 tabuleiro, 1 dados e 16 peões distribuidos em 4 cores diferentes (4 peões de uma mesma cor para cada jogador). Objetivo do Ludo O principal objetivo do Ludo é conseguir dar a volta no tabuleiro, acessar a área de segurança e chegar a casa final com todas a quatro peças ", link: "https://github.com/davieduard0x01/GAME-LUDO-ON-CSHARP" },
        { name: "", description: "", link: "#" }
    ];

    var projectsList = document.getElementById('projects-list');
    projects.forEach(function(project) {
        var div = document.createElement('div');
        div.innerHTML = '<h3>' + project.name + '</h3><p>' + project.description + '</p><a href="' + project.link + '">Ver Projeto</a>';
        projectsList.appendChild(div);
    });

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');
    });
});
