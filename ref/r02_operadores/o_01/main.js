(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Operadores

  // * Adição ou Concatenação +
  /*
  ? Usado para somar dois números ou juntar duas strings!
  */
  console.log('________________________________');
  console.log(2 + 3); // # 5
  console.log(2 + '3'); // # 23
  console.log('Marcel ' + 'Sussai'); // # Marcel Sussai
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Subtrair, Multiplicar e Dividir - * /
  /*
  ? Fazem exatamente o que esperamos que façam na matemática básica!
  ? são eles: - * /
  */
  console.log('________________________________');
  console.log(9 - 3); // # 6
  console.log(4 * 2); // # 8
  console.log(16 / 2); // # 8
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Operador de Atribuição =
  /*
  ? Atribui um valor a uma variável
  */
  var v1 = 'TESTE';
  //――――――――――――――――――――――――――――――――→
  // // * Operador de Igualdade Ampla ==
  // /*
  // ? Igualdade ampla compara dois valores para a igualdade,
  // ? após converter ambos os valores para um tipo comum.
  // ? Após as conversões (um ou ambos os lados podem sofrer conversões),
  // ? a comparação de igualdade final é realizada exatamente como ===
  // ? Igualdade ampla é simétrica:
  // ? A == B sempre tem semântica idêntica à B == A para quaisquer valores de A e B.
  // */
  //――――――――――――――――――――――――――――――――→
  // * Operador de identificação: Igualdade estrita ===
  /*
  ? Faz um teste para ver se dois valores são iguais um ao outro, retornando um boolean
  */
  var v2 = 2;
  console.log('________________________________');
  console.log(v1 === v2); // # false
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Negação, não igual! ! !==
  /*
  ? Retorna o valor lógico oposto do sinal, transforma um true em false, etc
  ? Quando usado junto do operador de identificação, testa se são diferentes!
  */
  console.log('________________________________');
  console.log(v2 !== 8); // # true
  console.log(!false); // # true
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Operador de incremento e decremento var++ ++var var-- --var
  /*
  ? Incrementa ou decrementa o número da variável em questão
  ? ++var --var:
  ? realiza a ação e depois dá a variável
  ? var++ var--
  ? dá a variável e depois realiza a ação!
  */
  var num = 10;
  console.log('________________________________');
  console.log(++num); // # 11
  console.log(num++); // # 11
  console.log(num--); // # 12
  console.log(--num); // # 10
  console.log(num);   // # 10
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Operador Módulo %
  // ? resto da divisão
  // ? 3 / 3 = 1
  // ? 3 % 3 = 0
  // ? 5 % 2 = 1
  console.log('________________________________');
  console.log(3 / 3); // # 1
  console.log(3 % 3); // # 0
  console.log(4 / 2); // # 2
  console.log(5 / 2); // # 2.5
  console.log(5 % 2); // # 1
  // ? quantos sobram ...
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Imprimindo numeros pares
  console.log('________________________________');
  var num1 = 0;
  while(num1 <= 20) {
    num1 % 2 === 0 ? console.log(num1) : '' ;
    num1++;
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Operador Vírgula
  // ? Declaração de 3 variáveis com uma palavra chave var
  var a, b = 2, c;
  // ! é preferível declarar um var para cada variável
  //――――――――――――――――――――――――――――――――→
  function func1() {
    // ! as variáveis b e c são locais, acessadas apenas dento da função
    var a = 1, b = 2, c = 3; 
    return [a, b, c];
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(b); // # 2
  console.log(a); // # undefined
  console.log(c); // # undefined
  console.log(func1()); // # (3) [1, 2, 3]
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? Operador Virgula no retorno de uma função ...
  var x = 0; // ? para teste de conflito
  function func2() {
    var x = 2;
    return (x += 1, x);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(func2()); // # 3
  console.log(x); // # 0
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  function func3() {
    var x = 0;
    return ++x;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(func3()); // # 1
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
