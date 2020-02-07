# Projeto

Cenário Inspirado em Ifood

## TypeScript

**Vamo usar Ferramentas do NPM para CONVERTER TODO CÓDIGO JAVASCRIPT EM TYPESCRIPT**

Colocando TYPESCRIPT GLOBAL:

`npm i typescript -g`

COm ele instalado, você pode usar os comandos `tsc`

`tsc --init`: Gera `tsconfig.json` arquivo que especifica as configurações do compilador de TYpeScript

`tsc` comado que vaii compilar arquivos `ts` que tem javascript padrâo para em `js` com typeScript


````json
{
	"compilerOptions": {
		"outDir": "dist",
		"target": "es2015",
		"module": "commonjs"
	}
}
````
+ "target": "es2015", ==> VERSÂO DO ECHPARA IMPORTAR, 
+ "module": "commonjs" ==> SISTEMA DE MÓDULOS CO COMMONJS (usar require, para exportar module.exportsMA SCRIPT)


## Ambiente para programar

instalamos nodemon com `npm i nodemon -g` que vai restartar o node a cada modificaçâo na pasta dist, para isso, fazmeod `nodemon dist/main.js`. Assim, a cada modificaçâo nessa pasta vai restartar o node. E também faço `tsc -w` para `watch` os arquivos typescript e complilálos.

Junsto, os dois criam um ambiente ideal para criar o typesScript, compilalo e reexecutar a aplicação automaticamente

## lib do node : `restify`

Configuar servidor, rotas e portas.

**Parecido com o `express.js` mas nâo é ele**

### diferenças entre restify e express.js

+ o restify já trabalha no json por padrâo. no express, tem que indicar.
+ O tratamento de erros é melhor tratado no restify
+ O restify traz um suporte mínmimo à hypermédia

### Arquitetura da requisiçâo do `restify`

req = request: relacionado ao dados de quem solicitou
resp = a resposta a serr dada
next = define o fim da resposta

````javascript
server.get('/hello', (req, resp, next)=>{
  // Outros métodos
  // espefcificar o contentType
  resp.contentType = "appliaction/json"
  // setar status
  resp.status(400) 
  // O método 'json' faz o contentType para JSON e depois faz um send()
  
  // Dados do "req" ou seja, de quem fez a requisição
  resp.json({
    browser: req.userAgent(), // browser de quem chamou
    method: req.method, // metodo HTTP de quemc hamaou
    url: req.href(), // descobrir a URL que foi chamada
    path: req.path(), // a rota da chaamda
    query: req.query  // parametos da request
  })
  // Mensagem Default
  // resp.json({message: 'hello'})
  return next()
})

````

main.ts
````javascript
import * as restify from 'restify'

// Criar Servidor
const server = restify.createServer({
  name: 'meat-api',
  version: '1.0.0'
})

// Plugin para o restify detectar melhor os parametros
server.use(restify.plugins.queryParser())


server.get('/hello', (req, resp, next)=>{
  // Outros métodos
  // espefcificar o contentType
  resp.contentType = "appliaction/json"
  // setar status
  resp.status(400) 
  // O método 'json' faz o contentType para JSON e depois faz um send()
  
  // Dados do "req" ou seja, de quem fez a requisição
  resp.json({
    browser: req.userAgent(), // browser de quem chamou
    method: req.method, // metodo HTTP de quemc hamaou
    url: req.href(), // descobrir a URL que foi chamada
    path: req.path(), // a rota da chaamda
    query: req.query  // parametos da request
  })
  // Mensagem Default
  // resp.json({message: 'hello'})
  return next()
})

// 2 CallBacks, ou seja, ocorre dois eventos
server.get('/info', [
  (req, resp, next)=>{
    if(req.userAgent() && req.userAgent().includes('MSIE 7.0')){
    //resp.status(400)
  //  resp.json({message: 'Please, update your browser'})
    let error: any = new Error()
    error.statusCode = 400
    error.message = 'Please, update your browser'
    return next(error)
  }
  return next()
},(req, resp, next)=>{
  //resp.contentType = 'application/json';
  //resp.status(400)
  //resp.setHeader('Content-Type','application/json')
  //resp.send({message: 'hello'});
  resp.json({
    browser: req.userAgent(),
    method: req.method,
    url: req.href(),
    path: req.path(),
    query: req.query
  })
  return next()
}])

// Start Servidor
server.listen(3000, ()=>{
  console.log('API is running on http://localhost:3000')
})
````

## HTTP

REQUEST
Método: POST/GET/PUT/DELETE/HEADER
REcurso: index.html; image.jpg; e etcc

RESPONSE
Status: 200 (ok), 400 (bad request), 401 (not autorized), 404 (not found resorce)
Mensagem: Algo rápdio
Body: Corpo da mensagem
Headers:

## REST

REST - REPRESENTATIONAL STATE TRANFER

É um estílo arquitetura para expor a API em forma de URL pelo protocolo HTTP.

Exemplo, lista de escolas

GET: /escolas
 ==> retun [ lista de escolas ]
POST: /escolas
 ==> OK/Fail (cria ou nâo o recurso
