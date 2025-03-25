// Define as fases do jogo com texto e opções
export const fases = [
  {
    // Primeira fase do jogo
    text: "Você está viajando em busca do lendário artefato conhecido como 'O Coração do Dragão'...",
    options: [
      {
        text: "Seguir pela trilha da montanha",
        proximaFase: 1, // Avança para a próxima fase
      },
      {
        text: "Explorar o pântano sombrio",
        perderVida: true, // O jogador perde uma vida
      },
      {
        text: "Visitar a vila misteriosa",
        proximaFase: 1, // Avança para a próxima fase
      },
    ],
  },
  {
    // Segunda fase do jogo
    text: "Você se aproxima de um castelo abandonado...",
    options: [
      {
        text: "Procurar pela chave na sala do trono",
        perderVida: true, // O jogador perde uma vida
      },
      {
        text: "Descender às catacumbas escuras",
        proximaFase: 2, // Avança para a próxima fase
      },
      {
        text: "Tentar abrir a porta à força",
        perderVida: true, // O jogador perde uma vida
      },
    ],
  },
  {
    // Terceira fase do jogo
    text: "Você chega ao santuário onde o Coração do Dragão está guardado...",
    options: [
      {
        text: "Aceitar o desafio do enigma",
        win: true, // O jogador vence o jogo
      },
      {
        text: "Enfrentar o guardião em combate",
        perderVida: true, // O jogador perde uma vida
      },
      {
        text: "Procurar uma forma alternativa de escapar com o artefato",
        proximaFase: 0, // Reinicia o jogo
      },
    ],
  },
];
