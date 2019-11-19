# Gulp

# Log

+ Rafael Morais de Assis
+ Data: 26/03/2018
+ TAGS: front-end, gulp, erb moderno, automatizador, caixa-de-ferramentas

**Fontes e Controle de Versão**

+ finalizaçao do curos da udemy-web-moderno (26/03/2018)

---



## Gulp ("Automatizar tarefas chatas")

Serve para automatizer tarefas como:

- Compilar sass e outas coisas
- minificar e renomear
- concatenar arquivos
- Útil para desenvovimento e para produzir os arquivos de produção
- Pode personalizar os plugins para executar um servidor

**História**: Tarefas como lsitadas acima são chatas de se fazer, para isos existe ferremntas que faem elas automaticas, sendo que temos que programalás. Outra alternativa é o **grunt** mas já está velho

##### Instalando Gulp

- Instale localmente o gulp na parte de Desenvolvedor
- `npm i gulp -D`
- O gulp é semelhante ao nodesass, voce presisa executar ele pelo npm script (a nao ser que tenha o instaldo globalmente). Então para executar apartir de  `npm run gulp`, em package.json, temos que por `"gulp": "gulp"` para executar o gulp do node_modules

###### Funcionamento do gulp (gulfile.js)

O gulp é como o npm, ele lê um arquivo e executa as tarefas, por isso, temos que criar o gulpfile.js em(JavaScript/Node.js)

O Gulp faz uso de [plugins](http://gratimax.github.io/search-gulp-plugins/) para facilitar a criação de tarefas, então vou instalar alguns para nós rodarmos nossos testes.

**Exemplo: (Plugin para compilar sass)**

`npm i gulp-sass -D` : dependencia para compilar sass

**Executando gulp**

Configurando o npm script (feito anteriormente), você configura o gulp com

`npm run gulp `

Se voce executar dessa forma, ele vai buscar a task default, mas, apra executar um comando especifico, basta passar mais um apramentro com o nome da task. Exemplo:

`npm run gulp sass`

Executa código do gulpfile

```javascript
var sass = require('gulp-sass'); // carrega do node_modules

// pega todos os arquivos .scss, converte em sass pelo plugin instalado e coloca em outra pasta
gulp.task('sass', function(){
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass()) 
	.pipe(gulp.dest('./dist/css/')); 
})
```

###### Funções e Estruturação do gulp

1. Carregamos o gulp e sues plugins instaldos no node em primeiro lugar, para poder usalos
2. ` task` : tarefa  que tem um nome e uma função a ser executada em sua chamada
3. `src e dest `:  Define os arquivos de origme e destino respectivamente
4. `pipe` : encanamneto de onde sai um arquivo para outro local
5. `watch ` : FUnção de monitoramente de arquivos, cada vez que o arquivo for salvo ele executa a tarefa passada. @1 define os arquivos (e sua extensao tambem), e em segundo o array com as task.
   - Exemplo: `sass/**/*.scss` em todas as pastas da pasta sass que tiver um arquivo .csss vai moitorar, quando tiver alguma ateração e um `save`, executa.

###### gulpfile.js - Exemplo

```javascript
// Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function(){
	// src é de onde vem os arquivos de origem
	// no caso, quer dizer que nas pasta sass, para qualquer passta (**) e para qualquer arquivo .scss (*)
	gulp.src('./src/sass/**/*.scss')
		.pipe(sass()) //pipe eh necessario pois é a tubulaçâo de onde saira o aqruivos de src para dist, no caso, sera feito a opercaçao sass que vem da variavei escolhida
	.pipe(gulp.dest('./src/css/')); // .pipe e depois o dsetnino do arquivo

})

//metodo watch, monitora arquivos
gulp.task('listen', function(){
	// @1 é os arquivos, e em @2, a tarefa a ser executada
	gulp.watch('./src/sass/**/*.scss',['sass'])

})
```

##### Browser Sync - Criando um autoreload do browser pelo gulp

` npm i -D browser-sync`

```javascript
var browserSync = require('browser-sync');
// ...............
gulp.task('server', function(){
	broser-sync.init({
		server: {
			baseDir: 'src'
		}
	})
	// quando houver alguma mchange nos css, vai dar reload no broser
    // **/* => qulauqer arquivo em qualquer pasta
	gulp.watch('./src/**/*').on('change', browserSync.realod)
	// a mesma do listen, mas tambem com o server aberto
	gulp.watch('./src/sass/**/*.scss',['sass']);
})
```

Assim, executa `npm run gulp server`

Uma coisa bacana é que ele abre no seu broswer mas oferece tambem um link para voce acessar externamente pela rede. Ou seja

- Se voce tiver um celular ou outra maquina na mesma rede, voce pode cessar por esse link externo
- Ele tem o "sync" no nome por que se voce mexer no celular, vai mexre no seu pc tambem ew ivce-versa

##### gulp file-include

Serve para incluir trecho de codigo em outros lugares. Semlahente a parte de template. Tipo:

- ter index html, header e footer em arquivos separados. Com file-include, voce junta eles
- `npm i gulp-file-include -D`

```
@@include('./inc/nav.html')
```

```
@@loop('./inc/card-portfolio.html', [
            {
                "titulo": "titulo alterado",
                "imagem": "imagens/portfolio/01.jpg",
                "texto": "texto",
                "link": "#",
                "alt": "texto alternativo"
            },
            {
               "titulo" : "titulo 2",
                "imagem": "imagens/portfolio/02.jpg",
                "texto": "texto",
                "link": "#",
                "alt": "texto alternativo"
            },
            {
                "titulo": "ola, tudo bem",
                "imagem": "imagens/portfolio/03.jpg",
                "texto": "texto kjh skjh kj",
                "link": "#",
                "alt": "texto alternativo"
            }
        ])
```

##### gulp gulp-clean

`npm i -D gulp-clean ` : para limpara a pasta ao fazer os processos do gulp

##### guklp-autoprefixer

`npm i -D gulp-autoprefixer`

- autoprefixer => para poder colocar alumas coisas no sass que deixar os nosso atributos disponiveis para quelaquer broswerpara sertors browser, alguns atributos css presisam de um prfefixo. o autoprefixer ira fazer isso
  - um exemplo eh o atributo filter do css. Ele presisa de um prefixo -webkit para rodar em browsers antigose key frames. Possui tambem mais opçoes na sua docuimentaçao

##### gulp-uncsss

- Se voce testar sua aplicaçao no Chronme, cilcar `f12` , em `networking` , desabilitar o cache e em trobillins por uma rede 3G, voce **Pode observar o carregamenteo de sua pagina em uma rede 3G, ou em de outro tipo, Dessa forma, voce pode medir a perfomace da sua paágina**
- Se voce naotra, o bootsrrap é pesado, sendo que nem usamos todo ele. Isso ocorre pois no bootstarap.min.css tem absolutamente tudo. Mas, **Nos nao usamos tudo**
- Entao, vamos usar  **gulp-uncss** para limapr e so deixar aquilo que usamos
- **Pra qualquer FrameWork que voce pega na Web, nao custa nada executar isso. Reduz em uma boa quantidade o tempo**

```javascript
//vai tirar a gordura do bootstrap e outros
gulp.task('uncss', ['html'], function(){
    return gulp.src('./dist/components/**/*.css')
        .pipe(uncss({ // presiao passar umas configruraçoes: dizer pra ele quais os html de referencia, pra saber quais classes utilizei css
            html: ['./dist/*.html'] // olhar nesses arquivos, e o que nao estiver utilziado, vai deletar do /**/*.css
        }))
        .pipe(gulp.dest('./dist/components/'))
})
```

### Plugins do gulp

- **gulp-sass**: processa scss e sass
- **browser-sync**: cria servidor para rodar a aplicação. tem a vantagem de que oferece um link para a rede em que está para **ser usado e testado em celular**, e sincroniza a tela do pc com a do celular
- **gulp-concat**: Concatena Arquivos
- **gulp-cssnano**: minifica css
- **gulp-clean**: limpa pasta e arquivos (util para antes de voce colocar algo la dentro)
- **gulp-rename** : permite renomear arquivos, e por em todos eles prefixos e sufixo (util para colocar o `.min` de minificado)
- **gulp-uglify**: minifica javascript, troca nomes de variaveis quando possivel, tira espaços e mais
- **gulp-imagemin**: minifica imagens, tenta fazer o melhor possivel
- **gulp-uncss**: serve para retirar de arquivos css aquilo que nao estiver sendo usado. Useo quando usar um boostrap ou alo asism da vida, pois voce nao usa todas aquelas classe no final
- **gulp-file-include**: faz inserçao de html de forma dinamica de outros arquivos html. (Asism voce pode separa um index.html de header.html e footer.html e importalos) (é dinamico, permite loop e aceita configuraçoes .json)
- **gulp-autoprefixer** : algumas classe css  podem nao funcionar em browser antigos por que nao tem alguns prefixos. Pra voce nao se preocupar com isso, esse plugin coloca automaticamente





