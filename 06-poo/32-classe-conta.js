// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe ContaBancaria com o campo privado #saldo.
// Crie os métodos depositar(valor), sacar(valor) e consultarSaldo().
// Não permita saque maior que o saldo disponível.
//
// Escreva sua solução abaixo:

class ContaBancaria {
  #saldo = 0;

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor) {
    if (valor > this.#saldo) {
      console.log("Saque negado: Saldo insuficiente.");
    } else if (valor > 0) {
      this.#saldo -= valor;
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

const minhaConta = new ContaBancaria();
minhaConta.depositar(500);
console.log(`Saldo atual: R$ ${minhaConta.consultarSaldo()}`);
minhaConta.sacar(600); // Saque maior que o saldo
minhaConta.sacar(200);
console.log(`Saldo final: R$ ${minhaConta.consultarSaldo()}`);