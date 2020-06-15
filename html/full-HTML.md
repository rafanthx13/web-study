# Doc de Remo Final - HTML

## Índex

- [Doc de Remo Final - HTML](#doc-de-remo-final---html)
  * [Índex](#-ndex)
  * [Log](#log)
  * [Links úteis](#links--teis)
  * [O que é HTML](#o-que---html)
  * [Categoria de Tags HTML5](#categoria-de-tags-html5)
    + [Metatag Content](#metatag-content)
    + [Flow content](#flow-content)
          + [Sectioning content](#sectioning-content)
          + [Heading content](#heading-content)
          + [Phrasing content](#phrasing-content)
          + [Embedded content](#embedded-content)
          + [Interactive content](#interactive-content)
  * [Principais pontos do HTML5](#principais-pontos-do-html5)
    + [DOCTYPE](#doctype)
    + [lang na tah HTML : `<html lang="pt-br">`](#lang-na-tah-html-----html-lang--pt-br---)
    + [Meta](#meta)
    + [Estilizando texto](#estilizando-texto)
    + [Controlar espaços `&nbsp;`](#controlar-espa-os---nbsp--)
    + [caracters epeciais](#caracters-epeciais)
  * [Lista de Tags](#lista-de-tags)
    + [tag `<p>`](#tag---p--)
    + [Lista pro definição de termos : `<dl> e <dt> <dd>`](#lista-pro-defini--o-de-termos-----dl--e--dt---dd--)
    + [tag `<pre>` : Conteudo pre-formatado](#tag---pre-----conteudo-pre-formatado)
      - [tag `a`: hyperlink](#tag--a---hyperlink)

## Log

+ Data de criação e Atualização: 26/03/2018; 15/06/2020

**Fontes de Conteúdo e Controle de Versão**

+ Finalização de curso front-end-moderno (26/03/2018)

+ Finalização do curso de HTML5 (15/06/2020)

## Links úteis

+ [Extensão do Chrome WebDev](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm/related)
  - Permite desativar CSS/JS/HTML e assim ver os elementos mais puros nos sites.

+ [CheatSheet ImageReference](https://www.testking.com/techking/infographics/ultimate-html5-cheatsheat/)
  - Imagem com todas as tags novas do HTML5

+ [Validar código HTML PURO](https://validator.w3.org/)
  - Validar de HTML e WebSematnica DEPÁGINAS HTML (OBS: valida HTML Puro)

+ [Guia de Tags](https://www.w3c.br/divulgacao/guiasreferencia/xhtml1/)
  - Qual o melhor lugar para usar uma Tag (MUITO BOM - BUSCAR TUDO SOBRE UMA DETERMINADA TAG)

+ [Procurrar melhores uso de uma tag](https://www.w3.org/2009/cheatsheet/)
  - Descreve quando usa tags, quem pode a sustituir e os maiores erros de webSemantica para cada tag

## O que é HTML

É uma linguagem de Marcação:

**Hyper Text Markup Language**

Exemplo básico de HTML

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

## Categoria de Tags HTML5

LINK: https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#flow-content-1

### Metatag Content

Metadata content is content that sets up the presentation or behavior of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other "out of band" information.

- `base`
- `link`
- `meta`
- `noscript`
- `script`
- `style`
- `template`
- `title`

### Flow content

Most elements that are used in the body of documents and applications are categorized as flow content.

- `a`
- `abbr`
- `address`
- `area` (if it is a descendant of a `map` element)
- `article`
- `aside`
- `audio`
- `b`
- `bdi`
- `bdo`
- `blockquote`
- `br`
- `button`
- `canvas`
- `cite`
- `code`
- `data`
- `datalist`
- `del`
- `dfn`
- `div`
- `dl`
- `em`
- `embed`
- `fieldset`
- `figure`
- `footer`
- `form`
- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`
- `header`
- `hr`
- `i`
- `iframe`
- `img`
- `input`
- `ins`
- `kbd`
- `keygen`
- `label`
- `main`
- `map`
- `mark`
- `math`
- `meter`
- `nav`
- `noscript`
- `object`
- `ol`
- `output`
- `p`
- `pre`
- `progress`
- `q`
- `ruby`
- `s`
- `samp`
- `script`
- `section`
- `select`
- `small`
- `span`
- `strong`
- `sub`
- `sup`
- `svg`
- `table`
- `template`
- `textarea`
- `time`
- `u`
- `ul`
- `var`
- `video`
- `wbr`
- [text](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#text-content)

###### Sectioning content

Sectioning content is content that defines the scope of [headings](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#heading-content-0) and [footers](https://www.w3.org/TR/2014/REC-html5-20141028/sections.html#the-footer-element).

- `article`
- `aside`
- `nav`
- `section`

###### Heading content

Heading content defines the header of a section (whether explicitly marked up using [sectioning content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#sectioning-content-0) elements, or implied by the heading content itself).

- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`

###### Phrasing content

Phrasing content is the text of the document, as well as elements that mark up that text at the intra-paragraph level. Runs of [phrasing content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#phrasing-content-1) form [paragraphs](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#paragraph).

- `a`
- `abbr`
- `area` (if it is a descendant of a `map` element)
- `audio`
- `b`
- `bdi`
- `bdo`
- `br`
- `button`
- `canvas`
- `cite`
- `code`
- `data`
- `datalist`
- `del`
- `dfn`
- `em`
- `embed`
- `i`
- `iframe`
- `img`
- `input`
- `ins`
- `kbd`
- `keygen`
- `label`
- `map`
- `mark`
- `math`
- `meter`
- `noscript`
- `object`
- `output`
- `progress`
- `q`
- `ruby`
- `s`
- `samp`
- `script`
- `select`
- `small`
- `span`
- `strong`
- `sub`
- `sup`
- `svg`
- `template`
- `textarea`
- `time`
- `u`
- `var`
- `video`
- `wbr`
- [text](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#text-content)

###### Embedded content

Embedded content is content that imports another resource into the document, or content from another vocabulary that is inserted into the document.

- `audio`
- `canvas`
- `embed`
- `iframe`
- `img`
- `math`
- `object`
- `svg`
- `video`

Elements that are from namespaces other than the [HTML namespace](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#html-namespace-0) and that convey content but not metadata, are [embedded content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#embedded-content-2) for the purposes of the content models defined in this specification. (For example, MathML, or SVG.)

Some embedded content elements can have fallback content: content that is to be used when the external resource cannot be used (e.g. because it is of an unsupported format). The element definitions state what the fallback is, if any.



###### Interactive content

Interactive content is content that is specifically intended for user interaction.

- `a`
- `audio` (if the `controls` attribute is present)
- `button`
- `embed`
- `iframe`
- `img` (if the `usemap` attribute is present)
- `input` (if the `type` attribute is *not* in the [hidden](https://www.w3.org/TR/2014/REC-html5-20141028/forms.html#hidden-state-(type=hidden)) state)
- `keygen`
- `label`
- `object` (if the `usemap` attribute is present)
- `select`
- `textarea`
- `video` (if the `controls` attribute is present)


## Principais pontos do HTML5

### DOCTYPE

O Doctype deve ser a primeira linha de código do documento antes da tag HTML.
<!DOCTYPE html!>
O Doctype indica para o navegador e para outros meios qual a especificação de código utilizar. Em
versões anteriores, era necessário referenciar o DTD diretamente no código do Doctype. Com o
HTML5, a referência por qual DTD utilizar é responsabilidade do Browser.
O Doctype não é uma tag do HTML, mas uma instrução para que o browser tenha informações
sobre qual versão de código a marcação foi escrita.

### lang na tah HTML : `<html lang="pt-br">`

````
en-US (American Englihs)
en-GB (British English)
pt-br (Brazilian Portuguese)
````

Com isso, poderá usar ferrementas de corretor ortográfico para corrigir qualquer coisa que ele escrever.

O atributo LANG é necessário para que os user-agents saibam qual a linguagem principal do
documento.

Lembre-se que o atributo LANG não é restrito ao elemento HTML, ele pode ser utilizado em qualquer outro elemento para indicar o idioma do texto representado.
Para encontrar a listagem de códigos das linguagens, acesse:

=> http://www.w3.org/International/questions/qa-choosing-language-tags.


### Meta

````html
	<meta http-equiv="refresh" content="10">  <!-- Auto-Refresh -->
	<meta charset="utf-8">
	<meta name="description" content="Portifolio Personal">
	<meta name="keywords" content="Personal, Portifolio, Project, Contact, Rafael Morais de Assis">
 	<meta name="author" content="Rafael Morais de Assis">
````

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

### Controlar espaços `&nbsp;`

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

## Lista de Tags

### tag `<p>`

<p>a tag 'p' permite dar um new_line entre os textos</p>
`br` : quebra de linha
+ se todo pertence semanticamente ao mesmo web-semantica mas quer que der um breakline `<br>`

### Lista pro definição de termos : `<dl> e <dt> <dd>`

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

### tag `<pre>` : Conteudo pre-formatado 

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

Se o que for usar for código de linguagem de programaçâo, use a tag `<code>` em conjunto

#### tag `a`: hyperlink

Se colocar target="\_black" vai abrir em outra aba


````html
 <dd><a href="https://www.udemy.com/manipulando-o-tempo-e-a-velocidade-no-after-effects/"
                    target="_blank">
````
---