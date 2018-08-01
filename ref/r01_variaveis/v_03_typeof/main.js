(function(doc, win) {
  'use strict';
  // * typeof verificação de tipos
  // ? number
  // ? string
  // ? boolean
  // ? null e undefined
  // ? O operador typeof retorna o objeto para os dois objetos,
  // ? arrays e null.
  // ? O operador typeof retorna "objeto" para arrays
  // ? porque em arrays JavaScript são objetos.
  // ! Confiar no typeof somente com tipos primitivos
  //______________________________________________________________
  // * typeof
  //――――――――――――――――――――――――――――――――
  console.log('________________________________');
  console.log(typeof(undefined));     // # 'undefined'
  console.log(typeof(function() {})); // # 'function'
  console.log(typeof(true));          // # 'boolean'
  console.log(typeof(10));            // # 'number'
  console.log(typeof('JS Shaolin'));  // # 'string'
  console.log(typeof(2.8));           // # 'number'
  console.log(typeof(null));          // # 'object'
  console.log(typeof(NaN));           // # 'number'
  console.log(typeof({}));            // # 'object'
  console.log(typeof([]));            // # 'object'
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('________________________________');
  console.log(typeof 37);         // # number
  console.log(typeof 3.14);       // # number
  console.log(typeof Math.LN2);   // # number
  console.log(typeof Infinity);   // # number
  console.log(typeof NaN);        // # number
  console.log(typeof Number(1));  // # number
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('________________________________');
  console.log(typeof "");             // # string
  console.log(typeof 'bla');          // # string
  console.log(typeof String('abc'));  // # string
  console.log(typeof (typeof 1));     // # string
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('________________________________');
  console.log(typeof true);           // # boolean
  console.log(typeof false);          // # boolean
  console.log(typeof Boolean(true));  // # boolean
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('________________________________');
  console.log(typeof undefined);  // # undefined
  console.log(typeof blabla);     // # undefined
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('________________________________');
  console.log(typeof {a:1});          // #object
  console.log(typeof new Date());     // #object
  // ? Use 'Array.isArray' ou 'Object.prototype.toString.call'
  // ? para diferenciar objetos regulares de array
  console.log(typeof [1, 2, 3, 4]);   // #object
  // ? Desde os primórdios do javascript:
  console.log(typeof null);   // #object
  //――――――――――――――――
  // ! Isto é confuso, não use:
  console.log(typeof Boolean(true));  // #object
  console.log(typeof Number(2));      // #object
  console.log(typeof String('abc'));  // #object
  //――――――――――――――――
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('________________________________');
  console.log(typeof function(){}); // # function
  console.log(typeof Math.sin);     // # function
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  console.log('________________________________');
  console.log(typeof /s/g); // # object
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――
  //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  // * Uso prático
  //______________________________________________________________
  // * Considere a função:
  //――――――――――――――――――――――――――――――――
  function sum(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number')
      return n1 + n2;
    return 'Entre com número válido!';
  }
  console.log('________________________________');
  console.log(sum(10, 2));
  console.log(sum('js', 2));
  console.log(sum('12', 4));
  console.log(sum('2', '2'));
  console.log(sum({}, []));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――
  //――――――――――――――――――――――――――――――――
  function sub(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number')
      return n1 - n2;
    return 'Entre com número válido!';
  }
  console.log('________________________________');
  console.log(sub(10, 2));
  console.log(sub('js', 2));
  console.log(sub('12', 4));
  console.log(sub('2', '2'));
  console.log(sub({}, []));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――
  // * Testando valores nulos
  //――――――――――――――――――――――――――――――――
  function mul(n1, n2) {
    if (n1 === null || n2 === null)
      return 'Não entre com valores nulos!'
    return n1 * n2;
  }
  console.log('________________________________');
  console.log(mul(10, 5));
  console.log(mul(null, 2));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――
  //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
})(document, window);
