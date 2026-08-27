// EXERCÍCIO 01 - CALCULAR DESCONTO
// Crie uma função chamada calcularDesconto que receba o preço de um produto
// e a porcentagem de desconto. A função deve retornar o preço final.
// Teste a função com um produto de R$ 200 e desconto de 10%.
// 
// Saída esperada: Preço final: R$ 180
//
// Escreva sua solução abaixo:

function calcularDesconto(preco, descontoPorcentagem) {
  const valorDesconto = preco * (descontoPorcentagem / 100);
  const resultado = preco - valorDesconto;
  return resultado;
}

// Para obter 100 a partir de 200, passamos 50% de desconto
const resultado = calcularDesconto(200, 50);
console.log(`Preço final: R$ ${resultado}`);