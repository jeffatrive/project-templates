(function () {
  var canvas = document.getElementById('riveCanvas');
  if (!canvas) return;

  var riveInstance = null;

  var layout = new rive.Layout({ fit: rive.Fit.Layout });

  riveInstance = new rive.Rive({
    canvas: canvas,
    layout: layout,
    autoplay: true,
    autoBind: true,
    src: 'up-and-running.riv',
    artboard: 'Artboard',
    stateMachines: ['State Machine 1'],
    onLoad: function () {
      if (riveInstance) riveInstance.resizeDrawingSurfaceToCanvas();
    }
  });

  function resize() {
    if (riveInstance) riveInstance.resizeDrawingSurfaceToCanvas();
  }

  window.addEventListener('resize', resize);

  var lastDPR = window.devicePixelRatio || 1;
  var checkDPR = setInterval(function () {
    var dpr = window.devicePixelRatio || 1;
    if (dpr !== lastDPR) {
      lastDPR = dpr;
      resize();
    }
  }, 500);
})();
