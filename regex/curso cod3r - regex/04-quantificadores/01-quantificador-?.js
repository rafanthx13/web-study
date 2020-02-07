const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional) para o caractere
// a esquerda do símbolo '?'
const regex = /fogo?/gi
// Estou dizendo para  buscar ...
// 'fog' e com o 'o' opcional
// Assim, busca 'fog' ou 'fogo'

console.log(texto1.match(regex))
/* [ 'fogo', 'FOGO' ] */
console.log(texto2.match(regex))
/* [ 'fog' ] */