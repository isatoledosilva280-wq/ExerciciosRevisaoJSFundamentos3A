// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de usuários contendo id, nome e email.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const usuarios = [
  { id: 1, nome: "Alice", email: "alice@email.com" },
  { id: 2, nome: "Bruno", email: "bruno@email.com" },
  { id: 3, nome: "Caio", email: "caio@email.com" }
];

const jsonUsuarios = JSON.stringify(usuarios);
console.log(jsonUsuarios);