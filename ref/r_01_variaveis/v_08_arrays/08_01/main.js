(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Arrays
  // ? Arrays em javascript são objetos disfarçados
  // ? São uma coleção de valores:
  var arr01 = ['Sussai', null, function() {}, {cor: 'preta'}, true, 16];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr01);
  console.log(arr01[1]);
  console.log(arr01[3]);
  console.log(arr01[0]);
  console.log(arr01[5]);
  // ? Obtendo o tamanho do array:
  console.log(arr01.length);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  var qtd01 = arr01.length;
  while(qtd01 > 0) {
    console.log(arr01[--qtd01]);
    qtd01 === 3 ? console.log(arr01[qtd01].cor) : '';
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  arr01.forEach(function (ite, ind, arr) {
    console.log(ite, ind);
  });
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Adicionando item ao final do array:
  // ? push()
  var arr02 = [1, 2, 3, 'Marcel', {cor: 'azul'}];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr02.length);
  console.log(arr02[4].cor);
  arr02.push({prop: 'value/valor'});
  console.log(arr02[5].prop);
  console.log(arr02.length);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var arr03 = [];
  arr03[0] = 'zero';
  arr03[1] = 'um';
  arr03[2] = 'dois';
  arr03[4] = 'quatro';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr03);
  console.log(arr03[3]);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  arr03.push('cinco');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr03);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? remove o ultimo e coloca na variavel
  var ultimo = arr03.pop();
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arr03);
  console.log('Removeu:', ultimo);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

})(document);
