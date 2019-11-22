# Node

**Curso Udemy: Cod3r - React-Redux**: Módulo de Node.js do projeto MEAN (Mongo, Express, AngularJS, Node)

## VSCode

+ Há uma extesâo chamada `Node Exec` que permite executar o arquivo node com `F8 ou F9`.


## O que é o Node

É JavaScript no lado do Servidor. Como é no lado do server, nâo há manipulaçâo de DOM. Devido a sua flexibilidade, se torna algo semelhante a ter o python no lado do servidor

## npm

É o gerenciador de dependicias do node.


### Modularizaçâo no node

**Exportar**

````js
// ex02_teste.js
const utils = require('./ex02_utils')

console.log(utils.upper('show de bola!'))
````


````js
// ex02_utils.js
  function upper(text) {
    return text.toUpperCase()
  }

  module.exports = { upper }
````

### Questão Global no Node

EM geral para por algo global (e ser acessável por toda a aplicaçâo, desde que importado aquele arquivo) de acordo como código abaixo.

Ao criar algo ela **NUNCA VAI PARA ESCOPO GLOVBAL, A NAO SER QUE VOCê EXPLICITE ISSO**.

O correspondente do windos no Broser é o global no node.

````js

const PI = 3.14
console.log(global.PI) // undefinieds, ao cria

global.obj = { name: 'Estou no global!' }


//Acessando em outro arquivo
require('./ex04_global')

console.log(global.obj.name)
// Outra forma de acessar a variável global é com 'obj'
console.log(obj.name)


// Ao executar teremos
/*
undefined
Estou no global!
Estou no global!
*/

````


### `this` em `node`

Para quem aponta o this?. Nos expelos abaixo você vai perceber que o this aponta para `module.export`. Com isos temos que, uma forma de exporta alguma coisa é colocando algum daod no `this` e fazer um `require``do arquivo.

````js
// file :: ex05_module.js
console.log(global == this) // false
console.log(module == this) // false
console.log(module.exports == this) // true

this.digaOi = function () {
  console.log('Oi!!!')
}

// file :: ex05_teste.js

const modulo = require('./ex05_module')

modulo.digaOi() // => "Oi!!!"

// exec :: ex05_teste.js

false
false
true
Oi!!!


````


### `process` e parâmetro de bash
````js
/*

`process` é a variável que gaurda parametro de execuçÂo (quando usar bash)

Execução::

node ex08_process.js 
> Tranquilo

node ex08_process.js --producao --outro algo
> Atenção Total

node ex08_process.js --algo --nao --esta --certo
> Tranquilo!!!

*/

function temParam(param) {
  // retorna o index do paramtero caso estiver la,
  // se não estiver retorna falso, caso estiver, retorna true
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
  console.log('Atenção total!') // tem o parametro --producao
} else {
  console.log('Tranquilo!!!') // não tem a flag produção
}
````

**STDIN/STDOUT**

````
/*
Com process é possível dar um 'printf' e também um 'scanf'
Execução::

Está gostando do curso?sim
Sua resposta foi sim
Obrigado!

*/
process.stdout.write('Está gostando do curso?')
process.stdin.on('data', function(data){
  process.stdout.write(`Sua resposta foi ${data.toString()}Obrigado!\n`)
  process.exit()
})
````

### lib http : subindo um servidor simples

````js
/* Vamos criar um servidor HTTP simples
    + Em geral usamos express ao invés do HTTP
*/

const http = require('http')

const server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('<h1>Acho que é melhor usar o Express, não?</h1>')
})

const porta = 3456
server.listen(porta, function(){
  console.log(`Escutando a porta ${porta}`)
})

````
