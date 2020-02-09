const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// Criar regex que pegue os números entre 0-255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))
// borda é para pegar os número separados
// (\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])