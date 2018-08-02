(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * split
  // ? O método split() divide um objeto String em um array
  // ? de strings ao separar a string em substrings.
  // ? remove e separa por um certo caractere em uma string
  // ? retornando um array com a string separada
  // ? sem modificar a original!
  //――――――――――――――――――――――――――――――――→
  var str1 = 'p0-p1-p2-p3-p4-p5-Palavra 6- palavra 7-p8-p9-';
  var arrStr1 = str1.split('-');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Sem parâmetro nenhum: ', str1.split());
  console.log('Parâmetro \'-\' :', arrStr1);
  console.log('Selecionando um indice: ', arrStr1[6]);
  console.log('Juntando de volta: ', arrStr1.join('-'));
  console.log('Substituindo: ', str1.split('-').join('|'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Retornando um número limitado de divisões!
  // ? procurqa por 0 ou mais espaços
  // ? e retorna as tres primeiras divisões que encontrar
  var str2 = 'Primeira Segunda Terceira Quarta Quinta Sexta Sétima Oitava Nona Décima';
  var arrStr2 = str2.split(' ', 4);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.table(arrStr2);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * utilizando regex
  var str3 = 'estou contando 1 e depois conto 2 seguindo de 3 e 4';
  var arrStr3 = str3.split(/(\d)/g);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.table(arrStr3);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Revertendo uma string usando split()
  var str4 = 'abcdef';
  var str4Reverse = str4.split('').reverse().join('');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str4);
  console.log(str4Reverse);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
