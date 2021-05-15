# CSS

## Índex

## Links



## Seletores CSS

| Selector                                                     | Example    | Example description                             |
| :----------------------------------------------------------- | :--------- | :---------------------------------------------- |
| [.*class*](https://www.w3schools.com/cssref/sel_class.asp)   | .intro     | Selects all elements with class="intro"         |
| [#*id*](https://www.w3schools.com/cssref/sel_id.asp)         | #firstname | Selects the element with id="firstname"         |
| [*](https://www.w3schools.com/cssref/sel_all.asp)            | *          | Selects all elements                            |
| *[element](https://www.w3schools.com/cssref/sel_element.asp)* | p          | Selects all <p> elements                        |
| *[element,element,..](https://www.w3schools.com/cssref/sel_element_comma.asp)* | div, p     | Selects all <div> elements and all <p> elements |



| Selector                                                     | Example | Example description                                          |
| :----------------------------------------------------------- | :------ | :----------------------------------------------------------- |
| [*element* *element*](https://www.w3schools.com/cssref/sel_element_element.asp) | div p   | Selects all <p> elements inside <div> elements               |
| [*element*>*element*](https://www.w3schools.com/cssref/sel_element_gt.asp) | div > p | Selects all <p> elements where the parent is a <div> element |
| [*element*+*element*](https://www.w3schools.com/cssref/sel_element_pluss.asp) | div + p | Selects all <p> elements that are placed immediately after <div> elements |
| [*element1*~*element2*](https://www.w3schools.com/cssref/sel_gen_sibling.asp) | p ~ ul  | Selects every <ul> element that are preceded by a <p> element |

### Pseudo class

**Note:** `a:hover` MUST come after `a:link` and `a:visited` in the CSS definition in order to be effective! `a:active` MUST come after `a:hover` in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

### Comentários

```
/* This is a single-line comment */
```



### Classe `.`

No CSS o `.` caracterisa classe. Afeta os elementos que tenham essa classe `class="classe"`

```css
<stylus>
	.classe {
  		css declarations;
	}

	p.hometown {
  		background-color: yellow;
	}
</stylus>
<body>
    <p class="classe">
        This paragraph refers to two classes.
        Back-gorund is not yellow
    </p>

    <p class="hometown">
        back-ground yellow
    </p>
</body>
```

### Selecionar tudo `*`

```html
<stylus>
    	/* Seleciona toda tudo que está dentro de uma 'div'*/
    div * {
        background-color: yellow;
    }
    	/* Aplica a todos os elemetnos

    * {
        css declarations;
    }
</stylus>
<body>
    <div class="classe">
        <p> This paragraph refers to two classes. Back-gorund is not yellow </p>
    </div>
</body>
```

