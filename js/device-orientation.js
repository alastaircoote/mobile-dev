(function() {

  var orientationAlpha = document.getElementById('orientation-alpha');
  var orientationBeta = document.getElementById('orientation-beta');
  var orientationGamma = document.getElementById('orientation-gamma');
  var orientationImage = document.getElementById('orientation-image');

  var orientationChange = function(ev) {
    orientationAlpha.innerHTML = ev.alpha;
    orientationBeta.innerHTML = ev.beta;
    orientationGamma.innerHTML = ev.gamma;
  };

  var startTrackingOrientation = function() {
    window.addEventListener('deviceorientation', orientationChange, false);
  };

  var stopTrackingOrientation = function() {
    window.removeEventListener('deviceorientation', orientationChange);
  }

  window.addEventListener('hashchange', function() {
    if (window.location.hash === '#device-orientation') {
      startTrackingOrientation();
    } else {
      stopTrackingOrientation();
    }
  })

  if (window.location.hash === '#device-orientation') {
    startTrackingOrientation();
  }


})()
