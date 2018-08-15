(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var nome1 = 'Marcel';
  var nome2 = 'marcel-sussai-de-oliveira';
  var nome3 = 'Marcel Sussai de Oliveira';
  var nome4 = 'Roberto';
  var arrNo = ['Marcel', 'Maria', 'Nelson', 'Gláucia', 'Lua'];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for(var i = 0; i < nome1.length; i++) {
    console.log(
      '"' + nome1.charAt(i) + '"',
      'é a',
      (i + 1) + 'ª',
      'letra do meu nome'
    );
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var resposta = nome2.split('-').map(function(ite) {
    return ite.charAt(0).toUpperCase() + ite.substring(1).toLowerCase();
  });
  console.log('________________________________');
  console.log('Formato Slug:', nome2);
  console.log('Resutado final:', resposta.join(' '));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var redu = arrNo.reduce(function(acu, atu, ind) {
    if(ind === (arrNo.length - 1)) {
      return acu + ' e ' + atu;
    } else {
      return acu + ', ' + atu;
    }
  });
  console.log('________________________________');
  console.log(redu);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var resultado = '';
  for(var i = 0; i < nome3.length; i++) {
    resultado += (i % 2 === 0) ? nome3.charAt(i).toUpperCase() : nome3.charAt(i).toLowerCase();
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('teste 01'.replace('01', '32'));
  console.log(nome4.replace('to', 'ta'));
  console.log(nome4.slice(nome4.lastIndexOf('berto')));
  console.log(resultado);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
