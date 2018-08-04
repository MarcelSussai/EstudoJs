(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Object.create()
  // ? utilizando-o para criar herança entre objetos!
  // ? Cria um novo objeto herdado, mas NÃO sendo referência
  var obj1 = {x: 1, y: 2};
  var obj2 = Object.create(obj1);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj1);
  console.log(obj2);
  console.log(obj2.prototype);
  // ? herda valor de x e de y:
  console.log(obj2.x);
  obj2.x = 'Teste de propriedade alterada!';
  console.log(obj2.x);
  // ? note que aqui não há mudanças no obj1, o original:
  console.log(obj1.x);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var obj3 = Object.create({});
  var obj4 = {};
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj3);
  // ? toString é herdado de prototype
  console.log(obj3.toString());
  console.log(obj4);
  console.log(obj4.toString());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  obj4.x = 2;
  obj4.y = 4;
  obj4.z = 8;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj4);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  obj2 = {};
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj2);
  console.log(obj2.x, obj2.y, obj2.z);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  obj2 = Object.create(obj4);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj2);
  console.log(obj2.x, obj2.y, obj2.z);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  obj1 = Object.create(obj2);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  obj1.z = 16;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj1, obj1.x, obj1.y, obj1.z); // # 2 4 16
  console.log(obj2, obj2.x, obj2.y, obj2.z); // # 2 4 8
  console.log(obj3, obj3.x, obj3.y, obj3.z); // # undefined undefined undefined
  console.log(obj4, obj4.x, obj4.y, obj4.z); // # 2 4 8
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? Mostra as propriedades do objeto!
  console.log('________________________________');
  for(var prop in obj4) {
    console.log(prop);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for(var prop in obj2) {
    console.log(prop);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? Para verificar se realmente a propriedade é original do objeto!
  console.log('________________________________');
  console.log(obj4.hasOwnProperty('x'));
  console.log(obj2.hasOwnProperty('x'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for(var prop in obj2) {
    if (obj2.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * Object.keys(obj)
  // ? retorna um array com as propriedades reais do objeto!
  console.log('________________________________');
  console.log(Object.keys(obj1));
  console.log(Object.keys(obj2));
  console.log(Object.keys(obj3));
  console.log(Object.keys(obj4));
  // ? contando as propriedades de um objeto!
  console.log(Object.keys(obj4).length);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // ? testando se é protótipo!
  console.log('________________________________');
  console.log(obj4.isPrototypeOf(obj1));
  console.log(obj4.isPrototypeOf(obj2));
  console.log(obj4.isPrototypeOf(obj3));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj3.isPrototypeOf(obj1));
  console.log(obj3.isPrototypeOf(obj2));
  console.log(obj3.isPrototypeOf(obj4));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj2.isPrototypeOf(obj1));
  console.log(obj2.isPrototypeOf(obj4));
  console.log(obj2.isPrototypeOf(obj3));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj1.isPrototypeOf(obj4));
  console.log(obj1.isPrototypeOf(obj2));
  console.log(obj1.isPrototypeOf(obj3));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * JSON.stringify(obj)
  // ? JSON Javascript Object Notation!
  var str = JSON.stringify(obj4);
  var strObj = JSON.parse(str);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str);
  console.log(strObj);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
