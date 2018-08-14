(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var umaVez = false;
  console.log('________________________________');
  do {
    console.log('Entrou ao menos uma vez...');
  } while(umaVez);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var pessoa = {
    nome: 'Marcel Sussai de Oliveira',
    idade: 32,
    peso: 58,
    niver: '30/06'
  }
  var cont = 0;
  //――――――――――――――――――――――――――――――――→
  function maisQue(age) {
    return pessoa.idade > age;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for(var i in pessoa) {
    console.log(i + ':', pessoa[i]);
    cont++;
  }
  console.log('A pessoa tem', cont, 'propriedades!');
  console.log('―――――――――――――――→');
  var testAge = 40;
  console.log('A pessoa tem mais que', testAge, 'anos?', maisQue(testAge));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var arrNum = [];
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('De 0 a 10:');
  for(var i = 0; i <=20; i++) {
    if(i > 10) {break;}
    arrNum.push(i);
  }
  console.log(arrNum);
  console.log('―――――――――――――――→');
  console.log('Pares de 0 a 20');
  arrNum = [];
  for(var i = 0; i <= 20; i++) {
    if(i % 2 !== 0) {
      arrNum[i] = '';
      continue;
    }
    arrNum[i] = i;
  }
  console.log(arrNum);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
