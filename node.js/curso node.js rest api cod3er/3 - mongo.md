# Mongo

## O que é um Mongo

Um banco de dados orientado à objetos, estruturado por chave -> valor, como um JSON.

O banco de dados do Mongo é dinâmico, vocẽ nâo precisa definir algo para ela exisitr,. Por exemplo, se vocÊ trocar de um schema para outro que nâo exista, ele é criado na hora.

No Mongo, o db é como um schema, e as coleções são como tabelas.

Por default, a porta é 27017.

## Instalar Mongo

Instalação do outro curso da cod3r de MEAN/Web-Completo (capítulo de mongo)

## Start BD Mongo - `mongod`

Você deve conseguir executar esse comando

````
$ sudo mongo d
````

Deve aparecer algo como

````
2020-01-20T13:16:18.908-0300 I NETWORK  [initandlisten] waiting for connections on port 27017

````

## Executar MongoShell - `mongo`

Em uma aba ative `mongod`. Isso vai startar o `mongo` na sua máquina. Depois execute.

````
$ sudo mongo
````

Deve aparecer o `MongoShell` e, se executado com sucesso, aparecer algo como abaixo.
````
MongoDB shell version: 3.2.22
connecting to: test
Server has startup warnings: 
2020-01-20T13:16:18.678-0300 I CONTROL  [initandlisten] ** WARNING: You are running this process as the root user, which is not recommended.
2020-01-20T13:16:18.678-0300 I CONTROL  [initandlisten] 
> 


````

## Comandos

Mongo aceita comandos do JS

Exemplo
````
var = {name: 'Peter Parker', email: 'peter@marvel.com}
````

+ db
  - informa em qual banco está
+ use bd_name
  - troca para o banco "bd_name"
+ db.collection_name.insert()
  - Cria a collection "collection_name" se nâo existir e insere JSON dentro do insert

## Object_ID



Valor exadecimal que ocuma 12 Bytes
+ Os 4 primeiros são o TimesStamp
+ Os 3 do meio sâo um hash do hostname da máquina, pra que assim máquinas diferentes não gerem o mesmo object_id
+ Os 2 bytes são um hash do processo em que foi criado
+ Os 3 últimos são um incremento dentro do intervalo de 1 segundo

Assim há 16 milhoês de ID únicos num processo

A parte do centro fica mais/menos fixa, o que muda ao gerar várias vezes é mais o início e fim

## Ferramenta GUI apra gerencia Mongo

ROBOT 3T. Baixe, extrair e execute.

Comandos Para instalar

````
$ tar -xvzf studio-3t-linux-x64.tar.gz
$ sh ./studio-3t-linux-x64.sh
````

Ofere GUI como MySQL. Ocupa 1,5GB


