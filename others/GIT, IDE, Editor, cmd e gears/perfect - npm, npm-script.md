# npm e npm-script

# 'log'

+ Rafael Morais de Assis
+ Data: 26/03/2018
+ TAGS: npm, front-end, web moderno

**Fontes e Controle de Versão**

+ finalização de curso web-moderno (26/03/2018)

---

## Dicas Iniciais

Retire o anti virus qudno for dar o `npm install`. Eu nâo fiz isso no dia 07/02/2019 e algumas dependencias nâo rodaram por que o anti-rius estava impedindo.


## npm

Um gerenciando de dependencias. Aantigamente tinha o bower, mas hoje ele é praticamente obsoleto. é necessario instalar o node.js para poder rodar o npm.

Para baixar algo, temos que ter o package.json instalado.

`npm init` ou`npm init -y` para agilizar e criar o package.json

Use `npm install --save [dependencie]` para registrar no packege.json.

Usar somente `npm i [dependencie]` já é o suficiente para salvar nos dependencie de `package.json`

`npm install` instala as dependecia que estao no package.json

As dependeicas de Desenvolvedor `--save-dev`  são aquelas que não são mandados para produção, para o servidor quando fizer o deploy. atalha `-D`

## npm script

O npm permite você criar e executar comandos a partir do prório `npm`. Para isso, voce deve editar um script no package.json, inserir um script. 
Em geral, utilizamos isso para executar coisas personalizdas ou dirematne algumas dependeicas do node_modules

- Exemplo: executar gulp; executar uma dependcia que cria ums servidor (http, browser-sync, nodemon)


- Por padrao ele ja tem o `start` e `test`
- Para cada comando voce pode ter um `pre` e `post` para qualquer comando, que executa algo antes e depois respectivamente do comando principal.


- Para voce por comandos noveos, voce deve usar `npm run [command_personalizado]` que aí roda o seu comando. voce tambem pode usar `&&` para depois de um comando executar outros numa mesma linha

**Exemplo de npm-script**

- [link onde explica melhor](https://serfrontend.com/blog/como-usar-npm-scripts-para-criar-diretorios-no-ambiente-windows/)
- Nesse npm script, estamos colocando as coisas do node_modules na pasta src/components, automaticamente quando fazemos `npm install`

```json
"devDependencies": {
    "mkdirp": "^0.5.1"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "echo Start",
    "prestart": "echo PreStart",
    "poststart": "echo PostStart",
    "preinstall": "mkdirp src/components/bootstrap/ src/components/font-awesome/",
    "postinstall": "cp -r node_modules/bootstrap/dist src/components/bootstrap/ && cp -r node_modules/font-awesome/css src/components/font-awesome/ && cp -r node_modules/font-awesome/fonts src/components/font-awesome/"
  },
```







