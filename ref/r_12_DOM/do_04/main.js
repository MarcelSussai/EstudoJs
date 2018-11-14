(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var $main = doc.querySelector('.main');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log($main);
  console.log($main.id);
  console.log($main.id = 'teste');
  console.log($main.id);
  console.log('―――――――――――――――→');
  console.log($main.className);
  console.log($main.getAttribute('class'));
  // ? retorna sempre uma string:
  console.log($main.getAttribute('data-js'));
  console.log('―――――――――――――――→');
  // ? se tentar somar é preciso converter para números:
  var strN1 = $main.getAttribute('data-n1');
  var strN2 = $main.getAttribute('data-n2');
  console.log(strN1 + strN2);
  console.log('―――――――――――――――→');
  // ? usando ou (+var) ou parseInt/Float
  var n1 = +strN1;
  var n2 = +strN2;
  console.log(n1 + n2);
  console.log('―――――――――――――――→');
  var parseIN1 = parseInt(strN1);
  var parseIN2 = parseInt(strN2);
  var parseFN1 = parseFloat(strN1);
  var parseFN2 = parseFloat(strN2);
  console.log(parseIN1 + parseIN2);
  console.log(parseFN1 + parseFN2);
  console.log('―――――――――――――――→');
  console.log($main.setAttribute('data-js', 'ValorModificado'));
  console.log($main.setAttribute('data-js2', 'ValorNovo2'));
  console.log('―――――――――――――――→');
  console.log($main);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
