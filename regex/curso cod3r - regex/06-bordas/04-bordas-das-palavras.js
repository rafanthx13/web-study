const texto1 = `dia diatonico diafragma 
media wikipedia bom_dia melodia radial`

// !!!!! borda '\b' éo oposto de '\w' como [^A-Za-z0-9_]

// \\b quer dizer borda de palavra
console.log(texto1.match(/\bdia\w+/gi))
// vai selecionar palavras que começam com 'dia'
/* [ 'diatonico', 'diafragma' ] */

console.log(texto1.match(/\w+dia\b/gi))
// Seleciona palavras que terminam com 'dia'
/* [ 'media', 'wikipedia', 'bom_dia', 'melodia' ] */

console.log(texto1.match(/\w+dia\w+/gi))
// Selecionandmo palavras que tem 'dia' no meio
// para isso, nem precisamos de usar bordas com '\b'
/* [ 'radial' ] */

console.log(texto1.match(/\bdia\b/gi))
// Seleciona apenas a palavra dia
/* [ 'dia' ] */

// borda é não \w, que é [^A-Za-z0-9_]... 
// temos problemas pois isso não inclui acentos!
// Ou seja, em lingua POrtuguesa, não pegaraia as bordas com acento
const texto2 = `dia diatônico diafragma, 
média wikipédia bom-dia melodia radial`

console.log(texto2.match(/\bdia\b/gi))
// Seleciona os 4 dias ==> 'dia', ''média', 'wikipédia', 'bom-dia'
// 'dia' (Correto)
// 'média' (Errado) : Selecionou pois 'é' não é pego pelo '\b
// 'wikipédia' (Errado) : Análogo ao caso anterior
// 'bom-dia' pois a borda nao pega '\b'
/* [ 'dia', 'dia', 'dia', 'dia' ] */

// OS problemas da borda acontecem pois o \b NÃO PEGA TUDO
// Uma soluçâo seria: \b ==> (\S*)? ou ([\wÀ-ú-]*)?

console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra!
/* [ 'dia',   'diatônico',   'diafragma,',   'média',
     'wikipédia', 'bom-dia', 'melodia', 'radial' ] 
*/

console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
/* [ 'dia', 'diatônico', 'diafragma', 'média', 'wikipédia',
     'bom-dia', 'melodia',  'radial' ] */