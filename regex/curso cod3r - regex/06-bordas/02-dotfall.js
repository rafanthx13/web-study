const texto = `Romário era um excelente jogador\n, mas hoje é um político
questionador`

// Pra resolver o 'dotall' algumas linguagens implementam um falg
// que ao ser aciona o '.' pega o '\n'
console.log(texto.match(/^r.*r$/gi)) // problema do dotall
// '.' não seleciona tudo por que nâo é um 'dotall'
/* null */

console.log(texto.match(/^r[\s\S]*r$/gi))
/* [ 'Romário era um excelente jogador\n, mas hoje é um político\nquestionador' ] */

// Solução: '.' => ['\s\S']
// \s e \S são opostos e se complementam