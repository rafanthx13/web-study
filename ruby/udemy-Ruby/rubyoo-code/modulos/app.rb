
require_relative 'pagamento'
include Pagamento # incluir o modulo pagamento


puts PI				# works with Constants
varriavel = Visa.new # works iwth class

puts "Digite a Bandeira do Caratao"
var = gets.chomp
puts "Digite o num do cartao"
n = gets.chomp
puts "Digite o valor da compra"
v = gets.chomp.to_i

#work with methods
Pagamento.pagar(var,n,v)
puts "\n\n"
pagar(var,n,v)