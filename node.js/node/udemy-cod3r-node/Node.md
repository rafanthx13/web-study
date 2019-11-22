# Node

# 0 - Visão Geral e Observaçaões

### Links

Curos udemy



## 1 - Node.js == JS no Back-end like php

#### Como o node funciona

O node.JS foi é uma revoluçâo para o JavaScript. Apartir dele podemos rodar JS no back-end pois o node oferece o ambiente/runtime para isso.

#### Arquitetura

Ele opera como o apache, sendo que tem um funcionamento diferente. Ele roda um EventLoop e cada request que chega ele manda para uma thread worker, assim, ele tem menor consumo de memoria e atende mais a medida que o numero de concorrencia cresce em relação ao normal. (Verificar diferença entre apache x ngnix)

Essa forma de operar é vantajosa, pois é a forma assynchorna, a mesma do JavaScript e a mesma da Web

A engine sao 2

+ V8 : engine da google, interpretador Javascript que chamara o LIBUV, é 
+ LIBUV : Faz o IO : Ler arquivo, acessar disco, requisiçôes (processos lentos) que tem o EventLoop (Unica thread infinta que torna assincrona)

#### Descrição

Here is how Node.js handles a file request:

1. Sends the task to the computer's file system.
2. Ready to handle the next request.
3. When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.



## 2 - Sistema de Módulos = Como a aplicação é organizada

#### A forma de organizar pasta difere para back e front

Em front-end costuma-se ter varias pastas e arquivos, geralmante nos mimificamos tudo pois como sera executado no bwoser do cliente, tem que ser o mais leve possivel. Também compactamos vários arquivos em um só.

No Back-end/node.js nao presisa, pois sera executada no proprio servidor

#### node e módulos

**No node, umarquivo é um modulo**, e organizmaos em pastas e arquivos. E como é executado no servidor, não presiamos minificar nem compactar. O que mais será feito é trafegar JSON para o usuário.

Tudo que fica escrito um módulo fica disponivel somente no módulo, semelhante as classes em Java. Um módulo do node é um arquivo JavaScript, e, executamos o node ao fazer `Ctrl + Alt + N`.

Para tornar os dados de um módulo público para os outros, temos que exportar um código

Existem 2 padrôes: comunsJS e o do ECHMA2015 (import export mas nao é tao prinicpal)

##### Exportar e Importar dados de um módulo

Pra exporta dados, temos que por ele numa aréa especial, no module.exports. Ele é um objeto que comça vazio para todos os arquivos JS, e como objeto, é adicionado ao se declarar atributo dinâmicamente

Há 3 formas de importar

1. require com caminho relativo 
   + Exemplo:
     + `const moduloA = require('../../../1-arquivosEmNode/moduloA');`
       + sobe duas pastas, entra na pasta 1-arquivosEmNode e busca o moduloA.js
     + `const moduloB = require('./moduloB')`
       + procura na pasta em que está o arquivo moduloB.js
2. require do caminho absoluto
3.  fazer o importe de um modulo node : (procura por uma `/node_modules` lê a pasta do que foi inidcado e lê o `index.js`dela)

###### modulo A - Deixano dados exportos

````javascript
console.log(this) // o exports/arquivo começa com {} pois nao ha nada no proprio modulo

this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'

// this. , exports. module.exports são as mesma coisa
console.log(this) 
/*{ 
    ola: 'Fala Pessoal',
    bemVindo: 'Bem vindo ao node!',
    ateLogo: 'Até próximo exemplo' 
}*/
````

Apesar de pomos fazer com `this.` e `exports.` a melhor forma mesmo eh usando `module.exports`

###### modulo B - A melhor forma de exportar

A melhor forma para exportar dados de um módulo

````javascript
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}
````

###### modulo C - Importar dados com `require`

Para importar um módulo usamos `reuqire` mais o caminho relativo para o arquivo com seu nome sem extensao `.js`pois já colocar por padrão

````javascript
const moduloA = require('./moduloA') // caminho relativo, esta dizendo que estou na mesma pasta
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloA)
// { ola: 'Fala Pessoal',
//   bemVindo: 'Bem vindo ao node!',
//   ateLogo: 'Até próximo exemplo' }

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

console.log(moduloB) // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }
````

###### Fazendo require de caminho relativo

````javascript
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

````



### 3 - Comandos no terminal do node e npm  

#### node

`node -v` : Verifica se foi instalado o node

#### npm

npm (node package manager) é o gerenciador de dependicias de modulos do node (js), assim como maven para Java e composer para php. Como ele possui muitos arquivos fica inviavel exportar milhares de arquivos, então , ele não é mandado para o github e por isso entra no .gitignore.

+ Ao executar o npm, coloca-se as dependencias na pasta /node_modules. Se ela não existir, então ela é criada. Além disso gera package.lock que informa tudo o que foi baixado na instalação do módulo.

- Mesmo que a pasta /node_modules não esteja junto do arquivo que fez o require, o node busca subindo as pastas até achar a node_modules
- Ao usar modulos de terceiros, você não presisa usar path relative, apenas o nome já serve. desde que seja o meso de uma das pastas do /node_modules
- Ao procurar algum modulo no node_module, ele procura o arquivo `index.js` da pasta com o nome que faz o require do que é necessario. Com isso, voce pode criar sua propria lib e deixar o `index.js` para indicar o que sera pego.
- Módulos internos do node como `http`nao presisam de npm e podem ser chamados a qualquer hora

###### Comandos

`npm -v` :  Verifica se foi instaldo o npm e informa a versão

`npm init` : Serve para iniciar um wizard para definir o seu arquivo package.json. Via fazer uma série de peguntas sobre seu projeto.

+ se der `npm init -y`ele vai responder sim pra tudo e geral mais rapidamente

`npm i node_module` : Instala o módulo node informado na pasta node_modules. 

+ O `i` equivale a escrever `install`. É uma forma mais reduzida

  `npm i --save node_module` : Além de instalr o modulo, tambem vai salvar esse modulo na area de `dependencies` do arquivo package.json

####package.json

pode ser inicializado por `npm init`

no Package.json tem uma área de  devDependencies Exemplo: `npm install --save-dv` essa parte de deve significa que é uma dependencia que sera usada somente em produção, como a área de teste

###### Rodando scripts em package.json

O package.json é um arquivo que contem a descrição e todas as dependencias do projeto. Mas tambem podemos a partir do camos "script" rodar scripts JS. Dessa forma, podemos inicializar nosso programa executando o package.json para dar o start no arquivo que queremos.

Voce pode definir  assim no packege.json : Terafas automzatizadas; Executar suite de testes; Iniciar no modo de desenvolvimento; gerar arquivos para produção



""

##### Exemplo de package.json

Na parte de script, podemos dar `npm start` ou  `npm test`  Isso fara com que execute o `main`primiero (funcionario.js) mas que tambem rode o modulo nodemon.

Para executar "mydev" temos que executar `npm run mydevStart` pois o npm so sabe por paradrao o star e test, mas nao reconhece outros.



````json
{
  "name": "funcionarios",
  "version": "1.0.0",
  "description": "",
  "main": "funcionarios.js",
  "scripts": {
    "start": "nodemon",
    "mydevStart": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "0.17.1"
  }
}
````





### packege-lock.json

Possui exatamente as dependencies que foram baixasdas. ELe deve ir para o github, pois assim  quando outro pega-sem o projeto baixariam exatamente a versão que estmaos usando

Nele tem o caminho da versão exata que você baioux

#### ### 4 -  Outros Tópicos

### Cache dos modules pelo node - Criando instância única

O node faz cache do que é feito `require`. Ou seja, se importamos com `require` mais de uma vez, para variaveis diferentes e mexermos em cada uma de suas instancai, **O valor sera compartilhado**. Pois se o opbjeto ja foi expostado, ele nao esporta denovo como uma nova instnaciia

Podemos usar uma funcao factory para trbilar esse cache.

###### modulo comun - o node faz cache do modulo

````
// node faz cache desse modulo, como um atributo static em java
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}
````



##### modulo nao chacehado - voce pode driblar a partir de uma function Factory

````
// Uma factory retorna um novo objeto to hora
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

````

##### Testando

````
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3, 3 
// contadorA == contadorB pois vem da mesma infromça~, 
// pois o obejto que veio de seu modulo foi cacheado

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3, 1
// nao eh cacheado pois retornou uma function que retorna um novo ovjeto
// assim, a funcao eh a mesma, masi o objeto gerado nao sera ccheado
````







#### objeto global

O objeto global fica presente em todo e qualquer modulo. 

Podemos colocar atrbutos/objetos proprios no global que, quando feito o require do modulo que faz isso, a paritir dessa hora, em qualquer modulo que for carregado fica podendo usar aquilo que veio de global

**Warinig**: EM geral nao mexa no global, use o sistema de modulos do node, é o mais correto e evitar bugs, pois global sera acesasdo em qualquer lugar

````javascript
// globalAlter.js
// console.log(global) -- Umonete de coisa
// Definindo atributo MinhaApp no global, está congelado para nao mudar
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})
````



````javascript
require('./globalAlter') // fez o require do modulo que modifica global, entao, vai mudalo

console.log(MinhaApp.saudacao()) // voce executa como se já existice

MinhaApp.nome = 'Eita!' // O objeto global fica passivo de ser mudado
console.log(MinhaApp.nome)
````



### .this em node

O .this aponta para coisas diferente dependendo de onde é chamado

1. Fora de Qqualquer coisa: Aponta para `module.exports`
2. Dentro de função : `global`
3. Dentor de Objeto : `a referencia do objeto` Como em Java

````javascript
// Neste escopo, this aponta para module.exports
console.log(this === global) // false
console.log(this === module) // false
console.log(this === module.exports) // true
console.log(this === exports) //true

function logThis() {
    // Neste escopo, this aponta para global
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

const obj = {
    // Neste escopo, this aponta para obj (a referencia par ao objeto) (Como Java)
    nome : 'objeto',
    aFunciton : function () {
        console.log('Dentro de um objeto...')
        console.log(this === exports) // false
        console.log(this === module.exports) // false
        console.log(this === global) // false
        console.log(this === obj) // true
    }

}

logThis()
obj.aFunciton()
````

### 5 - File Syste: módulo para IO em arquivo

Usaremos um modulo chamado `fs`(fileSystem).  Há duas formas de abrilo

+ Sincrona : Forma usual que fariamos
+ Assinchorna: Utilizamos uma calbak, asism, quando o arquivo estiver pronto, vai executar o calla back, mas, até esta pronto, o coidgo roda o restante do arquivo

__dirname : Constante de todo modulo que tem o diretorio de onde esta o arquivo

###### read

````javascript
//fs é o modulo FileSystem que usaremos para ler um arquivo
const fs = require('fs') 
const caminho = __dirname + '/file.json' // path do file que tem um Json


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
    // convetermos de string para JSON, nao faz isso auto
    console.log(`${config.db.host}:${config.db.port}`)
})

// Outra forma de importar um arquivo JSON
// Aqui fara automaticamente o parse para JSON por que expliciamtos sua extensao
const config = require('./file.json')
console.log(typeof config) //object 
console.log(config.db)

// Ler um diretorio com fs
// __dirname : Nome do direotrio em que se esta
console.log(`__dirname: ${__dirname}`);
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
````

###### write

````javascript
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
````



### 6 - FrameWork Webs

**biblioteca/lib** : Conjunto de funcionalidades prontas para atender aobjetivos especificos e claros. Ficam em geral no node_modules

+ jQuery; lodash; axios (Ficam no no)

**frameWork/Arcabouço**:  Ele cria uma estutura para a sua aplicação em que você codifica seu app sobre ela. Tanto é que é necessario fazer configurão

+ Vue.js; Express (FrameWork BackEnd)

#### 7 - Chain of Responsability (Middleware)

Padrâo muito presenete no node.js

A ideia é seprar em pequenos passos que não estejam amarrados entre si. Seria como fazer uma lista Encadeda em C, onde depois de executar um pasos, há um campo com `next` para indicar qual o passo seguinte.

Em JS esse next sera uma função, entao poderemos configurar a chamada da função.

O next pode apontar para qualquer outro passo. Dessa forma, não há acoplamento entre os passos.

É uma versão orientada a objeto de `if ... else if ... else if ....... else ... endif`. Foce tem uma função que conhece o proximo até está pronto

Uma grande vontade é que voce pode  inverter ordem, tirar elemtnos e coisas do tipo na hora da chamada. É como uma cadeia dinâmica e super flexivel



````javascript
/*  Fazendo ChainOfResponsability
        ctx = contexto, sera o objeto que sera trabalhado no decorre dos passos
        next = Função que quando chamada, dispara o proximo passo na cadeia
        JS tem a vantagem que em uma sequencia de &, se ja der um false, ele nao avaliar os outros

*/

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

// este sera o ultimo, pois ele nao tem next
// Aqui, o middleware nao chama um proximo passo, e isso pode ser feito
const passo3 = ctx => ctx.valor3 = 'mid3' 

// ... == operator rest que junta num array elementos
const exec = (ctx, ...middlewares) => {
    
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // se o array existe e o indice esta fora do array
            middlewares[indice](ctx, () => execPasso(indice + 1)) 
            // Recursividade, vamos pegar uma chain e executar seu proximo passo
    }

    execPasso(0) // vai começar a partir do 0
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
````

### 8. process : IO no node

objeto process: apartir dele, conseguimos ler dados da saida padrao (teclado). 

+ .argv = atributo que contem o arra das constantes pasasdas no temrinal

+ process.stdout.write : escreve na tela e nao dá ln

+ process.stdin.on : Serve para entrada de dados, ele lê~tambem o \\n

+ process.exit() : mata o processo

  Exemplo:

  ````javascript
  // terminal: node [arquiv.js] -a
  const anonimo = process.argv.indexOf('-a') !== -1 // estou procurando a flag -a, no array que é passado por parametro

  // console.log(anonimo)

  if(anonimo) {
      process.stdout.write('Fala Anônimo!\n')
      process.exit()
  } else {
      process.stdout.write('Informe o seu nome: ')
      // esse data é o evento,, no caso, quando o usuario digitar
      process.stdin.on('data', data => {
          const nome = data.toString().replace('\n', '') 
          // tambem é enviado o ENTER (\n)

          process.stdout.write(`Fala ${nome}!!\n`)
          process.exit()
      })
  }
  ````

  ​

