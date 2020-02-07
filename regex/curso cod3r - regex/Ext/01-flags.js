const texto = 'Carlos assinou o abaixo-assinado.'

// Colocar o regex /C|ab/ significa: busque 'C' e 'ab'
console.log(texto.match(/C|ab/)) // nao usando nenhuma flag
console.log(texto.match(/c|ab/i)) // usando flag i
console.log(texto.match(/ab|c/gi)) // usando flag g e i