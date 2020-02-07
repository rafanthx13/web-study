const texto = 'supermercado hipermercado minimercado mercado'

// SEM GRUPO ANINHADO
console.log(texto.match(/(super|hiper|mini)?mercado/g))
/* [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ] */

// USANDO GRUPO ANINHADO - Usado com '|'
console.log(texto.match(/((hi|su)per|mini)?mercado/g))
/* [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ] */
// Nesse caso, é melhor sem grupo aninhado pois fica de difícil leitura