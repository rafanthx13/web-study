# Git 

# 'log'

+ Rafael Morais de Assis
+ Data: 26/03/2018
+ TAGS: git, praticas-modernas, svn

**Fontes e Controle de Versão**

+ finalização de curo front-end-moderno (26/03/2018)

---




# Add Credenciais

git config credential.helper store

# Git

- `git init` : Voce cria o `/.git` uma pasta oculta (Voce pode configurar su máquinca para mostrar pastas ocultas mas em geral nao vai presisar). Nessa pasta ira ser salvo os snapshots do git, os commits

- Para abacar um repositorio do git, basta deletar a pasta .git/, é mais facil fazer isso no bash

- `git status` : Mostra arquivos que nao estoa na área de estage e que nao estao comitados. A area de stage é onde o git começa a monitroar as alteraçoes. Se voce altera o arquivo ele ja sai do stage area, entao, toda vez tenho que dar add. 

- A vantagem é que asism posso separar arquivos para commit diferentes

- ` git add [arquivo]/ git add --all`: Adiciona arquivo no stage

- `commit` é como se fosse uma fotografia de seu arquivo, e o commit é o registro, é o aato de bater a foto. `git commit -m ´´[mensagem]´`

- Dependencias nao presisam ser versionadas, entao, colocamos no .gitignore. o .gitignore precisa ser versionado

  `echo "node_modules" > .gitignore`

  ```
  node_modules/
  ```

#### Dicas para escrever .gitignore e REAME.MD no git Bash Rapidamente

###### .gitignore

- O arg `-e` serve para interpretar comandos com \\, como o `\\n` para quebra de linha
- `echo -e '.png\n .class\n node_modules' > .gitignore`: cria o .gitignore e ja coloca texto, se usar  `>> ` voce pode fazer um append

###### README.md

- `echo -e '#Titulo \n '#subtitulo\n\nInicio do projeto' > README.md` Cria do zero se nao existir e poe as tags e texto markdow rescrevendo o que esta la. Pod fazer append com >> no lugar de `>`



### Renomear branch

link: https://stackoverflow.com/questions/30590083/how-to-rename-a-remote-git-branch-name/30590238

````
# rename the local branch to the new name
git branch -m <old_name> <new_name> 

# delete the old branch on remote - where <remote> is eg. origin
git push <remote> --delete old_name

# push the new branch to remote         
git push <remote> new_name

#### Renomear branch

+ Funciona sertinho com sua branh local

````
git branch -m nome_da_branch_antiga novo_nome
````

#  JUNTANDO DE OUTROS LUGARES
--> Se voce quer adicionar novas coisas as funcionalidade, voce faz
	{master} $ git merge nova_funcao

--> UPDATE BRANCHS
	$ git fetch
	+ é o git pull, mas ele pega tudo o que nao tem no remote pra sua branch
	+ O comando git pull faz fech + merge na sua branch do remote

--> Atualizando o Branch com commits do Master
	+ Bem, nesse caso devemos usar o REBASE, seguindo o procedimento abaixo.
		$g it checkout nova_funcionalidade
		$ git rebase master
	+ Isso vai pegar todos os commits que você fez no seu branch e coloca-los
	 	depois das alterações provenientes do master, o que deixa até bem 			organizado, já  que todos os commits referentes a essa 
		funcionalidade ficam juntos um do outro, facilitando depois caso 
		você queira reverter apenas essa funcionalidade	sua branch e faz o 
		merge master


		
		1. Em uma pasta damos o commando no git bash
	$ git init

2. Vamos no github e criamos um repositorio com nome qualquer
	$ criar rep no github (No site) sem nada

3. Pegamos o codigo https e usamos para adicionar um remote
	$ git remote add origin https:github.com........

4. Adicionamos arquivos nessa pasta no PC
	$ toch arq.php

5. vamos mandar tudo para o stage area
	$ git add --all

6. Confirmar modificações
	$ git commit -m "iniciando projeto"

7. Dar o psuh pro remote (perceba que o remote tem que ser adiionado)
	$ git push origin master

OBS: DEU CERTO
	
------------------------------------------------------------------------------------

-->	Atualizando alteraçoes Durante Desenvolvimento
	git add --all
	git commit -m "desrciçâo" 
	git push origin master

------------------------------------------------------------------------------------

--> Se alguem alterou o master, vai dar erro ao fazer o pull
	+ Pra reverter isso fazermos:
	1. entao, vai pra master e faz 
	2. $ git pull
	3. Apos esta UPDATE, voce faz o push ou merge sua branch a master e faz push
	
	
--------
 baixa branch do remoto
 git checkout -t origin/felipe
 
 ### Discartar mudanças do Git
 
 Discard all local changes, but save them for possible re-use later

  `git stash`

Discarding local changes (permanently) to a file

  `git checkout -- <file>`

Discard all local changes to all files permanently

  `git reset --hard`

  Se tudo der certo tente fazer um checkout forçadao
  
  ### checkout forçado
  
  `git checkout -f <branch_destiny>`
  
  ### Mensagem super irritante de erro
  
  Quando aparecer o seguinte:
  
  please enter a commit message to explain why this merge is necessary ...
  
  Faça os seguintes passsos
1. press "i"
2. write your merge message
3. press "esc"
4. write ":wq"
5. then press enter

### ATUALIZAR MINHA Branch
git add .
git commit -a -m "INTRA-{número da sua issue no Jira}: descrição do commit"
git push
git checkout development
git pull
git checkout feature/INTRA-142-edit-collaborator
git merge development

### MERGETOLL - RESOLVEIEDNO CONFLITOS

-->	(kdiff3) conflito em merge/rebase ao fazer
	+ Quando der conflito, voce digita: 
	$ git mergetool
	+ Vai abrir uma ferramenta para resolver conflitos do git, eu instalei a Kdiff3.
	  Abrirá uma tela para cada arquivo
		por ordem de William. Nela abre tres telas.
		A (Base) ==> É o comiti antigo que elas tinha em comun
		B (Local-suabranch)==> A sua branch a que voce esta
		C (De onde ta vindo o merge pra sua) eh a branch de onde veio (merge)
		A tela de baixo é o resultado final, ela é éditavél
	+ Ai, voce tera que resolver todos os conflitos, 
		utilize a setinha 'down' para
		procurar pelos conflitos, e clique em A/B/C pra escolher a souluçâo
		OBS: Escolha as letra entre 'A', 'B', 'C' para escolher a opçâo, elasentoa enbaixo do navbar ondde tem 'Settings' e 'Helping'
			+ Esse botoes só funcionam se deixa o cursor fora do editor
	+ A setsDupla mostra os problemas que o git nao resolveu, 
		enquanto que a seta simples
		msotra os conflitos que o git resolveu naturalmente.
		"Voce deve procurar os da setaDupla, pois eh por causas dele
		que nao deu certo"
	+ Tem um botao 'auto' que ao decidir A/B/C ja vai pra proxima
	+ Conflitos acontecem por que o git nao consegue resolver certos conflitos, entao
		agnt tem que resolver. Eles ocorrem em arquivos antigos que voce mudou
		em partes internas do código, entao ele nao sabe qual mudar
	+ Quando voce resolver todos os conflitos, clica em salvar e fecha, 
		ai vai para o proximo arquivo com conflito
	+ Quando voce terminar, dá
		$ git clean -fd
		+ Serve para retirar os arquivos de origem e assim conseiderar os 
			novos que voce salvou no kdiff
		$ git commit -m "merge feito"
		+ De um commit pra salvar que houve auteracao
	+ kdiff: é a ferramento mergetool, voce tem que baixala, 
		mesmo asism quando der
		conflit, o git pode nao usala ou usar outra. Isso acontece porque voce
		nao a configurou para ser o padrão, entao execute esses comandos para
		toraná padrao

git config --global --add merge.tool kdiff3
git config --global --add mergetool.kdiff3.path "C:/Program Files/KDiff3/kdiff3.exe"
git config --global --add mergetool.kdiff3.trustExitCode false
