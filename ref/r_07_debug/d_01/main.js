(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * debug
  // ? debugger;
  //――――――――――――――――――――――――――――――――→
  function sum() {
    // debugger;
    return Array.prototype.reduce.call(arguments,
      function(acu, atu) {
        return Number(acu) + Number(atu);
      }
    );
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(sum(2, 16, 128, 512, 200, 8));      // # 866
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var arrBuy = [
    {item: 'Arroz', preco: 'R$ 10', peso: '1Kg'},
    {item: 'Feijão', preco: 'R$ 20', peso: '2Kg'},
    {item: 'Macarrão', preco: 'R$ 12', peso: '1.5Kg'},
    {item: 'Carne', preco: 'R$ 30', peso: '10Kg'},
  ];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(arrBuy);
  console.table(arrBuy);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
