(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * DOM
  /*――――――――――――――→
  * .parentNode .childNodes .firstChild .lastChild .previousSibling
  * .nodeValue .nodeName .children .firstElementChild
  * .lastElementChild .nextElementSibling .previousElementSibling
  * .childElementCount .hasAttribute(atributo) .hasAttributes()
  ――――――――――――――――→
  ? O Document Object Model , geralmente chamado de DOM ,
  ? é uma parte essencial para tornar os sites interativos.
  ? É uma interface que permite que uma linguagem de programação
  ? manipule o conteúdo, estrutura e estilo de um site.
  ? JavaScript é a linguagem de script do lado do cliente
  ? que se conecta ao DOM em um navegador da Internet.
  ――――――――――――――――→
  ? Além de analisar o estilo e a estrutura do HTML e do CSS,
  ? o navegador cria uma representação do documento conhecido
  ? como Document Object Model (DOM). Este modelo permite que o
  ? JavaScript acesse o conteúdo de texto e os elementos
  ? do documento do site como objetos.
  */ //―――――――――――→
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  
  var $header = doc.querySelector('.main-header');
  let $main = doc.querySelector('.main');
  var $secContent = $main.children[1];
  let $link01 = doc.getElementById('id_01');
  let $li01 = doc.getElementById('li01');
  var $btnMC = doc.getElementById('btnMudaCor');
  var toglle = false;
  //――――――――――――――――――――――――――――――――→
  $btnMC.addEventListener('click', () => {
    if(!toglle) {
      $header.style.backgroundColor = '#0b4c61';
      toglle = true;
    } else {
      $header.style.backgroundColor = '#33ccff';
      toglle = false;
    }
  });
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log($header);
  console.log($main);
  console.log($link01);
  console.log('―――――――――――――――→');
  console.log($header.style.backgroundColor = '#33ccff');
  console.log($header);
  console.log('―――――――――――――――→');
  console.log($link01.href);
  console.log($link01.textContent);
  console.log('―――――――――――――――→');
  // * .nodeType
  // ? Cada nó em um documento possui um tipo de nó ,
  // ? que é acessado por meio da nodeTypepropriedade.
  // ? Document           = 9
  // ? Element            = 1
  // ? Text               = 3
  // ? Comments           = 8
  // ? documentFragment   = 22
  console.log(doc.nodeType);
  console.log($main.nodeType);
  console.log($main.firstChild.nodeType);
  console.log('―――――――――――――――→');
  console.log($main.parentNode);
  console.log($main.parentElement);
  console.log('―――――――――――――――→');
  console.log($header.parentNode);
  console.log($header.parentElement);
  console.log('―――――――――――――――→');
  console.log($main.childNodes);
  // ? trás simplesmente elementos html!
  console.log($main.children);
  console.log('―――――――――――――――→');
  console.log($main.children[1]);
  console.log('―――――――――――――――→');
  console.log($main.firstChild);
  console.log($main.firstElementChild);
  console.log($main.lastChild);
  console.log($main.lastElementChild);
  console.log('―――――――――――――――→');
  console.log($main.lastChild.previousSibling);
  console.log($main.lastElementChild.previousElementSibling);
  console.log($main.firstElementChild.nextElementSibling);
  console.log($header.nextSibling);
  console.log($li01);
  console.log($li01.nextElementSibling);
  console.log('―――――――――――――――→');
  console.log('nodeValue:', $secContent.firstChild.nodeValue);
  console.log('childNodes:', $secContent.childNodes);
  console.log('nodeValue:', $secContent.firstChild.nextSibling.nodeValue);
  console.log('―――――――――――――――→');
  console.log($secContent.nodeName);
  console.log($header.nodeName);
  console.log($btnMC.nodeName);
  console.log($link01.nodeName);
  console.log($li01.nodeName);
  console.log($main.nodeName);
  console.log($secContent.nodeName);
  console.log($secContent.firstChild.nextSibling.nodeName);
  console.log($secContent.firstChild.nodeName);
  console.log('―――――――――――――――→');
  console.log($main.childElementCount);
  console.log($main.children.length);
  console.log('―――――――――――――――→');
  console.log($main.hasAttribute('class'));
  console.log($main.hasAttribute('id'));
  console.log($main.hasAttribute('data-js'));
  console.log($main.firstElementChild.firstElementChild.hasAttributes());
  console.log($main.firstElementChild.hasAttributes());
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
