const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))
/* [ 'João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica', 'nervoso' ] */

// Positive lookahead - Olha pra frente do match
// (?=,) Procure uma virgula na frente do grup, Olhando pra frente
/* Como funciona: 
1. Busca as palavras com e sem acento; 
2. Olha pras que deram math e busca a que tem acento
3. A unica que encaixa é 'calmo' pois tem um virgula ',' na frente
*/
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
/* [ 'calmo' ] */

console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
/* [ 'nervoso' ] */

console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))
// Só pega 'calmo' pois, olhando pra frente encontra ', mas' de "(?=, mas)"
/* [ 'calmo' ] */

// Negative lookahead - Nega o 'Positive LockAhead'
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
// Ou seja, vai buscar todas as palasvras execto calmo
// Pois calmo é seguido de ','
/* [ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ] */

console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
/* [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ] */