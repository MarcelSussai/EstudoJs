(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * every()
  // ? faz testes nos itens do array!
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  // ? verifica se todos os item do array são menos que 5 e retorna true ou false!
  var ever = arr1.every(function(ite) {
    console.log(ite);
    return ite < 5;
  });
  console.log('―――――――――――――――→');
  console.log(ever);                                        // # false
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * testando  otamanho de todos os elementos do array
  function maiorQueDez(ele, ind, arr) {
    return ele >= 10;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1.every(maiorQueDez));                    // # false
  console.log([12, 4, 8, 128, 40].every(maiorQueDez));     // # false
  console.log([12, 32, 80, 128, 40].every(maiorQueDez));   // # true
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * some()
  // ? faz basicamente o que o every faz, mas para apenas alguns elementos!
  // ? se pelo menos 1 elemento do array for true, ele retorna true!
  // ? precisa ser true, pelo menos um deles! para ser true, diferente do every!
  console.log('________________________________');
  var paresSome = arr1.some(function(ite) {
    console.log(ite);
    return ite % 2 === 0;
  });
  console.log('―――――――――――――――→');
  console.log(paresSome);                               // # true
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1.some(maiorQueDez));                   // # false
  console.log([12, 4, 8, 128, 40].some(maiorQueDez));    // # true
  console.log([12, 32, 80, 128, 40].some(maiorQueDez));  // # true
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
