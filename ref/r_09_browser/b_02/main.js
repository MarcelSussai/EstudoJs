(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * JS no browser
  // * getElementsByTagName('tag')
  //――――――――――――――――――――――――――――――――→
  // * querySelector('selector') e querySelectorAll('query')
  //――――――――――――――――――――――――――――――――→
  var $inps1 = doc.getElementsByName('username');
  var $inps2 = doc.querySelectorAll('[type="password"]');
  var $inps3 = doc.querySelectorAll('.input');
  var $inps4 = doc.getElementsByTagName('input');
  var $inps5 = doc.querySelector('input');
  var $inps6 = doc.getElementsByTagName('input');
  //――――――――――――――――→
  console.log('________________________________');
  console.log($inps1);
  console.log($inps1.length);
  console.log('―――――――――――――――→');
  console.log($inps2);
  console.log($inps2.length);
  console.log('―――――――――――――――→');
  console.log($inps3);
  console.log($inps3.length);
  console.log('―――――――――――――――→');
  console.log($inps4);
  console.log($inps4.length);
  console.log('―――――――――――――――→');
  console.log($inps5);
  console.log($inps5.length);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
