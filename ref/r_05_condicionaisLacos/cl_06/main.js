(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var campeonato = 'Campeonato da 4º parede imaginária para exemplificação';
  var timesList = [
    'Time Maluco Lúdico da Porra 01',
    'Time dos retardatários da matemática 02',
    'Time das correlações falsas 03',
    'Time filosófico não sofista 04',
    'Time da ciência das esferas gravitacionais 05'
  ];
  //――――――――――――――――――――――――――――――――→
  function showPosTime(p) {
    var y = p - 1;
    if (timesList[y]) {
      return 'O time que está em ' + p + 'º lugar é o ' + timesList[y];
    }
    return 'Não temos a informação do time nessa posição!';
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(campeonato);
  console.log(showPosTime(1));
  console.log(showPosTime(2));
  console.log(showPosTime(3));
  console.log(showPosTime(4));
  console.log(showPosTime(5));
  //――――――――――――――――→
  timesList[5] = 'Time dos molengas de platão 06';
  //――――――――――――――――→
  console.log(showPosTime(6));
  console.log(showPosTime(7));
  console.log(showPosTime(0));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var c = 20;
  var n1 = 10;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  while(c <= 30) {
    console.log(c++);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  while (n1 <=20) {
    n1 % 2 === 0 ? console.log(n1) : '';
    n1++;
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function converterToHex(cor) {
    switch (cor) {
      case 'vermelho': 
        return 'O hexadecimal para a cor vermelha é #ff0000';
        break;
      case 'azul': 
        return 'O hexadecimal para a cor azul é #0000ff';
        break;
      case 'verde': 
        return 'O hexadecimal para a cor verde é #009000';
        break;
      case 'laranja': 
        return 'O hexadecimal para a cor vermelha é #ff9000';
        break;
      case 'roxo': 
        return 'O hexadecimal para a cor vermelha é #9000ff';
        break;
      default: 
        return'Não temos o hexadecimal para esta cor!';
        break;
      }
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(converterToHex('amarelo'));
  console.log(converterToHex('vermelho'));
  console.log(converterToHex('azul'));
  console.log(converterToHex('verde'));
  console.log(converterToHex('laranja'));
  console.log(converterToHex('roxo'));
  console.log(converterToHex('aqua'));
  console.log(converterToHex('verde claro'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  console.log('________________________________');
  for (var n2 = 100; n2 <= 120; n2++) {
    n2 % 2 === 0 ? console.log(n2) : '';
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for (var n3 = 111; n3 <= 125; n3++) {
    n3 % 2 === 0 ? '' : console.log(n3);
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  for (var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 != 0) {
      console.log('FIZZ');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('BUZZ');
    } else if (i % 5 === 0 && i % 3 === 0) {
      console.log('FIZZ---BUZZ');
    } else {
      console.log(i);
    }
  }
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
