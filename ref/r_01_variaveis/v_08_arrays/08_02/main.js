(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Arrays
  var arr1 = [];
  arr1.push('item 01');
  arr1.push('item 02');
  arr1.push('item 03');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * join()
  // ? ele junta, uni numa string os itens do array!
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1.join());           // # 'item 01,item 02,item 03'
  console.log(arr1.join(' '));        // # 'item 01 item 02 item 03'
  console.log(arr1.join(', '));       // # 'item 01, item 02, item 03'
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * reverse()
  // ? Exatamente o que o nome diz, ele inverte os itens do array!
  // ! modifica o array original!
  console.log('________________________________');
  console.log(arr1.reverse());
  console.log(arr1);
  console.log(arr1.reverse());
  console.log(arr1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * sort()
  // ? ordenar por ordem alfabética
  // ! modifica o array original!
  arr1 = ['b', 'g', 'p', 'a', 'c', 'e', 'u', 'm', 'f', 'n',
          'h', 'l', 'i', 'j', 'o', 'k', 'd', 'q', 's', 'r', 
          'v', 'z', 't', 'x', 'y', 'w'];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1);
  console.log(arr1.join(' - '));
  console.log(arr1.sort().join(' - '));
  console.log(arr1.sort());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
