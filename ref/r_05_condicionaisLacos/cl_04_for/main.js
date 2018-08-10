(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * for
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * for in
  var car = {
    marca:    'VW',
    modelo:   'Gol',
    ano:      2012
  };
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(car);
  for (var prop in car) {
    console.log(prop, ':', car[prop]);
  }
  // ? testando se propriedade existe:
  console.log('marca' in car);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for(var num = 2, nu2 = 3; num < 5; num++) {
    console.log(num);
    console.log(nu2++);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
