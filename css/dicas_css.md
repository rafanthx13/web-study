# css tips

## 

\14. E mais, você também pode estilizar qualquer elemento CSS baseado no uso do lang, tipo:

```
.description[lang=”en”] { color: red };.description[lang=”pt-br”] { color: blue };
```

\15. Isso se estende para qualquer propriedade nos elementos HTML, isso significa que é possível combinar WAI-ARIA com CSS e criar coisas bem legais, como esse Tooltip no CSS Components.

![img](https://miro.medium.com/max/60/0*uCT8DxW_fazUNZAI.jpg?q=20)

![img](https://miro.medium.com/max/792/0*uCT8DxW_fazUNZAI.jpg)

[**Pure CSS Components —** A set of common UI Components using the power of CSS and without Javascript.](https://www.felipefialho.com/css-components/#component-tooltip)

\16. Interessante notar, que até classes, podem ser usadas dessa forma, por exemplo:

```
a[class=”active”]
```

\17. Sendo possível usar classes dessa forma, também é possível fazer coisas legais, como selecionar apenas elementos que tenham determinada palavra em algum lugar da classe:

```
span[class*=”icon-”]
```

\18. Ou melhor ainda, capturando palavras separadas por espaço.

```
span[class~=”icon arrow-right”]
```

\19. Também é possível selecionar apenas elementos que começam com determinada palavra:

```
span[class^=”icon”]
```

\20. Com isso da pra fazer coisas bem legais, como selecionar apenas os links seguros (quem sabe pra botar um ícone de cadeado?):

```
a[href^=”https://”]
```

\21. Também é possível fazer coisas como selecionar todos os elementos disabled do projeto e adicionar estilo:

```
[disabled] { cursor: not-allowed; }
```

\22. No passado era comum adicionar classe, por exemplo, nos últimos items de uma lista para zerar estilos:

```
<li class=”last”></li>li {   border: black solid 1px; }.last {   border: 0;}
```

\23. Com o surgimento de pseudo-classes no CSS3, anos atrás, isso já não é necessário:

```
:last-child {   border: 0; }
```

\24. Mas a dica acima é bem ruim, o ideal mesmo é não zerar propriedades no CSS, isso não faz mais sentido desde que o `:not` passou a ser aceito nos navegadores:

```
li:not(:last-child} {   border: black solid 1px; }
```

\25. O `:not` é uma das minhas pseudo-classes favoritas do CSS, já escrevi um artigo inteiro falando disso:

![img](https://miro.medium.com/max/60/0*smnLSfN01mvyDz6P.png?q=20)

![img](https://miro.medium.com/max/400/0*smnLSfN01mvyDz6P.png)

[**O fodástico :not() —** Quando se trata de evitar resetar propriedades, o :not() é o cara.](https://www.felipefialho.com/blog/2016/css-o-fodastico-not)

\26. Usando apenas CSS é possível remover um elemento da tela caso ele não tenha conteúdo:

```
div:empty {   display: none;}
```

\27. Rola até mesmo de misturar pseudo-classes, por exemplo, para que o elemento tenha um comportamento caso ele seja o último filho, mas não se ele for ao mesmo tempo o primeiro filho:

```
.btn:last-child:not(:first-child)
```

\28. Dá pra fazer combinações muito loucas de pseudo-classes e pseudo-seletores, por exemplo, pegar uma classe .title apenas se ela não for um h2 e o .header não estiver ativo:

```
.header:not(.active) + .main .title:not(h2)
```

\29. Pseudo-seletores, inclusive, ajudam demais para evitar resetar propriedades e fazer coisas legais com CSS.

\30. É possível, por exemplo, selecionar apenas o elemento seguinte e trocar o estilo baseado na classe do irmão, algo como:

```
.btn.active + .btn {   margin-left: 20px; }
```

\31. Ou mesmo selecionar todos os elementos irmãos seguintes para adicionar estilo:

```
.btn.active ~ .btn {   margin-top: 20px; }
```

\32. Também temos possibilidade de combinar pseudo-classes e pseudo-seletores para fazer coisas do tipo:

```
input[type=”checkbox”]:checked ~ p {   color: red; }
```

\33. Partindo dessa base, podemos fazer um CSS super-interativo aproveitando dos estados de elementos como `radio` e `checkbox` e fazer um elemento aparecer ou sumir:

```
p {   display: none; }input[type=”checkbox”]:checked ~ p {   display: block; }
```

\34. Com isso dá pra fazer coisas surreais com CSS, sem usar JavaScript.

Essa é a base de todos os joguinhos e componentes desenvolvidos somente com CSS e apesar de parecer bruxaria, você acabou de ver que é super simples.

\35. Anos atrás (muitos anos) escrevi um artigo mostrando como fiz todos os componentes do CSS Componentes:

![img](https://miro.medium.com/max/60/0*b44-jDBjqxZV_Pv-.jpg?q=20)

![img](https://miro.medium.com/max/792/0*b44-jDBjqxZV_Pv-.jpg)

[**É possível utilizar componentes desenvolvidos apenas com CSS? —** Após o lançamento do CSS Components, escrevo as minhas impressões sobre o quanto é possível utilizar componentes desenvolvidos apenas com CSS.](https://www.felipefialho.com/blog/2014/e-possivel-utilizar-componentes-desenvolvidos-apenas-com-css)

\36. Falando em seletores, eles possuem performance de leitura nos navegadores. E é importante levar isso em conta na hora de escrever seu código.

\37. A performance de carregamento, do maior pro menor é

\- `#header`
\- `.header`
\- `header`
\- `nav + header`
\- `main > h1`
\- `main header`
\- `*`
\- `[type=”text”]`
\- `.header:before, header: after`

\38. Evite aninhar elementos fazendo coisas como:

```
body header ul li
```

\39. O ideal mesmo, caso não esteja usando CSS-in-JS, é usar classe para estilizar elementos e evitar fazer aninhamentos grandes.

\40. Já escrevi um artigo explicando todas as vantagens de usar classe:

![img](https://miro.medium.com/max/60/0*7EliTQFXNmDOeUzF.png?q=20)

![img](https://miro.medium.com/max/1024/0*7EliTQFXNmDOeUzF.png)

[**Porquê usar classes para estilizar elementos —** É um assunto polêmico, eu sei. Muitas pessoas discordam. Mas vou defender meu ponto de vista que é totalmente favorável ao uso de classes.](https://www.felipefialho.com/blog/2016/porque-usar-classes-para-estilizar-elementos)