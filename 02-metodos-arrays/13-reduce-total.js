// EXERCÍCIO 13 - REDUCE - TOTAL DO PEDIDO
// Considere os valores: [29.90, 15.50, 40, 10].
// Utilize reduce() para calcular o valor total do pedido.
// Mostre o resultado com duas casas decimais.
//
// Escreva sua solução abaixo:

const valores = [29.90, 15.50, 40, 10];
const total = valores.reduce((acc, valor) => acc + valor, 0);

console.log(`Total: R$ ${total.toFixed(2)}`);