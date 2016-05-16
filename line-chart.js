'use strict';
if (this.FunWithCanvas === undefined) this.FunWithCanvas = {};

(function(context) {

  function start() {

    var theCanvas = document.querySelector('#the-canvas');
    var ctx = theCanvas.getContext('2d');

    ctx.strokeStyle = '#00F';

    var data = [30, 50, 90, 87, 75, 120, 47, 15, 120, 65, 60];
    ctx.beginPath();
    var height = theCanvas.clientHeight;
    var x = 0;
    ctx.moveTo(x, (height - data[0]));
    for(var i = 1; i < data.length; i++) {
      var y = height - data[i];
      x += 50;
      ctx.lineTo(x, y);

    }

    ctx.stroke();
  }
  context.start = start;

})(window.FunWithCanvas);
