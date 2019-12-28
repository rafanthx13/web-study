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
			title: "@" // com isso, podemos usar {}}{{}} interno no template URL e passar parametro pelo atributo title
		},
		// o conteudo da tag vou por no ng-traslude
		require: "^uiAccordions", // Acessar Api, esse circunflexo '^' quer dizer que vai pegar o do pai
		//o ctrl é o que vem de requrie
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