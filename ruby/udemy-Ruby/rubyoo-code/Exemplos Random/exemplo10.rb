a = [10,20,30,40]
# passe em 'cada' um dele, atribuia a var elemento e imprima-o
a.each{ |element| puts element}
#out put
#10
#20
#30
#40

#se tivermos mais de uma linha, sumaos do
a.each do|element| 
	puts element*2
	puts element*3
end
