// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto produto com nome, preco e estoque.
// Altere o preço e diminua uma unidade do estoque.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const produto = {
  nome: "Iphone",
  preco: 2000,
  estoque: 10
};

console.log("Antes:", produto);

produto.preco = 1800;
produto.estoque -= 1;

console.log("Depois:", produto);