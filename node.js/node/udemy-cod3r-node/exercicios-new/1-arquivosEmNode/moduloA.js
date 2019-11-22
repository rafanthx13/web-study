console.log(this) // {} pois nao ha nada no proprio modulo

this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'

// this. , exports. module.exports são as mesma coisa
console.log(this) 
/*{ 
    ola: 'Fala Pessoal',
    bemVindo: 'Bem vindo ao node!',
    ateLogo: 'Até próximo exemplo' 
}*/