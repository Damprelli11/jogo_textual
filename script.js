// Importa as fases do jogo e as funções de lógica
import { fases } from "./fases.js";
import { atualizarVidas, renderizarFase } from "./jogoLogica.js";

// Inicializa o jogo na fase inicial
renderizarFase(0);

// Função para atualizar o texto da narrativa com transição
function atualizarNarrativa(texto) {
  const narrativeElement = document.getElementById("narrative");
  narrativeElement.style.transition = "opacity 0.5s ease-in-out"; // Garante a transição
  narrativeElement.style.opacity = 0; // Inicia a transição
  setTimeout(() => {
    narrativeElement.textContent = texto; // Atualiza o texto
    narrativeElement.style.opacity = 1; // Finaliza a transição
  }, 500); // Tempo da transição (deve coincidir com o CSS)
}

// Exemplo de uso da função (substitua conforme necessário)
atualizarNarrativa("Bem-vindo ao jogo!");
