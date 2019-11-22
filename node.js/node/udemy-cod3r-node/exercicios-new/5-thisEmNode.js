console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

const obj = {
    nome : 'objeto',
    aFunciton : function () {
        console.log('Dentro de um objeto...')
        console.log(this === exports)
        console.log(this === module.exports)
        console.log(this === global)
        console.log(this === obj)
    }, 

}

logThis()
obj.aFunciton()