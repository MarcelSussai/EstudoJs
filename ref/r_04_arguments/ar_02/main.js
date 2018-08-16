(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var pessoa01 = {
    nome: 'Marcel',
    sobrenome: 'Sussai de Oliveira'
  };
  //――――――――――――――――→
  var pessoa02 = {
    nome: 'Gláucia',
    sobrenome: 'Mariane Rosa'
  };
  //――――――――――――――――――――――――――――――――→
  function getNomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
  //――――――――――――――――→
  function soma() {
    console.log(arguments);
    return Array.prototype.reduce.call(arguments,
      function(acu, atu) {
        return Number(acu) + (+atu);
        // ? o sinal de mais converte para numero! (+atu) ou +atu
      }
    );
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(pessoa01);
  console.log(pessoa02);
  console.log('―――――――――――――――→');
  console.log('Nomes completos:');
  console.log(getNomeCompleto.call(pessoa01));
  console.log(getNomeCompleto.call(pessoa02));
  console.log('―――――――――――――――→');
  console.log('Somar alguns números:');
  console.log('Soma:', soma(4, 4, 8, 16, 4, 32, 56));
  console.log('Soma:', soma(4, 40, 8, 24));
  console.log('Soma:', soma(8, 24, 16));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var entry01 = prompt('Entre com alguns números que serão somados:');
  var numeros;
  //――――――――――――――――――――――――――――――――→
  function soNum(strNum) {
    return strNum.replace(/\D+/g, ',').split(',');
  }
  //――――――――――――――――→
  numeros = soNum(entry01);
  //――――――――――――――――→
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(entry01);
  console.log(numeros);
  console.log('Soma:', soma.apply(soma, numeros));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
