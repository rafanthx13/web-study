class Compra
	def comprar(*produtos)
		puts "#{produtos.size}"
		puts "#{produtos.class}"
	end
end

######
compra = Compra.new
compra.comprar('Noteboook','suporte note','carregador')