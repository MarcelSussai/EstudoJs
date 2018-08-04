(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Funções
  // ? Funções são blocos de construção fundamentais em JavaScript
  // ? Uma função é um procedimento de JavaScript
  // ? um conjunto de instruções que executa uma tarefa ou calcula um valor
  // ? Para usar uma função, você deve defini-la em algum lugar no escopo
  // ? do qual você quiser chamá-la.
  function funExemplo1(numero) {
    return numero * numero;
  }
  //――――――――――――――――→
  function funExemplo2(objeto) {
    objeto.feitoPor = 'Outro';
  }
  //――――――――――――――――――――――――――――――――→
  var objTeste1 = {feitoPor: 'Original', prop2: 'Valor 2', prop3: 64};
  var x, y;
  x = objTeste1.feitoPor;
  funExemplo2(objTeste1);
  y = objTeste1.feitoPor;
  //――――――――――――――――――――――――――――――――→
  // * Expressões e modos declarativos de funções
  var quadrado = function(num) {return num * num};
  var q = quadrado(4);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(funExemplo1(16));               // # 256
  console.log(x);                             // # Original
  console.log(y);                             // # Outro
  console.log(q);                             // # 16
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ! Usar essa notação ao invés de funções anônimas
  // ! pois facilita o debug pelo nome
  var fun1 = function fun1() {
    return console.log('Notação correta da função!');
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  fun1();
  console.log(fun1.name);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
