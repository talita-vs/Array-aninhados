let listaSuprimentos=[]

//MARCELO
let marceloHigiene=['agua','lenço','papel','pasta']

if(marceloHigiene.length <5){
    let faltante= 5 - marceloHigiene.length;
    console.log ('quantidade errada de itens, compre mais ' +faltante+ ' itens')
}
if(marceloHigiene.length>5){
    let devolução =marceloHigiene.length - 5;
    console.log('quantidade errada de itens, devolva '+devolução+' itens')
}
if(marceloHigiene.length===5){
    listaSuprimentos.push(marceloHigiene)
}

//VALENTINA
let valentinaAlimentaçãço=['agua','salgados','enlatados','suco','frutas', 'doces']

if(valentinaAlimentaçãço.length <5){
    let faltante= 5 - valentinaAlimentaçãço.length;
    console.log ('quantidade errada de itens, compre mais ' +faltante+ ' itens')
}
if(valentinaAlimentaçãço.length>5){
    let devolução =valentinaAlimentaçãço.length - 5;
    console.log('quantidade errada de itens, devolva '+devolução+' itens')
}
if(valentinaAlimentaçãço.length===5){
    listaSuprimentos.push(valentinaAlimentaçãço)
}

//JOAO
let joãoMedicamentos=['esparadrapo','algodão', 'alcool', 'soro','curativo']

if(joãoMedicamentos.length <5){
    let faltante= 5 - joãoMedicamentos.length;
    console.log ('quantidade errada de itens, compre mais ' +faltante+ ' itens')
}
if(joãoMedicamentos.length>5){
    let devolução =joãoMedicamentos.length - 5;
    console.log('quantidade errada de itens, devolva '+devolução+' itens')
}
if(joãoMedicamentos.length===5){
    listaSuprimentos.push(joãoMedicamentos)
}

//TALITA
let talitaLazer=['uno', 'cadernos', 'canetas', 'batalha-naval','cartas']

if(talitaLazer.length <5){
    let faltante= 5 - talitaLazer.length;
    console.log ('quantidade errada de itens, compre mais ' +faltante+ ' itens')
}
if(talitaLazer.length>5){
    let devolução =talitaLazer.length - 5;
    console.log('quantidade errada de itens, devolva '+devolução+' itens')
}
if(talitaLazer.length===5){
    listaSuprimentos.push(talitaLazer)
}




console.log(listaSuprimentos)