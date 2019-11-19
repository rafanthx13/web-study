class Dog
	def latir
		puts 'au au'
	end
	def comer
		puts 'estou comendo'
	end
	def lamber
		puts 'gosto de carne'
	end
end

#########
dog = Dog.new

dog.send(:latir)
dog.send('comer')