(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Escopo de variáveis
  // ? local: dentro do bloco que declaro a variável
  // ? global: dentro de todo o contexto
  //――――――――――――――――――――――――――――――――→
  // * Global
  var vGlobal1 = 1;
  function funVG1() {
    return vGlobal1;
  }
  //――――――――――――――――→
  // * Local
  function funVL1() {
    var vLocal1 = true;
    return vLocal1;
  }
  //――――――――――――――――→
  function funVG2() {
    // ? com o uso de 'use strict' não é permitido isso
    // vGlobal2 = 'Mudando o valor da global';
    // return vGlobal2;
  }
  function funVL2(a, b, c) {
    return a;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(vGlobal1);
  console.log(funVG1());
  console.log(funVL1());
  console.log(funVG2());
  // ? ela existe aqui porque foi declarada dentro da função
  // ? sem o uso da palavra chave < var >
  // ! isso pode dar muitos problemas
  // ! o garbage colector não reconhece ela!
  // ! então use sempre a palavra chave < var >
  // console.log(vGlobal2);
  // ? argumentos de função são Locais!
  // ?  fica dentro do escopo da função
  console.log(funVL2(16));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
