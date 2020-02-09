const texto = `Romário era um excelente jogador\n
, mas hoje é um político questionador`

console.log(texto.match(/r/gi))
//Selecionar todos os 'r's
/* [ 'R', 'r', 'r', 'r', 'r' ] */

console.log(texto.match(/^r/gi)) // ^ inicio da linha/string
// Fora de um conjunto o '^' significa INICIO DA LINHA
// Então, vai buscar "o primeira r/R da string"
/* [ 'R' ] */

console.log(texto.match(/r$/gi)) // $ fim da linha/string
// $ vai buscar o último O FIM DA LINHA
/* [ 'r' ] */

console.log(texto.match(/^r.*r$/gi)) // problema do dotall
// Essa expressão daria certo se não tive-se '\n'
// Pois '.' nâo resolve o '\n'
// problema do dotall: '.' em REGEX
/* null */