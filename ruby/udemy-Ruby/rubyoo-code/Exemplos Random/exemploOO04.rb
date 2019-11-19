# Modo de Getter e Setter Em  Java
class Pearson1
	@name

	def set_name(name)
		@name = name
	end

	def get_name()
		return  @name
	end

	def get2_name
		@name
	end
end


# Modo de Getter e Setter Ruby
class Person2
	@name

	#getter
	def name
		@name
	end

	#setter
	def name=(name)
		@name = name
	end

end

=begin

person = Person.new		# inicializar
person.name = 'Dennis'	# Setter
puts person.name 		# Getter
	
=end


# Rubismo : Getter e Setter
class Pearson3
	attr_accessor :name
end

=begin
	var1 = Pearson.new		#inicilzia
	var1.name = "silver"	#setter
	puts var1.name 			#getter
=end
=begin 	EXEPLO1
module Mod
  attr_accessor(:one, :two)
end
Mod.instance_methods.sort   #=> [:one, :one=, :two, :two=]

	#COMO MEXER NELE

=end
	

=begin
	
class Foo
  attr_accessor :bar, :baz
end

||||||||||Igual a fazer ||||||||||||||||||

class Foo
	@bar
	@baz
	def bar
		@bar
	end

	def bar=(value)
		@bar = value
	end

	def baz
		@baz
	end

	def baz=(value)
		@baz = value
	end
	
end
=end