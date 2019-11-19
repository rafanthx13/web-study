class Cachorro
	protected attr_accessor :nome
	public attr_reader :raca

	def initialize(nome, raca)
		@nome = nome
		@raca = raca
	end

	def latir(latido = "Au Au!")
		return latido
	end

end

###########
dog1 = Cachorro.new("hao","i met tou mother")
puts dog1.latir