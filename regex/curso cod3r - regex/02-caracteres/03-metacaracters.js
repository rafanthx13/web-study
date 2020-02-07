// . ? * + - ^ $ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g // o \ serve para tratar o metacracter como o caractere ponto
console.log(texto.split(regexPonto))
/* [ '1,2,3,4,5,6,a', 'b c!d?e' ] */

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
/* [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ] */

// --------------------


const texto1 = 'Bom\ndia'
console.log(texto1.match(/.../gi))
/* [ 'Bom', 'dia' ] */
console.log(texto1.match(/..../gi)) // o ponto não engloba o \n
/* null */

// dotall (quando o pnto resolve com \n) 
// algumas linguagens tem um flag /exp/s, mas JS não!