(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * filter()
  // ? ele filtra os itens do array pela condição determinada no return
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
  //――――――――――――――――――――――――――――――――→
  function handleFil1(ite, ind, arr) {
    console.log(ite, ind, arr);
    return ite > 2;
  }
  //――――――――――――――――→
  function handleMap1(item) {
    return item + 10;
  }
  //――――――――――――――――→
  function handleFil2(item) {
    return item > 14;
  }
  //――――――――――――――――→
  function handleFil3(word) {
    return word.length > 6;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  var fil1 = arr1.filter(handleFil1);
  console.log(fil1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? encadeando métodos do array!
  var map1 = arr1.map(handleMap1).filter(handleFil2);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr1);
  console.log(map1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var arrWords = ['palavr 1', 'palavra 2', 'pal 3', 'palra 4', 'palavra 5', 'pa 6'];
  //――――――――――――――――→
  const result = arrWords.filter(handleFil3);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(result);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * indexOf()
  // ?   0  1  2  3  4
  // ? retorna o índice do item informado por parâmetro!
  // ? O segundo parametro especifica a partir de qual indice começar a procurar!
  var arr2 = [1, 2, 3, 4, 5];
  var arr3 = ['M', 'a', 'r', 'c', 'e', 'l'];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr2.indexOf(3));             // # 2
  console.log(arr3.indexOf('e'));           // # 4
  console.log(arr3.indexOf('f'));           // # -1
  console.log(arr3.indexOf('0'));           // # -1
  console.log(arr3.indexOf('c'));           // # 3
  console.log(arr3.indexOf('c', 4));        // # -1
  console.log(arr3.indexOf('c', 4) > -1);   // # false
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * lastIndexOf
  // ? começa a procurar no final do array!
  var ind = arr3.lastIndexOf('e');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('\'' + arr3[ind] + '\'', 'no índice:', ind);    // # 'e' no índice: 4
  console.log(arr3.lastIndexOf('c'));                         // # 3
  console.log(arr3.lastIndexOf('a'));                         // # 1
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Array.isArray()
  // ? verifica se realmente é um array!
  console.log('________________________________');
  console.log(Array.isArray(arr3));               // # true
  console.log(Array.isArray({}));                 // # false
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
