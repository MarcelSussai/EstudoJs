(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Protótipos
  //――――――――――――――――→
  var Pessoa = function() {
    this.possoFalar = true;
    this.apresentar = function() {
      if (this.possoFalar) {
        console.log('Olá, eu sou', this.nome);
      }
    };
  };
  //――――――――――――――――→
  var Empregado = function(nome, cargo) {
    this.nome = nome;
    this.cargo = cargo;
    this.apresentar = function() {
      if (this.possoFalar) {
        console.log('Olá, eu sou', this.nome, 'o', this.cargo);
      }
    };
  };
  //――――――――――――――――→
  var Cliente = function(nome) {
    this.nome = nome;
  }
  //――――――――――――――――→
  var Chato = function(nome) {
    this.nome = nome;
    this.possoFalar = false;
  }
  //――――――――――――――――――――――――――――――――→
  Empregado.prototype = new Pessoa();
  Cliente.prototype = new Pessoa();
  Chato.prototype = new Pessoa();
  //――――――――――――――――→
  var p1 = new Empregado('Nome empregado 1', 'Arquiteto');
  var p2 = new Cliente('Nome cliente 1');
  var p3 = new Empregado('Nome empregado 2', 'Artesão');
  var p4 = new Cliente('Nome cliente 2');
  var p5 = new Chato('Nome chato 1');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(p1.apresentar());
  console.log(p2.apresentar());
  console.log(p3.apresentar());
  console.log(p4.apresentar());
  console.log(p5.apresentar());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? Desde que minha propriedade "-prop-value" é transversal e não está
  // ? sempre na mesma cadeia de protótipo, desejo modificar Object.prototype:
  // ? Isto não parece com um de meus objetos, então vamos retroceder ao
  // ? comportamento padrão para reproduzir o comportamento atual o que
  // ? pudermos. O apply se comporta como o"super" em outras linguagens.
  // ? Mesmo que valueOf() não receba argumentos, alguns outros ganchos podem.
  Object.prototype.valueOf = function() {
    if(this.hasOwnProperty('-prop-value')) {
      return this['-prop-value'];
    } else {
      return atual.apply(this, arguments);
    }
  }
  //――――――――――――――――→
  var atual = Object.prototype.valueOf;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(Object.prototype);
  console.log(atual);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
