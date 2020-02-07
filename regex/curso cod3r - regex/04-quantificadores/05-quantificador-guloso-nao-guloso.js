const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÃO gulosos (greedy) por padrão ...

// estou buscando ==>  '<div>' seguido de qualquer coisa (1 ou Mais) e depois '</div>'
// Perceba que: a busca termina na ÚLTIMA 'div'. Mas e se eu quise-se que termina-se na primeira ?????????
// Para isso existe o modo lazy, que vai retonar um match quando encontrar a primeira 'div' de fechamento
// Dessa forma pega cada conjunto de DIV da forma que queremos, se nâo pega a primeira div até o fechamento da última DIV

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))
/* TODOS RETORNAM : [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ] */

// quantificadores NÃO gulosos (lazy)...

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
/* TODOS RETORNAM : [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ] */