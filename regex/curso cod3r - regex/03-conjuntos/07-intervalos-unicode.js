const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(texto.match(/[À-ü]/g))
/* Resgata todos */
/* Regex101
À-ü a single character in the range between
 À (index 192) and ü (index 252)
*/