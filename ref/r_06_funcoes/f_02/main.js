(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Programação funcional
  // ? com objetos de primeira classe: Funções!
  //――――――――――――――――――――――――――――――――→
  function pessoa() {
    var info = {
      nome: 'Marcel',
      sobrenome: 'Sussai'
    };
    return info;
  }
  //――――――――――――――――→
  function adder1(x) {
    return function(y) {
      return x + y;
    }
  };
  //――――――――――――――――→
  function adder2(x) {
    function addOther(y) {
      return x + y;
    }
    return addOther;
  }
  //――――――――――――――――――――――――――――――――→
  var add1 = adder1(2);
  var add2 = adder2(2);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(pessoa().nome);                   // # Marcel
  console.log(pessoa().sobreNome);              // # undefined
  console.log('―――――――――――――――→');
  console.log(add1(3));                         // # 5
  console.log(adder1(2)(8));                    // # 10
  console.log('―――――――――――――――→');
  console.log(add2(2));                         // # 4
  console.log(adder2(4)(8));                    // # 12
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Passando objetos por parâmetro
  //――――――――――――――――――――――――――――――――→
  var obj1 = {
    cor: 'preto'
  };
  //――――――――――――――――――――――――――――――――→
  function getObj1(o) {
    return o.cor;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(getObj1(obj1));                   // # preto
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Passando funções por parâmetro
  //――――――――――――――――――――――――――――――――→
  function fun1(f) {
    return f();
  }
  //――――――――――――――――→
  function fun2() {
    return 'Programação Funcional!'
  }
  //――――――――――――――――→
  function handleFun1() {
    return 'Retorno Psicodélico!';
  }
  //――――――――――――――――――――――――――――――――→
  var txt = fun1(handleFun1);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1(fun2));                      // # Programação Funcional!
  console.log(txt);                             // # Retorno Psicodélico!
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
