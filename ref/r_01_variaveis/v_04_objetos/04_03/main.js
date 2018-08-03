(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * modos de acessar propriedades em objetos
  var obj1 = new Object(),
      str1 = 'Minha String',
      alea = Math.random(),
      obj2 = new Object();
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Sintaxe de ponto:', obj1.tipo);
  console.log('String com espaço:', obj1['data de criacao']);
  console.log('valor de string:', obj1[str1]);
  console.log('Numero aleatorio:', obj1[alea]);
  console.log('Objeto:', obj1[obj2]);
  console.log('E uma string vazia', obj1['']);
  console.log(obj1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var nomePropriedade = 'Propriedade com nome composto';
  obj1[nomePropriedade] = 'Valor de propriedade com nome composto';
  nomePropriedade = 'Outro nome pela variavel';
  obj1[nomePropriedade] = 'Outro valor da nova propriedade';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(obj1);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  function revealProps(obj, nomeDoObj) {
    var result = '';
    for (var i in obj) {
      if (obj1.hasOwnProperty(i)) {
        result += nomeDoObj + '.' + i + ' = ' + obj[i] + '\n';
      }
    }
    return result;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(revealProps(obj1, 'Outro nome pela variavel'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Enumerando todas as propriedades de um objeto!
  // ? for in
  // ? Object.keys(o)
  // ? Object.getOwnPropertyNames(o)
  function listAllProps(o) {
    var objToInspect;
    var result = [];

    for(objToInspect = o; objToInspect !== null; objToInspect = Object.getPrototypeOf(objToInspect)) {
      result = result.concat(Object.getOwnPropertyNames(objToInspect));
    }
    return result;
  }
  //――――――――――――――――――――――――――――――――→
  var objTest = {p1: '1', p2: '2'};
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(listAllProps(objTest));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Usando inicializadores de objetos!
  var obj3 = { 
    propriedade_1: 'valor_1',
    2: str1,
    "propriedade n": alea
  }
  console.log('________________________________');
  console.log(obj3);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
