	#Times - Rubismo
# Executa 5 vezes
5.times{puts "hao"}
# Executa 3 vezes - podemos pegar o valor do num de vez
3.times{|num| puts "#{num} - hao"}
# em uma mesma linha podemos separa por ;
4.times{|z| puts 1; puts "#{z}"}
#Podemos usa a logica do do, ou seja, igual ao each
2.times do |l|
	puts "#{l} + 1"
	puts "#{l} + 2"
	puts "#{l} + 3"
end