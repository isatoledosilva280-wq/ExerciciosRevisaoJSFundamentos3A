// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie dois arrays de tecnologias: um de Front-End e outro de Back-End.
// Utilize Spread para criar um terceiro array contendo todas as tecnologias.
//
// Escreva sua solução abaixo:

const frontEnd = ["HTML", "CSS", "React"];
const backEnd = ["Node.js", "Express", "SQL"];

const todasTecnologias = [...frontEnd, ...backEnd];
console.log(todasTecnologias);