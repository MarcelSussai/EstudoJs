(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Eventos
  //――――――――――――――――――――――――――――――――→
  var $btn1 = doc.querySelector('[data-id="1"]');
  var $btn2 = doc.querySelector('[data-id="2"]');
  //――――――――――――――――――――――――――――――――→
  function handleEvent1(e) {
    e.preventDefault();
    console.log('Apertou Botão 01!');
  }
  $btn1.addEventListener('click',handleEvent1, false);
  //――――――――――――――――→
  function handleEvent2(e) {
    e.preventDefault();
    console.log('Apertou Botão 02!');
  }
  $btn2.addEventListener('click',handleEvent2, false);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log($btn1);
  console.log($btn2);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var $p = doc.querySelector('p');
  var $btn = doc.querySelector('[data-js="btn"]');
  //――――――――――――――――――――――――――――――――→
  $p.addEventListener('click', function() {
    console.log('Chamada do parágrafo!');
  });
  //――――――――――――――――→
  $btn.addEventListener('click', function(e) {
    console.log('Chamada do botão!');
    // ? atenção nisso:
    e.stopPropagation();
  });
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
