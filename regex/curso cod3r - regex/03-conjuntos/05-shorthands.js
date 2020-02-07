const texto = `1,2,3,a.b c!d?e\r	-
f_g`

console.log(texto.match(/\d/g)) // números [0-9]
console.log(texto.match(/\D/g)) // não números [^0-9], tudo que nâo é numero]

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaço [ \t\n\r\f] incluindo ' '
console.log(texto.match(/\S/g)) // não espaço [^ \t\n\r\f]

// \b \B