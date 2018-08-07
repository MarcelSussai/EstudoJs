(function(doc) {
  'use strict';
  //‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
  // * Eventos de mouse
  var lastX; // Tracks the last observed mouse X position
  var rect = doc.querySelector('[data-js="dv"]');
  rect.addEventListener("mousedown", function(e) {
    if (e.which == 1) {
      lastX = e.pageX;
      addEventListener("mousemove", moved);
      e.preventDefault(); // Prevent selection
    }
  });

  function moved(e) {
    if (e.which != 1) {
      removeEventListener("mousemove", moved);
    } else {
      var dist = e.pageX - lastX;
      var newWidth = Math.max(10, rect.offsetWidth + dist);
      rect.style.width = newWidth + "px";
      lastX = e.pageX;
    }
  }
  //˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭˭
})(document);
