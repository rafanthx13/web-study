/*

`process` é a variável que gaurda parametro de execuçÂo (quando usar bash)

Execução::

node ex08_process.js 
> Tranquilo

node ex08_process.js --producao --outro algo
> Atenção Total

node ex08_process.js --algo --nao --esta --certo
> Tranquilo!!!

*/

function temParam(param) {
  // retorna o index do paramtero caso estiver la,
  // se não estiver retorna falso, caso estiver, retorna true
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
  console.log('Atenção total!') // tem o parametro --producao
} else {
  console.log('Tranquilo!!!') // não tem a flag produção
}
