(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Usando o método Object.create
  // ? encapsulamento das propriedades e métodos de animal!
  var Animal = {
    // ? Propriedades de valores padrão:
    tipo: 'Invertebrados',
    // ? método que irá mostrar o tipo de animal:
    qualTipo: function() {
      console.log('________________________________');
      console.log('Tipo de Animal:');
      console.log(this.tipo);
      console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
    }
  }
  //――――――――――――――――――――――――――――――――→
  // ? Cria um novo tipo de animal chamado animal01:
  var animal01 = Object.create(Animal);
  animal01.qualTipo();
  //――――――――――――――――――――――――――――――――→
  // ? Cria um novo tipo de animal chamado peixe:
  var peixe = Object.create(Animal);
  peixe.tipo = "Peixe";
  peixe.qualTipo();
  // ? Não altera o original:
  animal01.qualTipo();
  //――――――――――――――――――――――――――――――――→
  Animal.sexo = '';
  peixe.sexo = 'macho';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(peixe.sexo);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
