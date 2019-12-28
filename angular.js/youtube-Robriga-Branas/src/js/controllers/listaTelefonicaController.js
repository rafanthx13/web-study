angular.module('listaTelefonica').controller('listaTelefonicaController', function($scope, contatosAPI, operadorasAPI, serialGenerator){ 
			// controller

			$scope.error = "Msg de Error";
			$scope.app = "Lista Telefonica";
			$scope.contatos =[
				{nome: 'pedro', telefone: '88888888', data: new Date(), operadora: {nome: 'Oi', codigo: 14, categoria: 'Celular'}, cor: 'blue'},
				{nome: 'Ana', telefone: '5555', data: new Date(), operadora: {nome: 'Vivo', codigo: 15, categoria: 'Celular'}, cor: 'red'},
				{nome: 'Maria', telefone: '66', data: new Date(), operadora: {nome: 'GVT', codigo: 25, categoria: 'Fixo'}, cor: 'yellow'},
				{nome: 'Silva', telefone: '7777', data: new Date(), operadora: {nome: 'Embratel', codigo: 21, categoria: 'Fixo'}, cor: 'purple'}
			];

			$scope.operadoras = [
				{nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2},
				{nome: 'Vivo', codigo: 15, categoria: 'Celular', preco: 4},
				{nome: 'Tim', codigo: 41, categoria: 'Celular', preco: 3},
				{nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 2},
				{nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 1}
			];

			// var carregarContatos = function () {
			// 	//$http.get("http://localhost:3412/contatos").success(function (data) {
			// 	contatosAPI.getContatos().then(function (data) {
			// 		$scope.contatos = data;
			// 	}).catch(function (data, status) {
			// 		$scope.message = "Aconteceu um problema: " + data;
			// 	});
			// };

			$scope.adicionarContato = function(contato){
				$scope.contatos.push(angular.copy(contato));
				// angular.copy => para perder essa referencia ao objeto e criar hardcode sem nenhum viculo
				delete $scope.contato; // o objeto é deletado, ja que voce enviou
				$scope.contatoForm.$setPristine(); // serve para colcaor que nunca foi apertado, assim nao vai aparecer a mensagem deerro que ocorre quando é tocado
			};

			$scope.apagarContatos = function(contatos) {
				// pegar o selecionado, vamos aplicar um filter, que vai retornar elemetnos que sejam true para contaot.selecionado, ou seja, que estao selecionados
				// vou substituir por aqueles que tem selecionado.false, tirando os selecionados
				$scope.contatos = contatos.filter(function (contato) {
					if(!contato.selecionado) return contato;
				});
			};

			$scope.isContatoSelecionado = function(contatos){
				/* some é um metodo de array que recebe uma funcation que avalia um elemento 
				de array para saber se algum deles dá true ou falster. é como um filter, 
				mas, ele verifica se todas as opções sao daquele jeito
				*/
				return contatos.some(function (contato){
					return contato.selecionado;
				});
			};

			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo; // Esoclhe por qual campo vai ordenar
				$scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao; // No 2 click, vai inverter a ordem
			};

		});