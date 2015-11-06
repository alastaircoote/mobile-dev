(function() {
  var container = document.getElementById('hammer-js');
  var hammerTouchTarget = document.getElementById('hammer-touch-target');

  container.addEventListener('touchmove', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  })

  var hammertime = new Hammer(hammerTouchTarget);
  hammertime.get('rotate').set({ enable: true });
  hammertime.get('pinch').set({ enable: true });

  var transforms = [];

  hammertime.on('pan', function(evt) {
    transforms[0] = 'translate3d(' + evt.deltaX + 'px, ' + evt.deltaY + 'px,0)';
    hammerTouchTarget.style.webkitTransform = hammerTouchTarget.style.transform = transforms.join(' ')
  });

  hammertime.on('rotate', function(evt) {
    transforms[1] = hammerTouchTarget.style.transform = 'rotate(' + evt.rotation + 'deg)'
    hammerTouchTarget.style.webkitTransform = hammerTouchTarget.style.transform = transforms.join(' ')
  });

  hammertime.on('pinch', function(evt) {
    transforms[2] = hammerTouchTarget.style.transform = 'scale(' + evt.scale + ',' + evt.scale + ')'
    hammerTouchTarget.style.webkitTransform = hammerTouchTarget.style.transform = transforms.join(' ')
  });

})()
