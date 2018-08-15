(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var txt = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';
  var rgx =  /(\d\d)\ de\ (junho|julho)\ de\ (\d\d\d\d)/g;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(txt);
  console.log('―――――――――――――――→');
  console.log('Trocando os nomes do texto');
  console.log('―――――――――――――――→');
  console.log(txt.replace(/Manuel\ Marques\ de\ Sousa/g, 'Marcel Sussai de Oliveira'));
  console.log('―――――――――――――――→');
  console.log('Trocando naturalidade:');
  console.log('―――――――――――――――→');
  console.log(txt.replace(/brasileiro/g, 'paulista'));
  console.log('―――――――――――――――→');
  console.log('Trocando números por \'-\':');
  console.log('―――――――――――――――→');
  console.log(txt.replace(/\d/g, '-'));
  console.log('―――――――――――――――→');
  console.log('Trocando de \'D\' a \'h\' por \'0\':');
  console.log('―――――――――――――――→');
  console.log(txt.replace(/[D-Hd-h]/g, 0));
  console.log('―――――――――――――――→');
  console.log('Trocando \'A\' e \'a\' por \'4\':');
  console.log('―――――――――――――――→');
  console.log(txt.replace(/a/gi, 4));
  console.log('―――――――――――――――→');
  console.log('\'O centauro de luvas\' em caixa alta:');
  console.log('―――――――――――――――→');
  console.log(txt.replace(/O\ Centauro\ de\ Luvas/g, function(t) {
    return t.toUpperCase();
  }));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  function getMesNum(me) {
    me = me.toLowerCase();
    var mo = {
      'janeiro': '01',
      'fevereiro': '02',
      'março': '03',
      'abril': '04',
      'maio' : '05',
      'junho': '06',
      'julho': '07',
      'agosto': '08',
      'setembro': '09',
      'outubro': '10',
      'novembro': '11',
      'dezembro': '12'
    }
    return mo[me];
  }
  //――――――――――――――――――――――――――――――――→
  function rplData(r, d, m, a) {
    return d + '/' + getMesNum(m) + '/' + a;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Março é:    ', getMesNum('Março'));
  console.log('Setembro é: ', getMesNum('Setembro'));
  console.log('Dezembro é: ', getMesNum('DEZEMBRO'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(rgx);
  console.log(txt.replace(rgx, rplData));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
