# Jogo : Adivinhar um número aleartorio
=begin
	(20/11/2017)
	A ideia eh praticar tudo que vimos em Ruby e separar
as coisas
	
=end
require_relative 'inicialisacao'
require_relative 'sortear_numero'

class AdivinharNumero

	attr_reader :numero
	attr_reader :venceu

	def initialize
		Inicializacao.inicializando
		@numero = SortearNumero.sortear
		@venceu = false
	end

	

	def tentar_adivinhar(num = 0)
		if(num == @numero)
			@venceu = true
			return "Voce VENCEU!"
		elsif num > @numero
			return "O numero infromado eh maior"	
		else
			return"O numero informado eh baixo"
		end		
	end

end



