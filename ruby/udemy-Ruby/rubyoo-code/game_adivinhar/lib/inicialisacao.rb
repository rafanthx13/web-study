require 'tty-cursor'
require 'tty-spinner'

class Inicializacao

	def self.inicializando
		system ('cls')
		cursor = TTY::Cursor
		print cursor.move_to(15,2)
		print "Inicializando"
		4.times do
			sleep 1
			print "."
		end
		puts "."


		puts"		____	  _______                  _____                      _   _     _              "
		puts"	 |__   __|                / ____|                    | | | |   (_)             		"
		puts"		    | |_   _ _ __   ___  | (___   ___  _ __ ___   ___| |_| |__  _ _ __   __ _  "
		puts"	    | | | | | '_ \ / _ \  \___ \ / _ \| '_ ` _ \ / _ \ __| '_ \| | '_ \ / _` | 		"	
		puts"	    | | |_| | |_) |  __/  ____) | (_) | | | | | |  __/ |_| | | | | | | | (_| | 		"
		puts"	    |_|\__, | .__/ \___| |_____/ \___/|_| |_| |_|\___|\__|_| |_|_|_| |_|\__, | 		"
		puts"		        __/ | |                                                          __/ | 		"
		puts"		       |___/|_|                                                         |___/  		"

	end

end