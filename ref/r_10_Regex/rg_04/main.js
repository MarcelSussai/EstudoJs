(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var rgx01 = new RegExp('^\\d+', 'gm');
  var rgx02 = /\d+$/gm;
  var txt01 = '0123456789 _+-.,!@#$%^&*();\\/|<>"\' | abcdefghijklmnopqrstuvwxyz | ABCDEFGHIJKLMNOPQRSTUVWXYZ | ';
  var txt02 = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.';
  var txt03 = 'Silvio Santos, nome artístico de Senor Abravanel (Rio de Janeiro, 12\n de dezembro de 1930), é um apresentador de televisão e empresário brasileiro.\n Proprietário do Grupo Silvio Santos, que inclui empresas como a Liderança\n Capitalização (administradora da loteria Tele Sena), a Jequiti Cosméticos e o\n Sistema Brasileiro de Televisão (mais conhecido como SBT), Silvio Santos possui\n um patrimônio avaliado em aproximadamente 6\n bilhões de reais.';
  var txt04 = '<main>\n  <div class="container">\n    <span class="text date"></span>\n    <p class=\'excerpt\'></p>\n  </div>\n</main>';
  var arr01 = ['container', 'text', 'date', 'excerpt', 'main'];
  //――――――――――――――――――――――――――――――――→
  function temAClasse(txt, cssClass) {
    var rgx = new RegExp('class=["\'].*' + cssClass + '.*["\']', 'gm');
    return rgx.test(txt);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Regex usando o construtor para números no início da linha do texto:');
  console.log(rgx01);
  console.log(txt01.match(rgx01));
  console.log(txt02.match(rgx01));
  console.log('―――――――――――――――→');
  console.log('Regex para números somente no final das linhas:');
  console.log(rgx02);
  console.log(txt03.match(rgx02));
  console.log('―――――――――――――――→');
  console.log('Quais classes CSS existem:');
  arr01.forEach(function(cssClass) {
    console.log(temAClasse(txt04, cssClass), 'para a classe', cssClass);
  });
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
