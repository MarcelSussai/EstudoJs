(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * String() - String
  /*
  ? Strings são úteis para guardar dados que podem ser
  ? representados em forma de texto.
  ?   \0                o caractere NULL
  ?   \'                aspas simples
  ?   \"                aspas duplas
  ?   \\                barra invertida
  ?   \n                nova linha
  ?   \r                retorno de carro
  ?   \v                tab vertical
  ?   \t                tab
  ?   \b                backspace
  ?   \f                form feed
  ?   \uXXXX            unicode codepoint
  ?   \xXX              the Latin-1 character
  */
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Acesso a caractere!
  var str1 = 'Marcel';
  var suss = new String('Sussai');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('gato'.charAt(1));                      // # a
  console.log('gato'[1]);                             // # a
  console.log(str1.charAt(0), ' ', str1.charAt(3));   // # M   c
  console.log('Meu nome é '.concat(str1, ' ', suss)); // # Meu nome é Marcel Sussai
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Comparando strings
  var a = 'a';
  var b = 'b';
  //――――――――――――――――――――――――――――――――→
  if (a < b) console.log(a, 'é menor que', b);
  else if (a > b) console.log(a, 'é maior que', b);
  else console.log(a, 'e', b, 'são iguais');
  //――――――――――――――――――――――――――――――――→
  // * Distinção entre String primitiva e objetos String
  var s_prim = 'teste';
  var s_obj = new String(s_prim);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(typeof s_prim);       // # string
  console.log(typeof s_obj);        // # object
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var s1 = '2 + 2';
  var s2 = new String('2 + 2');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(eval(s1));            // # 4
  console.log(eval(s2));            // # String {"2 + 2"}
  console.log(eval(s2.valueOf()));  // # 4
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
