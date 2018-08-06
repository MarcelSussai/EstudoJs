(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Array-like como arrays!
  // * Array.prototype
  // * Array.prototype.forEach.call()
  // ? Array-like parece um array, mas não é um array!
  //――――――――――――――――――――――――――――――――→
  function fun1() {
    console.log(arguments);
    console.log(arguments.length);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(Array.prototype);
  fun1(0, 1, 2, 3, 4, 5, 6, 7, 8);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  function fun2() {
    var arr1 = [1, 2, 3, 4];
    console.log('―――――――――――――――→');
    arr1.forEach(function(ite, ind) {
      console.log('item:', ite, '\n', 'indice:', ind);
      console.log(this);
    }, arguments);  // ? este parametro é o this dentro do foreach
    console.log('―――――――――――――――→');
    for(var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
    console.log('―――――――――――――――→');
    Array.prototype.forEach.call(arguments, function(ite, ind){
      console.log(ind + ': ', ite);
    });
    console.log('―――――――――――――――→');
    Array.prototype.reduce.call(arguments, function(acu, atu, ind) {
      console.log('Acumulado:', acu);
      console.log('Atual:', atu);
      console.log('Indice:', ind);
      return acu + atu;
    });
    console.log('―――――――――――――――→');
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  fun2(1, 2, 3, 4, 5, 6, 7, 8);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
