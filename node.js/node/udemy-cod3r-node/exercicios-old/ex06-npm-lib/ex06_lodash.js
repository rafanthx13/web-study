// npm init -y (criar package.json masi rápido)
// npm i lodash (instlaar o lodash)
// npm i lodash --save (salvar no packege.json)

const _ = require('lodash')

const alunos =[{
  nome: 'João',
  nota: 7.6
}, {
  nome: 'Maria',
  nota: 8.6
}, {
  nome: 'Pedro',
  nota: 8.1
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)
