/*
Com process é possível dar um 'printf' e também um 'scanf'
Execução::

Está gostando do curso?sim
Sua resposta foi sim
Obrigado!

*/
process.stdout.write('Está gostando do curso?')
process.stdin.on('data', function(data){
  process.stdout.write(`Sua resposta foi ${data.toString()}Obrigado!\n`)
  process.exit()
})
