const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo) // testa se ela pega a flag ao usar node com apramentro na chamada do terminal

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}