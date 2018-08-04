(function(doc) {
  // 'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * this
  function fun1() {
    // ? retorna o objeto window que é global no browser'
    return this;
  }
  function Fun2() {
    // ! this aqui é o window
    this.prop1 = 'valor prop1';
    this.prop2 = 'valor prop2';
  }
  //――――――――――――――――――――――――――――――――→
  // ! O this nunca é o mesmo
  // ! depende da onde ele está e da forma que é chamado!
  var obj1 = {
    propiedade1: 1,
    init: function init() {
      return this;
    }
  }
  var obj2 = new Object();
  var obj3 = new Fun2();
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1());
  console.log(fun1() === window);
  console.log('obj1 -', obj1.init(), obj1.init() === obj1);
  console.log('obj2 -', obj2, Object());
  console.log('obj3 -', obj3);
  console.log(Fun2());
  // ! sem o uso de 'use strict' isto funciona:
  console.log(prop1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
