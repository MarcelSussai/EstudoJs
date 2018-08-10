(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function fun1() {
    return true;
  }
  //――――――――――――――――→
  function fun2() {
    var n1 = 10;
    // ? aqui ele pula todo o restante do código dentro da função:
    if (n1 === 10) {return true;}
    var n2 = 32;
    var nome = 'Marcel Sussai';
    // ? ou retorna esse:
    return nome + ' ' + n2;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(fun1());
  console.log(fun2());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var n1 = 10;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  switch(n1) {
    case 1: 
      console.log('1');
    break; // ? esse break para a execução no bloco!
    case 2: case 3: case 4:
      console.log('2 ou 3 ou 4');
    break;
    case 10:
      console.log('10');
    break;
    default: console.log('Default!'); break;
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for(var i = 0; i < 10; i++){
    // ? aqui ele para o laço quando o i for igual a 5 !
    if(i === 5) { break; }
    console.log(i);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //――――――――――――――――→
  for (var i =0; i < arr.length; i++) {
    if(i === 5) { break; }
    console.log('Indice:', i, 'valor:', arr[i]);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for(var i = 0; i < arr2.length; i++){
    if(i === 5){
      console.log('cinco!');
      // ? ele vem até aqui e volta do começo
      // ? da função para continuar o laço:
      continue;
    }
    console.log(i);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
