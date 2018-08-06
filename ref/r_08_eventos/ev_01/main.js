(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Eventos
  //――――――――――――――――――――――――――――――――→
  var sInp = '[data-js="input"]';
  var sLin = '[data-js="link"]';
  var sSpa = '[data-js="span"]';
  var sSel = '[data-js="span"]';
  //――――――――――――――――――――――――――――――――→
  function onEv(elem, even, call) {
    if(elem)
      doc.querySelector(elem).addEventListener(even, call, false);
  }
  //――――――――――――――――→
  // function offEv(elem, even, call) {
  //   doc.querySelector(elem).removeEventListener(even, call, false);
  // }
  //――――――――――――――――――――――――――――――――→
  // * handle Functions
  //――――――――――――――――→
  function hClick1(e) {
    e.preventDefault();
    console.log('Clicou no link com Span!');
  }
  //――――――――――――――――→
  function hClick2(e) {
    e.preventDefault();
    console.log('Novo evento do link!');
  }
  //――――――――――――――――→
  function hClick3(e) {
    e.preventDefault();
    console.log('Clicou no Span!');
  }
  //――――――――――――――――→
  function hInput1(e) {
    e.preventDefault();
    console.log(this.value);
  }
  //――――――――――――――――→
  function hSelec1(e) {
    e.preventDefault();
    doc.querySelector(sInp).value = this.value;
  }
  //――――――――――――――――――――――――――――――――→
  onEv(sLin, 'click', hClick1);
  // offEv(sLin, 'click', hClick1);
  //――――――――――――――――→
  onEv(sLin, 'click', hClick2);
  // offEv(sLin, 'click', hClick2);
  //――――――――――――――――→
  onEv(sSpa, 'click', hClick3);
  // offEv(sLin, 'click', hClick2);
  //――――――――――――――――→
  onEv(sInp, 'click', hInput1);
  //――――――――――――――――→
  onEv(sSel, 'click', hSelec1);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
