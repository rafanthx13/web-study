# Rodrgio Branas - AnuglarJS



## AngularJS - #1 - Introdução e Hello World - Rodrigo Branas

AngualrJS: Framework para aplicaçôes Wbe usando JS. Ele vai ser a  arquitetura do projeto front-end

+ Cria componentes, reusáveis e modulares
+ Fornece infraestrutura back-end para fazer ajasx
+ Facilita automaçao de testes com ``ng-mock`

Criado em 2009 para facilitar a criação de aplicações web simples. Não foi criado pelo google, foi criado pelo cara antes de entrar no google. 

Na época em que foi lançado, começou baixo e se elevou até bater todos os outros em 2013 e 2014. Em 2015, estava muito acima da concorrência.

**Quem usa (Cases):** Nasa, Wlamart, Plunker; doubleclick;

**Por que deveria usar:** Produtividade; Continuidade; Comunidade; Totalmente escrito em JS (Otimiza o Front-End);

Quer dizer que a aplicaçâo vai rodar  no browser do cliente? Sim.



**Arquitetura do FramwWork**

+ Qual a diferença entre arquitetura e desgin

  + Arquitetura é mais na parte de tecnologias
  + Design: Interaçâo entre camadas e objtoes

  Usa MVC : Model-View-Controler, m as chamado de MVW pelo seus idealizadores Model-View-Whatever. Ele separa bem as responsabilidades.

  ![](C:\Users\Rafael\Google Drive\Private Studies\ANGULAR JS\youtube-Robriga-Branas\img\img01.png)

View: Onde vamos escrever nosso HTML com leves toques de JavaScript.

Scope: Faz a ligaçâo entre o controler e a view. é

+ um objeto compartilhao entre os dois de forma two-way-databind
  + É um objeto que é segurado eplos dois simultânemanete, quando um lado muda, o outro lado é notificado dessa mudaça na hora

+ Fique claro que o Scope nao é model, é somente a ligaçâo

Controller:  Responsavel pelo que a view consome



---

## Emmet - Revisão

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


---

### AngularJS - #2 - Usando Diretivas - Parte 1 - Rodrigo Branas

### Diretivas

Sao extenos da lingaugem HTML que permite implementar novos comportamentos de forma declarativa

`ngApp`

+ Define as fronteiras da aplicaçâo

`ngController`

+ Vincula View e COntroller

`ngBind`

+ Substitui elemento por expressao doc controller

`ngRepeat`

+ Permite iterar sobre arrays e objetos

`ngModel`

+ Faz o inverso do ng-bind, o inverso da interpolaçao
+ Pega uma coisa da View e Define no escopo
  + Aplico nso inputs, select e nos text areas
+ My Obs:
  + O `ngModel` torna esse campo uma variavel do escope mesmo sem declaar la. é uma forma de passar o item html para o contoller. Como vai para o escope você pode fazer {{}} com o ngModel que assim : VAI mostrar automaticamente (two-data-bind) quando mudar.

`ngClick`

+ Chamar uma funçÂo quando ocorre ume eenteo

TWO-WAY-DATABIND: O framework tem um compilador que percorre todas as diretia. Quando ele acha um ngModel, ele fica escutanto, assim, toda vez que você tecla, você atualiza a variavel no escope e dispara o ciclo de notificaloes que alguns tipos de diretivas escunta (ng-bind e ng-Repeat).

**1° MantraDeve evitar ao maximo ler o escope dentro do controller**

2° **O angular consegue gerar o objeto dinamicamente**

Para teste unitarios fica dificl de entender

`angukar.copy`

Copia um objeto de forma hardocre, Dessa forma **Perde-se o vinculo de referencia, é uma copia do objeti com outro identificador**



## AngularJS - #3 - Usando Diretivas - Parte 2 - Rodrigo Branas

`ngDisabled`

+ Serve para desabilitar um botao, ou input
+ Vai receber uma expressao bool, ou seja, pode já manipular algo dentro dela ou se referenciar a uma funçâo no $scope

````html
<!-- Esse botao so vai está habilitado quando tiver algo em nome e telefone -->
<button ng-click="adicionarContato(contato)" ng-disabled="!contato.nome || !contato.telefone">
    Adicioar Contato
</button>
````

`ngOptions`

+ Renderiza as opçoes de um select a partir de um array  do scope
+ Ele faz o controle para marcar coisas de selecionar

````html
<style>
...
   $scope.operadoras = [
				{nome: 'Oi', codigo: 14},
				{nome: 'Vivo', codigo: 15},
				{nome: 'Tim', codigo: 41}
	]; 
...
</style>

<select class="form-control" ng-model="contato.operadora" ng-options="operadora.nome for operadora in operadoras">
    <!-- Vai mostra para clicar o nome do objeto do array -->
	<!-- Default -->
    <option value="">Seleciona uma operadora</option>
</select>
````

Voce tambem pode agrupar por alguma caetogira, ai fica legal tambem, usando o group by caso o objeto tenha um atributo que caracterisa categoria

````
ng-options="operadora.nome group by operadora.categoria for operadora in operadoras"
````

`ngClass and ngStyle`

+ Aplicando CSS e estilos dinamicamente

`ngClass`

+ É como colocar uma classe css normal
+ Vai avaliar uma expressao/Bool value do scope e depois vai aplicar uma classe css ja definida

Lembtre: Em qualquer lugar de expression vocÊ pode charama funçâo

````html
<style>
		.selecionado {
			background-color: yellow;
		}

		.negrito {
			font-weight: bold;
		}
</style>

...
<tr ng-class="{'selecionado negrito': contato.selecionado}" ng-repeat="contato in contatos">
		<td><input type="checkbox" ng-model="contato.selecionado"/></td>
		<td>{{contato.nome}}</td>
		<td>{{contato.telefone}}</td>
		<td>{{contato.operadora.nome}}</td>
</tr>
````

Ou seja, vai aplicar a classe `slecionado e negrito` quando o contao.selecionao estiver true, e isso ocorre quando voce clicar, vai ativar o atributo `selecionado`

`ngStyle`

+ Coloca o VALOR de uma tributo css de acordo com uma variavel de scope

````html
<td><div style="width: 20px; height: 20px;" ng-style="{'background-color': contato.cor"></div></td>

````

`ngShow, ngHide e ngIf`

+ Exibem elemetnos de forma condiicional
+ `ngShow e NgHide`: Trabalham na visibildiade de um elemtno, no atributo CSS `display`, ele o poe como `none` ou nâo.
+ Enquanto que o `ngIF` trabalha com a DOM, ele é masi poderoso, eele tiinha a `tag` do HTML enquanto que o outro apeas deixa ela invisivel
+ **Qual usar:** Para economizar recursos, use `ngIF` se o que for carregado é algo grande computacionalemtn, se nao, os outros

`ngInclude`

+ Colocar conteudo de outros arqutivos

  ````html
  <div ng-include="'footer.html'"></div>
  
  ...
  Outro html
  ...
  
  <div style="text-align: center">
  	Criado por Rafael
  </div>
  ````

## AngularJS - #4 - Validando Formulários 

==> No quarto episódio da série AngularJS, nós vamos falar sobre validação de formulários utilizando as diretivas ngRequired, ngMinlength, ngMaxlength e ngPattern. Além disso, vamos conhecer em detalhes \$valid, $invalid, \$pristine, \$dirty, \$error e também o uso da função \$setPristine.

`ngRequire: $invlalid, $valid, $pristine, $dirty`

+ Define que um campo é obrigatório

+ é necessário está dentro de uma tag `<form>` com u name,

  + Quando as coisa estâo dentro de um forma com um atributo `name ` definido, o AngularJS define no \$scope um \$valid e um \$invalid para cada `name` do formulatrio, identificando se é válido ou não

+ Para testar, bsta colcoar : 

  ````
  {{contato}}
  ````


`$pristinie e $dirty`

+ Sao antagonicas. Indicam se um campo já foi tocado
+ é util para mostra uma mensagem no momento em que ele tocaou nela

`ngMinlenght e ngMaxlengh`

+ Define tamanho mínimo e máximo par aum campo

`$error`

+ Consulta se há erros no formulário.
+ Contem as validações dos respectivos campos e dos respectivos atributos. ou seja, você pode pegar qualti po de erro que ta sendo casusado em especifico (É erro de `require`, `minlength`, `maxlength`)

````html
<div ng-show="contatoForm.nome.$error.minlength && contatoForm.nome.$dirty" class="alert alert-danger">Deve ter 8 chars</div>
<div ng-show="contatoForm.nome.$error.required && contatoForm.nome.$dirty" class="alert alert-danger">Por favor, preencha nome</div>
<!--  Perceba que um so vai acusar se o required tiver dado erro, enquanto que o outro é quando o minlength der error -->
````

`ngPattern`

+ Define expressao `Regex`para validar um campo

Exemplo de `REGEX`

`/^\d{4,5}-\d{4}$/` Isso significa:

+ A regex começa e fecha com `/` , é isso que define ela
+ O `^` indica que o que vem a seguir deve ser o iníco dela e `$` indica o seu fim. Sem isso, ele procura a exepressao dentro de todo um texto, e temos que definir que começa e termina desse jeito, para isso há esse `^^` e `$`
+ `\d`: Indica digito e `{}` a quantidade

No final, temos essa regex de telefone que traduzindo indica que:

Começa com 4 ou 5 digitos, depois um traço, e termina com 4 dígitos

````html
<input class="form-control" type="text" ng-model="contato.telefone" placeholder="Telefone" ng-require="true" name="telefone" ng-minlength="8" ng-pattern="/^\d{4,5}-\d{4}$/" />
````

`ng-messages`

+ OBS: Esse módulo é externo ao angular JS, é dele, mas stá fora e entao tera que ser colocado no  module

  + Você tem que por essas duas coisa

    ````html
    <script src="lib/angular-1.7.2/angular-messages.js"></script>
    ....
    <script>
        angular.module('listaTelefonica', ['ngMessages']);
    </script>
    
    <!-- Com NG-MESSAGES -->
    <div ng-messages="contatoForm.nome.$error" class="alert alert-danger">
    	<div ng-message="required">Por favor, preencha nome</div>
    	<div ng-message="minlength">Deve ter 8 chars</div>
    </div>
    
    <!-- Sem NG-MESSAGES -->
    <div ng-show="contatoForm.telefone.$error.required && contatoForm.telefone.$dirty" class="alert alert-danger">Por favor, preencha telefone</div>
    <div ng-show="contatoForm.telefone.$erro.pattern" class="alert alert-danger">Deve ter o formato correto DDDD-DDDD</div>
    
    ````

+ Permite que faça um swith e dezuza a quantidade de escrita quando houver varias mensagens

+ Você faz um apra cada campo, quando há várias mensagens diferentes derro. A vantagem é que é melhor para manutenção e fica melhor de se ver, alem de organizar todas as mensagens para um certo `input` em um lugar só.

# AngularJS - #5 - Aplicando Filtros 

Descriçâo: No quinto episódio da série sobre AngularJS, nós vamos falar sobre Filtros. Abordaremos os filtros uppercase, lowercase, date, filter, orderBy, currency, number e limitTo.

Definiçâo de Filtro: Tranformar o resultado de uma expressao, realizando operaçoes como formataççao de data, a conversão de moeda e a ordenaçâo de array, tranformaçao de string e outros

VocÊ faz usando um `pip : |`

`uppercasse`

+ Coloca a String em Letras Maiusculas
+ Você coloca em Miausculo mas nao altera os dados originais, apenas a  forma que serao visualizados

````h
<td>{{contato.nome | uppercasse}}</td>
````

`lowercase`

+ COlocar em minusculo

````html
<td>{{contato.operadora.nome || lowercase}}</td>
````

`date`

+ Para formatar data
+ A vantagem é que evita fazer isso no back-end
+ Tambem é possível passar parâmetros

````html
<td>{{contato.data | date: 'dd/MM/yyyy HH:mm'}}</td>
````

`filter`

+ Filtra um array com base num critério
+ Usado em uma expresao que itera sobre um array, vai fazer com que retorne somente o que obedecer ao filter

````html
<tr ng-class="{'selecionado negrito': contato.selecionado}" ng-repeat="contato in contatos | filter:{nome: criterioDeBusca} ">
				<td><input type="checkbox" ng-model="contato.selecionado"/></td>
				<td>{{contato.nome | uppercase}}</td>
				<td>{{contato.telefone}}</td>
				<td>{{contato.operadora.nome | lowercase}}</td>
				<td><div style="width: 20px; height: 20px;" ng-style="{'background-color': contato.cor}"></div></td>
				<td>{{contato.data | date: 'dd/MM/yyyy HH:mm'}}</td>
			</tr>
````

Nesse exemplo, vai msotra o dado de contato somente o que tiver o `nome:criterioBusca`. Perceba que com isso, nao presisa usar o bakc-end

`orderBy`

+ Ordenar um Array
+ Pra ser acendente: `orderBy:'nome'` ou `ordeBy: '+nome'`, `nome:true`
+ Para ser descendente: `orderby:'-nome'`
+ Você

````
<tr ng-class="{'selecionado negrito': contato.selecionado}" ng-repeat="contato in contatos | filter:{nome: criterioDeBusca | orderBy:'nome'} ">
````

Com so isso, consigo ordenar cmapos:

````
$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo; // e
				$scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao; // No 2 click, vai inverter
			};
			....
			....
			....
			<tr ng-class="{'selecionado negrito': contato.selecionado}" ng-repeat="contato in contatos | filter:{nome: criterioDeBusca} | orderBy:criterioDeOrdenacao:direcaoDeOrdenacao ">
````

`currency`

+ Converte Números em Moeda

+ Observe que originlamente vai converter para dolar. Para colocar da forma que se quer, voce pega o locale daonde se está: 
  + So presiaa da o import pelo script: `angular-locale_pt-br.js`

````html
<script src="lib/angular-1.7.2/angular-locale_pt-br.js"></script>

<select class="form-control" ng-model="contato.operadora" ng-options="operadora.nome + '( ' + (operadora.preco | currency) + ' )' group by operadora.categoria for operadora in operadoras | orderBy:'nome'">
````

`number`

+ Converte Numero. Serve para por casaas decimais

````
Vai Colocar 10 casas decimais
{{ 100 | number:10 }} => 100,000000000000
{{ 100.96 | number:1}} => 101,0 (Fez arredondamento)
{{ 100.24 : number:1 }} => 100,2
{{ 100.26 : number:1 }} => 100,3
````

`limitTo`

+ Limita o que mostra um array ou String para mostrar

````
| limitTo:3 // Vai mostrar apenas 3 palavras duma string, ou soemente 3 elemetnos de um array
````

##### Permfomance de Filters

+ Todos os filter que vemos podem prejudicar o desempenho por que sao chamdaso 24h, para cada mudança que ocorrer na Tela. Para melhorar sua perfomance, podemose esntao **colocar filter no controller**

## AngularJS - #6 - Integrando com o back-end por AJAX

Descrição: 

	No sexto episódio da série AngularJS, nós vamos falar sobre como integrar com o back-end por AJAX, utilizando o serviço $http.
	Além disso, vamos também desmistificar o AJAX, contando um pouco da sua história e explicando seu funcionamento, por meio do objeto XMLHttpRequest.
	Por fim, falaremos da política da mesma origem, ou SOP - same-origin policy, e como lidar com ela por meio de JSONP, JSON with padding, e CORS, cross-origin resource sharing.

A Web, no início era completamente estático. Já no início já se pensava em como fazer uma página masi dinâmica. A web nâo era muito atraente no início, pois web presisaa recarregar toda hora. Nessa éopca softwares omo em *delphi* era bem mais vistos

Em 2005 veio o AJAX (Assynchronous JavaScrist and XML). É uma combinação de várias tecnologias:

+ HTML, CSS, DOM, JSON, XMLHttpRequest e JS

Veio ante pela Microsofts que em 199 lançou para o IE um componente XMLHttpimplementaçao do  XMLHttpRequestque usamos até hoje.

AJAX foi um imenço divisor de águas. Com ele JS cresceu e se tornou cada vez populat até hj. Ele foi quem salvou a web

`$http`

+ é um serviço que permite que façamos requisiçôes XMLHttpRequest e JSONP (JSON with Padding)

````
get(url,config)			
post(url, data, config)
put(url,data, config)
delete(url, config)
head(url, config)
jsonp(url, config)
````

Fazendo uma requisiçâo HTTP

````javascript
var carregarContatos = function(){ // promisse
    $http.get("http://localhost:3412/contatos).then( function (response){
        $scope.contatos = response.data; // Two-Way-Data-Bind (Por isso, tem Delay)
        // Dessa forma, já vem como JSON direto e dá produtividade
    }).error(function (data,status){
        $scope.message = "Deu Erro em " + str(status)
    });
}; // end
````

SOP (Same-Origin Policy)

O *browser* implemente uma politica de restriçao de segurança que impode que o navegador acesse recursos algeuiso a sua origem, consideran : protocolo, host e porta.

Se voce está num domnio, e, acessa uma outra porta, protocolo e origme

Uma soluçâo é

JSON with padding

Estratediia para burlar esse mecanismo de proteçao dos *browser* em relaçao ao aceosso de recursos externos.

A ideia é chamar um documento externo da mesma forma que se chama as seguintes tags: `<img>, <script> e outros`. Assim nao vai dar esse tipo de erro.

Só funciona com Get

Já existe técnicas mais avançadas como CORS que permite fazer isso.



## AngularJS - #7 - Organizando o projeto

#### Inline Style 

+ **Tudo no mesmo aruqivo**

+ É da forma que estmoa fazendo até agora
+ Serve para prototipos e projetos muito pequenos. Para desburocratizar. Tambem é ruim para aprendizagem.

##### Stereotyped Style:

+ **Os componentes do mesmo tipo juntos**
+ Separaçâp de pastas por tipo de arquivo `css/ ou style/`; `js/ ou scripts/`; `lib/ node_modules`; `view/ templates/ ` e na raiz `index.html`
+ Serve mais para projetos pequenos em que haja pouco código para cada compoentne
+ Ele nao costuma usar muito e nem mesmo acha util

##### Specific Style

+ Uma pasta para cada compoente do angularJS
+ Essa é a que ele usa, é  tambem a que William usa
  + Separa a pasta de controler, a pasta de `service`
+ Considera ser muito boa
+ **É o Stilo que ele vai seguir a partir de agora**

![img03](C:\Users\Rafael\Google Drive\Private Studies\ANGULAR JS\youtube-Robriga-Branas\img\img03.png)

##### DOmain Style

+ Agrupar arquivos por domínio da app
+ Separa as coisas por features. É separa por exemplo, numa pasta chamda `login/` coloca o seu `html/css/js`. 
+ Pode ser íutil para seu tipo de projeto
+ Desvantagem

  + Ruim para usar `gulp` por está em pastas diferentes
+ OBS: Cuidado para não burocratizar demais
+ Quando usalo

  + Projetos Grandes de DOmínio Extenso

## AngularJS - #8 - Criando Serviços

Descriççao: No oitavo episódio da série sobre AngularJS nós vamos aprender a criar serviços utilizando factory, service, value, provider e constant, além de utilizar também o bloco config para configurar serviços do tipo provider

Devo criar um service para:

+ **Reuso:** Quando eu tiver o mesmo código repetido entre controllers ou filtros de lugares diferentes. Talvezentao seja a hora de unificar em um `service`
+ Oragnizaçâo: Sendo Altamente coeso e com baixo acoplamento, fica bom para chama-lo de qualquer lugar

Oq eu é um service em aAngularJS: é um `singelton` ou seja, um objeto úncio, criado na inicializaçao da sua app e que está dispotnivel para ser injetado em outros componentes (diretivas, controler,s serviço)

#### `factory`

+ É uma função que vai retornar um objeto {}. Entao, voce acessar o atributo desse objetos, que pode ser uma variavel ou, uma funçâo
+ é necessário importar no HTML antes de outros e de injetalo no controler que o usar (naquela parte que tem o $scope)

````javascript
angular.module('listaTelefonica').factory("contatosAPI", function (){
	// Vai retornar a execuçâo do http, uma função
	// A factoruy é a forma de tornar um bloco de código
	// intercampiávelvel entre os varios tipos de compoentens do AngularJS
	var _getContatos = function () {
		return $http.get('http://localhost:5000/contatos');
	};

	// Mais outro serviço
	var _saveContato = function (contato) {
		return $http.post(config.baseUrl + "/contatos", contato);
	};

	// Ela sempre retorna um objeto
	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};

});
````

````javascript
// Funçâo Fábrica
var criaPessoa = function (nome, idade){
    return {
  		nome: nome,
        idade: idade
    };
};
````

#### `service`

+ Usa o conceito de funçâo contrutora

````javascript
var Pessoa = function (nome, idade){
    this.nome = nome;
    this.idade = idade;
};
// Chamada da funçâo contrutuora
var carlos = new Pessoa ("Carlor", 25);
````

+ Quando ele usou, nao presiso de ter o http na principal, e sim nso serviços

#### `value`

+ Serve para coisas de configuração

````javascript
angular.module("listaTelefonica").constant("config", {
	baseUrl: "http://localhost:3412"
});

// chamada
// APOS INJETAR DEPENDENCIA de cofing em seu compoentes AngularJS
console.log(config.baseURL);
````

### `provider` e `config`

+ Mais complexo de ser criada, mas dá tambem a habilidade de configurálo. é uma espece de serviço configurável 
+ Ele é paraceido com `factory`.  Retorna um objeto, e dentro de seus atributos tem o que você pesisa
+ **SUA CONFIGURANÇAO É FEITA NO `config`**, ou seja, em outro arquivo. isso por que essa configuraçâo é feita antes de se contrauir esse serviço para ficar disponpivel
+ **TEM QUE POR O CÓDIGO EM `this.$get`** sem isos nao funciona

````javascript
// service/serialGeneratorService.js => PROVIDER
angular.module("listaTelefonica").provider('serialGenerator', function(){
    
    this.getLength = function () {
		return _length
	};
    
	this.setLength = function (length){
		_length = length;
	};

	// Se nao tiver esse this.$get => VAI DAR ERRO
	this.$get = function (){
		return {
			generate: function (){
				var serial = "";
				while(serial.length < 20){
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}
				return serial;
			}
		};

	};

});

/* Como chamar
Apos injetar o modulo em: function (.... , serialGenerator)
	Chama
	serialGenerator.generate()
*/

````

**CONFIG**

+ A injetar o modulo do `provider`, eu posso configurar

````javascript
angular.module("listaTelefonica").config( function (serialGeneratorProvider){
	// Vai chamar o método
	serialGeneratorProvider.setLength(100);
});

````

---

##  AngularJS - #9 - Criando Filtros

**Descrição:** No nono episódio da série sobre AngularJS, vamos aprender juntos a criar filtros!
	Além disso, vamos ver na prática a utilização de conceitos importantes da linguagem JavaScript relacionados a Boolean, String, RegExp e também as operações map e join da API de Array.

Como usar filtro no html

````html
{{ nome | uppercase}}
````

+ Os filtro nem sempre filtram
  + Ele tranforma o resultado de uma expressao 
    + Faz comoisa como: formatação de Data, conversão de moeda e ordenação de Array

Vamso aprender a Criar um Componente de Filtro personalizado

**Filtro 1: Iniciais Maiusculas**

+ Converter nomes, escritos e minusculos/maiusculos deixando a primeira letra maisuculas
+ Ex: joão da silva => João da Silva

````javascript
angular.module('listaTelefonica').filter('name', fuction() {
	
	return function (input){
		var listaNomes = input.split(' ');
		var listadeNomeFormadata = listaNomes.map(function(nome){
			// Vai testar se nome conbina com a expressao regular ou nao
			if( /(da|de)/.test(nome) ) return nome;
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();

		});
		return listadeNomeFormadata.join(' ');

	};

});
````

**Filtro 2: colocando '...' para limitar**

+ Dá para fazer por css, é até interresante por redimensiona uma tabela

+ Esse será parametrizável e você coloca o parametro no HTML como:
+ {{ contato.nome | name | ellipses:10  }} 10 => size

  ````javascript
  angular.module('listaTelefonica').filter('elipses', function(){
  	/*
  		+ Posso colcoar de forma paramatrizável
  		+ No HTML fica
  			`{{ contato.nome | name | ellipses:10  }}` 10 => size
  	*/
  	return function (input, size){
  		if(input.legth <= size) return input; // se couber
  		var output = input.substring(0, (size || 2)) + '...'; 
          // '||" servepra converter em bool e se for false, colocar 2
  		return output;
  	};
  });
  ````

##  AngularJS - #10 - Criando Diretivas - Parte 1

Descrição: Neste décimo episódio da série sobre AngularJS, na parte 1, nós vamos aprender a criar diretivas utilizando as propriedades template, templateUrl, replace, restrict, scope e transclude.



````html
<!-- Vamos tornar isos num combponente reusável no AnuglarJS -->
		<div class="ui-alert">
			<div class="ui-alert-title">
				Titulo Problrema
			</div>
			<div class="ui-alert-message">
				{{error}}
			</div>
		</div>
````

A faze inicial da criaçâo de uma diretiva

````javascript
angular.module("listaTelefonica").directive("uiAlert", function () {
	return {

	};
});
````

propriedade `templaete e templateURL`

+ Especifica o template/url que deve´ra ser inculuido dentro do elemento que estiver utilizando a diretiva

+ Age de forma similar ao `ng-include`

+ **Importante:** O nome da riretiva é `uiAlert`. O javaScript é caseSensitive. Mas, o HTML não é. pra ele, as tags sâo tudo em minuclo. Por causa do `A`, no html iremos chamr como `ui-alert`. Isso ocorre tambem com ngRepeat =] `ng-repeat` dentre outros.

  ````html
  <!-- Chamando: -->
  <div ui-alert>
  </div>
  ````

  `template`: colocar um HTML simples

````

angular.module("listaTelefonica").directive("uiAlert", function () {
	return {
		// Esse template é o HTML que será incluido na página quando chamar ela
		template: "<div>uialert</div>",

	};
});
````

`templateURL:` Vai inserir o html de um arquivo seprado (mais organizado)



`restrinct`

+ restringe o modo de utilizaçao da diretiva para ser aplicada **somente em ** num: atr, elmento, class e comentarios
+ Caso nao seja defino, por default é pelo atributo
  + A. Restrige a somente ao atributo ('So funciona quando `ui-alert` for um atributo de um elemento')
    + `<div ui-alert>` : aki é atriubo, e asism vai funfa
  + E. Restringe para msotra somente quando for elemento
    + `<ui-alert> </ui-alert>`: 
  + C: restriçao de classe
    + `div class=ui-alert`
  + M: restrita ao comentario
    + `<!-- directive: ui-alert --> <div></div>`
+ Tamobe posso fazer combinaçoa como `AE`

`scope`

+ Por default, uma diretiva compartilha o meso scope d eonde ela está sendo utilizada

+ Para aumentar sue potencial de reusmo, podemos isolar seu scope, passandos os dados necessários como paramtretos

  + Esse é um comporatemnte dessejado, posi, senao, nao terá reuso

+ **Para identificar o scope coloque:**`{{ $id }}`

+ @: Vincula o valor do atributo direamtane a uma propriedade do scope da riretiva
  + Se o nome no scope isolado for igual ao atributo do html, esntao, podemos usar somente @, sneoa, tem que usar @nome_attr

  ````html
  <!-- uiAlertDirective.js -->
  <script>
  angular.module("listaTelefonica").directive("uiAlert", function () {
  	return {
  		templateUrl: "view/alert.html",
  		replace: true,
  		restrict: "AE",
          // title: @ => esse scope recebe o title do index.html e mostra no alert.html
  		scope: {
  			// A notaçao de so @ é quando forem iguais
              title: "@"
              // aki sao diferente, entao tem que ser assim para por msg no scope interno dessa diretiva
              another_scope: "@msg"
  		},
  
  	};
  });
  </script>
  -----------------------------------
  <!-- alert.html -->
  <div class="ui-alert">
  	<div class="ui-alert-title">
  		{{title}}
  	</div>
  	<div class="ui-alert-message">
  	</div>
  </div>
  ---------------------------------
  <!-- index.html -->
  <ui-alert title="Ops, aconteceu um problema!" msg="exemplo">
  			{{error}}
  		</ui-alert>
  
  ````

`tranclude` (Bool)

+ Usada quando quero capsular o conteudo da tag, passa ele para dentro
+ encapsula elementos dentro de uma diretiva,c riando um scope nâo isolado
+ Enfim: você passa os argumentos de qualquer jeito dentro da diretiva que via mapear para dentro de seu scope
+ **Você inidica aonde o conteudo interno da div deve aparecer**: voce usa `ng-tranclude no html`

````html
<!-- uiAlertDirective.js -->
<script>
angular.module("listaTelefonica").directive("uiAlert", function () {
	return {
		templateUrl: "view/alert.html",
		replace: true,
		restrict: "AE",
        // title: @ => esse scope recebe o title do index.html e mostra no alert.html
		scope: {
			// A notaçao de so @ é quando forem iguais
            title: "@"
      
		},
        trasnlude: true

	};
});
</script>
-----------------------------------
<!-- alert.html -->
<div class="ui-alert">
	<div class="ui-alert-title">
		{{title}}
	</div>
	<!--  com ng-translude, vai pegaro que ta dentro da tag no index.html -->
	<div class="ui-alert-message" ng-traslude>
	</div>
</div>
---------------------------------
<!-- index.html -->
<ui-alert title="Ops, aconteceu um problema!" msg="exemplo">
			{{error}} <!-- Vai entra no ng-trasnlude -->
		</ui-alert>
````

## AngularJS - #11 - Criando Diretivas - Parte 2 - Mascaras

Descriçâo:

 Neste décimo primeiro episódio da série sobre AngularJS, parte 2, nós vamos continuar aprendendo a criar diretivas, dessa vez abordando as propriedades: link e require. Juntos, criaremos uma diretiva de máscara que formata uma data conforme ela vai sendo digitada.
Vamos falar também da API de ngModel, descobrindo como utilizar \$viewValue, \$setViewValue, \$render, \$parsers e \$formatters.

**Obs**: Essa aula é mais dificil, envolve DOM e muitas outras coisas



**Aqui vamos ver mascaras, e , mascaras é diferetne de filtro**

+ Filtro tranforma a expressao, mas nao o ng-mdoel

Vamos ver as propriedade:

`link`

+ Executada depois deo templater ter sido compiladado, podemos utilizala para interagir com a DOM, tratndo eventos ou mesmo defini o comportamten associado coma  lógica da diretiva.
+ Usada principalemten para interagir com a DOM, tratar eventos e definri a lógica da diretiva

`require`

+ Estabele um vinculo com outra diretiva, interagidno por meio do controller, que é um dos paramteros da funçâo link
+ é como um import da diretiva para usar funçoes dela dentro da minha diretiva

````javascript
angular.module("listaTelefonica").directive("uiDate", function ($filter) {
	// Passei filter para usar os filtro do angularJS

	return{
		// o ngModel é passado no 'ctrl' no .link
			// $viewVlaue é dele
			require: "ngModel",
		// Vai ser o mesmo do controleler, caso nao quiser uma diretiva que isole  o controller
		// nao é interressante interagir muito com o scope dentro da diretiva
		link: function(scope, element, attrs, ctrl){
			// Vamos ter que modificar o Date para garantir que vai dar certo
				// para o caso do usaurio colocar '/' e nao colocarmos uma 2° '/'
				var _formatDate = function (date) {
				date = date.replace(/[^0-9]+/g, ""); // Regex: tudo que nao for entre [0,9] substitui por vazio
				// Colocar a primeira '/', a que separa dia e mes
				if(date.length > 2) { 
					date = date.substring(0,2) + "/" + date.substring(2);
				}
				/// colcoar a 2° barra, que serapra mes e ano
				if(date.length > 5) {
					date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};

			// keyup => cada vez q for digitado vai executar essa funçao
			element.bind('keyup', function(){
				// console.log(ctrl.$viewValue); // ver o valor
				ctrl.$setViewValue(ctrl.$viewValue + "!"); // vai colocar ! a cada coisa
				ctrl.$render(); // redereniza na tela na hora
			});

			// Serve para: mandar para o ng-modle somente quando tiver os 10 caracteres
			// so ai vou interagir com o scope
			ctrl.$parsers.push(function (value) {
				if (value.length === 10) {
					// Serve para retorna o tipo Object Date da forma correta
					// Pois nao tem como converter date 31/01/2018 ==> tem que ser => 01/31/2018 (Formato americano)
					// por fim, usao .getTime para pegar o UnixEpoch
					var dateArray = value.split("/");
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
				}
			});

			// Dessa forma, vou passar minha data como dd/mm/YY
			ctrl.$formatters.push(function (value) {
				return $filter("date")(value, "dd/MM/yyyy");
			});


		}
	};

});
````

## AngularJS - #12 - Criando Diretivas - Parte 3

Descriçâo?: No décimo segundo episódio da série sobre AngularJS, vamos continuar falando sobre a criação de diretivas, dessa vez, abordando a propriedade controller.

`controller`

+ ´Permite defnir uma API que pode ser compartilhada com outras diretivas

uiAccordeonDirective.js

````javascript
// Para mediar entre ambas as diretivas: pois queremos que,ao clicakr em uma, c=feche as outras
// nots temos que criar uma diretiva pai, es
/* Vamos por todos os acccordios dentro desse daqui
	Ele terar um controller para fazer essa mediaçao*/
angular.module("listaTelefonica").directive("uiAccordions", function () {
	return {
		// controller vai manter o estado de todos os accordeons
		controller: function ($scope, $element, $attrs) {
			var accordions = [];
			/* Apenas com this. eu posso acessar de fora dela
			// somente com o this. podemos acessar ela de fora*/

			// rregistro os accordeosn quando inicializa a pagina
			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			};

			// Fecha todos os acordeons
			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			}
		}
	};
});

// Como na utilziaçao, esssa diretivas sao irmaas, nao tem
// como uma acessar a outra
angular.module("listaTelefonica").directive("uiAccordion", function () {
	return {
		// Definido o Template
		templateUrl: "view/accordion.html",
		transclude: true,
		// Isolei o scope e faço a interpolaçao com oq eu tier dentro de title
		scope: {
			title: "@"
		},
		// o conteudo da tag vou por no ng-traslude
		require: "^uiAccordions", // Acessar Api, esse circunflexo '^' quer dizer que vai pegar o do pai
		link: function (scope, element, attrs, ctrl) {
			ctrl.registerAccordion(scope); // Vou registrar os accordeios
			// Vai fechar todos os accordeons, e depois, abrir o que se quer
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened= true;
			};
		}
	};
});
````

no html

````html
<ui-accordions>
			<ui-accordion title="Accordion 1">
				Lorem 
			</ui-accordion>
			<ui-accordion title="Accordion 2">
				Lorem ipsum 
			</ui-accordion>
			<ui-accordion title="Accordion 3">
				Lorem ipsum dolor 
			</ui-accordion>
			<ui-accordion title="Accordion 4">
				Lorem ipsum dolor sit amet
			</ui-accordion>
			<ui-accordion title="Accordion 5">
				Lorem ipsum dolor sit amet, consectetur 
			</ui-accordion>
		</ui-accordions>
````

template url

````html
<div class="ui-accordion-title" ng-click="open()">{{title}}</div>
<div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>
````



## AngularJS - #13 - Modularizando o projeto 

Descrição: No décimo terceiro episódio da série, nós vamos falar sobre estratégias de modularização de aplicações e discutir as principais razões para considerar a criação de novos módulos,  aprendendo a criá-los na prática. Além disso, vamos utilizar o bloco de inicialização juntamente com o serviço \$templateCache, que vamos utilizar para armazenar os templates utilizados pelos módulos criados.



+ Um módulo é uma coleçâo de compoenten, ou seja, um conjunto de controller, directives, filter, service personalizados utilizados pela aplicaçâo.

+ Para criar um novo modulo

  ````javascript
  angular.module('nomeDoModulo', []);
  ````

**Por que criar modulos?**

+ na nossa aplicaçao, estmos usando somente um módulo "listaTelefonica
+ Motivaçâo:
  + **Reuso**:; Organização;
  + Perfomance: Se o usuario so mexer em uma pequena parcela do sistema, entao, nao vai correga todo um modulo gigante.
  + Seguranaç: Garante que so usa o que for necessitado
  + Isolamento: Podemos presisar para tests unitários e isolando em moduo fica mais fácil de testar
+ Tranforma em módulo, aqui, será entao, toranr em algo externo, como **algo baixado do github**



Vamos mudar o  provider serialGenerator para ser um mdulo

````javascript
// Eele é um odulo separado
angular.module("serialGenerator", []);
// agora, nao pertence ao lista telefoncia, ele pertence a outra
angular.module("serialGenerator").provider('serialGenerator', function(){

	this.getLength = function () {
		return _length
	};
	........

});

````



A importaçao de modulo é definiada na definiçao de um modulo

````javascript
angular.modeul('listaTelefonica', ['ngMessages', 'serailGenerato'])
````

+ ELE NAO TEM VICULOA GLUM, ENTAO, DA PRA IMPORTAR PARA O GIT HUB

`$templateCaceh`

+ Na 1° vez que um teamplate é carregado, ele é aramzanado em chache e assceivel por meio do serviço $temlateCaxce

  Adicionamento template no templateCache

````
angular.module("ui").run(function ($templateCache) {
	$templateCache.put("view/accordion.html", 
		'<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});
````



## AngularJS - #14 - Single-Page Application com ngRoute 

Descriçâo:No décimo quarto episódio da série sobre AngularJS nós vamos aprender a criar uma Single-Page Application utilizando o módulo ngRoute. 
Além disso, vamos aprender a configurar o roteamento por meio de $routeProvider e suas operações: when e otherwise. Por fim, estudaremos o objeto $route e suas principais propriedades como: templateUrl, controller, redirectTo e resolve.

Single Page: Carrega seus compoennes de forma dinamica usando AJAX

O G-mail é Single-Page-Application: Quando você usa: **Nâo ocorre recarregameno de pagina**

Vantagens

+ Usuablidaidade: Evita ter que recarregar pagina a toda hora. Ate mesmo aplicaçoes que nao sao SPA usam AJAX

Qusetoes a serem consideradas

+ E se o usuario desligar o uso de JavaScript? Se o ususario desligar, nao tem como fazer nada na SPA, mas, ninguem consegue usar muito aWeb sem JS
+ Perfomence: Existe um overhead inidicla no carrgamento inicial da pagina, pois carrega muito script. Mas, apos o carregamento inicial, fica mais tranquilo
+ As paginas vao continuar sendo indexadsa pelo Google? Sim, mas da mais trabalho, vai ter que procurar outra forma de fazer SEO (Search Engine) 
+ Botaô de voltar e Botao de favoritos: é possivel como ng-route, mas isso é questao mais de como implementar

`ngRoute`

+ Oferece serviços para realizar **Rotemaneto de paginas**. Alem do ngRoute há outras forma de fazer rotemanto de página

`$routeProvider`

+ Podemos configura o serviço de rotemaneto por meio de `$routeProvider`, configurando cada roa específica e também uma rota default, caso nao encontrar nenhuma

  é feito pelo service `config ` usando `$routeProvider`

  ````
  // Exemplo
  app.config(function ($routeProvider){
      when(path, route)
  	otherwiser(path)
  });
  
  ````

+ Para rederizar, tem que colocar na pagina principal aonde rederizar

  `<div ng-view></div>`

+ Como executar uma funçao no js para mudar de rota

  ````
  $location.path("/contatos");
  ````

+ Redirecionar para caso defulat se errar

````javascript
// Caso nao encontrar: redireciona para /contatos
	$routeProvider.otherwise({redirectTo: "/contatos"});
````

`resolve`

+ Executa metodo automaticamente quando abre a pagina. Com ele, vai evitar colocar informaçao no contrller.
+ Tem esse nome para resolver depedndeicas
+ Vai entrar na pagina somente depois de executar certas coisas

`routePrams`

+ se a url for `contatos:id` esse id é recuperado no controller por
  + `$routePrams.id`

`routeConfig.js`

````javascript
angular.module("listaTelefonica").config(function ($routeProvider) {
	// Aqui vou ter o $routeProvider para configuras as coisas
	$routeProvider.when("/contatos", {
		// templaURL: Quem eu de devo rederizar para essa rota
		// Define o endenreço daonde vai rederizar
		templateUrl: "view/contatos.html",
		// Defino o modulo cadastrado para essa pagina
		controller: "listaTelefonicaCtrl",
		// Vai fazer isso antes de entrar
		// esse 'operadores' ai em baixa entra como dependeic ado controller da fuçâo
		resolve: {
			contatos: function (contatosAPI) {
				return contatosAPI.getContatos();
			},
			operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});

	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});

	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			// passo $route paara passar o id da rota atual, dessa froma, eu passo aki
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});

	// Caso nao encontrar: redireciona para /contatos
	$routeProvider.otherwise({redirectTo: "/contatos"});
});
````

## AngularJS - #15 - Interceptors

Descriçâo: No décimo quinto episódio da série sobre AngularJS, vamos aprender a criar e configurar interceptors na prática.

interceptor

+ é um tipo de service que pertmite interceptaçôes das req e resposta do $http
+ é uma factory, como tal, ele a cria e a torna um compoenten para ser injetado em outros

Serve para por eemplo:

 + tartar que nao tem
    + autorizaçao, erro inesperado, 

O serviço `http$` possu um array de interceptors que podem ser configurados na inicializaçao da aplicaçao entao, tenho que configurar o $httpProvider  em outro lugar