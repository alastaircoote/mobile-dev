// Tracking timeouts for touchend and click events

(function() {
  var testButton = document.getElementById('touch-test-button');
  var lastTouchEnd = document.getElementById('last-touchend');
  var lastClick = document.getElementById('last-click');

  //FastClick.attach(testButton)

  var lastTouchStartTime = null;

  testButton.addEventListener('touchstart', function(evt) {
    lastTouchStartTime = Date.now();
    lastTouchEnd.innerHTML = '';
    lastClick.innerHTML = '';
  }, false);

  testButton.addEventListener('touchend', function(evt) {
    lastTouchEnd.innerHTML = String(Date.now() - lastTouchStartTime) + 'ms';
  }, false);

  testButton.addEventListener('click', function() {
    lastClick.innerHTML = String(Date.now() - lastTouchStartTime) + 'ms'
  }, false);
})();

// Draw circles for every touch

(function() {
  var touchTarget = document.getElementById('simple-touch-target');
  var touchTableBody = document.getElementById('touch-table-body');

  var getTransformCSSFromTouch = function(touch) {
    var top = touch.clientY - touchTarget.offsetTop + window.scrollY;
    var left = touch.clientX - touchTarget.offsetLeft + window.scrollX;

    return 'translate3d(-50%, -50%, 0) translate3d(' + left + 'px, ' + top + 'px, 0)';
  }

  touchTarget.addEventListener('touchstart', function(evt) {

  }, false)

  touchTarget.addEventListener('touchmove', function(evt) {

  }, false)

  touchTarget.addEventListener('touchend', function(evt) {

  }, false);


})();
