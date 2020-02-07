const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

// Metodos da classe RegExp
const regexNove = RegExp('9')

console.log(regexNove.test(texto)) 
/* Boolean :: true */
console.log(regexNove.exec(texto))
/*
 [ '9',
  index: 18,
  input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
  groups: undefined ] 
*/

// Métodos da string
const regexLetras = /[a-f]/g
console.log(texto.match(regexLetras))
/* [ 'a', 'b', 'c', 'd', 'e', 'f' ] */
console.log(texto.search(regexLetras))
/* index int :: 20*/
console.log(texto.replace(regexLetras, 'Achei'))
/* same string replaced :: 
  0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
*/
console.log(texto.split(regexLetras))
/* array splited where match ::
[ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
 */