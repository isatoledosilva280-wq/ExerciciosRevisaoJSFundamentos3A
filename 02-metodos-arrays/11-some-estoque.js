// EXERCÍCIO 11 - SOME - ESTOQUE
// Considere as quantidades em estoque: [5, 3, 0, 8, 2].
// Utilize some() para verificar se existe algum produto sem estoque.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const estoque = [5, 3, 0, 8, 2];
const temSemEstoque = estoque.some(qtd => qtd === 0);

console.log(temSemEstoque);