
# Inicio 21/11/2017
# classe de inicializaçao do projeto de jogo da forca


  # Esquema
  # 1. Tela de Inicio : Tem a quantidade de vitoria derrota se ele ja tiver jogado
  #
  # 2. Botao de Star e sair (Pra caso a pessao quiser recomeçar)
  # 3. Start
  #     3.1 - Le de arquivo nome e a dica
  #     3.2 - Mostra a forca como tambem a quantidade de palavras acertas e nao
  #               deve ficar constante a medida que passa
  #     3.3 - Usuario digita
  #       + A medida que vai acertando, muda a letra, se perde, o homem perde os membros
  #           Isso deve ser Controlado
  # 4. Ele vence ou perde, e isso fica registrado
  #
  # Consideraços
  # + Considerar letras miausculas/minusculas
  # + um estaitica que fica num arquivo


require_relative 'lib/controller_game'
require_relative 'lib/graphic_interface'

GraphicInterface.initialize

controller = ControllerGame.new
controller.session_game

