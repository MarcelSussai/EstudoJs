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
  //――――――――――――――――――――――――――――――――→
  // * Localizar valores em um array
  var arr1 = [1, 2, 3, 4, 5, 6, 8];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1.indexOf(1));                   // # 0
  console.log(arr1.indexOf(9));                   // # -1
  console.log(arr1.indexOf(3, 2));                // # 2
  console.log(arr1.indexOf(1, -1));               // # -1
  console.log(arr1.indexOf(1, -7));               // # 0
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Encontrar todas as ocorrências de um elemento
  var indices =[];
  var arr2 = ['a', 'b', 'c', 'a', 'd', 'a', 'e'];
  var elemento = 'a';
  var indX = arr2.indexOf(elemento);
  //――――――――――――――――――――――――――――――――→
  while (indX != -1) {
    indices.push(indX);
    indX = arr2.indexOf(elemento, indX + 1);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(indices);                           // # [0, 3, 5]
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
