(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var person = {
    nome: 'Marcel',
    sobrenome: 'Sussai de Oliveira',
    idade: 32
  }
  var books = [];
  books.push({nome: 'Livro 01', pag: 128});
  books.push({nome: 'Livro 02', pag: 256});
  books.push({nome: 'Livro 03', pag: 512});
  var prime = books.slice();
  var strBooks = JSON.stringify(books);
  var myName = ['m', 'a', 'r', 'c', 'e', 'l'];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Propriedades de "person":', Object.keys(person));
  console.log('―――――――――――――――→');
  console.log('Lista de livros:', prime, books, books[2]);
  console.log('Livro removido:', books.pop());
  console.log('Sobra os livros:', books, books[2]);
  console.log('Livros em String:', strBooks);
  console.log('Objetos novamente:', JSON.parse(strBooks));
  console.log('―――――――――――――――→');
  for(var i = 0; i < books.length; i++) {
    for(var j in books[i]) {
      console.log(j, ':', books[i][j]);
    }
  }
  console.log('―――――――――――――――→');
  console.log(myName);
  console.log('Meu nome é:', myName.join(''));
  console.log('Meu nome invertido é:', myName.reverse().join(''));
  console.log('Em ordem alfabética:', myName.sort().join(''));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
