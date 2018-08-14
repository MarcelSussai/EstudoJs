(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var five = Number('5');
  var concat = String(10) + 10;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(five, 'é número?', typeof five === 'number');
  console.log(
    '"' + concat + '"',
    'é uma string?',
    typeof concat === 'string'
  );
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var ope = {
    '+': function(n1, n2) {return n1 + n2;},
    '-': function(n1, n2) {return n1 - n2;},
    '*': function(n1, n2) {return n1 * n2;},
    '/': function(n1, n2) {return n1 / n2;},
    '%': function(n1, n2) {return n1 % n2;},
  }
  var n1 = 0, n2 = 0;
  var ops, sum, sub, div, mul, mod, err;
  //――――――――――――――――――――――――――――――――→
  function isOpeValid(o) {
    return !!ope[o];
  }
  //――――――――――――――――→
  function calculator(o) {
    if(!isOpeValid(o)) { return false;}
    return function(a, b) {
      if(typeof a !== 'number' && typeof b !== 'number') {
        return false;
      }
      return ope[o](a, b);
    }
  }
  //――――――――――――――――→
  function showOpMsg(o, x, y) {
    return 'A operação ' + x + ' ' + o + ' ' + y + ' = ';
  }
  //――――――――――――――――→
  function showErrMsg(o) {
    return 'Operação ' + o + ' não permitida!';
  }
  //――――――――――――――――→
  function calcular(n1, n2, ops, fun) {
    if(fun) {
      console.log(showOpMsg(ops, n1, n2), fun(n1, n2));
    } else {
      console.log(showErrMsg(ops));
    }
  }
  //――――――――――――――――――――――――――――――――→
  n1 = 40;
  n2 = 20;
  console.log('________________________________');
  ops = '+';
  sum = calculator(ops);
  calcular(n1, n2, ops, sum);
  //――――――――――――――――→
  ops = '-';
  sub = calculator(ops);
  calcular(n1, n2, ops, sub);
  //――――――――――――――――→
  ops = '*';
  mul = calculator(ops);
  calcular(n1, n2, ops, mul)
  //――――――――――――――――→
  ops = '/';
  div = calculator(ops);
  calcular(n1, n2, ops, div)
  //――――――――――――――――→
  ops = '%';
  mod = calculator(ops);
  calcular(n1, n2, ops, mod)
  //――――――――――――――――→
  ops = 'k';
  err = calculator(ops);
  calcular(n1, n2, ops, err)
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
