class Pato
	def quack!
		"Quack! Quakc! Hapiness"
	end
end

class PatoDoente
	def quack!
		"Wueeeeeeeck"
	end
end

class Pessoa
	def aperta_o_pato(pato)
		pato.quack!
	end
end

##########################

p1 = Pato.new
p2 = PatoDoente.new

pessoa = Pessoa.new
Pessoa.aperta_o_pato(p1)	# Qucack Quack
Pessoa.aperta_o_pato(p2)	# Wueeeeeeeeek

