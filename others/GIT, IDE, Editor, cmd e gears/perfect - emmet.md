# Emmet

# 'log'

+ Rafael Morais de Assis
+ Data: 26/03/2018
+ TAGS: emmet, front-end, web moderno

**Fontes e Controle de Versão**

+ finaliazçâo do curos de fornt-end-moderno (26/03/2018)

---

## Emmet

link [cheat-sheet-emmet](https://docs.emmet.io/cheat-sheet/)

- Emmet é um plugin para facilitar a criar html. Alem disso, ele deixa o curso no melhor local para tornar mais produtivo
- No sublime, use o recurso `CTRL + D` . Seleciona um campo e clica nesse boatao para procurar em outros iguai, asim ele vai seleciuonar todo e voce pode escrever em varios campos simultaneamente

Os comandos são todos concluido com `TAB`

`html:5` Vai criar o inicio de seu html

`p`: cria `<p></p>`

`p.classe_do_p`: alem de criar a tag p, vai dizer que sua classe é 

**Operadores**

- `+` tags adjacentes (uma embaixo da outra) juntar comados, deiixa uma taga depois da outra

- `>` tags aninhada (uma dentro da outra)

- `[]` atributos, propriedades {como nanme, type}

  - `td[title="Hello world!" colspan=3]`
    - ==> ` <td title="Hello world!" colspan="3"></td>`

- `{}` conteudo que vai ficar dentro da tag

- `.` classe (definidas em css)

- `#` id (deve ser unico)

- `()` : Servem para prorizar

- `*` num : multiplica o grupo anterior pelo número indicado

  ​

**Exemplos**

 `h1+h2+h3` : gera

```html
<h1></h1>
<h2></h2>
<h3></h3>
```

**`>` tags aninhadas (uma dentro da outra)**

`header>h1+h2+nav>ul>li*5>a[]` gera:

```html
<header>
	<h1></h1>
	<h2></h2>
	<nav>
		<ul>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
		</ul>
	</nav>
</header>
```

**Exemplo grande**

`div#main>(header>h1{titulo}+nav>ul>li*3>a[href="#"])+(section)`

```html
<div id="main">
	<header>
		<h1>titulo</h1>
		<nav>
			<ul>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
			</ul>
		</nav>
	</header>
	<section></section>
</div>
```

**Outro Exemplo**

`(div.col-xs-12.col-sm-6.col-ms-4>div.thumbnail>img+div.caption>h3{Titulo do Trabalho}+p{Pequneoi paargrafo}+p>a.btn.btn-primary.pull-right[href="#"][role="button"])*6`

```html
<div class="col-xs-12 col-sm-6 col-ms-4">
		<div class="thumbnail">
			<img src="" alt="">
			<div class="caption">
				<h3>Titulo do Trabalho</h3>
				<p>Pequneoi paargrafo</p>
				<p><a href="#" class="btn btn-primary pull-right" role="button"></a>				</p>
			</div>
		</div>
	</div>
```

## 







