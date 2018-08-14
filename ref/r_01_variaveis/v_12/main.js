(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var nObj = [];
  for(var i = 1; i <=10; i++) {
    nObj.push({num: i})
  }
  //――――――――――――――――――――――――――――――――→
  var justN = nObj.map(function(ite) {
    return ite.num;
  });
  //――――――――――――――――――――――――――――――――→
  var justMod2ou3 = justN.filter(function(ite) {
    return (ite % 2) === 0 || (ite % 3) === 0;
  });
  //――――――――――――――――――――――――――――――――→
  var ope1 = justMod2ou3.reduce(function(acu, atu) {
    return (acu + 1) * atu;
  }, 0);
  //――――――――――――――――――――――――――――――――→
  var ope2 = justMod2ou3.reduceRight(function(acu, atu) {
    return (acu + 1) * atu;
  }, 0);
  //――――――――――――――――――――――――――――――――→
  var nome = ['Mar', 'cel', 'Su', 'ssai', 'de', 'O', 'li', 'vei', 'ra'];
  //――――――――――――――――――――――――――――――――→
  var nomeCompleto = nome.reduce(function(acu, atu) {
    return acu + '-p-' + atu + ' ';
  }, '');
  //――――――――――――――――――――――――――――――――→
  var invNom = nome.reduceRight(function(acu, atu) {
    return acu + atu;
  });
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(nObj);
  console.log(justN);
  console.log(justMod2ou3);
  console.log(ope1);
  console.log(ope2);
  console.log(nomeCompleto);
  console.log(invNom);
  console.log(nObj);
  //――――――――――――――――→
  if(nObj.indexOf({ num: 2 }) > -1) {
    console.log('Existe!');
  } else {
    console.log('NÃO existe!');
  }
  //――――――――――――――――→
  console.log(Array.isArray(justMod2ou3) ? justMod2ou3.toString() : 'NÃO!');
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
