const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))

const texto = '1,2,3,4,5,6,a.b c!d?e'

console.log(texto.match(/,/g)) [ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/A/g)) // null
console.log(texto.match(/A/gi)) // [ 'a' ]
console.log(texto.match(/2/g)) // [ '2' ]
console.log(texto.match(/b c!d/))
/* 
[ 'b c!d',
  index: 14,
  input: '1,2,3,4,5,6,a.b c!d?e',
  groups: undefined ]
*/