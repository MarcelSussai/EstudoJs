(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Variáveis
  /*
  # Declarando variáveis com var
  ? Define uma variável global,
  ? cujo escopo passa aos blocos subjacentes
  ? ou no escopo inteiro de uma função!
  ! Nomes de variáveis em camelCase de preferência!
  */
  //――――――――――――――――――――――――――――――――→
  // * Tipos de variáveis!
  var a = {};
  var b = "init";
  var c = "Hi" + " " + "Joe";
  var d = 1 + 2 + "3";
  var e = [2,3,5,8];
  var f = false;
  var g = /()/;
  var h = function(valor){return valor;};
  const PI = 3.14;
  var a = 1, b = 2, c = a + b;
  let z = 'zzz';
  var k;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
  console.log(h);
  console.log(h('texto'));
  console.log(PI);
  console.log(z);
  console.log(k);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * String
  /*
  ? Um texto. Para mostrar que a variável
  ? é um texto, você deve envolvê-la em aspas
  ? simples ou duplas, mas dê preferência a simples!
  */
  var nome = 'Marcel'; // ? melhor jeito!
  var nomeCompleto = "Marcel Sussai de Oliveira";
  console.log('________________________________');
  console.log(nome, '-', nomeCompleto);
  //――――――――――――――――――――――――――――――――→
  // * Number
  /*
  ? Um número. Números não tem aspas ao redor deles.
  */
  var idade = 32;
  console.log(idade);
  //――――――――――――――――――――――――――――――――→
  // * Boolean
  /*
  ? Um valor verdadeiro ou falso!
  ? as palavras true e false são especiais em js
  ? e portanto não precisam de aspas!
  */
  var temFilhos = true;
  var temMaisDeQuarentaAnos = false;
  console.log(temFilhos);
  console.log(temMaisDeQuarentaAnos);
  //――――――――――――――――――――――――――――――――→
  // * Array
  /*
  ? Uma estrutura que permite armazenar vários valores
  ? numa mesma referência, num mesmo nome e variável!
  */
  var arr1 = [1, 'Valor dois', 3, false];
  console.log(arr1);
  console.log(arr1[1]);
  //――――――――――――――――――――――――――――――――→
  // * Object
  /*
  ? Um objeto é basicamente qualquer coisa
  ? tudo em javascript é objeto!
  ? e pode ser armazenado em uma variável!
  */
  var div = doc.querySelector('div');
  var obj = {
    valor1: 'Texto do valor 1',
    valor2: 256,
    valor3: [1, 2, 3, 4]
  };
  console.log(div);
  console.log(obj);
  //――――――――――――――――――――――――――――――――→
  // * null
  /*
  ? Uma palavra-chave que indica valor nulo.
  ? Devido JavaScript ser case-sensitive, null não é
  ? o mesmo que Null, NULL, ou ainda outra variação.
  */
  var nulo = null;
  console.log(nulo);
  //――――――――――――――――――――――――――――――――→
  // * undefined
  /*
  ? Uma propriedade superior cujo valor é indefinido.
  */
  var indefinido;
  console.log(indefinido);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Declarando variáveis sem valores, não iniciadas!
  var v1;
  var v2 = 'Valor';
  // # ou assim:
  var v3, v4;
  v4 = 2018;
  v3 = 10;
  //――――――――――――――――――――――――――――――――→
  // * Variável Implicita!
  // //variavelImplicita = 'Javascript';
  //――――――――――――――――――――――――――――――――→
  var text1 = v2 + ' ' + v4 + v3;
  var text2 = v4 + v3;
  var text3 = v2 + ' ' + (v4 + v3);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(v1);
  console.log(' <br> ' + v4 + ' <br> ');
  console.log(v2, ' Teste <br> ');
  console.log(v2, ' ', v4 + ' teste <br> ');
  console.log(text1 + ' <br> ' + text2 + ' <br> ' + text3);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
