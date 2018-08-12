(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function fun01() {
    var n1 = 10;
    var n2 = 20;
    console.log('Na função fun01, o primeiro numero é:', n1);
    console.log('Na função fun01, o segundo numero é:', n2);
    return n1 + n2;
  }
  //――――――――――――――――→
  function fun02() {
    var sum = function sum() {
      return n1 + n2;
    };
    var n1 = 16;
    var n2 = 16;
    console.log('A soma de 16 e 16 é:', sum ? sum() : undefined);
    return sum();
  }
  function fun03() {
    var n1 = 24;
    var n2 = 32;
    function sum() {
      return n1 + n2;
    }
    console.log('A soma de 24 e 32 é:', sum());
    console.log('Na função fun03, n1 é:', n1);
    return sum();
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun01());
  console.log(fun02());
  console.log(fun03());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
