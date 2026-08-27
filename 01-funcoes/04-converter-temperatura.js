// EXERCÍCIO 04 - CONVERTER TEMPERATURA
// Crie uma Function Expression que receba uma temperatura em Celsius
// e retorne o valor convertido para Fahrenheit.
// Fórmula: Fahrenheit = Celsius * 1.8 + 32.
//
// Escreva sua solução abaixo:

const converterParaFahrenheit = function(celsius) {
  return celsius * 1.8 + 32;
};

console.log(`30°C é igual a ${converterParaFahrenheit(30)}°F`);