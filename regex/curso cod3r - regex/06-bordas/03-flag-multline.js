const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
console.log(texto.match(/\n/g))
// Buscar os '\n'
/* [ '\n', '\n', '\n', '\n' ] */

console.log(texto.match(/^(\w).+\1$/gi))
// Selecionando por Retrovisor, mas ainda nâo dá pra pegar
/* null */

console.log(texto.match(/^(\w).+\1$/gim))
// com a flag 'm' vai pegar o multiline
/* [ 'Leo é muito legal', 
     'Emanuel foi jogar em Sergipe',
     'Bianca é casada com Habib' ] 
*/