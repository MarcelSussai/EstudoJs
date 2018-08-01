(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * indexOf(searchValue, fromIndex)
  var str1 = 'Meu nome completo é Marcel Sussai de Oliveira';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Sussai começa no indice: ', str1.indexOf('Sussai'));
  console.log('Resultado por um valor inexistente: ', str1.indexOf('inexistente'));
  console.log('Outras posições: ',
    str1.indexOf('nome'),
    str1.indexOf('é'),
    str1.indexOf('a')
  );
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str1.indexOf('Marcel', 0));         // # 20
  console.log(str1.indexOf('Marcel', 20));        // # 20
  console.log(str1.indexOf('', 32));              // # 32
  console.log(str1.indexOf('', 10));              // # 10
  console.log(str1.indexOf('', 9));               // # 9
  // ? CaseSensitive
  console.log(str1.indexOf('marcel'));            // # -1
  // ? verificando ocorrências!
  console.log(str1.indexOf('Marcel') !== -1);     // # true
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str1.indexOf('s'));                 // # 29
  console.log(str1.lastIndexOf('s'));             // # 30
  console.log(str1.indexOf('Sussai'));            // # 27
  console.log(str1.lastIndexOf('Sussai'));        // # 27
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
