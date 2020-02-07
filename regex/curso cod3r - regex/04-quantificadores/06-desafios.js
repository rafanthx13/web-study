// DesafioCPF
const texto_cpf = `
CPF dos aprovados:
- 600.567.890-12
- 765.998.345-23
- 454.674.333-21
- 678.987.123-87
- 789.112.543-00
`
console.log(texto_cpf.match(/\d{3}.\d{3}.\d{3}-\d{2}/g))
// 3 digitos seguidso de '.', 3 dígitos seguidos de '.', 3 dígitos seguido de '-' com 2 dígitos

// DesafioTelefone
const texto_telefone = `
Lista telefônica:
- (11) 98756-1212 
- 98765-4321
- (85) 99988-7766
- (21)3261-8899
`
console.log(texto_telefone.match(/\(?\d{0,2}?\)?\s?\d{4,5}-\d{4}/g))
// Cada parte do DDD é dita como opscional, por isso tem o '?'
// Agora, a quantidade de dígitos tem que ser 0 para que pegue os casos sem DDD


// DesafioEmail
const texto_email = `
Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- joao@empresa.info.br
- maria_silva@registro.br
- rafa.sampaio@yahoo.com
`
console.log(texto_email.match(/[\w.]+@[\w.]+/g))
/* Estou bsucando  
+ '[\w.]+' : Uma sequencia de palavras incluindo o '.' (Um ou Mais)
+ Seguida de '@'
+ Depois tendo '[\w.]+' : Uma sequencia de palavras incluindo o '.' (Um ou Mais)
  - No caso de uma pega o 'gmail.com'; No caso de mais de Um pega 'empresa.info.br'

*/
