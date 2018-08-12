(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var sum = function calculateSum(a, b) {
    return a + b;
  };
  var v1 = 16;
  var v2 = 32;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('A soma de', v1, 'e', v2, 'é igual a', sum(v1, v2));
  console.log('O nome da função que faz a soma é:', sum.name);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function showName() {
    return 'Marcel Sussai';
  }
  //――――――――――――――――――――――――――――――――→
  var varShowName = showName;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('A função', varShowName.name, 'retorna:', varShowName());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function calculadora(o) {
    return function operandos(a, b) {
      var res;
      switch(o) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/': res = a / b; break;
        case '%': res = a % b; break;
        default: res = 'E'; break;
      }
      return res === 'E' ? 'INVÁLIDO' : 'Resultado da operação: ' + a + ' ' + o + ' ' + b + ' = ' + res;
    }
  }
  //――――――――――――――――――――――――――――――――→
  var soma = calculadora('+');
  var subt = calculadora('-');
  var mult = calculadora('*');
  var divi = calculadora('/');
  var modu = calculadora('%');
  var inva = calculadora('u');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(soma(20, 12));
  console.log(subt(16, 56));
  console.log(mult(4, 32));
  console.log(divi(80, 16));
  console.log(modu(5, 17));
  console.log(inva(30, 30));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
