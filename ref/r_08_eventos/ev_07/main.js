(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Evento de foco
  // ? Quando um elemento entra em foco o navegador
  // ? dispara um evento de "focus" nele.
  // ? Quando se perde o foco um eventos de "blur" é disparado.
  //――――――――――――――――――――――――――――――――→
  var ajuda = doc.querySelector('#ajuda');
  var campos = doc.querySelectorAll('input');
  //――――――――――――――――――――――――――――――――→
  for (var i = 0; i < campos.length; i++) {
    campos[i].addEventListener('focus', function(e) {
      var text = e.target.getAttribute('data-ajuda');
      ajuda.textContent = text;
    });
    campos[i].addEventListener('blur', function(e) {
      ajuda.textContent = '';
    });
  }
  //――――――――――――――――――――――――――――――――→
  // var i = 1;
  // setTimeout(function(){
  //   console.log(i++);
  // }, 2000);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
