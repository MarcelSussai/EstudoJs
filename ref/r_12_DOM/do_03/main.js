(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var $mainD = doc.querySelector('.main');
  var $mainH = doc.querySelector('.main-header');
  var $mainC = doc.querySelector('.main-content');
  var $mainF = doc.querySelector('.main-footer');
  //――――――――――――――――→
  var $cloMH = $mainH.cloneNode(true);
  var $heaH1 = $mainH.firstElementChild;
  var $novT1 = doc.createTextNode('Texto no DOM HTML criado!');
  var $novP1 = doc.createElement('p');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log($mainD);
  console.log($mainH);
  console.log($mainC);
  console.log($mainF);
  console.log('―――――――――――――――→');
  console.log($cloMH);
  console.log($heaH1);
  console.log($novT1);
  console.log($novP1);
  console.log('―――――――――――――――→');
  console.log($mainH.removeChild($heaH1));
  console.log($mainD.replaceChild($cloMH, $mainF));
  console.log($novP1.appendChild($novT1));
  console.log($mainD.appendChild($novP1));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
