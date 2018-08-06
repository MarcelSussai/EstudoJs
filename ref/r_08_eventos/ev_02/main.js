(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var div = doc.querySelector('[data-js="div"]');
  var p1 = doc.querySelector('[data-js="p1"]');
  var p2 = doc.querySelector('[data-js="p2"]');
  //――――――――――――――――→
  function modificaTexto() {
    p2.firstChild.nodeValue = "Texto 3";
  }
  //――――――――――――――――→
  function carrega() {
    div.addEventListener('click', modificaTexto, false);
  }
  //――――――――――――――――→
  doc.addEventListener('DOMContentLoaded', carrega, false);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
