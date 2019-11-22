const _ = require('lodash') 
// mesmo que node_modules nao esteja no mesmo lugar, ele procura subindo em pasta em pasta até achar
setInterval(() => console.log(_.random(50, 60)), 2000)