

## Criar variáveisde CSS (sem o pre-processados cscss)

:root {
    --bg-dark: #1A2F3A;

    --logo-height: 100px;
    --header-height: 100px;
    --menu-top-height: 70px;
    --aside-width: 225px;
    --footer-height: 40px;

    --shadow: 
        0 2px 23px 0 rgba(0, 0, 0, 0.1),
        0 2px 49px 0 rgba(0, 0, 0, 0.06);
}


Ai vc usa como

grid-template-columns: var(--aside-width) 1fr;

OBS: Essa variável pode ser usada em qualquer lugar, até mesmo em outros arquivos, desde que o arquivo que define essas variáveis seja chamado primeiro

## Aplicar uma propriedade em tudo


* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}


## Responsividade

### `@media`

Usamos `@media` para indicar até que ponto usmos ou deixamos de usar um css para usar um outra que via tornar responsivo

Exemplo:

````css
@media(max-width: 768px) {
    /* */
    .app {
        grid-template-rows:
            var(--header-height)
            var(--menu-top-height)
            1fr
            var(--footer-height);
        grid-template-columns: var(--aside-width) 1fr;
        grid-template-areas:
            "logo header"
            "menu menu"
            "content content"
            "footer footer";
    }
}

@media(max-width: 576px) {
    .app {
        grid-template-rows:
            var(--logo-height)
            var(--menu-top-height)
            1fr
            var(--footer-height);
        grid-template-columns: 1fr;
        grid-template-areas:
            "logo"
            "menu"
            "content"
            "footer";
    }
}

````

### Classes BootStrap

Relacionado ao `lg`, `sm` `md` das clases de bootStrap. COloque várias para vários tipos

Exemplo:

````HTML
<div className="col-12 col-md-6">
```` 
