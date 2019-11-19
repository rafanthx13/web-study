angular.module('listaTelefonica').controller('novoContatoController', function($scope, contatosAPI, serialGenerator, operadoras){ 

			// eh o retorno de um http, entao, tem que ter essse data
			$scope.operadoras = operadoras.data;
			
			$scope.adicionarContato = function(contato){
				$scope.contatos.push(angular.copy(contato));
				// angular.copy => para perder essa referencia ao objeto e criar hardcode sem nenhum viculo
				delete $scope.contato; // o objeto é deletado, ja que voce enviou
				$scope.contatoForm.$setPristine(); // serve para colcaor que nunca foi apertado, assim nao vai aparecer a mensagem deerro que ocorre quando é tocado
			};

		
		});