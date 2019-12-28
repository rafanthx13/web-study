angular.module("listaTelefonica").provider('serialGenerator', function(){
	/*
		+ é mais parecedo com o factory
		+ O provider pode ser configurado esternamente
		+ Acaba que é como se eu tivesse um factory dentro de 'this.$get',
			mas se engane se achar que é so isso.
		A ralaidade
			### O serviço provider é o unico que pode ser configurado na chamada
					Eele ocorre antes da iniciaçizaço do serviço e por isso, 
					PODEMOS PASSAR PARAMETROS para serviços od tipo provider

	*/

	this.getLength = function () {
		return _length
	};
	
	this.setLength = function (length){
		_length = length;
	};

	// Se n^so tiver esse this.$get => VAI DAR ERRO
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

// Chama pondo serialGenerator como injesao de dependencia
/*
	serialGenerator.generate()
*/