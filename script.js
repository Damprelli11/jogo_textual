// Inicializa o número de vidas do jogador
let lives = 3;

// Seleciona os elementos HTML para narrativa, escolhas e contador de vidas
const narrative = document.getElementById("narrative");
const choices = document.getElementById("choices");
const contadorVidas = document.getElementById("lives");

// Define as fases do jogo com texto e opções
const phases = [
  {
    // Texto da fase inicial
    text: "Você está viajando em busca do lendário artefato conhecido como 'O Coração do Dragão'. Chega a uma encruzilhada com três caminhos: uma trilha sinuosa na montanha, um pântano sombrio e uma vila misteriosa. Qual você escolhe?",
    // Opções disponíveis para o jogador
    options: [
      { text: "Seguir pela trilha da montanha", proximaFase: 1 },
      { text: "Explorar o pântano sombrio", perderVida: true },
      { text: "Visitar a vila misteriosa", proximaFase: 1 },
    ],
  },
  {
    // Texto da segunda fase
    text: "Você se aproxima de um castelo abandonado coberto por vinhas e névoa. Ao entrar, percebe que o local guarda segredos perigosos. Há uma sala com uma porta trancada e uma escadaria que desce até as catacumbas. O que você faz?",
    // Opções disponíveis para o jogador
    options: [
      { text: "Procurar pela chave na sala do trono", perderVida: true },
      { text: "Descender às catacumbas escuras", proximaFase: 2 },
      { text: "Tentar abrir a porta à força", perderVida: true },
    ],
  },
  {
    // Texto da fase final
    text: "Você chega ao santuário onde o Coração do Dragão está guardado, mas é confrontado por um guardião espectral. Ele propõe um desafio: 'Responda meu enigma, e poderá partir com o artefato. Caso contrário, sua jornada termina aqui.'",
    // Opções disponíveis para o jogador
    options: [
      { text: "Aceitar o desafio do enigma", win: true },
      { text: "Enfrentar o guardião em combate", perderVida: true },
      {
        text: "Procurar uma forma alternativa de escapar com o artefato",
        proximaFase: 0, // Reinicia o jogo
      },
    ],
  },
];

// Função para renderizar a fase atual
function renderizarFase(phaseIndex) {
  // Obtém a fase atual com base no índice
  const phase = phases[phaseIndex];
  // Atualiza o texto da narrativa
  narrative.textContent = phase.text;
  // Limpa as opções anteriores
  choices.innerHTML = "";

  // Cria botões para cada opção da fase
  phase.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text; // Define o texto do botão
    button.onclick = () => {
      // Verifica se o jogador perde uma vida
      if (option.perderVida) {
        lives--; // Reduz o número de vidas
        alert("Você perdeu uma vida!"); // Exibe o aviso
        atualizarVidas(); // Atualiza o contador de vidas
        if (lives === 0) {
          // Se as vidas acabarem, reinicia o jogo
          alert("Fim da jornada... tente novamente!");
          renderizarFase(0); // Reinicia na fase inicial
          lives = 3; // Restaura as vidas
          atualizarVidas();
          return;
        }
      }
      // Verifica se o jogador venceu o jogo
      if (option.win) {
        alert("Parabéns! Você encontrou o Coração do Dragão e venceu o jogo!");
        renderizarFase(0); // Reinicia o jogo
        lives = 3; // Restaura as vidas
        atualizarVidas();
        return;
      }
      // Avança para a próxima fase, se definida
      if (option.proximaFase !== undefined) {
        renderizarFase(option.proximaFase);
      }
    };
    // Adiciona o botão ao elemento de escolhas
    choices.appendChild(button);
  });
}

// Função para atualizar o contador de vidas na interface
function atualizarVidas() {
  contadorVidas.textContent = lives; // Atualiza o texto do contador
}

// Inicia o jogo na fase inicial
renderizarFase(0);
