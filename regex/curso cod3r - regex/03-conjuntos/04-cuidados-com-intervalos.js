const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
/* [ 'a', 'b', 'c', 'a', 'c' ] */

console.log(texto.match(/a-c/g)) 
/* [ 'a-c' ] */
// não define um range, não é um conjunto (colchetes)

console.log(texto.match(/[A-z]/g)) 
/* [ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ] */
// intervalos usam a ordem da tabela ASCII/UNICODE
// Entre 'A' e 'z', na tabela, existem outros simbolos que pode pegar
// Se atente em RESPEITAR A ORDEM DA TABELA UNICODE/ASCII

//// tem que respeitar a ordem da tabela UNICODE

// console.log(texto.match(/[a-Z]/g)) // ERRO!!!
// Começa primeiro pelo Maiusculo e depois vai para o minúsculo

// console.log(texto.match(/[4-1]/g)) // ERRO!!!
// 4 Vem depois de 1, não antes