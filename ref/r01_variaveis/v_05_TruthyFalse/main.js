(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Teste de verdadeiro ou falso
  var test1 = 1 === 'b';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(test1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  function testarTruthyFalse(v) {
    var test2;
    if(v) {
      test2 = true;
    } else {
      test2 = false;
    }
    //――――――――――――――――→
    console.log('________________________________');
    console.log((v === '') ? '\'\'': v + '', '=', test2);
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');    
  }
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse(1);
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse(0);
  //――――――――――――――――――――――――――――――――→
  // * Falsy
  // ? undefined  = 0
  // ? null       = -0
  // ? NaN        = '' ou ""
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse('');
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse('0');
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse('Marcel');
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse(undefined);
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse(null);
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse({});
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse([]);
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse(NaN);
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse(-0);
  //――――――――――――――――――――――――――――――――→
  testarTruthyFalse(2);
  //――――――――――――――――――――――――――――――――→
  // * Truthy
  // ? Todos os outros
  // ? Interessante, descobrir a representação booleana
  // ? !!
  console.log(!true);   // # false
  console.log(!false);  // # true
  console.log(!1);      // # false
  console.log(!!true);  // # true
  console.log(!!0);     // # false
  console.log(!!"");    // # false
  console.log(!!'0');   // # true
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
