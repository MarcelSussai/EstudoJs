(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Expressões regulares!
  // ? < ^ > inicia com um determinado caractere
  // ? < $ > finaliza com um determinado caractere
  // ? [abc] - aceita qualquer caractere dentro do grupo, nesse caso a b ou c
  // ? [^abc] - aceita qualquer caractere dentro do grupo, nesse caso a b ou c
  // ? [0-9] aceita qualquer caractere entre 0 e 9
  // ? [^0-9] Não aceita qualquer caractere entre 0 e 9
  // ? quantidade de caractere{}
    // ? {n} específico
    // ? {n,} mínimo
    // ? {n,m} mínimo e máximo
  // ? < ? > zero ou um
  // ? < * > zero ou mais
  // ? < + > um ou mais
  // ? < . > representa qualquer caractere:
  // ? < \w > representa o conjunto: [a-zA-Z0-9_]
  // ? < \W > representa o conjunto: [^a-zA-Z0-9_]
  // ? < \d > representa o conjunto: [0-9]
  // ? < \D > representa o conjunto: [^0-9]
  // ? < \s > um espaço em branco
  // ? < \S > um NÃO espaço em branco
  // ? < \n > quebra de linha
  // ? < \t > tab
  // ? //gim
  // ? [] corresponde a UM dos que estiverem dentro da lista
  // ? () temos o grupo e captura
  //――――――――――――――――――――――――――――――――→
  var i = 1;
  //――――――――――――――――――――――――――――――――→
  var txt1 = 'Marcel Sussai de Oliveira Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  var txt2 = 'abcdefghijklmnopqrstuvwxyz | ABCDEFGHIJKLMNOPQRSTUVWXYZ | 0123456789 _+-.,!@#$%^&*();\\/|<>"\'';
  var txt3 = '12345 -98.7 3.141 .6180 9,000 +42 | 555.123.4567 | +1-(15) 9999-9999 | (800) foo@demo.net bar.ba@test.co.uk www.demo.com http://foo.co.uk/ https://marketplace.visualstudio.com/items? itemName=chrmarti.regex (15) 9999-9999 https://github.com/chrmarti/vscode-regex';
  var txt4 = 'O telefone é (15) 9999-9999';
  //――――――――――――――――――――――――――――――――→
  function impr(rgx, str) {
    imprime(rgx, str);
    imprime2(rgx, str);
  }
  //――――――――――――――――→
  function imprime(rgx, str) {
    console.log(i++);
    console.log(rgx.exec(str));
    console.log(str.match(rgx));
  }
  //――――――――――――――――→
  function imprime2(rgx, str) {
    console.log(rgx.test(str));
    console.log(str.split(rgx));
    console.log(str.search(rgx));
  }
  //――――――――――――――――――――――――――――――――→
  var rg01 = /m/g;
  //――――――――――――――――→
  var rg02 = /\w/g;
  //――――――――――――――――→
  var rg03 = /4567/g;
  //――――――――――――――――→
  var rg04 = /\d\d/;
  //――――――――――――――――→
  var rg05 = /ac|pq/g;
  //――――――――――――――――→
  var rg06 = /[8bx]/g;
  //――――――――――――――――→
  var rg07 = /[acd(it)(et)]/g;
  //――――――――――――――――→
  var rg08 = /(\d\d)/g;
  //――――――――――――――――→
  var rg09 = /[123456789]/g;
  //――――――――――――――――→
  var rg10 = /[\d]/g;
  //――――――――――――――――→
  var rg11 = /\(800\)/g;
  //――――――――――――――――→
  var rg12 = /^a/g;
  //――――――――――――――――→
  var rg13 = /\(15\)\s9999-9999$/g;
  //――――――――――――――――→
  var rg14 = /(\(\d{2}\))(\s\d{4,5}\W?\d{4})/g;
  //――――――――――――――――→
  var rg15 = new RegExp('rcel', 'g');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  impr(rg01, txt1);
  console.log(rg01.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg02, txt2);
  console.log(rg02.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg03, txt3);
  console.log(rg03.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg04, txt2);
  console.log(rg04.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg05, txt2);
  console.log(rg05.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg06, txt3);
  console.log(rg06.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg07, txt1);
  console.log(rg07.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg08, txt2);
  console.log(rg08.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg09, txt3);
  console.log(rg09.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg10, txt3);
  console.log(rg10.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg11, txt3);
  console.log(rg11.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg12, txt2);
  console.log(rg12.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg13, txt4);
  console.log(rg13.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg14, txt4);
  console.log(rg14.lastIndex);
  console.log('―――――――――――――――→');
  impr(rg15, txt1);
  console.log(rg15.lastIndex);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
