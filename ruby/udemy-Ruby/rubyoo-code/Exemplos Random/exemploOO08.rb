class Pai
	attr_accessor :nome

	def falar(texto = "Alo")
		return texto
	end

end

class Filha < Pai


end

########################
p = Pai.new
p.nome = "Hao Asakura"
puts p.nome
puts "#{p.nome} + #{p.falar}"

f = Filha.new
f.nome = "Yoh"
puts f.nome
puts f.falar("Hello!")