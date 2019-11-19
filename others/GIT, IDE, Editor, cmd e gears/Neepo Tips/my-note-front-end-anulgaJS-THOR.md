# Dicas das Minha Experiência com AngularJS



## CSS dos Componentes

+ Muitas vezes, você olha um exemplo na documentação e ele é limpinho. Quando você implementa, muitas vezes fica feio e até mesmo diferente.

+ O motivo para isso ocrrer é desconhecido, mas 

  + **VOCÊ PODE OBRIGAR A FICAR DA MANEIRA QUE VOCÊ USANDO CSS**

+ **Para Fazer Isso:** use **F12** e clique em inspecionar o item. Assim você vai ver seu CSS.

  + Continue vasculhando nas propriedade de *style* mexendo em todas até achar algum atributo que mexeu naquilo que você quer mexer.
  + Em seguida, coloque ele da forma que você quer. Agora você sabe aonde foi.
  + O problema que pode dar é que mutias vezes, você nâo tem que mexer no elemento em si, e sim em um de seu pai.
  + Para fazer isso nessa pagina entâo você pode sobreescrever o CSS do framework-CSS que você está utilizando no html.
    + OBS: COPIE E COLE DO **F12** do jeitinho que está la

+ **Exemplo**: Fazendo um autocomplete, ele ficava feio, com sobra e borda, e eu nâo queria isso. Então eu fiz esse procedimento e achei o que mexia nessas coisa e coloque num `style`

  ````html
  <style>
      
      /* Nescessairos para deixar o auto complete de Cidade LIMPO */
      md-autocomplete.md-default-theme[disabled]:not([md-floating-label]), md-autocomplete[disabled]:not([md-floating-label]){
          background: white;
      }
  
      .md-whiteframe-1dp, .md-whiteframe-z1 {
          box-shadow: none;
      }
  
  </style>
  ````

  

## Posicionamento das Bagaças mesmo em BootStrap

+ Muitas vezes, quando dar a Messagem amarela de message no F21 é por que alguns itens podem está com problema de posicionamento e por isso nâo são mostrados. Mesmo que você copie da documentaçâo, muitas vezes ainda assim vai dar problema.

+ O motivo para isso ocorrer é desoclheidocio, mas enfim, para lidar com posisiconamento:

  + 1. Coloque em Divs separadas, ou junte divs
    2. Se dá a mensagem amarela de ser incapaz de mostra algo, deve ser entâo que talavez esteja no lugar errado, entao, dire de dentro de seu pai e deixe do lado dele.
  + Aprenda a fazer o negócio de grid. No angularJS funcionou o `flex="90"` que faz com que as tags tenha essa largura relativa a containter maior que se etá dentro
  + Há tambem os caso de tratar como `row` ou como `collumn`

  