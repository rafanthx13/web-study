module Pagamento

	SIMBOLO_MOEDA = "R$"

	def pagar(valor_final)
		puts 'Deseja pagar com cartao? (S/N)'
		opcao = gets.chomp
		if opcao == "S"
			puts "Pagamento com cartao"
		else
			puts "Pagando com dinheiro"
		end
	end


	class Pagseguro

		def initialize
			puts "Usando PagSeguro"
		end

	end


end
