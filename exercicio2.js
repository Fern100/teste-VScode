const prompt = require("prompt-sync")()

while(true){
console.log("***Calculadora da Fer***")
console.log("Bem vindo! O que deseja fazer?")
let opc = Number(prompt("1-soma/2-subtração/3-multiplicação/4-divisão"))

if(opc == 1){
    let numero1 = Number(prompt("digite o primeiro numero: "))
    let numero2 = Number(prompt("digite o segundo numero: "))
    soma = numero1 + numero2
    console.log(`O resultado é ${soma}`)
}else if(opc == 2){
        let numero1 = Number(prompt("digite o primeiro numero: "))
        let numero2 = Number(prompt("digite o segundo numero: "))
        sub = numero1 - numero2
        console.log(`O resultado é ${sub}`)
}else if(opc == 3){
        let numero1 = Number(prompt("digite o primeiro numero: "))
        let numero2 = Number(prompt("digite o segundo numero: "))
        mult = numero1 * numero2
        console.log(`O resultado é ${mult}`)
}else if(opc == 4){
            let numero1 = Number(prompt("digite o primeiro numero: "));
            let numero2 = Number(prompt("digite o segundo numero: "));
            div = numero1 / numero2;
            console.log(`O resultado é ${div}`)
}else{console.log("Opção inválida")}}