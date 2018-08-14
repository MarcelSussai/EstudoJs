(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var sul = [
    'Paraná',
    'Santa Catarina',
    'Rio Grande do Sul'
  ];
  var sudeste = [
    'São Paulo',
    'Minas Gerais',
    'Rio de Janeiro',
    'Espírito Santo'
  ];
  var nordeste = [
    'Ceará',
    'Piauí',
    'Bahia',
    'Maranhão',
    'Rio Grande do Norte',
    'Paraíba',
    'Pernambuco',
    'Alagoas',
    'Sergipe'
  ];
  var brasil, newSul, newSudeste, newBrasil, newNewBrasil, ev, so, fi;
  //――――――――――――――――――――――――――――――――→
  brasil = sul.concat(sudeste);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('Alguns estados do brasil:', brasil);
  console.log('―――――――――――――――→');
  //――――――――――――――――→
  brasil.unshift('Amazonas', 'Pará', 'Tocantins');
  //――――――――――――――――→
  console.log('Mais estados adicionados:', brasil);
  console.log('Removendo o estado:', brasil.shift());
  console.log('―――――――――――――――→');
  //――――――――――――――――→
  newSul = brasil.slice(2, 5);
  //――――――――――――――――→
  console.log('Estados do sul do brasil:', newSul);
  console.log('Estados do brasil:', brasil);
  console.log('Estados do nordeste:', nordeste);
  console.log('―――――――――――――――→');
  //――――――――――――――――→
  newSudeste = brasil.splice(5, 4);
  brasil = brasil.concat(nordeste);
  newBrasil = [];
  //――――――――――――――――→
  brasil.forEach(function(ite, ind) {
    newBrasil.push({id: ind, estado: ite});
  });
  //――――――――――――――――→
  ev = brasil.every(function(ite) {
    return ite.length > 7;
  });
  //――――――――――――――――→
  so = brasil.some(function(ite) {
    return ite === 'Ceará';
  });
  //――――――――――――――――→
  newNewBrasil = newBrasil.map(function(ite, ind) {
    return {id: (ite.id + 1), estado: ite.estado + ' Pertence ao Brasil'};
  });
  //――――――――――――――――→
  fi = newNewBrasil.filter(function(ite) {
    return (ite.id % 2) === 0;
  });
  //――――――――――――――――→
  console.log('Estados em newSudeste:', newSudeste);
  console.log('Estados do brasil:', brasil);
  console.log('―――――――――――――――→');
  console.log('newBrasil:', newBrasil);
  console.log('―――――――――――――――→');
  console.log('Todos os estados tem mais de 7 letras?:', ev ? 'SIM' : 'NÃO');
  console.log(so ? 'Ceará está incluído' : 'Ceará não está incluído');
  console.log('―――――――――――――――→');
  console.log(newNewBrasil);
  console.log('Estados com id par:', fi);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
