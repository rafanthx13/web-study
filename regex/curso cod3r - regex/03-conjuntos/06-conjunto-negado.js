const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
// Negaçâo do conjunto de dígitos

console.log(texto.match(/[^0-9]/g))
// NEgaçâo dos dígitos, ou seja, pega tudo menos dígitos

console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))