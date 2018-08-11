(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Arrays
  // * slice()
  // ? ele pega partes do array, cortando-o como especificado!
  var arr1 = [1, 2, 3, 4, 5];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1);                    // # (5) [1, 2, 3, 4, 5]
  console.log(arr1.slice(1));           // # (4) [2, 3, 4, 5]
  console.log(arr1.slice(0));           // # (5) [1, 2, 3, 4, 5]
  console.log(arr1.slice());            // # (5) [1, 2, 3, 4, 5]
  console.log(arr1.slice(0, 2));        // # (2) [1, 2]
  console.log(arr1.slice(1, 4));        // # (3) [2, 3, 4]
  console.log(arr1.slice(-2));          // # (2) [4, 5]
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * splice()
  // ! modifica o array original!
  // ? pode adicionar e remover itens do array!
  // ? ele também divide o array e retorna o item removido
  console.log('________________________________');
  console.log(arr1);                                // # (5) [1, 2, 3, 4, 5]
  console.log(arr1.splice(3));                      // # (2) [4, 5]
  console.log(arr1);                                // # (3) [1, 2, 3]
  console.log(arr1.push(4, 5, 6, 7, 8));            // # 8
  console.log(arr1);                                // # (8) [1, 2, 3, 4, 5, 6, 7, 8]
  console.log(arr1.splice(1, 3));                   // # (3) [2, 3, 4]
  console.log(arr1);                                // # (5) [1, 5, 6, 7, 8]
  // ? se passar mais parametros, adicionará a partir daquele indice!
  console.log(arr1.splice(1, 0, 2, 3, 4));          // # []
  console.log(arr1);                                // # (8) [1, 2, 3, 4, 5, 6, 7, 8]
  console.log(arr1.splice(1, 0, 'a', 'b', 'c'));    // # []
  console.log(arr1);                                // # (11) [1, "a", "b", "c", 2, 3, 4, 5, 6, 7, 8]
  console.log(arr1.splice(1, 3));                   // # (3) ["a", "b", "c"]
  console.log(arr1);                                // # (8) [1, 2, 3, 4, 5, 6, 7, 8]
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var itens = ['item 1', 'item 2', 'item 3', 'item 4'];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(itens);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var p = 1;
  var n = 2;
  // ? isso é como se faz para remover itens
  // ? (n) define o número de itens a se remover
  // ? a partir da posição (p) em direção ao fim do array
  // ! altera o array original!
  var itensRemovidos = itens.splice(p, n);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(itens);
  console.log(itensRemovidos);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Copiar um array
  // ? é assim que se copia um array
  var copiar = itens.slice();
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(copiar);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * forEach
  var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  var sum = 0;
  //――――――――――――――――――――――――――――――――→
  // ? um pouco mais rápido que o for
  console.log('________________________________');
  arr2.forEach(function(ite, ind, arr) {
    console.log(ite, ind);
    console.log(arr);
    console.log('―――――――――――――――→');
    sum += ite;
  });
  console.log(sum);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Imprimindo os conteúdos de uma ordem
  function logArrEl(ele, ind, arr) {
    console.log('a[' + ind + '] = ' + ele);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  [2, 8, 4].forEach(logArrEl);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * função para cópia de um objeto
  function copy(o) {
    var copy = Object.create(Object.getPrototypeOf(o));
    var propNames = Object.getOwnPropertyNames(o);

    propNames.forEach(function(name) {
      var desc = Object.getOwnPropertyDescriptor(o, name);
      Object.defineProperty(copy, name, desc);
    });
    return copy;
  }
  //――――――――――――――――――――――――――――――――→
  var o1 = {a: 1, b: 2};
  // ? o2 se torna uma cópia de o1:
  var o2 = copy(o1);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Objeto 1:', o1);
  console.log('Objeto 2:', o2);
  console.log('―――――――――――――――→');
  //――――――――――――――――→
  o2.a = 0;
  o2.b = 1;
  //――――――――――――――――→
  console.log('Objeto 1:', o1);
  console.log('Objeto 2:', o2);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
