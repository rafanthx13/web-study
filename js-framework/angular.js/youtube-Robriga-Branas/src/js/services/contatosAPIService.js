angular.module('listaTelefonica').factory("contatosAPI", function ($http){
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