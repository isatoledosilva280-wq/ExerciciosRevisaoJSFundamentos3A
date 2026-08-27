// EXERCÍCIO 07 - MAP - REAJUSTE DE PREÇOS
// Considere o array: [50, 100, 150, 200].
// Utilize map() para criar um novo array com aumento de 10% em cada preço.
// Mostre o array original e o novo array.
//
// Escreva sua solução abaixo:

const precosOriginais = [50, 100, 150, 200];
const precosReajustados = precosOriginais.map(preco => preco * 1.10);

console.log("Array original:", precosOriginais);
console.log("Novo array:", precosReajustados);