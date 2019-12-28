angular.module("listaTelefonica").directive("uiAlert", function () {
	return {
		// Esse template é o HTML que será incluido na página quando chamar ela
		//template: "<div>uialert</div>",
		templateUrl: "view/alert.html",
		// replace: serve pra substituir tudo que ela envolve  incluindo a tag que a chamou pelo template
		// Nâo é muito usada
		replace: true,
		// restrict: restringe onde ele pode ser utilizada
		restrict: "AE",
		// Cria um scope interno para pegar as coisas por parametros e assim ser reusável
		scope: {
			title: "@"
		},

	};
});