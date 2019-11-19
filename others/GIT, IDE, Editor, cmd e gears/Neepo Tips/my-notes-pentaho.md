# Dicas e Expericencia usando pentaho



---

+ Qunado tiver um **SWITCH** você coloca um dummy para cada canto, indicando o valor que foi aceito. Isso torna mais légivl sem presisa abrir o swith e melhor pra saber as rows que são passada para cada 
  + Quando for debugar o Swith, todas as Saidas devem estar com a **Flip** enable
  +  (Se não usar esse recurso para o caso de nao respeitrar nenhum das condições, as row desaparecem, e, seria bom saber quais sao elas)
  + Exemplo: Ciclo A.1





### Tratamento para algar (PATH)

+ As chamadsa de PAI costumam dar erro pois está configurado para pegar a paritr da variavel {ALGAR_API_XML_DIR} da ALGAR, mas, se mudarmos para o nosos direotio todas pegam
  + Teste uma a uma, pois nem sempre da certo, ta dando colocando
  + {ALGAR_API_XML_DIR} = C:/Users/Rafael/Google Drive/UFU/Estagio Neppo/Odin_Cloud/source/kettle-repo/Flatfile/xmls
  + E na chamda:
    + ${ALGAR_API_XML_DIR}/file.ktr (Isos é um exemplo)



## Script SQL

+ Tem como dar preview na consulta e tem que conectar à uma conexão de banco
+ Os comentarios com `--` devem ser seguidos de 'space', se for `--comentario` da erro, 
  + tem que ser `-- comentario ` 

## Merge Join

+ no pentaho, qnd vc faz o merge join, alem de jutnar pelas duas colunas as **duas vao continuar no DataFrame**, ou seja, tera dados duplicadas a partir de entao. Entao, é bom usar um select para tirar uma delas





## Execel

O excel pode recebr os Copy/Paste do Pentaho, usse isso pois é muito utel para salvar os previrew e inserir dados nele





## Repositorio

+ Ter o respositorio é importante para fazer as chamads das APIs corrtametne. Sem isso, qnd usa o ${} nao vai
+ Para Joâo Pualo, deu problema no JDK, na parte de variavel de ambiente, ou seja, presisa colocar aquelas variaveis do Java



## Problema com 'SELECT do PENTAHO' Lento e Conectar Bifurcaçoes Lento



+ O select fica lento pois ele da uma lida, um `show input` para ver as variaveis que tao indo para fazer um **auto-insert**. Por causa disso, se o fluxo for muito grande, ele demora
  + **Se você so quer ver o que tem no select**, para agilzar sua visulização, retire **DESABILITE O LINK ANTERIOR**. Ai nao fica travando nem fica lento



# Insrirr Dados do Datagrid

+ Antes não conseguia inserir uma linha, mas agora descobrir o porque. No DataGrid, ele anula a primiera linha que você pega do CTRL+C do Excel. Não sei por que isso acontence, entao, caos vc queira colocar uma linha duplkique ela e colocque as duas. A primeira vai furar e a 2/ entra.

## Problemas em Date

+ Dates repesitam um formato, sempre
+ Se vocÊ nao informa, o pentaho coloca um default que provavlemente vai ser diferente do que voce ta usadno, ai, nao vai conseguir converter direito e dar RED



## WARNING com BigNumber in Excel

+ Quando colocar os valores do pentaho do excel, tenha cuidado com **BigNumber**, pois, o pentaho, que é Americano, leva os valores com **.** enquanto que o excel conseidera ponto como separador de milhar.
  + Então, o excel vai conseiderar uma valor gigante, **CORRIJA ISSO**



### Manipular Numero no Pentaho

+ **ESTABELEÇA UM PADRAO, UM FORMAT/VERSION MASK E O DECIMAL GROUP E SYMBOL GROUO PARA TODAS AS OPERAÇÕES, FIZ UM TRAFOFRM EM FlatFile_Wp_OldFiles que msotra como isso ocorre**
+ O fato de um numero ser Interger e outro BigNUMBER FAZ TOTAL DIFERENÇA SE VOCE USAR ELES EM OEPRAÇOES, ELE NAO FAZ CONVERSAO AUTOMATICAMENTE, VC TEM Q TESTAR PRA TER CERTEZA





### 09/07/2018 - Erro no mysql

Um cara novo deu erro ao se conectar com o mysql, William foi la resolver e fui com ele pra ajudar em qualquer coisa.

Parece que nao foi o mesmo erro que deu com Joâo Paulo. Parece que era erro do mysql.

Por fim, William nao conseguiu resolver. Mas viu que era no mysql pois conseguiu concettcat usando o kettle.proprietes. Ele pegou um qualquer para se conectar ao de produçâo e viu que conseguiu, ou seja, era no mysql dele.

Para se conectar, ele pos os dados de kettle.proprietes? Busque por 'my' com ctrl + f para carhar

Se atentar a:

+ Java, java instaldo e variavel de ambiente, mysql e testar casos que confirme ONDE É O PROBLEMA



# #String Vazia [] REGEX

Caso de Filtragem

````
// NO Step De Filtragem, quero saber se é vazio, SE FOR, DA TRUE
			X IS NULL
				OR
			X REGEXP [^$]
````



````
(William) use esse regex no filter para strings vazias ^(?!\s*$).+
````



### 11/07/2018 - Mostrar Coisas de Pentaho

````
ALGAR_API_XML_DIR => C:/Users/Rafael/Google Drive/UFU/Estagio Neppo/Odin_Cloud/source/kettle-repo/Flatfile/xmls

ALGAR_FATURAMENTO_CONTABIL_FILEPATH =>  C:\algar\files\33\

ALGAR_API_XML_DIR => C:/Users/Rafael/Google Drive/UFU/Estagio Neppo/Odin_Cloud/source/kettle-repo/Flatfile/xmls

ALGAR_FATURAMENTO_CONTABIL_FILEPATH =>  C:\algar\files\33\

${ALGAR_MYSQL_HOST} => 10.0.40.16

${ALGAR_MYSQL_DBNM} => adia_eai

${ALGAR_MYSQL_PASSWORD} => Bull@Atos2016

${ALGAR_MYSQL_USER} => adia_app
````

Qualquer coisa, consulte o seu proprio. Quando passar para alguem o odin, vai ter que passar essas configuraçoes

## Date e Epoch mysql <=> pentaho <=> ODIN

+ Ele é do tipo:

+ TimeStamp => 2018/02/02 00:00:00.000000000

**O que vem do ODIN** para outros lugares

+ O odin retorna um time estamp de 10 digitos, mas, sua conversao mesmo so serve se for de 13, so asism voce consegue converter para Date/TimeStamap

  	Quando você pegar o Date do Odin, e quiser mandar para o adia o para outro lugar que nao seja o 	odin, voce tem  multiplicar por 1000, se nao, vai considerar uma data invalida

## Tipo de Epoch do Pentaho

+ É semelhante à 1440766853, são somente 10 Dígitos



## Warning: Cut Strings

+ Cuidado, se você não definir o inicio, ele acaba clocando a um BLANCK_SPACE (' ') no início.



## Warning!: Caracteres diferentes do francês

+ Pelo menos nas APIS, nao colcoar nada bizarro como `ç`



## Adicionar/Inserir Blank/Write/Escape Space no final da String no Pentaho

+ Existe o step `concat` nele, especificando `lenght` e `Advanced> right pada`, vai colocar espsçoa eem branco até o lenght que voce definir. Dessa forma fica bom e consegui fazer o que queria, sem presisar fzr muita voisa



### ShortCuts : Atalhos

+ `sh spoon.sh`
+ Indentar: ALT+HOME



### Jao ocorreu de o ODIN , na conversao de um inteiro para string, colocar um blackspace na fente



### Cuidado ao criar uma nova API no Pentaho (Uma tranformaçao) POIS Provavelemten vai errar em seu XML

