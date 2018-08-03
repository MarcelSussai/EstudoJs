(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Usando uma função construtora
  function nomeFunc01(param1, param2, param3) {
    this.varParam1 = param1;
    this.varParam2 = param2;
    this.varParam3 = param3;
  }
  //――――――――――――――――――――――――――――――――→
  var funcRef01 = new nomeFunc01('novo 01 valor 1', 'novo 01 valor 2', 'novo 01 valor 3');
  var funcRef02 = new nomeFunc01('novo 02 valor 1', 'novo 02 valor 2', 'novo 02 valor 3');
  var funcRef03 = new nomeFunc01('novo 03 valor 1', 'novo 03 valor 2', 'novo 03 valor 3');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(funcRef01);
  console.log(funcRef02);
  console.log(funcRef03);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Exemplo de uso com objetos em propriedades de objetos
  function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  //――――――――――――――――――――――――――――――――→
  var marcel = new Pessoa('Marcel Sussai', 32, "M");
  var glaucia = new Pessoa('Gláucia Mariane', 29, "F");
  //――――――――――――――――――――――――――――――――→
  function Car(marca, modelo, ano, dono) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
  }
  //――――――――――――――――――――――――――――――――→
  var carro1 = new Car('Astra', 'Super Foda', 2018, glaucia);
  var carro2 = new Car('Carro preto mega foda', 'fodástico', 2018, marcel);
  carro1.cor = 'preto';
  carro2.cor = 'preto';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(marcel);
  console.log(glaucia);
  console.log(carro1);
  console.log(carro2);
  console.log(carro2.dono);
  console.log(carro1.dono);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
