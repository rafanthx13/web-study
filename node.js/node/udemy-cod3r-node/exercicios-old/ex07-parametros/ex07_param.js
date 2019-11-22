// De inicio, o module.export é um objeto vazio, mas se eu colocar uma 
// função, entâo, no lugar em que o importar, já vou poder pegar como 
// função já direto 

//O module.exports é uma função
module.exports = function(param) {
  console.log(`O param informado foi ${param}`)
}
