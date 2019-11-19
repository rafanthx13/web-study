angular.module('listaTelefonica').filter('name', function() {
	/* 
	+ Fitltro que converte para iniciais maiusculas
	+ Pode dar um COnsole.log
	+ chamada no HTML  {{ scope.model | name}}
	*/
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