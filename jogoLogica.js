// Importa as fases do jogo
import { fases } from "./fases.js";

// Inicializa o número de vidas do jogador
let lives = 3;

// Seleciona os elementos HTML para narrativa, escolhas e contador de vidas
const narrative = document.querySelector("#narrative");
const choices = document.querySelector("#choices");
const contadorVidas = document.querySelector("#lives");

// Adiciona a trilha sonora medieval
const trilhaSonora = new Audio("./assets/music/trilha_medieval.mp3");
trilhaSonora.loop = true;
trilhaSonora.volume = 0.5; // Ajusta o volume
trilhaSonora.play();

// Função para atualizar o contador de vidas na interface
export function atualizarVidas() {
  contadorVidas.textContent = lives;
}

// Função para aplicar transição suave
function aplicarTransicao(element, callback) {
  element.style.opacity = "0"; // Inicia a transição
  setTimeout(() => {
    callback(); // Executa a lógica de atualização
    element.style.opacity = "1"; // Finaliza a transição
  }, 500); // Tempo da transição em milissegundos
}

// Função para renderizar a fase atual
export function renderizarFase(phaseIndex) {
  const phase = fases[phaseIndex];
  aplicarTransicao(narrative, () => {
    narrative.textContent = phase.text;
  });
  aplicarTransicao(choices, () => {
    choices.innerHTML = "";

    // Cria botões para cada opção da fase
    phase.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option.text;

      button.addEventListener("click", () => {
        // Lógica para perder uma vida
        if (option.perderVida) {
          lives--;
          alert("Você perdeu uma vida!");
          atualizarVidas();
          if (lives === 0) {
            alert("Fim da jornada... tente novamente!");
            console.log("Fim da jornada... tente novamente!");
            lives = 3;
            atualizarVidas();
            renderizarFase(0);
            return;
          }
        }

        // Lógica para vencer o jogo
        if (option.win) {
          alert(
            "Parabéns! Você encontrou o Coração do Dragão e venceu o jogo!"
          );
          console.log(
            "Parabéns! Você encontrou o Coração do Dragão e venceu o jogo!"
          );
          lives = 3;
          atualizarVidas();
          renderizarFase(0);
          return;
        }

        // Lógica para avançar para a próxima fase
        if (option.proximaFase !== undefined) {
          renderizarFase(option.proximaFase);
        }
      });

      choices.appendChild(button);
    });
  });
}
