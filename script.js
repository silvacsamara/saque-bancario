/*

Escreva o **algoritmo** para que o caixa eletrônico funcione da seguinte forma:

1. O usuário digita o valor que deseja sacar.
2. O sistema verifica se o valor é múltiplo de 10 (pois só existem notas de R$10, R$20, R$50 e R$100).
- Se **não for múltiplo de 10**, o sistema deve mostrar: *“Valor inválido. Digite um valor múltiplo de 10.”*
- Se **for múltiplo de 10**, o sistema deve mostrar: *“Saque realizado com sucesso.”
*/

const prompt = require('prompt-sync')();

let valorSaque = parseInt(prompt('Digite o valor que deseja sacar: '))

if(isNaN(valorSaque)){
    console.log("Valor inválido. Por favor, digite apenas números.")
}else if(valorSaque <= 0){
    console.log("0 não é um valor disponível para saque. Digite um valor válido.")
}else if(valorSaque % 10 === 0){
    console.log("Saque realizado com sucesso.")
}else{
    console.log("Valor inválido. Digite um valor múltiplo de 10.")
}