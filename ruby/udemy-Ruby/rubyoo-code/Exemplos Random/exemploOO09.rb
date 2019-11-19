class Franquia
	def descricao
		"Franquia"
	end
end

class Franquiado < Franquia
	#@overriding
	def desccricao
		puts super
		"Franquiado2"
	end
end
################
f = Franquia.new
puts f.descricao

puts '==============='

ff = Franquiado.new
puts ff.descricao