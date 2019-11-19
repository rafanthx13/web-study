angular.module("listaTelefonica").service("operadorasAPI", function ($http, config) {
	// é importado tambe o 'value' que mantem constantes
	this.getOperadoras = function () {
		return $http.get(config.baseUrl + "/operadoras");
	};
});