(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Síncrono
  // ? é quando é executado em ordem, da forma que é codificado
  // ! muito cuidado com eventos síncronos!
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('__Começo________________________');
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log('‾‾Fim‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  doc.addEventListener('click', function() {
    console.log('________________________________');
    console.log('Clicou no documento!');
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  }, false);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * setTimeout
  // ? temporizador
  // ? O retornado timeoutIDé um valor inteiro positivo
  // ? que identifica o timer criado pela chamada para setTimeout()
  // ? esse valor pode ser passado clearTimeout()
  // ? para cancelar o tempo limite.
  //――――――――――――――――――――――――――――――――→
  setTimeout(function() {
    console.log('Executa uma vez após 1000 miliseg');
  }, 1000);
  //――――――――――――――――――――――――――――――――→
  // var contador = 0;
  // function myTimer01() {
  //   var timer = setTimeout(function() {
  //     console.log(contador++);
  //     if(contador < 11) {
  //       myTimer01();
  //     }
  //   }, 1000);
  // }
  // myTimer01();
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Manipulando os botões
  //――――――――――――――――――――――――――――――――→
  var timeOutID;
  //――――――――――――――――→
  function handler01() {
    console.log('Mensagem exibida! :)');
  }
  //――――――――――――――――→
  function iniciandoMsg() {
    timeOutID = setTimeout(handler01, 2000);
  }
  //――――――――――――――――→
  function limpandoMsg() {
    clearTimeout(timeOutID);
  }
  //――――――――――――――――――――――――――――――――→
  var btnMostrar = doc.querySelector('[data-id="01"]');
  var btnCancelar = doc.querySelector('[data-id="02"]');
  //――――――――――――――――→
  btnMostrar.addEventListener('click', iniciandoMsg, false);
  btnCancelar.addEventListener('click', limpandoMsg, false);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

})(document);
