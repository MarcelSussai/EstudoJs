(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * 'use strict';
  // ? com essa diretiva não deixa acontecer
  // ? de vazar variaveis declaradas sem o var!
  // ? é uma diretiva inserida no ECAMASCRIPT5
  // ? para corrigir uns erros de linguagem
  // ? tudo que está dentro da função IIFE
  // ? é escopo restrito com o uso do use strict
  // ? não permite o uso do with
  // ? no escopo global, dentro de funções
  // ? o this === undefined com o uso do use strict
  // ? with diz com o escopo do objeto e procura dentro!
  // ! mas tem problemas e por isso não é permitido
  // ! com o uso do use strict
  // ? argumentos de funções, propriedades de objetos e
  // ? funções devem ter nomes diferentes!
  // * delete
  // ? deleta propriedades de objetos!
  // ? fora do modo restrito, ou seja, sem o uso de
  // ? use strict é respondido false e não faz nada
  // ? quando não pode deletar!
  // ? com o uso do use strict lança um SyntaxError se não puder deletar!
  //――――――――――――――――――――――――――――――――→
  var str01 = 'Conteúdo da variável 01';
  //――――――――――――――――→
  var str02 = 'Conteúdo da variável 02';
  //――――――――――――――――→
  var obj01 = {
    prop1: {
      prop2: {
        prop3: {
          prop3_1: 'Conteúdo da prop3_1',
          prop3_2: 'Conteúdo da prop3_2',
          prop3_3: 'Conteúdo da prop3_3'
        }
      }
    }
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str01);
  console.log(str02);
  console.log(obj01.prop1.prop2.prop3.prop3_1);
  console.log(obj01.prop1.prop2.prop3.prop3_2);
  console.log(obj01.prop1.prop2.prop3.prop3_3);
  // ? sem o uso do use strict
  // ? representa o escopo global, no browser o window:
  console.log(this);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function Pessoa(nome, sobreNome, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  // # undefined com o uso do use strict!:
  console.log(this);
  // ? sem o new, e sem o use strict retorna a função
  // ? como undefined, vazando para o escopo global
  // ? suas propriedades! e isso é um problema
  console.log(new Pessoa('Marcel', 'Sussai de Oliveira', 32));
  console.log(delete obj01.prop1.prop2.prop3.prop3_3);
  console.log(obj01);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
