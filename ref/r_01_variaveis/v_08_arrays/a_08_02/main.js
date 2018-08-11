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
  //――――――――――――――――――――――――――――――――→
  // * toString()
  // ? semelhante ao join só que na diferença que o
  // ? join() se pode passar parâmetros que separam os itens do array!
  var arr2 = [1, 2, 3];
  var obj1 = {a: 1, b: 2, c: 3};
  console.log('________________________________');
  console.log(arr2);
  console.log(arr2.length);
  console.log(Object.toString());
  console.log(obj1.toString());
  console.log(arr2.join(' - '));
  console.log(arr2.toString());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Concat!
  console.log('________________________________');
  // ? repare que não modifica o original:
  console.log(arr2);
  console.log(arr2.concat(4));
  console.log(arr2.concat(5));
  console.log(arr2);
  // ? aqui adiciona porque usou o push():
  console.log(arr2.push(4));
  console.log(arr2);
  // ? concatenando arrays
  console.log(arr2.concat([5, 6, 7], [8, 9, 10, 11], 12));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * unshift()
  // ? adiciona um item no inicio do array!
  console.log('________________________________');
  console.log(arr2.unshift('0'));
  console.log(arr2);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * shift
  // ? remove o primeiro item do array!
  console.log('________________________________');
  arr2.push(5);
  console.log(arr2);
  arr2.unshift(-1);
  console.log(arr2);
  console.log(arr2.shift());
  console.log(arr2);
  console.log(arr2.shift());
  console.log(arr2);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
