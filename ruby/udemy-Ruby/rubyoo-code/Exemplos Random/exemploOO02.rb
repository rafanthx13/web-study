class Pessoa

	# Caso nao tiver paramentro, coloca esse
	def gritar (texto = "grrrrrr")
		puts "#{texto}"
	end
	def agradecer
		puts "Acompany On!"
	end

end

###############

obj1 = Pessoa.new
obj1.agradecer
obj1.gritar
obj1.gritar("Pitou")