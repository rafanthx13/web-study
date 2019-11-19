
require_relative "01-ex"
require_relative "02-exe"

class Exemplo
	include A
	include B

	def ex1
		puts 'exe'
	end

end