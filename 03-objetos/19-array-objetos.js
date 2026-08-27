// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de filmes.
// Cada filme deve possuir titulo, genero e duracao.
// Percorra o array e mostre o título de cada filme.
//
// Escreva sua solução abaixo:

const filmes = [
  { titulo: "Maze Runner", genero: "Ficção Científica", duracao: 148 }, 
  { titulo: "Interstellar", genero: "Ficção Científica", duracao: 249 },
  { titulo: "Invocação do Mal", genero: "Terror", duracao: 169 },
];

filmes.forEach(filme => {
  console.log(filme.titulo);
  console.log(filme.genero);
  console.log(filme.duracao);
});