#Arquivo principal
require_relative 'lib/adivinhar_numero'

jogo = AdivinharNumero.new

until jogo.venceu do
	puts "Digite um numero"
	num = gets.to_i
	puts jogo.tentar_adivinhar(num)	
end