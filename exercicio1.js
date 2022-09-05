const prompt = require("prompt-sync")()

let p = Number(prompt("digite o peso: "))
let m = Number = 0
let e = Number = 0

if(p > 50){
    e = p - 50
    m = e * 4 
    console.log(`O peso é ${p}kg, o excesso é de ${e}kg e a multa 
    a pagar por isso é de R$${e}`)
}else{console.log(`O peso é ${p}kg, o excesso é de 0 e a multa 0`)}