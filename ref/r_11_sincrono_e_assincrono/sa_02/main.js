(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * setInterval
  // ? setInterval() executa infinitamente,
  // ? até que você execute clearInterval()
  //――――――――――――――――――――――――――――――――→
  var btnIniciar = doc.querySelector('[data-id="01"]');
  var btnLimpar = doc.querySelector('[data-id="02"]');
  var intervalo01;
  //――――――――――――――――――――――――――――――――→
  function iniciarIntervalo() {
    intervalo01 = setInterval(function() {
      console.log('Executa 1 vez por segundo');
      console.log('até que alguem cancele com clearInterval()');
    }, 1000);
  }
  //――――――――――――――――→
  function limparIntervalo() {
    clearInterval(intervalo01);
  }
  //――――――――――――――――――――――――――――――――→
  btnIniciar.addEventListener('click', iniciarIntervalo, false);
  btnLimpar.addEventListener('click', limparIntervalo, false);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Outro exemplo:
  var contador = 0;
  var temporizador = setInterval(function() {
    if (contador >= 10) {
      clearInterval(temporizador);
    }
    console.log(contador++);
  }, 1000);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
