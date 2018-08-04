(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Parâmetros de função
  function fun1(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
  }
  //――――――――――――――――→
  function fun2(a, b =1) {
    return a * b;
  }
  //――――――――――――――――→
  // * Parametros rest
  function fun3(mult, ...args) {
    return args.map(function(x) { 
      return mult * x
    });
  }
  //――――――――――――――――――――――――――――――――→
  var arr1 = fun3(2, 1, 2, 3);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1(4));            // # 4
  console.log(fun1(4, 8));         // # 32
  console.log('―――――――――――――――→');
  console.log(fun2(4));            // # 4
  console.log(fun2(4, 8));         // # 32
  console.log('―――――――――――――――→');
  console.log(arr1);               // # (3) [2, 4, 6]
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
