// EXERCÍCIO 10 - FINDINDEX - USUÁRIO
// Crie um array com os nomes: Ana, Carlos, Beatriz e Daniel.
// Utilize findIndex() para descobrir a posição de "Beatriz".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

const usuarios = ["Ana", "Carlos", "Beatriz", "Daniel"];
const indice = usuarios.findIndex(nome => nome === "Beatriz");

console.log(`Índice de Beatriz: ${indice}`);