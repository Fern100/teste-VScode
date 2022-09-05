const prompt = require("prompt-sync")()
let idade = 0
while(idade != -99){
    let numero = Number(prompt("digite sua idade: "))
    if(idade > 0 && idade < 21){
        count1++
        }
    if (idade > 50)
    {count2++}
}
console.log(`a quantidade de pessoas com menos de 21 é: ${count1}`)
console.log(`a quantidade de pessoas com mais de 50 é: ${count2}`)