(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var arr01 = [32, 'teste', 69, 'Olá!', true];
  var arr02 = [true, 'string', 4.9, {p1: 1, p2: undefined}, [1, 2, 3]];
  var livro = 'livro 01';
  //――――――――――――――――――――――――――――――――→
  var fun01 = function (p) {
    return p;
  }
  //――――――――――――――――→
  function fun02(arr, num) {
    return arr[num];
  }
  //――――――――――――――――→
  function book(nomeLivro) {
    var biblioteca = {
      'livro 01': {
        qtdPag: 200,
        autor: 'Autor 01',
        editora: 'Editora 01'
      },
      'livro 02': {
        qtdPag: 150,
        autor: 'Autor 02',
        editora: 'Editora 01'
      },
      'livro 03': {
        qtdPag: 360,
        autor: 'Autor 03',
        editora: 'Editora 02'
      }
    };
    return !nomeLivro ? biblioteca : biblioteca[nomeLivro];
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun01(arr01)[2]);
  console.log(fun02(arr01, 2));
  console.log(fun01(arr01));
  console.log(fun02(arr02, 0));
  console.log(fun02(arr02, 1));
  console.log(fun02(arr02, 2));
  console.log(fun02(arr02, 3));
  console.log(fun02(arr02, 4));
  console.log('―――――――――――――――→');
  console.log(book());
  console.log(book(livro).qtdPag);
  console.log('―――――――――――――――→');
  console.log('O livro ' + livro + ' tem ' + book(livro).qtdPag + ' páginas');
  console.log('O autor do ' + livro + ' é ' + book(livro).autor);
  console.log('O ' + livro + ' foi publicado pela editora ' + book(livro).editora);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
