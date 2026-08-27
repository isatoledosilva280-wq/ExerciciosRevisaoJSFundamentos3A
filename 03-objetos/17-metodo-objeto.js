// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto retangulo com largura, altura e um método calcularArea().
// O método deve retornar largura * altura. Mostre a área no console.
//
// Escreva sua solução abaixo:

const retangulo = {
  largura: 10,
  altura: 5,
  calcularArea: function() {
    return this.largura * this.altura;
  }
};

console.log(`Área do retângulo: ${retangulo.calcularArea()}`);