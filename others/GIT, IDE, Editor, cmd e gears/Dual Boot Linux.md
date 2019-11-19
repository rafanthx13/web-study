# Processo em que fiz o Dual Boot tendo linux e colocando Ubuntu

REalizado nos dias 16 e 17 de Março de 2019 na Sexta/Sábado, das 20h do sábado até 14h de Sábado

O que você vai precisar ter antes de começar a fazer:

1. eTrr um prendrive para tornálo botável. Você terá que formatálo
2. Ter um HD e fazer um backup de tudo antes de começar o processo

### 1. Links

+ Antes de tudo, comece a entender todo o processo de fazer o dual boot.

> A ideia é: PEga um espaço de seu HD e colocar um sistema opercaional de talve forma que quando voc]ẽ inicializar vai entrar em um progmra para voce escolher qual SO usar.
>
> é mais fácil de fazer: WINdows para Linux
>
> Melhor Link
>
> <https://answers.microsoft.com/pt-br/windows/forum/all/windows-10-x-ubuntu-dual-boot/096040df-443e-4e12-84af-802969a4af2f>

## 2. Baixando as ISO

Procure baixar as ISO, tanto do Linux quanto do seu proprio sismtea operacional para o caso de tar algum prblema. 

QUe seja esse o primeiro passo, pois enquanto vocÊ faz isso você vai avançar nos proximos passo. ENtaâo nao espere acabar as duas ISO para proseguir.

## 3. Espço do HD

ALan Kay - IHC

 No windows use o comando WINDOWS + R e digite `diskmgmt.msc`

Vai abirr uma tela para gerenciar o disco.

Busque o seu HD e procure saber se ele te **ESPAÇO NÃO ALOCADO**. Provavelmente ele não vai ter ou vai sere muito pouco. ENtâo você vai ter que fazer aparecer esse espçao.

## 4. Liberando HD de forma primaria

Para criar espaço no seu HD. Faça os seguintes passos.

1. CCleaner
2. Tirar arquivos grande e pondos-s na lixeira
3. Tiraar arquivos grandes do PC

Se nada disso fizer aparecer, então, faça uma desfragmetaçâ de deisco. Esse processo demora muito umas 3 horas, mas.

Uma alternativa é rodar o progrma : disk-defrag

<https://www.auslogics.com/en/software/disk-defrag/>

Nele, você pode mandar desfragmentar e depois desligar o PC. Assim acho bom você fazer isso antes de dormir e quando acordaar já vai está terminado.

Mesmo que nâo libere espçao, você está organiznado seu PC

## 5. EaseUS Partition Master

VOcÊ presisa de cerca de 30 GB no míniom pra instalr o SO e nAo ter problema (pelo menos isso com o Linx)

Se nada disso tiver dado certo, vocÊ vai ter que usar programas para obrigar a esse epaço nao-alocdo aparecer.

Para isso tem o progrma EaseUs Partition Master

<https://www.youtube.com/watch?v=dVaXrD8l2zM>

Mesmo que você achar de graça ele nunca é de graça. Nunca memso. COloque isso na sua cabeça, : você nunca vai rodar o program se nâo rodar ele pirata.

ENfim, baixe com crack mas nao execute ainda. 

**É AQUI QUE PODE DAR PAU. O PROCESSO PODE FUDER COM SEU PC**

ENtâo vamos para o Passo 6

## 6. Acessando a BIOS

Na verdade esse pode até ser o primiero passo.

**SE VOCÊ NÂO CONSEGUIR DE FORMA ALGUMA ACESSAR A BIOS DE SUA MÁQUINA, NÂO VAI FUNCIONAR**

**POR QUE ACESSAR A BIOS**

+ TOd vez que o computador liga, ele procura pela parte do sistema operacional. EM geral, pelo HD.
+ Ele tem uma Ordem: HD, dispositivo Externo, CD ou Internet
+ Para instlaar o outro SO terá que muda essa forma: ele irá leê um device externo ou um DVD.

Acesse a BIOS e descubra onde fica os campos para mudar a ordem do boot e mudeis para o Device Externo e DVD irem na frente.

Antes de tudo, é bom saber: **SUA MÁQUINA VAI CONSEGUIR LER CORRETAMENTE QUANDO COLOCAR O DEVICE EXTERNO?** Isso é improtante para que, caso de problema em tudo, você puder reiniciar e formatar a máquina inteira se precisar. ENtAô vamos fazer algo bootavel

## 6. Pendrive Bootavel

Eu ussei o RUFU, e parece que ele é relamente algo muito bom. Useo para fazer um pendrive bootaval ou umDVD bootavel.

## 7. Inserindo o instalador de SO

Va na BIOS e mude tudo de Boot para habilitar o device/DVD extreno. Depois coloque-o e reiniciar.

Se tudo der certo vai aparecer na tela o ambiente para intalar o SO.

Nâo presisa fazer nada. **AQUI É SÓ PRA SABER SE AS CONFIGURAÇÔES DO RUFU ESTÂO CORRETAS PARA FAZER O DUAL BOOT**. Se nâo aparecer, reformate o DVD/Pendrive e eintale com outras configuraçôes até dá tudo certo. Dando tudo certo vamos adiante

## 8. Usar easeUS

Aqui que mora o perigo. VOcê vai obrigar por esse programa a diminuir o espaçoa locado da sua máquina. Isso demora umpouco e só vai funcionar mesmo depois de reiniciar a máquina. Aqui demora, deixe a máquina fazer o seu trabalho senâo pode estragar tudo. 



Se estragar tudo, ainda é possivel instlar o SO emcima de tudo, por isso a ordem dos paços está dessa forma

###  9. Instalando o SO

Se o eauseUS tiver daod tudo certo, você vai ter espaço alocado no seu disco. Agora vocÊ~poderá instlaar o DUAL BOOT SO nessa partiçâo.

Inseira o Pendrive Bootaval e acesse a tela de intalaraçâo e eintale na partiçâo nao alocada

Se for Linux, procure criar uma área de Swap, iso vai melhorar umpouco o desempenho dele principlamente se seu notebook for fraco.

Depois de intalado, tudo feito

## 10. Testando

TEste acessar o GRUB ou qualquer outra coisa que acessa SO. ELe aparece quando ligar a máquina.

Teste o WIndows e O Unbuntu 2 vezes cada.

Se conseguir, entâo deu tudo certo.

:)





