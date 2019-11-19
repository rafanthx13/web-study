# Jogo : Adivinhar um número aleartorio

class AdivinharNumero

	attr_reader :numero
	attr_reader :venceu

	def initialize
		@numero = Random.rand(1..10)
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

###############################################

jogo = AdivinharNumero.new

until jogo.venceu do
	puts "Digite um numero"
	num = gets.to_i
	puts jogo.tentar_adivinhar(num)	
end
