const texto1 = 'O José Simão é muito engraçado... hehehehehehe'

// Grupos sâo feitos comparantesis '()'.
// Emcima de um grupo, eu posso aplicar quantificadores: 
// ? (Zero-Um), + (Um-Mais), *(Zero-Mais), {}(n á m)
console.log(texto1.match(/(he)+/g))
/* [ 'hehehehehehe' ] */
const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
// Pode ter ou não 'http://' seguido de
// Pode ter ou nâo 'www.' seguido de
// Um conjunto de palavaras seguido de '.' seguido de 
// 2 ou mais letras seguido de
// '.' e dois ou mais letras opcionais
/* [ 'http://www.site.info', 'www.escola.ninja.br', 'google.com.ag' ]*/