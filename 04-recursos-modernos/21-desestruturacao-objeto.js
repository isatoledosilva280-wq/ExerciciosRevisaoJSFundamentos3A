// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto curso com nome, cargaHoraria e modalidade.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const curso = {
  nome: "JavaScript Avançado",
  cargaHoraria: 40,
  modalidade: "Online"
};

const { nome, cargaHoraria, modalidade } = curso;

console.log(nome);
console.log(cargaHoraria);
console.log(modalidade);