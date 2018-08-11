(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * map()
  // ? parecido com o forEach()
  // ? diferente do forEach, map retorna um array!
  // ? percorrendo tudo e podendo retornar valores!
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  var arr2 = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito'];
  //――――――――――――――――――――――――――――――――→
  function mapaArr(ite, ind, arr) {
    console.log(ite, ind);
    console.log(arr);
    console.log('―――――――――――――――→');
    // ? retornando um novo array com os itens
    return ite + 1;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  // # (16) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] :
  console.log(arr1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  var m1 = arr1.map(mapaArr);
  console.log(m1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  var m2 = arr2.map(mapaArr);
  console.log(m2);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  function obtemM(ite, ind) {
    return {indice: ind, item: ite};
  }
  //――――――――――――――――――――――――――――――――→
  var m3 = arr1.map(obtemM);
  var m4 = arr2.map(obtemM);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(m3);
  console.log(m4);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Mapeando um array de números para uma matriz de raízes quadradas!
  var arr3 = [1, 4, 9];
  var rts1 = arr3.map(Math.sqrt);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr3);
  console.log(rts1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Usando map para reformatar objetos de um array!
  var arrObj1 = [ {key: 1, value: 8}, {key: 2, value: 16}, {key: 3, value: 32}];
  var refcArrObj1 = arrObj1.map(function(o) {
    var rO = {};
    rO[o.key] = o.value;
    return rO;
  });
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(refcArrObj1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * mapeando um array de números usando uma função que contem um argumento
  function dobrando(n) {
    return n * 2;
  }
  var dobros = arr3.map(dobrando);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(dobros);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Usando map() genericamente
  // ? obtendo de uma string um array de bytes em ASCII
  // ? ASCII representa os valores de caractere!
  function codAscii(x) { 
    return x.charCodeAt(0);
  }
  //――――――――――――――――――――――――――――――――→
  var m5 = Array.prototype.map;
  var a = m5.call('Olá Mundo!', codAscii);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(a);     // # (10) [79, 108, 225, 32, 77, 117, 110, 100, 111, 33]
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
