const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
// Negação do conjunto de dígitos

console.log(texto.match(/[^0-9]/g))
// Negação dos dígitos, ou seja, pega tudo menos dígitos

console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))
// Aqui temos 2 interevalso + \s
/* Regex101
!-/ a single character in the range between ! 
  (index 33) and / (index 47) (case sensitive)
:-@ a single character in the range between : 
  (index 58) and @ (index 64) (case sensitive)
\s matches any whitespace character (equal to
  */