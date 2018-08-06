(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * IIFE - Immediately-invoked function expression
  // ? Uma função auto executável!
  //――――――――――――――――――――――――――――――――→
  function sum1() {
    return 2 + 2;
  }
  //――――――――――――――――→
  var sum2 = function() {
    return 2 + 4;
  };
  //――――――――――――――――→
  var sum3 = function funSum3() {
    return 2 + 6;
  };
  //――――――――――――――――→
  var obj = {
    prop: function() {
      return 2 + 8;
    }
  };
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(sum1());
  console.log(sum2());
  console.log(sum3());
  // ! dá erro pois ela é atribuida a sum3:
  //// console.log(funSum3());
  console.log(obj);
  console.log(obj.prop());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――→
  // ! não podemos executar uma função anônima!
  // ! boa prática manter o escopo local!
  // ? mas temos uma função auto executável!
  // ? envolvida por parênteses ()
  // ? e depois iniciada com outros () ela autoexecuta!
  console.log('________________________________');
  (function() {
    return console.log(2 + 10);
  }());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
