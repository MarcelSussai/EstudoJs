(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var arr1 = [1, 2, 3, 4];
  var obj1 = {
    p1: 'Texto propriedade 1',
    p2: 'Texto propriedade 2',
    p3: true
  };
  //――――――――――――――――――――――――――――――――→
  function fun1(p) {
    return p;
  }
  //――――――――――――――――→
  function fun2(p) {
    return p[1];
  }
  //――――――――――――――――→
  function fun3(p) {
    return p.p3;
  }
  //――――――――――――――――→
  function fun4() {
    return [1, 2, 3];
  }
  //――――――――――――――――→
  function fun5() {
    return {
      prop1: 1,
      prop2: 'dois',
      prop3: function() {
        return 'Dentro de uma função anônimma, em uma propriedade de objeto retornado da função'
      }
    }
  }
  //――――――――――――――――→
  var v1 = fun5();
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1());
  console.log(fun1(arr1));
  console.log(fun1(['txt1', 'txt2', 'txt3', 256, true]));
  console.log(fun1(obj1));
  console.log(fun1(obj1.p3));
  console.log(fun1(obj1).p1);
  console.log('―――――――――――――――→');
  console.log(fun2(arr1));
  console.log(fun2([1, 3, 5, 7, 8]));
  console.log('―――――――――――――――→');
  console.log(fun3(obj1));
  console.log('―――――――――――――――→');
  console.log(fun4());
  console.log(fun4()[0]);
  console.log(fun4()[3]);
  console.log(fun4()[2]);
  console.log('―――――――――――――――→');
  console.log(fun5());
  console.log(fun5().prop1);
  console.log(v1);
  console.log(v1.prop2);
  console.log(v1.prop3);
  console.log(v1.prop3());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
