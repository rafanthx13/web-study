const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi
// Significa: buscar 'fog' seguido de uma sequência de 
// um 'o' ou mais 'o's
// afeta o caractere a esquerda

console.log(texto1.match(regex))
/* [ 'fogo', 'FOGOOOOOO' ] */
// buscou 'FOG' seguido de vários 'O's

console.log(texto2.match(regex))
/* null */
// Não buscou 'fog' pois ele busca no mínimo uma ocorrência

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g))
/* [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ] */

console.log(texto3.match(/[0-9]+/g))
/* [ '0123456789' ] */
// Buscou a partir da primeira ocorrência de um número o restante