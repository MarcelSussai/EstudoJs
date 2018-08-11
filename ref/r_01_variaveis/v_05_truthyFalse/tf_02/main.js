(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var isTruthy = function(v) {
    return v ? true : false;
  };
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(isTruthy(''));
  console.log(isTruthy(null));
  console.log(isTruthy(!!0));
  console.log(isTruthy(undefined));
  console.log(isTruthy(!!''));
  console.log(isTruthy(!!""));
  console.log(isTruthy(!1));
  console.log(isTruthy(0));
  console.log(isTruthy(-0));
  console.log(isTruthy(NaN));
  console.log(isTruthy(!true));
  console.log('―――――――――――――――→');
  console.log(isTruthy('String'));
  console.log(isTruthy('1'));
  console.log(isTruthy(!!1));
  console.log(isTruthy(!undefined));
  console.log(isTruthy("teste"));
  console.log(isTruthy(!0));
  console.log(isTruthy(!false));
  console.log(isTruthy({}));
  console.log(isTruthy(!NaN));
  console.log(isTruthy(!!true));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * car
  //――――――――――――――――――――――――――――――――→
  var carro = {
    marca: 'Marca Padrão',
    modelo: 'Modelo Padrão',
    placa: 'Placa Padrão',
    ano: 2018,
    cor: 'Cor Padrão',
    qtdPortas: 4,
    assentos: 5,
    qtdPessoas: 0
  }
  //――――――――――――――――――――――――――――――――→
  carro.setCor = function(cor) {
    carro.cor = cor;
  }
  //――――――――――――――――→
  carro.getCor = function() {
    return carro.cor;
  }
  //――――――――――――――――→
  carro.getModelo = function() {
    return carro.modelo;
  }
  //――――――――――――――――→
  carro.getMarca = function() {
    return carro.marca;
  }
  //――――――――――――――――→
  carro.getMarcaModelo = function() {
    return 'Esse carro é um: ' + carro.getMarca() + ' ' + carro.getModelo();
  }
  //――――――――――――――――→
  carro.AddPessoasCar = function (nP) {

    var totP = carro.qtdPessoas + nP;
    var txtP = (totP === 1) ? ' pessoa' : ' pessoas';
    var qtsC = carro.assentos - carro.qtdPessoas;
    //――――――――――――――――→
    if (carro.qtdPessoas === carro.assentos && totP >= carro.assentos) {
      return 'O carro já está lotado!';
    }
    //――――――――――――――――→
    if (totP > carro.assentos) {
      return 'Só cabem mais ' + qtsC + txtP;
    }
    //――――――――――――――――→
    carro.qtdPessoas += nP;
    return 'Já temos ' + totP + txtP + ' no carro.';
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(carro);
  console.log(carro.getCor());
  console.log(carro.setCor('Preto!'));
  console.log(carro.getCor());
  console.log(carro.getMarcaModelo());
  console.log(carro.AddPessoasCar(2));
  console.log(carro.AddPessoasCar(4));
  console.log(carro.AddPessoasCar(3));
  console.log(carro.AddPessoasCar(-4));
  console.log(carro.AddPessoasCar(10));
  console.log(carro.AddPessoasCar(4));
  console.log(carro.AddPessoasCar(1));
  console.log(carro.qtdPessoas);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
