const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

const regex = /casa/gi
console.log(texto.match(regex)) 
/* [ 'Casa', 'casa', 'CASA' ] */
console.log(texto.match(/casa/g)) 
/* [ 'casa' ] */
console.log(texto.match(/casa/i))
/* 
[ 'Casa',
  index: 0,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined ]
  */
console.log(texto.match(/casa/))
/*
[ 'casa',
  index: 14,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined ]
*/

console.log(texto.match(/a b/))
/* 
[ 'a b',
  index: 3,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined ]
*/