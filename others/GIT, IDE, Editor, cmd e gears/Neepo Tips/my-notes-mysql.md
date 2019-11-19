# Dicas do MySql





## Default Current_Date

+ Usando a GUI, em vez de passar o código, você pode por o valor DEFAULT `CURRENT_DATE()` ao olhar as opções. Pode ser difícil de achaar, mas dá para por facilemten, assim:	
  + `Current_Date()`: Vai colocar a data da criaçao da Row autometaicmente
  + `on update current_date` : Vai atualizar essa data quando o campo for atualizado, com isos, evita de criar uma `trigger`