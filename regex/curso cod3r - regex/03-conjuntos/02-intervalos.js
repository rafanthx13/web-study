// Intervalos funcionam dentro de um Conjunto []
// Interval - Match a single character present in the list below
// As bordas são incluisvas

const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g))
/* [ 'a', 'b', 'c', 'd', 'e', 'f' ]  */
console.log(texto.match(/[b-d]/g))
/* [ 'b', 'c', 'd' ]  */
console.log(texto.match(/[2-4]/g))
/* [ '2', '3', '4' ]  */
console.log(texto.match(/[A-Z1-3]/gi))
/*  [ '1', '2', '3', 'a', 'b', 'c', 'd', 'e', 'f' ] */

