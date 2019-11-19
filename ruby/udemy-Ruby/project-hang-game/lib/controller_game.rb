# controller_game.rb
class ControllerGame

  require 'pastel'
  require_relative '../arq/file_open'
  require_relative 'graphic_interface'

  attr_accessor :pastel
  attr_accessor :erros
  attr_accessor :array_words
  attr_accessor :letters_digits
  attr_accessor :status
  attr_accessor :word
  attr_accessor :tips

  def initialize
    @status = false
    @erros = 0
    @letters_digits = []  # o array tem que ser inicializado pra ser usaddo,
    # sem issoo, ele eh como null na chamdaa de metodos que usama array por que ele nao eh um array
    @pastel = Pastel.new
  end

  def select_word_random
    vector_raw = FileOpen.take_one_word_random
    vector = vector_raw.split(';')
    #puts "inspect = #{vector}"
    @word = vector[0]
    tipsAuxs = []
    3.times do |index|
      tipsAuxs.push(vector[index + 1])
    end
    @tips = tipsAuxs
    #puts "inspect tips : #{@tips}"
    # vai criar um array do tamanho da palavra e setara como false tudo
    @array_words = Array.new(@word.length, false)
  end

  # O jogo
  def session_game
    # inicializacao
    select_word_random
    # ate ser true
    until @status
      system('cls')
      GraphicInterface.hangman(@erros)
      # puts "       essa foi a palavra escolhida: #{@word}"
      show_tips
      GraphicInterface.print_the_word(@word,@array_words)
      if (verify_letter (chose_word))
        #puts 'letra valida'
      else
        #puts 'letra invalida'
        #puts @tips.sample
        #puts ''
      end
      # puts 'teste do fim'
      @status = test_finish
    end
  end

  def chose_word
    puts 'Digite uma letra somente!'
    print ' ==> '
    letter = gets.chomp
    letter.downcase!
    # puts "letra digitada #{letter}"
    # first = a ===: until (true && true) : pulta (Certo)
    # second = a ===: until (true $$ false) : nao Pula
    # big = quando der 2 falso
    # executa enquanto dentro da condçao for falso, se der verdadeiro nao executa
    until letter.length == 1 && !letters_digits.include?(letter)
        puts pastel.yellow 'Erro na letra : Ela deve ter tamanho 1 e nao ser Repetida'
        puts pastel.yellow('   Letras ja digitadas : ' + @letters_digits.inspect)
        print ' ==> '
        letter = gets.chomp
        letter.downcase!
        # if letter.length != 1
        #   puts 'Letra tem mais de 1 char'
        # end
        # if letters_digits.include?(letter)
        #   puts pastel.yellow' Letra ja digitada (ja ta no registo de digitadas)'
        # end
    end
    # puts "letter digits = #{@letters_digits}"
    # palavra aceita como uma letra
    @letters_digits.push(letter)
    return letter
  end

  def verify_letter(letter)
    if @word.include?(letter)
      # a letra PERTENCE a palavra
      # string.index retorna a primeira ocrorrencia
      # string.index(arg1, arg2), procura arg1 a partir de arg2
      # vai ve os indices da  palavra que tem a letra, pegar eles e
      # por o array digitos como true nessa posicao para mostra depois
      # Ex: abelha :: 'a'
      # qtd = 2
      # 1 .index = 0
      # 2. index = 5

      quantity = @word.count(letter)
      begin_count = 0
      quantity.times do
        # puts "begin count = #{begin_count}"
        index_digits = @word.index(letter, begin_count)
        # a unica forma que eu espero que pegue um elemento do vetor
        @array_words[index_digits] = true
        begin_count = index_digits + 1
      end
      GraphicInterface.right_answer
      #puts pastel.green "A letra digitada '#{letter}' deu certo VERDE"
      sleep 1
      return true
    else
      # a letra NAO PERTENCE a palavra
      @erros = @erros + 1
      GraphicInterface.wrong_answer
      #puts "A letra digitada #{letter} nunca foi digitada mas nao pertence a palavra certo"
      sleep 1
      return false
    end
  end

  def test_finish
    if !array_words.include?(false)
      # tudo eh true, terminou com vitoria
      GraphicInterface.win
      sleep 4
      system('cls')
      return true
    elsif @erros >= 6
      # terminou com derota
      GraphicInterface.lose
      sleep 4
      system('cls')
      return true
    else
      #continua a jogar
      return false
    end
  end

  # 6 chances, 3 dicas : 1 2 3 4 5 6
  def show_tips
    if @erros == 2
      puts pastel.cyan ( '             Dicas ==> ' + @tips[0])
    elsif @erros == 3
      puts pastel.cyan('             Dicas ==> ' + @tips[0] + ' | ' + @tips[1])
    elsif @erros == 5
      puts pastel.cyan('             Dicas ==> ' +@tips[0] + ' | ' + @tips[1] + ' | ' + @tips[2])
    end

    # # Podemos por pra sempre maostrar as palavra ja colocadas
    # def show_words
    #
    # end

  end

end