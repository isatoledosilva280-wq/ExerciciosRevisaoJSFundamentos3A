// EXERCÍCIO 09 - FIND - PRODUTO
// Crie um array de objetos com nome e preço de quatro produtos.
// Utilize find() para localizar o produto chamado "Teclado".
// Mostre o produto encontrado.
//
// Escreva sua solução abaixo:

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 800 },
  { nome: "Fone", preco: 100 }
];

const produtoEncontrado = produtos.find(produto => produto.nome === "Teclado");
console.log(produtoEncontrado);