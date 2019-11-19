# file_open.rb
class FileOpen

  def self.take_one_word_random
    vector = []
    File.open("./words.txt", "r") do |arq|
      while line = arq.gets
        vector.push(line.to_s) # Problem eh necessario converte para string a saida do texto
      end
    end
    # Problem, ele
    return vector.sample
  end

end