angular.module('listaTelefonica').filter('elipses', function(){
	/*
		+ Posso colcoar de forma paramatrizável
		+ No HTML fica
			`{{ contato.nome | name | ellipses:10  }}` 10 => size
	*/
	return function (input, size){
		if(input.legth <= size) return input; // se couber
		var output = input.substring(0, (size || 2)) + '...'; // '||" servepra converter em bool e se for false, colocar 2
		return output;
	};
});