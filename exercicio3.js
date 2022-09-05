const prompt = require("prompt-sync")()

let niver = prompt("Você já fez aniversário? 1-sim/2-não ")
if(niver = 1){
    let idade = Number(prompt("Qual a sua idade? "))
    let ano = 2022
    nasc = ano - idade
    console.log(`Sua data de nascimento é ${nasc}`)
}else{
    let idade = Number(prompt("Qual a sua idade? "))
    let ano = 2022
    nasc = ano - (idade+=1)
    console.log(`Sua data de nascimento é ${nasc}`)
}