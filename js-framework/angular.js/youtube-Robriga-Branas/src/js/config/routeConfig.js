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