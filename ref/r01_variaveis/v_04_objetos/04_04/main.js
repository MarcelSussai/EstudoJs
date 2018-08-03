(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Usando uma função construtora
  function nomeFunc01(param1, param2, param3) {
    this.varParam1 = param1;
    this.varParam2 = param2;
    this.varParam3 = param3;
  }
  //――――――――――――――――――――――――――――――――→
  var funcRef01 = new nomeFunc01('novo 01 valor 1', 'novo 01 valor 2', 'novo 01 valor 3');
  var funcRef02 = new nomeFunc01('novo 02 valor 1', 'novo 02 valor 2', 'novo 02 valor 3');
  var funcRef03 = new nomeFunc01('novo 03 valor 1', 'novo 03 valor 2', 'novo 03 valor 3');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(funcRef01);
  console.log(funcRef02);
  console.log(funcRef03);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
