// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto pedido com numero, cliente e valorTotal.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

const pedido = {
  numero: 1024,
  cliente: "Fernanda",
  valorTotal: 299.90
};

const jsonPedido = JSON.stringify(pedido);
console.log(jsonPedido);