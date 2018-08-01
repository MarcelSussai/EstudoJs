(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Objetos!
  // ? São conjuntos de propriedades!
  var obj1 = {
    prop_1: 'valor',
    prop_2: 16,
    prop_3: true
  };
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj1);
  console.log(obj1.prop_1);
  console.log(obj1.prop_2);
  console.log(obj1.prop_3);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var pessoa = {
    nome: 'Marcel',
    idade: 32,
    peso: 60,
    altura: 1.70
  };
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Nome da pessoa:', pessoa.nome);
  console.log('Idade da pessoa:', pessoa.idade);
  console.log('Peso da pessoa:', pessoa.peso);
  console.log('Altura da pessoa:', pessoa.altura);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ! Qualquer atribuição posterior que use = + nova adição,
  // ! por exemplo: pessoa1 = { sexo: 'masculino' } ...
  // ! Apagará todo conteúdo anterior a essa atribuição,
  // ! será como nova atribuição, como com qualquer outra variável.
  pessoa = { sexo: 'masculino'};
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(pessoa);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ! agora, dessa forma:
  // ? Repare que adiciono de novo todos os valores anteriores
  pessoa = {
    nome: 'Marcel',
    idade: 32,
    peso: 60,
    altura: 1.70,
    sexo: 'masculino'
  };
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(pessoa);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * e dessa forma é a melhor para adicionar um novo valor ao objeto mantendo os existentes
  pessoa.nacionalidade = 'Brasileiro';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(pessoa);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  pessoa.andar = function() {
    return 'Pessoa andando...';
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(pessoa);
  console.log(pessoa.andar);
  console.log(pessoa.andar());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? Funções são objetos!
  // ? Objetos de primeira classe
  // ? pois podem ser atribuidos a uma variável
  var myVarFunction = function() {
    return 'variável com uma função dentro que retorna essa String! - myVarFunction';
  };
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(myVarFunction);
  console.log(myVarFunction());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
