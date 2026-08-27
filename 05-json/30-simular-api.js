// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades sucesso, mensagem e dados.
// A propriedade dados deve conter um array com dois produtos.
// Converta a resposta para JSON e depois converta novamente para objeto.
// Mostre a mensagem e os produtos recebidos.
//
// Escreva sua solução abaixo:

const resposta = {
  sucesso: true,
  mensagem: "Dados carregados com sucesso",
  dados: [
    { id: 101, produto: "Teclado Mecânico" },
    { id: 102, produto: "Mouse Sem Fio" }
  ]
};

const jsonString = JSON.stringify(resposta);
const objetoConvertido = JSON.parse(jsonString);

console.log("Mensagem:", objetoConvertido.mensagem);
console.log("Produtos:", objetoConvertido.dados);