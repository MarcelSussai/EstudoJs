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
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
