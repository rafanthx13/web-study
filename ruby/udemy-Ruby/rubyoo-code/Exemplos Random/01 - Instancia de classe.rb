class Teste
	# metodo de instancia 
	# + Tenho que executálo sobre alguma 
	def ola
		return "ola"
	end

	# metodo estatico, de classe
	# + Nao presiso instanciar pra usar
	def self.hello
		return "Hello"
	end

end

######################

#print metodo instancia
obj = Teste.new
puts obj.ola

#print metodo de clase
puts Teste.hello