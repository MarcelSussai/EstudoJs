(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var $main = doc.querySelector('.main');
  var $header = doc.querySelector('.main-header');
  var $secContent = doc.querySelector('[data-js="content"]');
  var $firstText = $secContent.firstChild;
  var $clonHead01 = $header.cloneNode(false);
  var $clonHead02 = $header.cloneNode(true);
  var $p = $secContent.firstElementChild.firstElementChild;
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log($main);
  console.log($header);
  console.log($secContent);
  console.log($firstText);
  console.log($clonHead01);
  console.log($clonHead02);
  console.log($p);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  console.log('________________________________');
  console.log($secContent.appendChild($header));
  console.log($secContent.insertBefore($header, $firstText));
  console.log('―――――――――――――――→');
  console.log($clonHead01.innerHTML);
  console.log($clonHead02.innerHTML);
  console.log('―――――――――――――――→');
  console.log($secContent.appendChild($clonHead01));
  console.log($secContent.appendChild($clonHead02));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  var $headers = doc.querySelectorAll('.main-header');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log($headers);
  console.log($headers.length);
  console.log('―――――――――――――――→');
  console.log($main.hasChildNodes());
  console.log($p.hasChildNodes());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
