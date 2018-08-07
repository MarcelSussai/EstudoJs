(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * addEventListener()
  // ? captura de eventos no browser!
  //――――――――――――――――――――――――――――――――→
  var $user = doc.querySelector('#username');
  var $pass = doc.querySelector('#password');
  var $btEn = doc.querySelector('#btnEnviar');
  //――――――――――――――――――――――――――――――――→
  // * Função handle
  // ? função que será passada no parâmetro do evento
  // ? essa função também pode ser passada como anônima
  // ? direto no parâmetro do evento
  function handleF1(e) {
    e.preventDefault();
    console.log('________________________________');
    console.log('Clicou', e);
    console.log($user.value, '-', $pass.value);
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  }
  //――――――――――――――――→
  // * Adicionando evento ao botão!
  $btEn.addEventListener('click', handleF1, false);
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
