(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * slice()
  // ? O método slice() extrai uma sessão de uma string
  // ? e retorna uma nova string.
  // ? string.slice(inicio, fim)
  var str1 = '0123456789';
  var str2 = 'abcdefghij';
  var str3 = str1.slice(4, -2);
  var str4 = str2.slice(4, -2);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str1, str2);
  console.log(str3);
  console.log(str4);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str1.slice(-3));
  console.log(str1.slice(-3, -1));
  console.log(str1.slice(0, -1));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str2.slice(8));
  // ? lembrando que o ultimo ele não mostra
  console.log(str2.slice(2, 4 + 2));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
