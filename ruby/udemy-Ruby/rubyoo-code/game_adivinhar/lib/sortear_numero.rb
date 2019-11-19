class SortearNumero

	def self.sortear
		v = []
		File.open("./num.txt", "r") do |arq|  
			while line = arq.gets
				v.push(line.to_i)
			end
		v.sample
		end
	end

end