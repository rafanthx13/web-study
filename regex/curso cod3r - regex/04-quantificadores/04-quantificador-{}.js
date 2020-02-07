const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir uma quantificador usa {}
console.log(texto.match(/\d{1,2}/g))
// Vai pegar dígitos de 1 à 2 caracteres
/* [ '12', '0', '6', '9', '21', '23', '45', '46' ] */

console.log(texto.match(/[0-9]{2}/g))
// Vai pegar os dígitos de dois caracteres
/* [ '12', '21', '23', '45', '46' ] */

console.log(texto.match(/\d{1,}/g))
// Vai pegar os dígitos que tenham no ínimo 1 caractere
/* [ '120', '6', '9', '21', '23', '45', '46' ] */

console.log(texto.match(/\w{7}/g))
// Vai buscar uma sequencia letras/número que tenha tamanho 7 (sem espaços)
/* [ 'recebeu', 'apostan' ] */

console.log(texto.match(/[\wõã]{7,}/g))
// Pega sequencia de letras que tenham no mínimo 7 letras (sem espaços)
/* [ 'recebeu', 'milhões', 'apostando' ] */


// no futuro ......

console.log(texto.match(/\b\d{1,2}\b/g))
/* [ '6', '9', '21', '23', '45', '46' ] */
// Não pega '120' por causa da borda

console.log(texto.match(/\b[\wõ]{7}\b/g))
/* [ 'recebeu', 'milhões' ] */
// Nâo vai pegar 'apostan' por causa da borda