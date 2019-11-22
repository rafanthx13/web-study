const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// JSON.stringyfy (Tranforma objeto JS em um JSON)
// pasos tambem a callbakc que tera o erro se existir
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') // se estiver nullo, sera ntao salvo
})
// Vai gerar um arquivo, se rodar denovo vai reescerver todo ele