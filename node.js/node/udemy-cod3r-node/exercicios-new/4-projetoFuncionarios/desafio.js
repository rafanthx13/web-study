// Desafio - Obeter a mulher chinesa com menor salário

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' //acerssar essa url
const axios = require('axios') // axio eh uma lib que simula um cliente http, com ela vamos acessar a url e pegar dados

// Resolução - Como retorna um array usaremos map/filter/reduce
//      {"id":1,"nome":"Feodor","sobrenome":"Pheby","email":"fpheby0@163.com",
//      "genero":"M","cidade":"Bal’shavik","pais":"Belarus","empresa":"Dabjam","salario":2401.69},
const filterMulher = element => element.genero == "F" 
const filterChina = element => element.pais == "China"
const reduceMenorSalario = function (acc, next) {
    return acc.salario < next.salario ? acc : next
}
// vai fazer um get, e, como retorna JSON vamos colocar em funcionairos
axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    console.log(funcionarios
        .filter(filterChina)
        .filter(filterMulher)
        .reduce(reduceMenorSalario)
    )
})

