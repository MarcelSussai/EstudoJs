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
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
