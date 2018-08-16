(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var temp;
  var $InpTxt = doc.querySelector('[data-js="texto"]');
  var $btnStart = doc.querySelector('[data-js="start"]');
  var $btnStop = doc.querySelector('[data-js="stop"]');
  var $btnReset = doc.querySelector('[data-js="reset"]');
  $InpTxt.value = 0;
  //――――――――――――――――――――――――――――――――→
  function incrementa() {
    $InpTxt.value++;
    temp = setTimeout(incrementa, 1000);
  }
  //――――――――――――――――→
  function parar() {
    clearTimeout(temp);
  }
  //――――――――――――――――→
  function resetar() {
    clearTimeout(temp);
    $InpTxt.value = 0;
  }
  //――――――――――――――――――――――――――――――――→
  $btnStart.addEventListener('click', incrementa, false);
  $btnStop.addEventListener('click', parar, false);
  $btnReset.addEventListener('click', resetar, false);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
