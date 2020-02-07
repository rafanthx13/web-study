const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto1.match(/<(\w+)>/g))
/* [ '<b>', '<strong>', '<div>' ] */

// Retrovisor é uma forma de voce pegar a referencincia de um grupo
// A ideia é: Quando se captura um grupo, poder usar essse valor posteriormente no regex

// Usando retrovisor é o \1
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))
/* [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ] */

const texto2 = 'Lentamente é mente muito lenta.'

// Sem retrovisor
console.log(texto2.match(/(lenta)(mente)/gi))
/* [ 'Lentamente' ] */

// Posso usar dois retrovisores, já que há dois grupos
// \2 será o "mente" e \1 é "lenta"
console.log(texto2.match(/(lenta)(mente).*\2/gi))
/* [ 'Lentamente é mente' ] */

console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
/* [ 'Lentamente é mente muito lenta.' ]  */

// Existe uma forma de não guardar o valor d eum grupo, com "?:"

console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda
// O retrovisor 1 '\1' nâo é mais 'lenta' é na verdade "mente"
/* [ 'Lentamente é mente' ] */

console.log(texto2.match(/(lenta)(mente)?/gi))
/// pega 'lenta' quanto 'lentamente'
/* [ 'Lentamente', 'lenta' ] */

// Posso usar o retrovisor como parâmetro de um 'replace'
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC $ DEF')) 
// No caso, substituiu 'lenta' por 'mente' o segndo retrovisor
/* mente é mente muito lenta. */ 

// JAVASCRIPT SUPORTAR ATÉ PELO MENOS 12 RETROVISORES
// para saber mais, tem que pesquisar/testar
const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))
/* [ 'abcdefghijkll' ] */