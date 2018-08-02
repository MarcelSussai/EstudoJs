(function(doc, win) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * replace(regexp|substr, newSubstr|function)
  /*
  #   substr
  ? Um String que deve ser substituído por newSubStr.
  ? Ele é tratado como uma string textual e
  ? não é interpretado como uma expressão regular.
  ? Apenas a primeira ocorrência será substituída
  #   newSubstr
  ? A String que substitui a substring recebida do 1º parâmetro
  */
  function replacer(match, p1, p2, p3, offset, string) {
    return [p1, p2, p3].join(' - ');
  }
  //――――――――――――――――――――――――――――――――→
  var re = /(\w+)\s(\w+)/;
  var str = 'John Smith';
  var newstr = str.replace(re, '$2, $1');
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log('abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer));
  console.log(newstr);
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //――――――――――――――――――――――――――――――――→
  function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
      return (offset ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  }
  //――――――――――――――――――――――――――――――――→
  console.log('________________________________');
  console.log(styleHyphenFormat('TestEtdirOgMadlLKJFeee'));
  console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document, window);
