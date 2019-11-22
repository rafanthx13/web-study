// terminal: node [arquiv.js] -a
const anonimo = process.argv.indexOf('-a') !== -1 // estou procurando a flag -a, no array que é passado por parametro

// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    // esse data é o evento,, no caso, quando o usuario digitar
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // tambem é enviado o ENTER (\n)

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}