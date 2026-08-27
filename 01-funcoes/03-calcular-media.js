// EXERCÍCIO 03 - CALCULAR MÉDIA
// Crie uma função que receba quatro notas, calcule e retorne a média.
// Mostre o resultado no console.
//
// Escreva sua solução abaixo:

function calcularMedia(nota1, nota2, nota3, nota4) {
  const soma = nota1 + nota2 + nota3 + nota4;
  return soma / 4;
}

const mediaFinal = calcularMedia(7, 8, 6, 9);
console.log(`Média: ${mediaFinal}`);