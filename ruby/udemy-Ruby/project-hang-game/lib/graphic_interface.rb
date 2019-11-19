require 'tty-cursor'
require 'tty-spinner'
require 'pastel'

# fonte: Colossal http://patorjk.com/software/taag/#p=display&h=3&v=0&f=Colossal&t=Venceu
#graphic_interface.rb
class GraphicInterface

  def self.initialize
    system('cls')
    pastel = Pastel.new

    puts pastel.cyan'           ' +     ' _    _                       ____'
    puts pastel.cyan'           ' +     '| |  | |                    / ____|'
    puts pastel.cyan'           ' +     '| |__| | __ _ _ __   __ _  | |  __  __ _ _ __ ___   ___'
    puts pastel.cyan'           ' +     '|  __  |/ _` | |_ \ / _` | | | |_ |/ _` | |_ ` _ \ / _ \ '
    puts pastel.cyan'           ' +     '| |  | | (_| | | | | (_| | | |__| | (_| | | | | | |  __/ '
    puts pastel.cyan'           ' +     '|_|  |_|\\__,_|_| |_|\\__, |  \\_____|\\__,_|_| |_| |_|\\___| '
    puts pastel.cyan'           ' +     '                      _/ | '
    puts pastel.cyan'           ' +     '                     |___/ '

    # Spiner eh uma classe, presisa ser instacniadads
    # A palavra strng dentro da string eh onde vai aparecer o spineer, sem ela, nao tera nda ==> "tem que ter a palavra spinner"

    spinner = TTY::Spinner.new('                          Loading :spinner ...', format: :pulse_2, hide_cursor: true, clear: true )
    spinner.auto_spin
    sleep 1 # Some long task
    spinner.stop('Done')
  end

  # recebe 6 chances : perna esq, perna dir, mao esq, mao dir, corpo cabeça
  def self.hangman(erros)
    case erros
      when 0
        # 0 - begin
        puts ' _______      '
        puts '|       |     '
        puts '|       O     '
        puts '|      /|\    '
        puts '|      / \    '
      when 1
        # 1
        puts ' _______      '
        puts '|       |     '
        puts '|       O     '
        puts '|      /|\    '
        puts '|        \    '
      when 2
        # 2
        puts ' _______      '
        puts '|       |     '
        puts '|       O     '
        puts '|      /|\    '
        puts '|             '
      when 3
        # 3
        puts ' _______      '
        puts '|       |     '
        puts '|       O     '
        puts '|       |\    '
        puts '|             '
      when 4
        # 4
        puts ' _______      '
        puts '|       |     '
        puts '|       O     '
        puts '|       |     '
        puts '|             '
      when 5
        # 5
        puts ' _______      '
        puts '|       |     '
        puts '|       O     '
        puts '|             '
        puts '|             '
      when 6
        # 6 finish - fail
        puts ' _______      '
        puts '|       |     '
        puts '|             '
        puts '|             '
        puts '|             '
    end
  end

  # baleia  ==> b_l___
  # tftfff      tftfff

  def self.print_the_word(word, array_words)
    size = word.length
    array_prints = []
    size.times do |letter_Value|
      if array_words[letter_Value]
        array_prints.push(word[letter_Value])
      else
        array_prints.push('_')
      end
    end
    # Imprimi tudo junto
    puts '                HangGame : A palavra eh:'
    print "                : #{array_prints.join}"
    puts " : #{size} letras \n"
  end

  def self.right_answer
    system('cls')
    pastel = Pastel.new
    puts pastel.green '       d8888                          888'
    puts pastel.green '      d88888                          888'
    puts pastel.green '     d88P888                          888'
    puts pastel.green '    d88P 888  .d8888b .d88b.  888d888 888888 .d88b.  888  888'
    puts pastel.green '   d88P  888 d88P"   d8P  Y8b 888P"   888   d88""88b 888  888'
    puts pastel.green '  d88P   888 888     88888888 888     888   888  888 888  888'
    puts pastel.green ' d8888888888 Y88b.   Y8b.     888     Y88b. Y88..88P Y88b 888'
    puts pastel.green 'd88P     888  "Y8888P "Y8888  888      "Y888 "Y88P"   "Y88888'

    # Clear serve para limpar o spinner depois de executado
    puts ''
    spinner = TTY::Spinner.new('       Continuando :spinner ', format: :classic, hide_cursor: true, clear: true)
    spinner.auto_spin
    sleep 2# Some long task, o Sleep faz com que fique mais tempo girando a animacaos
    spinner.stop('Done')
  end

  def self.wrong_answer
    system('cls')
    pastel = Pastel.new
    puts pastel.red'8888888888'
    puts pastel.red'888'
    puts pastel.red'888'
    puts pastel.red'8888888    888d888 888d888 .d88b.  888  888'
    puts pastel.red'888        888P"   888P"  d88""88b 888  888'
    puts pastel.red'888        888     888    888  888 888  888'
    puts pastel.red'888        888     888    Y88..88P Y88b 888'
    puts pastel.red'8888888888 888     888     "Y88P"   "Y88888'

    puts ''
    spinner = TTY::Spinner.new('  Continuando :spinner ', format: :triangle, hide_cursor: true, clear: true )
    spinner.auto_spin
    sleep 2 # Some long task
    spinner.stop
  end

  def self.win
    system('cls')
    pastel = Pastel.new
    puts pastel.blue'888      888'
    puts pastel.blue'888      888'
    puts pastel.blue'888      888'
    puts pastel.blue' Y88b   d88P  .d88b.  88888b.   .d8888b .d88b.  888  888'
    puts pastel.blue'  Y88b d88P  d8P  Y8b 888 "88b d88P"   d8P  Y8b 888  888'
    puts pastel.blue'   Y88o88P   88888888 888  888 888     88888888 888  888'
    puts pastel.blue'    Y888P    Y8b.     888  888 Y88b.   Y8b.     Y88b 888'
    puts pastel.blue'     Y8P      "Y8888  888  888  "Y8888P "Y8888   "Y88888'


  end

  def self.lose
    pastel = Pastel.new
    puts pastel.magenta'8888888b.                      888'
    puts pastel.magenta'888   Y88b                     888'
    puts pastel.magenta'888    888                     888'
    puts pastel.magenta'888   d88P .d88b.  888d888 .d88888  .d88b.  888  888'
    puts pastel.magenta'8888888P" d8P  Y8b 888P"  d88" 888 d8P  Y8b 888  888'
    puts pastel.magenta'888       88888888 888    888  888 88888888 888  888'
    puts pastel.magenta'888       Y8b.     888    Y88b 888 Y8b.     Y88b 888'
    puts pastel.magenta'888        "Y8888  888     "Y88888  "Y8888   "Y88888'
  end

end