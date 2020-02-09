# Regex CockBook

## 

### Telefone

````javascript
const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-1234
`

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))
// (\(\d{2}\)\s?)? => DDD opcional cseguido ou não de um espaço
// \d{4,5}-\d{4} ==> COmeça com 4 ou 5 digitos seguido de '-' eterminando em 4 digitos
````

### Intervalo de número

No caso de 0 - 255

````javascript
const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// Criar regex que pegue os números entre 0-255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))
// borda é para pegar os número separados
// (\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])
````

### IPV4

Usa o intervalo de números

````javascript
const texto = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256
Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`

const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])' // Representa um dos número entre 0 e 255
const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g')
console.log(texto.match(ipv4))
````

### Senhas

````javascript
const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234
#OpA1?
Foi123!
`
// Uma senha é válida se:
//  Letra maiuscula, minnuscula, símbolo 6 caracteres

// 1 restiçâo : Tamanho entre 6 e 20
console.log(texto.match(/^.{6,20}$/gm))
// Busca palavras entre 6 a 20 caracteres
/* [ '123456', 'QUASE123!', '#OpA1?', 'Foi123!' ] */

console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
// Grupo especial com qualquer caractere com 'A-Z'
/* [ 'QUASE123!', '#OpA1?', 'Foi123!' ] */

console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))
/* [ '#OpA1?', 'Foi123!' ] */
````


### Email

````javascript
const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
`

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))
````

###

````javascript

````

###

````javascript

````

###

````javascript

````
