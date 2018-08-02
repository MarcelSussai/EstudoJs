(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * substring()
  var str1 = 'Marcel Sussai de Oliveira 0123456789 abcdefghijklmnopqrstuvxywz';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str1.substring(26, 36));            // # 0123456789
  console.log(str1.substring(36, 26));            // # 0123456789
  console.log(str1.substring(37));                // # abcdefghijklmnopqrstuvxywz
  console.log(str1.substring(0, 25));             // # Marcel Sussai de Oliveira
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
