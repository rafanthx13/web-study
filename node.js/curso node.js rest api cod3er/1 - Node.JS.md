# 

## O que é o Node.js

Ambiente JavaScript para executar no Server-Side. A vantagem é por usar o JS que é sabido pelos desemvolvedores FrontEnd

### Modo REPL - Evaluate Repeat Loop

Modo excutar de node em linha de código, sem executar em arquivo:

````
$ node
````

Vai aparecer `>` e ai você pode digitar os comandos em node

Exmeplo do console

````
> console.log("hello")
hello
undefined
> parseInt('4A')
4
> 
(To exit, press ^C again or ^D or type .exit)
> 
````

**Múltiplas linhas**
Com o comando `.editor`

````
> .editor
// Entering editor mode (^D to finish, ^C to cancel)
function sum(n1, n2){
  return n1 + n2
}

undefined
> sum(1, 9)
10
> 

````


### Executar arquivo node `global` e `process`

**Executar Node**

`$ node file_name.js`


**`global`**

Análogo ao `windows` do javascript (que manipula a DOM), é o objeto que possui tudo

**`process`**

Através dele podemos saber onde está ocorrendo a execuçÂo de um arquivo.
+ É capaz de se inscrever em eventos de manipulaçâo de scripts `node`
+ 1. Saber onde está sendo executado o script `process.cwd()`
+ 2. Pegar os argumentos do script `process.argv`
  - Para usalo, você tem que passar a posiçâo do arqgumento
  - Exemplo, para pegar o número 10, tem que pegar a terceira posiçâ 2
    + execuçâo do arquivo: `node file.js 10` 
    + pegar numero 10: `process.argv[2]`


### `modules`

cada arquivo js é considerado um módulo, e assim, está isolado dos outros módulos.

O `node` implementa uma especificaçâo chamada *COMMONJS SPEC*:
+ `modules.exports`: especificamos o que exportaremos de um modulo
+ `require("module-name")`: importar um módulo

#### importando módulo Built-in/Core do node

módulo `fs` (FileSystem) (módulo nativo do próprio node) para manipulaçâo de arquivo.

````javascript
const fs = require('fs')


fs.writeFile(process.argv[2], process.argv[3], (error)=>{
    if(error) throw error
    console.log(`Arquivo ${process.argv[2]} foi salvo com sucesso.`)
})
````

#### importando módulo personalizado

Arquivo do módulo (Há várias formas de fazer um import)

````javascript
//fatorial.js

const fatorial  = (num)=>{
    if(num === 0) {
      return 1
    }

    return num * fatorial (num - 1)
}

// Forma mais comun
module.exports = fatorial

/* **** Outras Formas **** */

//exports.fatorial = fatorial

//exports = module.exports


/*module.exports = {
  fatorial,
  funcao: funcao2
}*/
````

Importando

````javascript

const fatorial = require('./fatorial')

console.log('n-fatorial')

/*console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', ()=>{
  console.log('script está prestes a terminar')
})*/



const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)
````

### Debugar/Depurar Node

A ferramenta padrão para debugar `node` é o `Google Chrome`

COmo debugar

1. Deve ser posto uma flag ao executar um arquivo node. Coloque a flag `--inspect` para algo que vai ficar aberto por um longo tempo ou `--inspect-brk` para script rápidos e pequenos
2. Abra o chome e va na URL `chrome://inspect/`
3. Lá deverá aparecer o link e abrirar no debugados, onde você pdoe: testar expressoes que estâo na execução; por breakpoints; vÊr a pilha de chamadas (stack) e etc..
