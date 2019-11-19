class Pessoa

	# Isso vai virar uma variavel de instancia
	attr_accessor :nome
	attr_accessor :idade

	def initialize(nome, idade)
		@nome = nome
		@idade = idade
	end

	def gritar(txt = "Grrr")
		return "gritando #{text}"
	end

	def agradecer(txt = "thanks")
		return txt
	end
end

######################
var1 = Pessoa.new("Hao Asakura", 5)
puts "Inicializacao : nome #{var1.nome} e idade : #{var1.idade}"

