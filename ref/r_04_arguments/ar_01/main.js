(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Arguments
  // ? age como array, parece com array, mas não é,
  // ? e aparece implicitamente dentro de funções!
  // ! nunca nomeie os argumentos de função como arguments!
  // ! nem como palavras chaves reservadas.
  //――――――――――――――――――――――――――――――――→
  function fun1(arg1, arg2) {
    return arguments;
  }
  //――――――――――――――――→
  function fun2() {
    console.log('Tamanho:', arguments.length);
    return arguments;
  }
  //――――――――――――――――→
  // ? uma função que concatena várias strings:
  function fun3(separador) {
    var args = Array.prototype.slice.call(arguments, 1);
    return args.join(separador);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1(1, 'teste'));
  console.log(fun2(2, 'teste', 'outro teste'));
  console.log(fun2(3, 'teste', 'outro teste', 'mais um teste'));
  console.log('―――――――――――――――→');
  console.log(fun3(', ', 'vermelho', 'amarelo', 'preto', 'azul'));
  console.log(fun3(' - ', 'valor 1', 'valor 2', 'valor 3'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
