# Dicas par ao pyplot

Devido a varias vezes ter que pesquisar alguma coisa pra fazer qualquer coisa no pyplor, resolve no dia 07/09/2018 gear esse dofciumento para deixar registradao como fazer cada coisa importatna. pois é fiicil decourar tudo do pyplot



### Começar a contagem de 0

+ Quando: No scatre plot, se seus valores sao entere, por exemplo, [6000, 8000], o valor de 6k vai ficar sendo algo proximo do eixo x, e isso nao queremos. **quereo que haja um espaçamento pra saber o quao longe está do zero**
+ Soluçâi:https://stackoverflow.com/questions/22642511/change-y-range-to-start-from-0-with-matplotlib

````
axes.set_ylim(top = MaxValue, bottom = 0.0)
// Infelismente, para dar certo, vai ter que saber o valor maxsimo e colocar. isso é uma verdadeira porcaria
````

