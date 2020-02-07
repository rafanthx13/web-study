const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g)) 
/*  [ '.$', '+*', '?-' ]   */
// não precisa de escape dentro do conjunto

console.log(texto.match(/[$-?]/g)) 
/* [ '.', '$', '+', '*', '?', '-' ] */
// Nesse caso temos um intervalo
// '-' funciona como um metacaractere
// Regex101: 
// $-? a single character in the range between $ (index 36) and ? (index 63) (case sensitive)

console.log(texto.match(/[$\-?]/g))
/*   [ '$', '?', '-' ]  */
// NÃO é um intervalo (range), pois usa Scape

console.log(texto.match(/[-?]/g))
/* [ '?', '-' ] */
// pode precisar de escape dentro do conjunto: - [ ] ^