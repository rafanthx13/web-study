# Curso Regex Cod3r

Curso iniciado em: 06/02/2019 e terminado em 09/02/2019

[TOC]

## 01. Introdução

link do Git: https://github.com/cod3rcursos/curso-regex

Ferramenta Online regex101: https://regex101.com/

**Livros sobre Regex**

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



## 03. Caracteres

### Flags

+ flag 'g' - global
  - `g modifier: global. All matches (don't return after first match)`
  - Serve para "continuar buscando após o primeiro match"
  - **Sem a FLAG G ELE MOSTRA 3 INTES DE RETORNO**
+ flag 'i' - ignore case, be insensitive `
  - `i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])`
  - Nâo diferencia maiuscula de minúscula
  - Serve para buscar TANTO MAISUCULO QUANTO MINUSTULO, OS DOIS.
  - Sem ela, a busca é pela paralvra exata de acordo com o CapsLock de cada letra

A flag fica fora da expressão regular e é dependente da linguagem

### Caracteres simples

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

#### MetaCaractere `.` : simboliza tudo

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

#### MetaCaractere pipe `|` : simboliza 'ou'

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

### Unicode - Acentuação

link de unicode: https://unicode-table.com/pt/#control-character

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
## 04. Conjuntos

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

\d = digits
\w = Words
\s = spaces
\b = bords

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

basta por no início do conjunto o caractere circunflexo `^`

````javascript
const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
// Negação do conjunto de dígitos

console.log(texto.match(/[^0-9]/g))
// Negação dos dígitos, ou seja, pega tudo menos dígitos

console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))
// Aqui temos 2 interevalso + \s
/* Regex101
!-/ a single character in the range between ! 
  (index 33) and / (index 47) (case sensitive)
:-@ a single character in the range between : 
  (index 58) and @ (index 64) (case sensitive)
\s matches any whitespace character (equal to
  */
````

### Intervalos com Unicode

Funciona da forma normal, mas, você precisa saber a ordem de cada caractere na tabela UNICODE e O INTERVALO de caracteres que vai pegar.

````javascript
const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(texto.match(/[À-ü]/g))
/* Resgata todos */
/* Regex101
À-ü a single character in the range between
 À (index 192) and ü (index 252)
*/
````

## 05. Quantificadores

TABELA QUANTIFICADREOS DO PDF

### Quantificador `?` - Opcional - (Zero ou Um)

// ? -> zero ou um (opcional) para o caractere
// a esquerda do símbolo '?'

````javascript
const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional) para o caractere
// a esquerda do símbolo '?'
const regex = /fogo?/gi
// Estou dizendo para  buscar ...
// 'fog' e com o 'o' opcional
// Assim, busca 'fog' ou 'fogo'

console.log(texto1.match(regex))
/* [ 'fogo', 'FOGO' ] */
console.log(texto2.match(regex))
/* [ 'fog' ] */
````

### Quantificador `+` - (Um ou mais)

Afeta o caractere da esquerda. Busca Um ou mais a ocorrÊncia de um caractere.

Se usado em um grupo, vai buscar o máximo que der desse grupo.

````javascript
const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi
// Significa: buscar 'fog' seguido de uma sequência de 
// um 'o' ou mais 'o's
// afeta o caractere a esquerda

console.log(texto1.match(regex))
/* [ 'fogo', 'FOGOOOOOO' ] */
// buscou 'FOG' seguido de vários 'O's

console.log(texto2.match(regex))
/* null */
// Não buscou 'fog' pois ele busca no mínimo uma ocorrência

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g))
/* [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ] */

console.log(texto3.match(/[0-9]+/g))
/* [ '0123456789' ] */
// Buscou a partir da primeira ocorrência de um número o restante
````

### Quantificador `*` - (Zero ou Mais)

````javascript
const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais
const regex = /fogo*/gi
// Busca 'fog', 'fogo' ou 'fogoooo...'

console.log(texto1.match(regex))
/* [ 'fogo', 'FOGOOOOOO' ] */
console.log(texto2.match(regex))
/* [ 'fog' ] */
````

### Quantificador `{n,m}` -  Limitado

Conseguimos definir intervalos de várias formas.

TABELA DE PDF


````javascript
const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir uma quantificador usa {}
console.log(texto.match(/\d{1,2}/g))
// Vai pegar dígitos de 1 à 2 caracteres
/* [ '12', '0', '6', '9', '21', '23', '45', '46' ] */

console.log(texto.match(/[0-9]{2}/g))
// Vai pegar os dígitos de dois caracteres
/* [ '12', '21', '23', '45', '46' ] */

console.log(texto.match(/\d{1,}/g))
// Vai pegar os dígitos que tenham no ínimo 1 caractere
/* [ '120', '6', '9', '21', '23', '45', '46' ] */

console.log(texto.match(/\w{7}/g))
// Vai buscar uma sequencia letras/número que tenha tamanho 7 (sem espaços)
/* [ 'recebeu', 'apostan' ] */

console.log(texto.match(/[\wõã]{7,}/g))
// Pega sequencia de letras que tenham no mínimo 7 letras (sem espaços)
/* [ 'recebeu', 'milhões', 'apostando' ] */


// no futuro ......

console.log(texto.match(/\b\d{1,2}\b/g))
/* [ '6', '9', '21', '23', '45', '46' ] */
// Não pega '120' por causa da borda

console.log(texto.match(/\b[\wõ]{7}\b/g))
/* [ 'recebeu', 'milhões' ] */
// Nâo vai pegar 'apostan' por causa da borda
````

### Quantificadorores Gulosos e Não Gulosos (lazy)

A forma gulsosa é a *default*, mas, dependendo da situação pdeo ser necessário ser *lazy*.

Para por como *lazy*, coloca-se o `?` na frente do quantificador.

Exemplo: /fogo+/ (default) ==> /fogo+?/ (lazy)

````javascript
const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÃO gulosos (greedy) por padrão ...

// estou buscando ==>  '<div>' seguido de qualquer coisa (1 ou Mais) e depois '</div>'
// Perceba que: a busca termina na ÚLTIMA 'div'. Mas e se eu quise-se que termina-se na primeira ?????????
// Para isso existe o modo lazy, que vai retonar um match quando encontrar a primeira 'div' de fechamento
// Dessa forma pega cada conjunto de DIV da forma que queremos, se nâo pega a primeira div até o fechamento da última DIV

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))
/* TODOS RETORNAM : [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ] */

// quantificadores NÃO gulosos (lazy)...

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
/* TODOS RETORNAM : [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ] */
````

## 06. Grupos

Definidos a partir de parêntesis

### Criando Gripos

````javascript
const texto1 = 'O José Simão é muito engraçado... hehehehehehe'

// Grupos sâo feitos comparantesis '()'.
// Emcima de um grupo, eu posso aplicar quantificadores: 
// ? (Zero-Um), + (Um-Mais), *(Zero-Mais), {}(n á m)
console.log(texto1.match(/(he)+/g))
/* [ 'hehehehehehe' ] */
const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
// Pode ter ou não 'http://' seguido de
// Pode ter ou nâo 'www.' seguido de
// Um conjunto de palavaras seguido de '.' seguido de 
// 2 ou mais letras seguido de
// '.' e dois ou mais letras opcionais
/* [ 'http://www.site.info', 'www.escola.ninja.br', 'google.com.ag' ]*/
````
### Retrovisor

````javascript
const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto1.match(/<(\w+)>/g))
/* [ '<b>', '<strong>', '<div>' ] */

// Retrovisor é uma forma de voce pegar a referencincia de um grupo
// A ideia é: Quando se captura um grupo, poder usar essse valor posteriormente no regex

// Usando retrovisor é o \1
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))
/* [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ] */

const texto2 = 'Lentamente é mente muito lenta.'

// Sem retrovisor
console.log(texto2.match(/(lenta)(mente)/gi))
/* [ 'Lentamente' ] */

// Posso usar dois retrovisores, já que há dois grupos
// \2 será o "mente" e \1 é "lenta"
console.log(texto2.match(/(lenta)(mente).*\2/gi))
/* [ 'Lentamente é mente' ] */

console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
/* [ 'Lentamente é mente muito lenta.' ]  */

// Existe uma forma de não guardar o valor d eum grupo, com "?:"

console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda
// O retrovisor 1 '\1' nâo é mais 'lenta' é na verdade "mente"
/* [ 'Lentamente é mente' ] */

console.log(texto2.match(/(lenta)(mente)?/gi))
/// pega 'lenta' quanto 'lentamente'
/* [ 'Lentamente', 'lenta' ] */

// Posso usar o retrovisor como parâmetro de um 'replace'
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC $ DEF')) 
// No caso, substituiu 'lenta' por 'mente' o segndo retrovisor
/* mente é mente muito lenta. */ 

// JAVASCRIPT SUPORTAR ATÉ PELO MENOS 12 RETROVISORES
// para saber mais, tem que pesquisar/testar
const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))
/* [ 'abcdefghijkll' ] */
````

### Grupo Aninhado

````javascript
const texto = 'supermercado hipermercado minimercado mercado'

// SEM GRUPO ANINHADO
console.log(texto.match(/(super|hiper|mini)?mercado/g))
/* [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ] */

// USANDO GRUPO ANINHADO - Usado com '|'
console.log(texto.match(/((hi|su)per|mini)?mercado/g))
/* [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ] */
// Nesse caso, é melhor sem grupo aninhado pois fica de difícil leitura
````

### Cuidados com Grupo

É recomendado não usar grupo só por questão de legibilidadde lógica.

Um conjunto `[]` nâo pode ter grupo `()`
Um grupo `()` pode ter conjunto `[]`

````javascript
const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

// OBS: Dentro de um Conjunto, não existe  um grupo 
console.log(texto.match(/[(abc)]/gi)) 
// Aqui, é um conjunto com os caracteres 'a','b',','c',(',')'
// e não um grupo 'abc'
/* [ '(', 'a', ')', 'A', 'B', 'C', 'a', 'b', 'c' ] */

console.log(texto.match(/([abc])/gi))
// Mas dentro de um grupo, pode ter um ou mais conjuntos
// Aqui é um grupo com '[' e ']'
/* [ 'a', 'A', 'B', 'C', 'a', 'b', 'c' ] */

console.log(texto.match(/(abc)+/gi))
/* [ 'ABCabc' ] */
````

### Grupos especiais (?=) (?!)

Grupos especiais permitem que se busque  sobre um math de grupo. É por exemplo: "Buscar as palavra que na frente dela tenham um certo jeito"

````javascript
const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))
/* [ 'João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica', 'nervoso' ] */

// Positive lookahead - Olha pra frente do match
// (?=,) Procure uma virgula na frente do grup, Olhando pra frente
/* Como funciona: 
1. Busca as palavras com e sem acento; 
2. Olha pras que deram math e busca a que tem acento
3. A unica que encaixa é 'calmo' pois tem um virgula ',' na frente
*/
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
/* [ 'calmo' ] */

console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
/* [ 'nervoso' ] */

console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))
// Só pega 'calmo' pois, olhando pra frente encontra ', mas' de "(?=, mas)"
/* [ 'calmo' ] */

// Negative lookahead - Nega o 'Positive LockAhead'
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
// Ou seja, vai buscar todas as palasvras execto calmo
// Pois calmo é seguido de ','
/* [ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ] */

console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
/* [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ] */
````



## 07. Bordas

### Bordas : ^ inicio e $ para fim

````javascript
const texto = `Romário era um excelente jogador\n
, mas hoje é um político questionador`

console.log(texto.match(/r/gi))
//Selecionar todos os 'r's
/* [ 'R', 'r', 'r', 'r', 'r' ] */

console.log(texto.match(/^r/gi)) // ^ inicio da linha/string
// Fora de um conjunto o '^' significa INICIO DA LINHA
// Então, vai buscar "o primeira r/R da string"
/* [ 'R' ] */

console.log(texto.match(/r$/gi)) // $ fim da linha/string
// $ vai buscar o último O FIM DA LINHA
/* [ 'r' ] */

console.log(texto.match(/^r.*r$/gi)) // problema do dotall
// Essa expressão daria certo se não tive-se '\n'
// Pois '.' nâo resolve o '\n'
// problema do dotall: '.' em REGEX
/* null */
````

### Resolvendo `dotfall` : usar o `.` pegando `\n`

dotaal é o seguinte: em geral, o ponto '.' representa qualquer caracteres. Mas em JS, o `.` nâo é 'dotall' ppis nâo seleciona '\n'

// Pra resolver o 'dotall' algumas linguagens implementam um falg
// que ao ser aciona o '.' pega o '\n'

// Solução: '.' => ['\s\S']
// \s e \S são opostos e se complementam

````javascript
const texto = `Romário era um excelente jogador\n, mas hoje é um político
questionador`

// Pra resolver o 'dotall' algumas linguagens implementam um falg
// que ao ser aciona o '.' pega o '\n'
console.log(texto.match(/^r.*r$/gi)) // problema do dotall
// '.' não seleciona tudo por que nâo é um 'dotall'
/* null */

console.log(texto.match(/^r[\s\S]*r$/gi))
/* [ 'Romário era um excelente jogador\n, mas hoje é um político\nquestionador' ] */

// Solução: '.' => ['\s\S']
// \s e \S são opostos e se complementam
````

### flag 'm' multline

````javascript
const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
console.log(texto.match(/\n/g))
// Buscar os '\n'
/* [ '\n', '\n', '\n', '\n' ] */

console.log(texto.match(/^(\w).+\1$/gi))
// Selecionando por Retrovisor, mas ainda nâo dá pra pegar
/* null */

console.log(texto.match(/^(\w).+\1$/gim))
// com a flag 'm' vai pegar o multiline
/* [ 'Leo é muito legal', 
     'Emanuel foi jogar em Sergipe',
     'Bianca é casada com Habib' ] 
*/
````

### Bordas nas palavras

````javascript
const texto1 = `dia diatonico diafragma 
media wikipedia bom_dia melodia radial`

// !!!!! borda '\b' é o oposto de '\w' como [^A-Za-z0-9_]

// \\b quer dizer borda de palavra
console.log(texto1.match(/\bdia\w+/gi))
// vai selecionar palavras que começam com 'dia'
/* [ 'diatonico', 'diafragma' ] */

console.log(texto1.match(/\w+dia\b/gi))
// Seleciona palavras que terminam com 'dia'
/* [ 'media', 'wikipedia', 'bom_dia', 'melodia' ] */

console.log(texto1.match(/\w+dia\w+/gi))
// Selecionandmo palavras que tem 'dia' no meio
// para isso, nem precisamos de usar bordas com '\b'
/* [ 'radial' ] */

console.log(texto1.match(/\bdia\b/gi))
// Seleciona apenas a palavra dia
/* [ 'dia' ] */

// borda é não \w, que é [^A-Za-z0-9_]... 
// temos problemas pois isso não inclui acentos!
// Ou seja, em lingua POrtuguesa, não pegaraia as bordas com acento
const texto2 = `dia diatônico diafragma, 
média wikipédia bom-dia melodia radial`

console.log(texto2.match(/\bdia\b/gi))
// Seleciona os 4 dias ==> 'dia', ''média', 'wikipédia', 'bom-dia'
// 'dia' (Correto)
// 'média' (Errado) : Selecionou pois 'é' não é pego pelo '\b
// 'wikipédia' (Errado) : Análogo ao caso anterior
// 'bom-dia' pois a borda nao pega '\b'
/* [ 'dia', 'dia', 'dia', 'dia' ] */

// OS problemas da borda acontecem pois o \b NÃO PEGA TUDO
// Uma soluçâo seria: \b ==> (\S*)? ou ([\wÀ-ú-]*)?

console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra!
/* [ 'dia',   'diatônico',   'diafragma,',   'média',
     'wikipédia', 'bom-dia', 'melodia', 'radial' ] 
*/

console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
/* [ 'dia', 'diatônico', 'diafragma', 'média', 'wikipédia',
     'bom-dia', 'melodia',  'radial' ] */
````

**END**