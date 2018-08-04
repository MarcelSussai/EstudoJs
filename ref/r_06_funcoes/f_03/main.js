(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Escopo de funções
  /*
    ? As variáveis definidas no interior de uma função
    ? não podem ser acessadas de nenhum lugar fora da função
    ? porque a variável está definida apenas no escopo da função
    ? No entanto, uma função pode acessar todas as
    ? variáveis e funções definidas fora do escopo
    ? onde ela está definida e construida
    ? Em outras palavras, a função definida no escopo global
    ? pode acessar todas as variáveis definidas no escopo global.
    ? A função definida dentro de outra função também pode
    ? acessar todas as variáveis definidas na função hospedeira
    ? e outras variáveis ao qual a função hospedeira tem acesso.
  */
  //――――――――――――――――――――――――――――――――→
  // ? definidas no escopo global:
  var n1 = 8, n2 = 4;
  var s1 = 'teste';
  //――――――――――――――――――――――――――――――――→
  // ? definida no escopo global:
  function multiplica() {
    return n1 * n2
  }
  //――――――――――――――――→
  // ? Um exemplo de função aninhada
  function funPai() {
    var n1 = 2, n2 = 4;
    function funFilhoAdd() {
      return s1 + ' - valor: ' + (n1 + n2);
    }
    return funFilhoAdd();
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(multiplica());            // # 32
  console.log(funPai());                // # teste - valor: 6
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Escopo e a pilha de função
  /*
    ? Uma função pode referir-se e chamar a si própria.
    ? Há três maneiras de uma função referir-se a si mesma:
    ? 1 - o nome da função
    ? 2 - arguments.callee
    ? 3 - uma variável no escopo que se refere a função
  */
 //――――――――――――――――――――――――――――――――→
  function loop(x) {
    // debugger;
    if (x >= 10) {
      return console.log(x);;
    }
    // ? chamada recursiva
    loop(x + 1);
  }
  //――――――――――――――――→
  function addQuad(a, b) {
    function quad(x) {
      return x * x;
    }
    return quad(a) + quad(b);
  }
  //――――――――――――――――→
  // ? Uma vez que a função interna forma uma closure
  // ? você pode chamar a função externa e
  // ? especificar argumentos para a função externa e interna:
  function fora(x) {
    function dentro(y) {
      return x + y;
    }
    return dentro;
  }
  //――――――――――――――――→
  function a(x) {
    function b(y) {
      function c(z) {
        console.log(x + y + z);
      }
      c(3)
    }
    b(2)
  }
  //――――――――――――――――→
  // * Usando objeto de argumentos (arguments)
  function fun3(s) {
    var resu = '';
    for (var i = 1; i < arguments.length; i++) {
      resu += arguments[i] + s;
    }
    return resu;
  }
  //――――――――――――――――→
  function Fun4() {
    this.p1 = 'Valor p1';
    this.este = function() {
      console.log(this);
    }
  }
  //――――――――――――――――→
  // ? repare que quando crio funções com propriedades e
  // ? que serão como objetos eu inicio seu nome com maisculo
  function Fun5() {
    // ? guarda a referência ao this:
    var that = this;
    this.p1 = 'func5 valor 1';
    this.este = function() {
      console.log(that);
      console.log(this);
    }
  }
  //――――――――――――――――――――――――――――――――→
  // ? Pense nisso como:
  // ? Receba uma função que adicionará 3
  // ? ao que quer que você repasse para ela
  var f_dentro = fora(2);
  var resultado1 = f_dentro(6);
  var resultado2 = fora(2)(6);
  var k1 = new Fun4();
  var k2 = new Fun5();
  loop(0);
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(addQuad(2, 4));               // # 20
  console.log(addQuad(3, 5));               // # 34
  console.log(addQuad(5, 8));               // # 89
  console.log('―――――――――――――――→');
  console.log(resultado1);                  // # 8
  console.log(resultado2);                  // # 8
  a(1)                                      // # 6
  console.log('―――――――――――――――→');
  // # teste1, teste2, :
  console.log(fun3(', ', 'teste1', 'teste2'));
  // # teste1, teste2, teste3, :
  console.log(fun3(', ', 'teste1', 'teste2', 'teste3'));
  // # teste1, teste2, teste3, teste4, :
  console.log(fun3(', ', 'teste1', 'teste2', 'teste3', 'teste4'));
  console.log('―――――――――――――――→');
  k1.este();
  setTimeout(k1.este, 1000);
  k2.este();
  setTimeout(k2.este, 1000);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
