(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function fun01() {
    var n1 = 10;
    var n2 = 20;
    console.log('Na função fun01, o primeiro numero é:', n1);
    console.log('Na função fun01, o segundo numero é:', n2);
    console.log('―――――――――――――――→');
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
    console.log('―――――――――――――――→');
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
    console.log('―――――――――――――――→');
    return sum();
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun01());
  console.log(fun02());
  console.log(fun03());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function calculator(n1, n2) {
    return function(callback) {
      return callback(n1, n2);
    }
  }
  //――――――――――――――――――――――――――――――――→
  var sum = calculator(16, 16);
  var mul = calculator(8, 8);
  var div = calculator(128, 8);
  var sub = calculator(64, 16);
  var mod = calculator(40, 8);
  //――――――――――――――――――――――――――――――――→
  var resSum = sum(function(n1, n2) {
    return n1 + n2;
  });
  //――――――――――――――――→
  var resMul = mul(function(n1, n2) {
    return n1 * n2;
  });
  //――――――――――――――――→
  var resDiv = div(function(n1, n2) {
    return n1 / n2;
  });
  //――――――――――――――――→
  var resSub = sub(function(n1, n2) {
    return n1 - n2;
  });
  //――――――――――――――――→
  var resMod = mod(function(n1, n2) {
    return n1 % n2;
  });
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('O resultado da soma é:', resSum);
  console.log('O resultado da multiplicação é:', resMul);
  console.log('O resultado da divisão é:', resDiv);
  console.log('O resultado da subtração é:', resSub);
  console.log('O resultado do módulo é:', resMod);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
