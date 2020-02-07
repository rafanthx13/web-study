# Curso Regex Cod3r

Curso iniciado em: 06/02/2019

## 01. Introdução

link do Git: https://github.com/cod3rcursos/curso-regex

Ferramenta Online regex101: https://regex101.com/



Livros
+ ExpressõesRegulares - CockBook: Livro cheio de receitas. Serve mais para consultas onde é apresentado um desafio, uma soluçâo e porque da solução
+ Introdução à expressoes regualres : pouco menos didático mas interressante e pequeno para ter a base em regex


**O que é expressão regular**: 
+ Entenda: Regex significa Expressôes regulares (REGular EXpression - REGEX)
+ Resumindo, é um método formal de especificar um padrão de texto

**Slavors (Sabores) - Diferença entre REGEX entre linguagens**
+ O Regex tem implementações diferentes para cada linguagem.
+ POr conta disso, em algumas linguagens podem ter mais ou menos recursos de Regex
+ O foco do curso é em JavaScript, já que é onde é mais usado

**VS CODE**
+ `CTRL + ALT + N` : Chamar o arquivo no `node`, ou com o botao direito do mouse "run code";

## 02. Executando Regex em várias linguagens

### JavaScript

````javascript
const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

// Metodos da classe RegExp
const regexNove = RegExp('9')

console.log(regexNove.test(texto)) 
/* Boolean :: true */
console.log(regexNove.exec(texto))
/*
 [ '9',
  index: 18,
  input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
  groups: undefined ] 
*/

// Métodos da string
const regexLetras = /[a-f]/g
console.log(texto.match(regexLetras))
/* [ 'a', 'b', 'c', 'd', 'e', 'f' ] */
console.log(texto.search(regexLetras))
/* index int :: 20*/
console.log(texto.replace(regexLetras, 'Achei'))
/* same string replaced :: 
  0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
*/
console.log(texto.split(regexLetras))
/* array splited where match ::
[ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
 */
````

### Java

````java

import java.util.regex.*;

public class UsandoJava {
    public static void main(String[] args) {
        String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        Pattern patternLetras = Pattern.compile("[a-f]");
        Matcher matcher = patternLetras.matcher(texto);

        while (matcher.find()) {
            System.out.printf("Posicoes: %s, %s\tValor: %s%n",
                matcher.start(), matcher.end(), matcher.group());
        }

        System.out.println(texto.replaceAll("[7-9]", "Achei"));
    }
}

````

### Python

````python

import re

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

pattern9 = re.compile('9')
match1 = re.search(pattern9, texto)
print "Posicoes: %s, %s; Valor: %s." % (match1.start(), match1.end(), match1.group(0))

valores = re.findall('[a-f]', texto)
print "Valores: %s" % valores

````

### Go

````go
package main

import (
	"bytes"
	"fmt"
	"regexp"
)

func main() {
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	regex9, _ := regexp.Compile("9")
	fmt.Println(regex9.MatchString(texto))
	fmt.Println(regex9.FindString(texto))
	fmt.Println(regex9.FindStringIndex(texto))

	regexLetras, _ := regexp.Compile("[a-f]")
	fmt.Println(regexLetras.FindAllString(texto, 20))
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei"))

	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)
	fmt.Println(string(resultado))
}
````

### Ruby

````ruby

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
regexNove = Regexp::new('9')
puts regexNove.match(texto)

regexNove = %r{9}
puts regexNove.match(texto)

p regexNove =~ '894'

regexLetras = /[a-f]/
puts texto.scan(regexLetras).join(' ')

puts texto.split(/,/).join

print texto.split(/[aeiou]/)

````

## 02. Caracteres

### flags

+ flag 'g' - global
  - `g modifier: global. All matches (don't return after first match)`
  - Serve para "continuar buscando após o primeiro match"
  - **Sem a FLAG G ELE MOSTRA 3 INTES DE RETORNO**
+ flag 'i' - ignore case, be insensitive `
  - `i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])`
  - Nâo diferencia maiuscula de minúscula
  - Serve para buscar TANTO MAISUCULO QUANTO MINUSTULO, OS DOIS.
  - Sem ela, a busca é pela paralvra exata de acordo com o CapsLock de cada letra

A flag fica fora da expressâo regular e é dependente da linguagem

### caracteres simples

````javascript

const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

const regex = /casa/gi
console.log(texto.match(regex)) 
/* [ 'Casa', 'casa', 'CASA' ] */
console.log(texto.match(/casa/g)) 
/* [ 'casa' ] */
console.log(texto.match(/casa/i))
/* 
[ 'Casa',
  index: 0,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined ]
  */
console.log(texto.match(/casa/))
/*
[ 'casa',
  index: 14,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined ]
*/

console.log(texto.match(/a b/))
/* 
[ 'a b',
  index: 3,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined ]
*/

````

.


````javascript
const texto = '1,2,3,4,5,6,a.b c!d?e'

console.log(texto.match(/,/g)) [ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/A/g)) // null
console.log(texto.match(/A/gi)) // [ 'a' ]
console.log(texto.match(/2/g)) // [ '2' ]
console.log(texto.match(/b c!d/))
/* 
[ 'b c!d',
  index: 14,
  input: '1,2,3,4,5,6,a.b c!d?e',
  groups: undefined ]
*/
````

### Cuidados

#### Multiplas linhas

Em JS é gerado por stringTemplate, usando BackChick \`

````javascript
const textoMultiLinha = `
    linha 1
    linha 2
`
````

#### tab

De acordo com a IDE, um tab pode ser na verdade 3,4,5 ou n espaços, ou mesmo o tab '/t'. Isos gera diferença se O TAB ÉMESMO TAB OU N ESPAÇOS

### MetaCaracteres

Para usar o metacaractere como literal dev-ese usar o BackSlahs "\"

**Os meta caracteres são**
`. ? * + - ^ $ | [ ] { } ( ) \ :`


````javascript
// . ? * + - ^ $ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g // o \ serve para tratar o metacracter como o caractere ponto
console.log(texto.split(regexPonto))
/* [ '1,2,3,4,5,6,a', 'b c!d?e' ] */

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
/* [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ] */

````

#### MetaCaractere `.`

````javascript
// . é um coringa, válido para uma única posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) 
/* [ '1,2' ] */
console.log(texto.match(/1..2/g))
/* null , pois não há 2 caracteres entre 1 e 2 */
console.log(texto.match(/1..,/g))
/* [ '1,2,' ] */

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g)) 
// qualquer coisa que começa com 8 e dois caracteres
/* [ '8.3', '8.8' ] */
console.log(notas.match(/.\../g)) 
// Qualquer coisa seguida pelo caractere "."
/* [ '8.3', '7.1', '8.8', '0.0' ] */

// DESAFIO

// buscar todas as ocorrencias de .mp3
const texto1 = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(texto1.match(/\.mp3/g))

````

OBS: O MetaCaractere '.' nao substitui um `\n`

#### MetaCaractere pipe `|`

````javascript

// O '|' é alternativas
const texto = 'Você precisa responder sim, não ou não sei!'
console.log(texto.match(/sim|não|sei/g)) // alternativa (OU)
/* [ 'sim', 'não', 'não', 'sei' ] */

````

### Special Caracteres

\t = tab
\n = newline
\s = empy_space, mas pode ser também na regex o barraDeEspaço ' '

````javascript
// DESAFIO
// Encontrar a letra 'a' e a letra 'b' e entre elas, 3 espaços
const texto1 = 'a   b'

console.log(texto1.match(/a   b/))
console.log(texto1.match(/a\s\s\sb/))

// no futuro, poderiamos resolver com ...
console.log(texto1.match(/a\s+b/)) 
// daria math para n espaços em branco
console.log(texto1.match(/a {3}b/)) 
// especifica que ' ' tem que ser 3 caracateres
console.log(texto1.match(/a\s{3}b/))
// mesmo caso que o anterior

````

## Unicdoe - Acentuação

````javascript

// no início, a codificaçâo era feita com 1 Byte
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 Milhão caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt/

const texto = 'aʬc௵d'
// para usar o unicode, usamos \u e o elemetno da tabela unicode
console.log(texto.match(/\u02AC|\u0BF5/g))

````
## 03.Conjuntos

Conjuntos sâo definiods por '[]'. 
O que tiver dentro do conjunto é usado como OU.

### Definindo Conjuntos

````javascript
const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// para definir uma classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g
// Buscar por um conjunto equivale a vários pipes '|'
// no caso, equivale a fazer /2|4|6|8/g
console.log(texto.match(regexPares))
/*  ['2', '4', '6' ] */

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g
// Equivale à: /na|nã/g
console.log(texto2.match(regexComESemAcento))
/* [ 'nã', 'na' ] */
````

### Intervalos

````javascript
// Intervalos funcionam dentro de um Conjunto []
// Interval - Match a single character present in the list below
// As bordas são incluisvas

const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g))
/* [ 'a', 'b', 'c', 'd', 'e', 'f' ]  */
console.log(texto.match(/[b-d]/g))
/* [ 'b', 'c', 'd' ]  */
console.log(texto.match(/[2-4]/g))
/* [ '2', '3', '4' ]  */
console.log(texto.match(/[A-Z1-3]/gi))
/*  [ '1', '2', '3', 'a', 'b', 'c', 'd', 'e', 'f' ] */

````

Exemplo no Regex 101

````
/[a-z1-6]/gi
Match a single character present in the list below [a-z1-6]
a-z a single character in the range between
 a (index 97) and z (index 122) (case insensitive)
1-6 a single character in the range between 
 1 (index 49) and 6 (index 54) (case insensitive)
````

### Conjuntos com metaCaracteres

Meta Caracteres, dentor de conjuntos FUNCIONAM EM BOA PARTE COMO LITERAIS Não precisa de Scape dentro do conjunto

COnchetes [], traço - e circunflexo ^ vâo ser tratados como metacaracteres dentro de um conjunto. POr isso para ser tratado como um litaral, precisa de Scape `\`

````javascript
const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g)) 
/*  [ '.$', '+*', '?-' ]   */
// não precisa de escape dentro do conjunto

console.log(texto.match(/[$-?]/g)) 
/* [ '.', '$', '+', '*', '?', '-' ] */
// Nesse caso temos um intervalo
// '-' funciona como um metacaractere
// Regex101: 
// $-? a single character in the range between $ (index 36) and ? (index 63) (case sensitive)

console.log(texto.match(/[$\-?]/g))
/*   [ '$', '?', '-' ]  */
// NÃO é um intervalo (range), pois usa Scape

console.log(texto.match(/[-?]/g))
/* [ '?', '-' ] */
// pode precisar de escape dentro do conjunto: - [ ] ^
````

### Cuidados com Intervalos

````javascript

const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
/* [ 'a', 'b', 'c', 'a', 'c' ] */

console.log(texto.match(/a-c/g)) 
/* [ 'a-c' ] */
// não define um range, não é um conjunto (colchetes)

console.log(texto.match(/[A-z]/g)) 
/* [ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ] */
// intervalos usam a ordem da tabela ASCII/UNICODE
// Entre 'A' e 'z', na tabela, existem outros simbolos que pode pegar
// Se atente em RESPEITAR A ORDEM DA TABELA UNICODE/ASCII

//// tem que respeitar a ordem da tabela UNICODE

// console.log(texto.match(/[a-Z]/g)) // ERRO!!!
// Começa primeiro pelo Maiusculo e depois vai para o minúsculo

// console.log(texto.match(/[4-1]/g)) // ERRO!!!
// 4 Vem depois de 1, não antes

````

### ShortHands

Atalhos para um CONJUNTO de caracteres que sâo muito usados

\d
\w
\s
\b

````javascript
const texto = `1,2,3,a.b c!d?e\r	-
f_g`

console.log(texto.match(/\d/g)) // números [0-9]
console.log(texto.match(/\D/g)) // não números [^0-9], tudo que nâo é numero]

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaço [ \t\n\r\f]
console.log(texto.match(/\S/g)) // não espaço [^ \t\n\r\f]

// \b \B
````

### Conjunto Negado
