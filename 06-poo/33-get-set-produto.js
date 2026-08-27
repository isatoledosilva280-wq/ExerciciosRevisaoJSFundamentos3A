// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Produto com o campo privado #preco.
// Crie get preco e set preco. O setter não deve aceitar valores negativos.
// Crie um produto, altere o preço e mostre o resultado.
//
// Escreva sua solução abaixo:

class Produto {
  #preco;

  constructor(precoInicial) {
    this.preco = precoInicial;
  }

  get preco() {
    return this.#preco;
  }

  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this.#preco = novoPreco;
    } else {
      console.log("Preço inválido: não pode ser negativo.");
    }
  }
}

const item = new Produto(150);
console.log(`Preço inicial: R$ ${item.preco}`);

item.preco = 200;
console.log(`Novo preço: R$ ${item.preco}`);

item.preco = -50; // Tentativa inválida