(function(doc, win) {
  'use strict';
  // * Hello World - Olá Mundo!
  //______________________________________________________________
  var OlaMundo = 'Hello World! - Olá Mundo!';
  //――――――――――――――――――――――――――――――――
  console.log('________________________________');
  console.log('Olá Mundo! - Hello World!');
  console.log(OlaMundo);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――
  var myH1 = doc.querySelector('h1');
  myH1.innerHTML = OlaMundo + ' (Javascript)';
  //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
})(document, window);
