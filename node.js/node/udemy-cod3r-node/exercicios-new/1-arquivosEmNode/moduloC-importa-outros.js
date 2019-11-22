const moduloA = require('./moduloA') // caminho relativo, esta dizendo que estou na mesma pasta
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloA)
// { ola: 'Fala Pessoal',
//   bemVindo: 'Bem vindo ao node!',
//   ateLogo: 'Até próximo exemplo' }

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

console.log(moduloB) // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }