(function() {
  var container = document.getElementById('hammer-js');
  var hammerTouchTarget = document.getElementById('hammer-touch-target');

  var hammertime = new Hammer(hammerTouchTarget);
  hammertime.get('rotate').set({ enable: true });
  hammertime.get('pinch').set({ enable: true });

})()
