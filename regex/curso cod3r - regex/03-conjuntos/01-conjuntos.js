const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// para definir uma classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g
// Buscar por um conjunto equivale a vários pipes '|'
// no caso, equivale a fazer /2|4|6|8/g
console.log(texto.match(regexPares))
/*  ['2', '4', '6' ] */

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g
// Equivale à: /na|nã/g
console.log(texto2.match(regexComESemAcento))
/* [ 'nã', 'na' ] */