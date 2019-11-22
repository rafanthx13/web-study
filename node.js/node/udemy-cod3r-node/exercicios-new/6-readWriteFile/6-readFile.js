//fs é o modulo FileSystem que usaremos para ler um arquivo
const fs = require('fs') 
const caminho = __dirname + '/file.json' // path do file


//      sincrono ... Nao é a melhor forma aqui, vai usar o eventLoop
// Vai ler o arquivo com utf-8
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo) // Imprime corretamente

// assincrono... -  Essa é a melhor forma.
//  Ele vai chamar e durante a execução vai continuar
//  Assim, não vai travar o EventLoop
//  O que está acontecendo: 1. Vai chamar o arquivo, quando ele estiver carregado, ai executara a call back.
//  2. Mas, enquanto espera ler o arquvio, ele continar a ler o codigo
//  3. Asism, essa parte é mostrada no final
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Outra forma de importar um arquivo JSON
const config = require('./file.json')
console.log(typeof config) //object = como especificamos a estensao, ele sabe que é um JSon e nao resisa fazer o parse
console.log(config.db)

// Ler um arquivo coom modulo fs
// __dirname : Nome do direotrio em que se esta
console.log(`__dirname: ${__dirname}`);
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})