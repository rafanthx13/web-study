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