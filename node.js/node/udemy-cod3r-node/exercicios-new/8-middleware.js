/*  Fazendo ChainOfResponsability
        ctx = contexto, sera o objeto que sera trabalhado no decorre dos passos
        next = Função que quando chamada, dispara o proximo passo na cadeia
        JS tem a vantagem que em uma sequencia de &, se ja der um false, ele nao avaliar os outros

*/

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

// este sera o ultimo, pois ele nao tem next
// Aqui, o middleware nao chama um proximo passo, e isso pode ser feito
const passo3 = ctx => ctx.valor3 = 'mid3' 

// ... == operator rest que junta num array elementos
const exec = (ctx, ...middlewares) => {
    
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // se o array existe e o indice esta fora do array
            middlewares[indice](ctx, () => execPasso(indice + 1)) 
            // Recursividade, vamos pegar uma chain e executar seu proximo passo
    }

    execPasso(0) // vai começar a partir do 0
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)