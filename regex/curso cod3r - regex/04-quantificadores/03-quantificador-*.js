const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais
const regex = /fogo*/gi
// Busca 'fog', 'fogo' ou 'fogoooo...'

console.log(texto1.match(regex))
/* [ 'fogo', 'FOGOOOOOO' ] */
console.log(texto2.match(regex))
/* [ 'fog' ] */