const prompt = require("prompt-sync")()

let diametro = Number(prompt("Digite o diametro do círculo "))
let π = 3.14
let raio = diametro / 2

console.log(`A área do circulo é: ${π * (raio * raio)}`)
console.log(`O perímetro do circulo é: ${2 * π * raio}`)