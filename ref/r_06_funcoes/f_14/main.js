(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.getNomeCompleto = function getNomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    }
    this.getIdade = function getIdade() {
      return this.idade;
    }
    this.addIdade = function addIdade() {
      this.idade += arguments[0];
      return this;
    }
  }
  //――――――――――――――――――――――――――――――――→
  var pessoa1 = new Pessoa('Marcel', 'Sussai de Oliveira', 32);
  var pessoa2 = new Pessoa('Gláucia', 'Mariane Rosa', 29);
  var pessoa3 = new Pessoa('Maria', 'Sebastiana Sussai', 65);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(pessoa1);
  console.log(pessoa2);
  console.log(pessoa3);
  console.log('―――――――――――――――→');
  console.log(pessoa1.getNomeCompleto());
  console.log(pessoa2.getNomeCompleto());
  console.log(pessoa3.getNomeCompleto());
  console.log('―――――――――――――――→');
  console.log(pessoa1.getIdade());
  console.log(pessoa2.getIdade());
  console.log(pessoa3.getIdade());
  console.log('―――――――――――――――→');
  pessoa1.addIdade(2);
  pessoa2.addIdade(2);
  pessoa3.addIdade(2);
  console.log(pessoa1.getNomeCompleto(), 'tem:', pessoa1.getIdade());
  console.log(pessoa2.getNomeCompleto(), 'tem:', pessoa2.getIdade());
  console.log(pessoa3.getNomeCompleto(), 'tem:', pessoa3.getIdade());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
