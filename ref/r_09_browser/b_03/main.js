(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * .value
  //――――――――――――――――――――――――――――――――→
  var $inpUsna = doc.querySelector('#username');
  var $inpPass = doc.querySelector('#password');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log($inpUsna.value, '-', $inpPass.value);
  console.log('―――――――――――――――→');
  $inpUsna.value = 'Marcel Sussai';
  $inpPass.value = 'SenHaSenHaSen';
  console.log($inpUsna.value, '-', $inpPass.value);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
