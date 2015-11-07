(function() {
  var vibrateBasic = document.getElementById('vibrate-basic');
  var morseTextArea = document.getElementById('morse-text');
  var vibrateStartMorse = document.getElementById('vibrate-start-morse');
  var vibrateStopMorse = document.getElementById('vibrate-stop-morse');


  vibrateBasic.addEventListener('touchstart', function() {
    navigator.vibrate(200);
  });

  vibrateStartMorse.addEventListener('click', function() {
    // there is a functionc alled morseEncode to use.
  });

  vibrateStopMorse.addEventListener('click', function() {
    
  })

})()
