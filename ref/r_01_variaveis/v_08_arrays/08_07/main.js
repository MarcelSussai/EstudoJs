(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * reduce()
  /*
    ? retorna uam redução de todos os itens do array em um unico item!
    ? reduce passará sempre por todos os itens do array!
    ? Diferente do join que não soma
    ? e junta tudo numa variavel,
    ? o reduce efetua as operações ou concatena!
    1º - 0 + 1 = 1
    2º - 1 + 2 = 3
    3º - 3 + 3 = 6
    4º - 6 + 4 = 10
    5º - 10 + 5 = 15
    // debugger;
  */
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = ['M', 'a', 'r', 'c', 'e', 'l'];
  var arr3 = [[0, 1], [2, 3], [4, 5]];
  var arr4 = [{
    prop1: 'Valor 1_1',
    prop2: ['Valor 1_2.1', 'Valor 1_2.2'],
    prop3: 31
  }, {
    prop1: 'Valor 2_1',
    prop2: ['Valor 2_2.1', 'Valor 2_2.2'],
    prop3: 32
  }, {
    prop1: 'Valor 3_1',
    prop2: ['Valor 3_2.1', 'Valor 3_2.2'],
    prop3: 33
  }];
  var arr5 = [1, 2, 1, 2, 3, 3, 4, 5, 4, 5, 6, 6, 6, 7, 4, 8];
  //――――――――――――――――――――――――――――――――→
  function handleReduce1(acu, atu, ind, arr) {
    return  'Acumulado:' + acu +
            '\nAtual: ' + atu +
            '\nÍndice: ' + ind +
            '\nArray: ' + arr +
            '\n―――――――――――――――→\n';
  }
  //――――――――――――――――→
  function handleReduce2(acu, atu) {
    return acu + atu;
  }
  //――――――――――――――――→
  function handleReduce3(acu, atu) {
    return acu.concat(atu);
  }
  //――――――――――――――――→
  function handleReduce4(acu, atu) {
    return [...acu, ...atu.prop2];
  }
  //――――――――――――――――→
  function handleReduce5(acu, atu) {
    if (acu.length === 0 || acu[acu.length - 1] !== atu) {
      acu.push(atu);
    }
    return acu;
  }
  //――――――――――――――――――――――――――――――――→
  var red1 = arr1.reduce(handleReduce1);
  var red2 = arr1.reduce(handleReduce2);
  var red3 = arr2.reduce(handleReduce2);
  var red4 = arr3.reduce(handleReduce3);
  var red5 = arr4.reduce(handleReduce4, ['Valor 1_2.3']);
  var red6 = arr5.sort().reduce(handleReduce5, []);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(red1);
  console.log(red2);
  console.log(red3);
  console.log(red4);
  console.log(red5);
  console.log(red6);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * reduceRight()
  // ? quase a mesma coisa que o reduce, só que dá direita para a esquerda!
  // ? ao contrário do reduce!
  var redRig1 = arr1.reduceRight(handleReduce2);
  var redRig2 = arr2.reduceRight(handleReduce2);
  var redRig3 = arr3.reduceRight(handleReduce3);
  var redRig4 = arr4.reduceRight(handleReduce4, ['Valor 1_2.3']);
  var redRig5 = arr5.sort().reduceRight(handleReduce5, []);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(redRig1);
  console.log(redRig2);
  console.log(redRig3);
  console.log(redRig4);
  console.log(redRig5);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
