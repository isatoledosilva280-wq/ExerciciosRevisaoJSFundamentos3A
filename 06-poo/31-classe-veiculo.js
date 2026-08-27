// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Veiculo com constructor para marca, modelo e ano.
// Crie um método exibirDados() e duas instâncias da classe.
// Mostre os dados dos dois veículos.
//
// Escreva sua solução abaixo:

class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirDados() {
    console.log(`Veículo: ${this.marca} ${this.modelo} (${this.ano})`);
  }
}

const veiculo1 = new Veiculo("Toyota", "Corolla", 2022);
const veiculo2 = new Veiculo("Honda", "Civic", 2021);

veiculo1.exibirDados();
veiculo2.exibirDados();