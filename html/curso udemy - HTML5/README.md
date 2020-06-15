# HTML5 para quem não sabe nada de HTML5

Descrição: Aprenda HTML 5 de forma simples e rápida, da mesma forma que alunos de Graduação aprendem, sem precisar fazer Faculdade.

## Utils

(Extensão Chrome WebDev)[https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm/related]
+ Permite desativar CSS/JS/HTML e assim ver os elementos mais puros nos sites.

CheatSheet
+ tags: https://www.testking.com/techking/infographics/ultimate-html5-cheatsheat/

Validar de HTML e WebSematnica DEPÁGINAS HTML
(OBS: valida HTML Puro)
https://validator.w3.org/

Guia de Tags
+ https://www.w3c.br/divulgacao/guiasreferencia/xhtml1/

Qual o melhor lugar para usar uma Tag (MUITO BOM - BUSCAR TUDO SOBRE UMA TAG)
+ https://www.w3.org/2009/cheatsheet/

## O que é HTML

É uma linguagem de Marcação:

**Hyper Text Markup Language**

## Basico do HTML

````html
<!DOCTYPE html>
<html>
<head>
	
	<meta charset="utf-8"> <!-- utf8 : significa que usa caracteres latinos -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Titulo da Aba</title>
	<link rel="stylesheet" href="">
</head>
<body>
	
</body>
</html>
````

o head nâo é sxibido como conteudo

as tags metas fornecem dados para SEO

## Categoria de elementos para cada cadategoria da W3C

Há um recuros que permite ler páginas HTML. Sedpendeo se você usar a tag bold ou strong, uma delas faz com que a voz, na hora da flala, fique mais fortes



## `<head>`

colocando lingua no documento HTML

````html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="Pagina explicando o que é O HEAD">
	<title>Titulo da Aba</title>
	<link rel="stylesheet" href="">
</head>
<body>
	
</body>
</html>
````

lang="pt-br"

com isso, poderá usar ferrementas de corretor ortográfico para corrigir qualquer coisa que ele escrever

### DOCTYPE

O Doctype deve ser a primeira linha de código do documento antes da tag HTML.
<!DOCTYPE html!>
O Doctype indica para o navegador e para outros meios qual a especificação de código utilizar. Em
versões anteriores, era necessário referenciar o DTD diretamente no código do Doctype. Com o
HTML5, a referência por qual DTD utilizar é responsabilidade do Browser.
O Doctype não é uma tag do HTML, mas uma instrução para que o browser tenha informações
sobre qual versão de código a marcação foi escrita.

### HTML

O código HTML é uma série de elementos em árvore onde alguns elementos são filhos de outros e
assim por diante. O elemento principal dessa grande árvore é sempre a tag HTML.
<html lang=”pt-br”>
O atributo LANG é necessário para que os user-agents saibam qual a linguagem principal do
documento.
Lembre-se que o atributo LANG não é restrito ao elemento HTML, ele pode ser utilizado em qualquer outro elemento para indicar o idioma do texto representado.
Para encontrar a listagem de códigos das linguagens, acesse:
http://www.w3.org/International/questions/qa-choosing-language-tags.

### Meta

````html
<!-- <meta http-equiv="refresh" content="10">  favicon.ico -->

  <meta charset="utf-8">
  <meta name="description" content="Portifolio Personal">
  <meta name="keywords" content="Personal, Portifolio, Project, Contact, Rafael Morais de Assis">
  <meta name="author" content="Rafael Morais de Assis">

````

## BODY

`p`
<p>a tag p permite dar um new_line entre os textos</p>

`br` : quebra de linha
+ se todo pertence semanticamente ao mesmo websemantica mas quer que der um breakline `<br>`

### Estilizando texto

WEBSEMANTICA: https://www.w3.org/TR/2014/REC-html5-20141028/text-level-semantics.html#the-i-element

`<strong>Teacher of the Year pela Ilumno</strong>`
+ Strong quer dizer que é algo que tem que ser falado com mais força. ENquanto que bold é so em negrito. Isos só funciona apra uma página HTML que for falada

`<bold>`
+ Fica em negrito mesmo

`i`
+ italico
+ recomendado para paalvras estrangeiras a linuga definida

`em`
+ oferece uma espese a voz. Seria usado em poesias por exemplo

### COntrolar espaços `&nbsp;`

Ubreakbla Space

Essa á a forma mais comun de adicionar mais espaços em branco "blackSpace" pois mais de um espaço nao é   lido  pelo navaegador.

Junstar palavas

Se vocÊ usar `&nbsp` entre duas palavras, quando o texto for quebrado (seja peor celular ou por reduiz ra tela do navegador) **ESSAS PALAVRAS VÃO SER QUEBRADOAS JUNTAS**

Assim dado os dois textos

`Professor univeritario`
+ Se diminuir a tela, professor pode ficar numa liinha e universitoario na de bAIXOR

`Professor&nbsp;univeritario`
+ Dessa forma, quando quebrar, vai ter que ser as duas juntas ou nenhuma delas


### caracters epeciais

Sites como 
https://graphemica.com/%F0%9F%9A%80

https://www.toptal.com/designers/htmlarrows/symbols/

Busque por código HTML: que começa com & e termina com ;

rocket
&#128640;

### LIsta pro definição

````html
<dl>
<dt>Portal professoruniversitario.com</dt>
<dd>Portal com recursos para professores e futuros professores universitários</dd>
<dt>Cursos Online</dt>
<dd>Manipulando o Tempo e a Velocidade no After Effects CC 2017<br> 
  https://www.udemy.com/manipulando-o-tempo-e-a-velocidade-no-after-effects/</dd>
````

É uma Lista, para para defnir um temro.
**Use ela para listar algo como caracterisitaca de sem ponto de listagem e sem números**

### COnteudo pre-formatado `<pre>`

**BOM PARA CÓDIGO FONTE EM HTML**

````html
	<h2>Endereço</h2>
            <pre>            
            Barra da Tijuca
            CEP   00000-000
            Rio de  Janeiro
            RJ
            </pre>
````

O HTML Não considera mais de um espaço nem mais de uma tab. Mas, com a tag `pre` ele vai printar espaços e tabs que tiver dentro.

Isso é 

#### hyperlink `a`


Se colocar target="_black vai abrir em outra aba

````html
 <dd><a href="https://www.udemy.com/manipulando-o-tempo-e-a-velocidade-no-after-effects/"
                    target="_blank">
````