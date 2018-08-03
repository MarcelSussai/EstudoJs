(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Objetos são mutáveis e manipulados por referência
  var obj1 = {
    p1: 'Valor propriedade 1',
    p2: 'Valor propriedade 2'
  }
  var obj2 = {
    p1: 'Valor propriedade 1',
    p2: 'Valor propriedade 2'
  }
  var copyObj1 = obj1;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('valor de obj1:', obj1);
  console.log('valor de obj2:', obj2);
  console.log('Comparando objetos com === :', obj1 === obj2);       // # false
  console.log('Comparando objetos com === :', copyObj1 === obj1);   // # true
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  copyObj1.p1 = 'Novo valor da propriedade p1 de copy';
  console.log('________________________________');
  console.log('valor de copyObj1:', copyObj1);
  console.log('valor de obj1:', obj1); // ! também mudará no objeto original!
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * modifica a propriedade do objeto!
  obj1.p1 = 'Valor novo propriedade 1';
  console.log('________________________________');
  console.log('valor de obj1:', obj1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Deletando a propriedade passada
  delete obj1.p2;
  console.log('________________________________');
  console.log('valor de obj1:', obj1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Criando Objetos de Objetos!
  // ? Literais
  // ? Como construtor (new)
  // ? Com Object.create()
  // ! Sempre mais interessante usar o modo literal {}
  // ? Objetos tem uma propriedade chamada prototype
  // ? Object.prototype
  // ? cada vez que criamos um objeto ele herda de seu próprio protótipo!
  var obj3 = new Object();
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj3);
  console.log(Object.prototype);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  obj3.p1 = 'valor de p1';
  obj3.p2 = 'valor de p2';
  obj3.p3 = 3;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj3);
  console.log(obj3.inexistente);
  console.log(obj3['p1']);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  obj3['p2'] = 'valor novo de p2';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj3);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
