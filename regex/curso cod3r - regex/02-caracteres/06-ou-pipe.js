// O '|' é alternativas
const texto = 'Você precisa responder sim, não ou não sei!'
console.log(texto.match(/sim|não|sei/g)) // alternativa (OU)
/* [ 'sim', 'não', 'não', 'sei' ] */