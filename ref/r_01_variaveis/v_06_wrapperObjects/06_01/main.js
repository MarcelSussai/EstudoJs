(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Wrapper Objects
  // ! Valores primitivos NÃO são objetos!
  // ? então porque eles tem propriedades?
  // ? porque existem os construtores...
  //――――――――――――――――――――――――――――――――→
  var v1 = 'Aqui é o conteúdo da variável em String';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(v1.length);           // # 39
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Construtores que criam novos Objetos
  // ? javascript possui tipagem dinâmica
  // ! não precisa criar sempre assim, apenas na necessidade!
  //――――――――――――――――――――――――――――――――→
  // ? com a palavra chave new
  // ? se torna um objeto!
  var name = new String('Marcel');
  var age = new Number(32);
  var shaolin = new Boolean(true);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(shaolin);             // # Boolean
  console.log(name);                // # String
  console.log(name.length);         // # 6
  console.log(name.valueOf());      // # Marcel
  console.log(age);                 // # Number
  console.log(age.valueOf());       // # 32
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Convertendo tipos
  // ? sem a palavra chave new
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  var v2 = String(16);
  console.log(v2);                  // # 16
  var v3 = Number('32');
  console.log(v3 + 8);              // # 40
  var v4 = Boolean(0);
  console.log(v4);                  // # false
  v4 = Boolean({});
  console.log(v4);                  // # true
  console.log(!!{});                // # true
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
