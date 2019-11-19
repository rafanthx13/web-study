class Pessoa
	@nome = nil
	@idade = nil

	def guardar_nome(nome)
		@nome = nome
	end

	def mostrar_nome
		return @nome
	end

	def guardar_idade(idade)
		@idade = idade
	end

	def mostrar_idade
		return @idade
	end

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
obj1.guardar_idade(11)
obj1.guardar_nome("Rafael")

obj2 = Pessoa.new
obj2.guardar_idade(47)
obj2.guardar_nome("Riboku")

puts obj2.mostrar_idade
puts obj2.mostrar_nome
puts obj1.mostrar_nome
puts obj1.mostrar_idade
