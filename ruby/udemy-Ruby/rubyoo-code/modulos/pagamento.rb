module Pagamento

	PI = 3.14

	def pagar(bandeira, num, valor)
		puts "Pagando com cartao #{bandeira} #{num} o valor de R$ #{valor}"
	end

	class Visa
		def pagando
			return "pagando"
		end
	end

end