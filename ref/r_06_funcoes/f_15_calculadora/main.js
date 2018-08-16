(function(win, doc) {
  'use strict';
  // * Calculadora
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  var $visor = doc.querySelector('[data-js="visor"]');
  var $btnsNumbers = doc.querySelectorAll('[data-js="btnNumber"]');
  var $btnCE = doc.querySelector('[data-id="btnOperatorCE"]');
  var $btnOperator = doc.querySelectorAll('[data-js="btnOperator"]');
  var $btnEqual = doc.querySelector('[data-id="btnOperatorEqual"]');
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function handClickNum(e) {
    e.preventDefault();
    ($visor.value === '0') ? $visor.value = this.value : $visor.value += this.value;
  }

  function handClickCE(e) {
    e.preventDefault();
    $visor.value = '0';
  }

  function handClickOperator(e) {
    e.preventDefault();
    $visor.value = removeLastItemIfItIsOp($visor.value);
    ($visor.value === '0') ? $visor.value = this.value : $visor.value += this.value;
  }

  function handClickEqual(e) {
    e.preventDefault();
    $visor.value = removeLastItemIfItIsOp($visor.value);
    var allValues = $visor.value.match(getRegxOp());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function getOp() {
    return Array.prototype.map.call($btnOperator, function(op) {
      return op.value;
    });
  }

  function getRegxOp() {
    return new RegExp('\\d+[' + getOp().join('') + ']?', 'g');
  }

  function isLastItemOp(inp) {
    var op = getOp();
    var li = inp.split('').pop();
    return op.some(function(op) {
      return op === li;
    });
  }

  function removeLastItemIfItIsOp(inp) {
    if (isLastItemOp(inp)) {
      return inp.slice(0, -1);
    }
    return inp;
  }

  function calculateAllValues(acu, atu) {
    var firstVal = acu.slice(0, -1);
    var ope = acu.split('').pop();
    var lastVal = removeLastItemIfItIsOp(atu);
    var lastOpe = getLastOp(atu);
    return doOperator(ope, firstVal, lastVal) + lastOpe;
  }

  function getLastOp(v) {
    return isLastItemOp(v) ? v.split('').pop() : '';
  }

  function doOperator(op, fV, lV) {
    switch(op) {
      case '÷': return Number(fV) / Number(lV);
      case '+': return Number(fV) + Number(lV);
      case '×': return Number(fV) * Number(lV);
      case '+': return Number(fV) - Number(lV);
    }
  }
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  function initialize() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($btnsNumbers, function(ite) {
      ite.addEventListener('click', handClickNum, false);
    });
    Array.prototype.forEach.call($btnOperator, function(ite) {
      ite.addEventListener('click', handClickOperator, false);
    });
    $btnEqual.addEventListener('click', handClickEqual, false);
    $btnCE.addEventListener('click', handClickCE, false);
  }
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭

  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  initialize();
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(window, document);
