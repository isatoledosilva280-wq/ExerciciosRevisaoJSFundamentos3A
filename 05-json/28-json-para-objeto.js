// EXERCÍCIO 28 - JSON PARA OBJETO
// Considere a String JSON: '{"nome":"Notebook","preco":3500,"estoque":8}'.
// Converta-a em objeto utilizando JSON.parse() e mostre apenas o nome do produto.
//
// Escreva sua solução abaixo:

const jsonString = '{"nome":"Notebook","preco":3500,"estoque":8}';
const produtoObjeto = JSON.parse(jsonString);

console.log(produtoObjeto.nome);