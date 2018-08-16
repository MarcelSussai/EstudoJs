(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var cpfs = [
    '049-214 3421-1',
    '210.458.522-05',
    '735 500 794 - 22',
    '101.123-131x32'
  ];
  var regxCPF1 = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
  var regxMes1 = /ju[nl]ho/g;
  var regxTag1 = /<\w+>/g;
  var regxTag2 = /<\w+><\/\w+>/g;
  var regxTag3 = /(<(\w+)>)([^<]+)(<\/\w+>)/g;
  var txtMesR1 = 'Os meses de janeiro, junho e julho começam com a letra j.';
  var txtHTML1 = '<div><section><blockquote>Texto <img /></blockquote></section></div>';
  var txtHTML2 = '<div><ul><li></li><li></li><li><span></span></li></ul></div>';
  var txtHTML3 = '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>';
  //――――――――――――――――――――――――――――――――→
  function cleanCPF(cpf) {
    return cpf.replace(/\D/g, '');
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Limpando CPFs:');
  cpfs.forEach(function(cpf) {
    console.log(cleanCPF(cpf));
  });
  console.log('―――――――――――――――→');
  console.log('Formatando CPFs corretamente:');
  cpfs.forEach(function(cpf) {
    console.log(cleanCPF(cpf).replace(regxCPF1, '$1.$2.$3-$4'));
  });
  console.log('―――――――――――――――→');
  console.log(txtMesR1.match(regxMes1));
  console.log(txtHTML1.match(regxTag1));
  console.log(txtHTML2.match(regxTag2));
  console.log(txtHTML3.replace(regxTag3, '$1O texto dentro da tag \'$2\' é \'$3\'$4'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
