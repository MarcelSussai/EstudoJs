(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * substring()
  var str1 = 'Marcel Sussai de Oliveira 0123456789 abcdefghijklmnopqrstuvxywz';
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(str1.substring(26, 36));            // # 0123456789
  console.log(str1.substring(36, 26));            // # 0123456789
  console.log(str1.substring(37));                // # abcdefghijklmnopqrstuvxywz
  console.log(str1.substring(0, 25));             // # Marcel Sussai de Oliveira
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Substituindo
  function replaceString(oldS, newS, fullS) {
    var tamO = oldS.length;
    var tamF = fullS.length;
    for (var i = 0; i < tamF; i++) {
      if (fullS.substring(i, i + tamO) === oldS) {
        fullS = fullS.substring(0, i) + newS + fullS.substring(i + tamO, tamF);
      }
    }
    return fullS;
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(replaceString('palavra', 'troca', 'Estou a testar para palavra alvo'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  // * melhor maneira
  function replaceString2(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(replaceString2('palavra', 'troca', 'Estou a testar para palavra alvo'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
