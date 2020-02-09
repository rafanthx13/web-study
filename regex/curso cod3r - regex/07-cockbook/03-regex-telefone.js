const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-1234
`

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))
// (\(\d{2}\)\s?)? => DDD opcional cseguido ou não de um espaço
// \d{4,5}-\d{4} ==> COmeça com 4 ou 5 digitos seguido de '-' eterminando em 4 digitos