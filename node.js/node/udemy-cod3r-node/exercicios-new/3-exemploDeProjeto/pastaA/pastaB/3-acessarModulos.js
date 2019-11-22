// Vamos acessar o modulo A
// O VisualCode ajuda a saber o que colcoar em sequencia, 
//      ele dar sugetoes correstas vas culhando as pastas e arquivos
// Se você deixar o mouse emcima, vai poder ver o caminho absoluto
const moduloA = require('../../../1-arquivosEmNode/moduloA');
console.log(moduloA.ola);

// o http eh um modulo padrao do node, por isso nao ta 
// no node_modules e pode ser chamado a qualquer hora
//      Cria servido para a porta 8080, ele fica executando em loop
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
