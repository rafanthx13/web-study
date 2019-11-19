#if com null

a = nil
if(!a)
	puts 'a eh nullo'
end
unless (a)
	puts 'sim a eh nullo memso'
end

puts ''
puts ''

# operador ||=
# 	Atribui um valor a outras se, e somente, se a
# 	A variavel estiver vazia antes

var1 = nil
var1 ||= 'x'
puts "var1 era null, agora eh #{var1}"

var2 = 'not_change'
var2 ||= 'change'
puts "var2 = #{var2}"

var3 ||= 'atribuiu com ||= na inicializacao'
puts "var3 = #{var3}"