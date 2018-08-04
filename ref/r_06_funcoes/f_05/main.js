(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Funções
  // * .name .length .toString() .call() .call(this) .apply()
  //――――――――――――――――――――――――――――――――→
  function fun1() {
    return 'olá';
  }
  //――――――――――――――――→
  // ? podendo dizer quem é o this da função!
  function Fun2(a, b, c, d) {
    var s = ' ';
    return this.teste + s + a + s + b + s + c + s + d;
  }
  //――――――――――――――――――――――――――――――――→
  var arr1 = [1, 2, 3, 4];
  var obj1 = {prop1: 1, prop2: 2, prop3: 3, prop4: 4};
  var fva1 = new Fun2();
  fva1.teste = 'teste!';
  var obj2 = {teste: 'Outro teste!'};
  var obj3 = {teste: 'mais um teste!'};
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1());
  console.log(fun1.name);
  console.log('―――――――――――――――→');
  // * .length
  // ? aponta a quantidade de parâmetro que uma função recebe!
  console.log(fun1.length);
  console.log('―――――――――――――――→');
  console.log(arr1.toString());
  console.log(obj1.toString());
  console.log(fun1.toString());
  console.log('―――――――――――――――→');
  // * .call()
  console.log(fun1.call());
  console.log(fun1());
  console.log('―――――――――――――――→');
  // * .call(this)
  console.log(fva1);                // # Fun2 {teste: "teste!"}
  // # Outro teste! undefined undefined undefined undefined :
  console.log(Fun2.call(obj2));
  // # mais um teste! undefined undefined undefined undefined :
  console.log(Fun2.call(obj3));
  // # mais um teste! a b c d :
  console.log(Fun2.call(obj3, 'a', 'b', 'c', 'd'));
  // # mais um teste! 1 2 undefined undefined :
  console.log(Fun2.call(obj3, 1, 2));
  console.log('―――――――――――――――→');
  // * .apply()
  // ? da mesma forma que o call
  // ? só que a diferença é que posso usar um array!
  // ? como parâmetros para a função!
  console.log('―――――――――――――――→');
  console.log(Fun2.apply(obj3, arr1));  // # mais um teste! 1 2 3 4
  // # mais um teste! um dois três [object Object]
  console.log(Fun2.apply(obj3, ['um', 'dois', 'três', obj1]));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
