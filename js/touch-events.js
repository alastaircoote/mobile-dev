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

  var touchElements = {};

  var getTransformCSSFromTouch = function(touch) {
    var top = touch.clientY - touchTarget.offsetTop + window.scrollY;
    var left = touch.clientX - touchTarget.offsetLeft + window.scrollX;

    return 'translate3d(-50%, -50%, 0) translate3d(' + left + 'px, ' + top + 'px, 0)';
  }

  touchTarget.addEventListener('touchstart', function(evt) {

    // IMPORTANT! We need to stop this event from propagating up the DOM tree, or
    // it will scroll the page.

    //evt.stopPropagation()

    var newTouch = evt.changedTouches[0];

    // Create the element we will use to show/track our touch
    var touchElement = document.createElement('div');
    touchElement.classList.add('touch-element');
    touchElement.style.webkitTransform = touchElement.style.transform = getTransformCSSFromTouch(newTouch);

    touchElements[newTouch.identifier] = touchElement;
    touchTarget.appendChild(touchElement);

  }, false)

  touchTarget.addEventListener('touchmove', function(evt) {

    for (var x = 0; x < evt.changedTouches.length; x++) {
      var touch = evt.changedTouches[x];
      touchElements[touch.identifier].style.webkitTransform = touchElements[touch.identifier].style.transform = getTransformCSSFromTouch(touch);
    }

    evt.stopPropagation()
    evt.preventDefault()

  }, false)

  touchTarget.addEventListener('touchend', function(evt) {

    for (var x = 0; x < evt.changedTouches.length; x++) {
      var touch = evt.changedTouches[x];
      var el = touchElements[touch.identifier];
      el.parentNode.removeChild(el);
      touchElements[touch.identifier] = null;
    }

  }, false);


})();
