(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Selecionando
  doc.body.addEventListener('click', function(e) {
    if (e.target.nodeName == 'BUTTON')
    console.log('Clicked', e.target.textContent);
  });
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var lin1 = doc.querySelector('a');
  lin1.addEventListener('click', function(e) {
    console.log('Não.');
    e.preventDefault();
  });
  // ! Tente não fazer tais coisas!
  // ! a menos que você tem uma boa razão para isso.
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var $dv = doc.querySelector('[data-js="dv"]');
  addEventListener('keydown', function(e) {
    if (e.which == 86) $dv.style.background = "#66ff66";
  });
  //――――――――――――――――→
  addEventListener('keyup', function(e) {
    if (e.which == 86) $dv.style.background = "#E0E0E0";
  });
  //――――――――――――――――→
  var i = 1;
  addEventListener('keydown', function(e) {
    if(e.which == 32 && e.ctrlKey) console.log('Apertou ctrl + espaço!', i++);
  });
  //――――――――――――――――→
  addEventListener('keypress', function(e) {
    console.log(String.fromCharCode(e.charCode));
  });
  //――――――――――――――――→
  addEventListener('click', function(e) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (e.pageX - 4) + "px";
    dot.style.top = (e.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
