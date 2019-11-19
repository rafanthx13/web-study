# terminal, cli, cmd, command

# log

+ Rafael Morais de Assis
+ Data: 16/03/2010
+ TAGS: termnial, prompt de comando, cmd, cli

**Fontes e Controle de Vesão**

+ Conteudo do Curso : Front-end moderno: Gulp, SASS, NPM-script, Git e Git-bash (26/03/2018)
  - https://www.udemy.com/ferramentas-front-end-git-npm-script-gulp-e-sass/learn/v4/content

---



## Terminal

- Chamado de cmd, prompt de comando ou cli (command-line)
  - CLI que significa *command-line interface* (interface de linha de comando), ele é resumidamente uma interface que suporta passagem de parâmetros via linha de comando em terminais e/ou semelhantes.
- Você abre o prompt do windows com `Windows + r (executar)  ` e depois digitar cmd (No windows)
- Porém, saber os comandos do teminal do Windows não é muito útil pois diferem do Linux, então, de preferência, instale use o terminal do **Git Bash** pois ele simula os comandos do UNIX que é universal para qualquer SO.

## Terminal Git Bash

- O terminal do Git bash simula os comandos do UNIX, que são os mesmo do Mac e Linux
- `tab` : Tanto no git bash como windows, voce pode usa `tab` para auto-preencher com o nome de arquivo/pasta (de acordo com o local em que está) ou para commandos. 
- `Home ~ ` qual longe esta do diretorio home, que é a pasta do Rafael/ no meu caso 


- `up e down` : Voce poode suar as teclas `up` `down` para usar um ultimo comando já digitado
- Para qualque comando, voce pode dar:
  - `[command] --help` que vai listar informaçao sobre o comandos e todos os seus parametros adicionais

##### Comandos

`pwd` : print work directory : print o caminho completo até onde se estar

`cl`: limpa a tela ou `clear` (Pode ser feito com `CTRL + L`)

`ls` : lista arquivos do diretorio atual

`ls -a` : Lista pastas e arquivos e tambem pastas e arquivos ocultas (que começam com `.` como /git)

`ls -a -l` : Alem de lsitar tudo, voce lista tambem outras informações

`cd [nome_pasta]` (change directory)

`cd ..`: Volta um nível acima

`cd ~` : Atalho para ir para a pasta home

`mkdir [Nome_pasta]` : Cria a pasta

`echo ` : Serve para escrever, por padrao escreve na tela

`echo [escreve algo] > index.html` : Vai escrever no arquivo index.html, para isso voce usa o > index.html. Ele reescreve todo o arquivo

`echo [something] >> arquivo` faz um *append*, ou seja, o que for digitado é adicionado no fim do arquivo

`touch [arquvivo.ext]` cria arquivo vazio

`cat index.html` vai mostrar o que esta escrito noa rquivo index.html

`rm [arquiv.ext]` apaga o arquivo

`mv [file] [folder]`: Move arquivo para outra pasta

- Voce tambem pode criar varias pastas como `mkdir`, isso torna até mais facil de criar pasta do que cliacando e pondo nome
  - `mkdir pasta1 pasta2 pasta3 pasta4 past5`

`rmdir {Nome_pasta}`: Remove pasta, so que só consegue remover uma pasta vazia. Para remover os arquivos e a pasta tambem, podemos fazer `rm -rf [pasta]` o r quer dizer recurso e o f de force para forçar a remoçao, assim vai remover arquivos e a pasta

###### Varios Comandos

- `&&` : pode usar o operador `&&` para executar varios comandos numa mesma linha
  - Exemplo: `mkdir Projteo && cd Projeto` : Assim vai criar e entrar na pasta no git bach 





