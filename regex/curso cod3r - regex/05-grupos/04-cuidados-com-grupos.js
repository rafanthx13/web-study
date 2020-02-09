const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

// OBS: Dentro de um Conjunto, não existe  um grupo 
console.log(texto.match(/[(abc)]/gi)) 
// Aqui, é um conjunto com os caracteres 'a','b',','c',(',')'
// e não um grupo 'abc'
/* [ '(', 'a', ')', 'A', 'B', 'C', 'a', 'b', 'c' ] */

console.log(texto.match(/([abc])/gi))
// Mas dentro de um grupo, pode ter um ou mais conjuntos
// Aqui é um grupo com '[' e ']'
/* [ 'a', 'A', 'B', 'C', 'a', 'b', 'c' ] */

console.log(texto.match(/(abc)+/gi))
/* [ 'ABCabc' ] */