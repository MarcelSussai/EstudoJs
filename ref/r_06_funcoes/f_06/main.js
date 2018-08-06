(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * prototype
  //――――――――――――――――――――――――――――――――→
  function Fun1(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  //――――――――――――――――→
  function nomComFun1() {
    return this.nome + ' ' + this.sobrenome;
  } 
  //――――――――――――――――→
  Fun1.prototype.nomeCompleto = nomComFun1;
  Fun1.prototype.idade = 32;
  //――――――――――――――――――――――――――――――――→
  // ? Verifica primeiro os valores das propriedades definidas na função
  // ? priorizando os valores das propriedades na função
  // ? Caso não há esse valor setado na função verifica os valores dos protótipos
  var obj1 = {};
  var arr1 = [1, 2, 3, 4];
  // ? também é possivel sobrescrever com o prototype as propriedades:
  var marc = new Fun1('Marcel', 'Sussai de Oliveira');
  // ? protoype mantém o construtor vivo!
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(Array.prototype);
  console.log(arr1.prototype);
  console.log(obj1);
  console.log('―――――――――――――――→');
  console.log(marc.nome);
  console.log(marc.nomeCompleto());
  console.log(marc.idade);
  console.log('―――――――――――――――→');
  console.log(Fun1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
