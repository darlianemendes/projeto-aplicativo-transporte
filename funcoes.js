function formatamoeda(numero){
 return numero.toFixed(2).replace(".",",")
}

function calcular(){ 

  distanciakm= inputDistancia.value
  tempomin= inputTempo.value
  valordacorrida=2+distanciakm*1.4+tempomin*0.26
  botaoCalcular.innerHTML='O total da corrida foi: R$' +formatamoeda(valordacorrida)
  
}