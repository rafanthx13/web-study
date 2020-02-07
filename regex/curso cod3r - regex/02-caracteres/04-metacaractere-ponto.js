// . é um coringa, válido para uma única posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) 
/* [ '1,2' ] */
console.log(texto.match(/1..2/g))
/* null , pois não há 2 caracteres entre 1 e 2 */
console.log(texto.match(/1..,/g))
/* [ '1,2,' ] */

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g)) 
// qualquer coisa que começa com 8 e dois caracteres
/* [ '8.3', '8.8' ] */
console.log(notas.match(/.\../g)) 
// Qualquer coisa seguida pelo caractere "."
/* [ '8.3', '7.1', '8.8', '0.0' ] */

// DESAFIO

// buscar todas as ocorrencias de .mp3
const texto1 = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(texto1.match(/\.mp3/g))