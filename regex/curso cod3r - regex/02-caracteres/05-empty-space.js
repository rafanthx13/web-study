const texto = `
ca	r
r	o s!
`

console.log(texto.match(/ca\tr\nr\to\ss!/))
/* 'ca\tr\nr\to s!' */


// DESAFIO
// Encontrar a letra 'a' e a letra 'b' e entre elas, 3 espaços
const texto1 = 'a   b'

console.log(texto1.match(/a   b/))
console.log(texto1.match(/a\s\s\sb/))

// no futuro, poderiamos resolver com ...
console.log(texto1.match(/a\s+b/)) 
// daria math para n espaços em branco
console.log(texto1.match(/a {3}b/)) 
// especifica que ' ' tem que ser 3 caracateres
console.log(texto1.match(/a\s{3}b/))
// mesmo caso que o anterior