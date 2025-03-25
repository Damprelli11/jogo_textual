let lives = 3;

const narrative = document.getElementById("narrative");
const choices = document.getElementById("choices");
const livesDisplay = document.getElementById("lives");

// Fases do jogo
const phases = [
  {
    text: "Você está viajando em busca do lendário artefato conhecido como 'O Coração do Dragão'. Chega a uma encruzilhada com três caminhos: uma trilha sinuosa na montanha, um pântano sombrio e uma vila misteriosa. Qual você escolhe?",
    options: [
      { text: "Seguir pela trilha da montanha", nextPhase: 1 },
      { text: "Explorar o pântano sombrio", loseLife: true },
      { text: "Visitar a vila misteriosa", nextPhase: 1 },
    ],
  },
  {
    text: "Você se aproxima de um castelo abandonado coberto por vinhas e névoa. Ao entrar, percebe que o local guarda segredos perigosos. Há uma sala com uma porta trancada e uma escadaria que desce até as catacumbas. O que você faz?",
    options: [
      { text: "Procurar pela chave na sala do trono", loseLife: true },
      { text: "Descender às catacumbas escuras", nextPhase: 2 },
      { text: "Tentar abrir a porta à força", loseLife: true },
    ],
  },
  {
    text: "Você chega ao santuário onde o Coração do Dragão está guardado, mas é confrontado por um guardião espectral. Ele propõe um desafio: 'Responda meu enigma, e poderá partir com o artefato. Caso contrário, sua jornada termina aqui.'",
    options: [
      { text: "Aceitar o desafio do enigma", win: true },
      { text: "Enfrentar o guardião em combate", loseLife: true },
      {
        text: "Procurar uma forma alternativa de escapar com o artefato",
        nextPhase: 0,
      }, // Reiniciar ou algo opcional
    ],
  },
];

// Função para renderizar a fase
function renderizarFase(phaseIndex) {
  const phase = phases[phaseIndex];
  narrative.textContent = phase.text;
  choices.innerHTML = "";

  phase.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => {
      if (option.loseLife) {
        lives--;
        alert("Você perdeu uma vida!"); // Exibe o aviso
        atualizarVidas();
        if (lives === 0) {
          alert("Fim da jornada... tente novamente!");
          renderizarFase(0); // Reinicia o jogo
          lives = 3;
          atualizarVidas();
          return;
        }
      }
      if (option.win) {
        alert("Parabéns! Você encontrou o Coração do Dragão e venceu o jogo!");
        renderizarFase(0); // Reinicia o jogo
        lives = 3;
        atualizarVidas();
        return;
      }
      if (option.nextPhase !== undefined) {
        renderizarFase(option.nextPhase);
      }
    };
    choices.appendChild(button);
  });
}

// Função para atualizar as vidas
function atualizarVidas() {
  livesDisplay.textContent = lives;
}

// Inicia o jogo
renderizarFase(0);
