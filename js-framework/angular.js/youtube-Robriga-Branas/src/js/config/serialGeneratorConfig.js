// Configuraçâo para o 'provider'
// Esse inject do providerGenerator só serve para um PROVIDER
// Esse config ocorre pois, EH CONFIGURADO ANTES DE MANDAR PARA A APLICAÇAI=O
angular.module("listaTelefonica").config( function (serialGeneratorProvider){
	//Aqui, estou fazendo a configuração do meu serviço
	// Assim ficou um serviço configurável
	serialGeneratorProvider.setLength(100);
});

