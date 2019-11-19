# Python Tricks



## 1. Importação de Pacotes `__init__py`

**\_\_init\_\_.py**
 + Tem que ter em cada pasta para considerala como um móduo
 + pode ser um arquivo vazio ou por alguma configuraçâo de imporataçoa
	
`from resource import functions as f`

+ Estou importando o acrquivo 'functions.py' da pasta /resource e todas as referencais a funcoes, class e etc serao pondo o 'f' na frente

`from resource.Node import Node`

		+ importa mais diretamente de resorce(diretorio)/Node.py=>attr que se chama Node
		+ Voce o chama de Form Direta o item (no caso, será uma classe `Node`)





## 2. Variáveis e Atributos Státicos em Python

**Variáveis**

+ São variáveis que são postas dentro do escopo da classe e **Não sao postas na função \_\_init\_\_**
+ **Como chamálas**: 
  + De fora da Classe: Use `Class.static_atribute`
  + De dentro da Classe: Há duas formas: `self.static_atribute` e `Class.static_atribute`, sendo qu, é preferível usar `Class.static_atribute` para evitar usar o self que se trata das variáveis internas da class (já que as variaveis staticas sao compartilhadas, entao, tem um escopo diferente)