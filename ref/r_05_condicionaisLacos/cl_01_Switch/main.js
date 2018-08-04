(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * switch()
  function fun1(x) {
    switch(x) {
      case 1: console.log('x é 1');
      break;
      case 2: console.log('x é 2');
      break;
      case 3: console.log('x é 3');
      break;
      default: console.log('x não é 1, nem 2, nem 3!');
      break;
      // ! Sempre utilizar o break no default
      // ! para evitar que ele gere um looping infinito ou um a mais!
    }
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1(3));
  console.log(fun1(4));
  console.log(fun1(1));
  console.log(fun1(2));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
