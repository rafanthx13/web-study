# ARGV - Argument Vector, vetor de entrada das coisas
# EH o que voe passa de fora da aplicação
if (ARGV.size > 0)
	File.open(ARGV[0], 'r') do |arq|
		while line = arq.gets
			puts line
		end
	end
else
	puts "Tem que passar um nome de arq.txt"
end
