(function() {
  var vibrateBasic = document.getElementById('vibrate-basic');
  var morseTextArea = document.getElementById('morse-text');
  var vibrateStartMorse = document.getElementById('vibrate-start-morse');
  var vibrateStopMorse = document.getElementById('vibrate-stop-morse');


  vibrateBasic.addEventListener('touchstart', function() {
    navigator.vibrate(200);
  });

  vibrateStartMorse.addEventListener('click', function() {
    var asMorse = window.morseEncode(morseTextArea.value);
    var unitLength = 100;
    var vibrateArray = [];
    for (var x = 0; x < asMorse.length; x++) {
      if (asMorse[x] === ' ') {
        vibrateArray.push(0)
        vibrateArray.push(unitLength * 3)
      } else if (asMorse[x] === '.') {
        vibrateArray.push(unitLength)
        vibrateArray.push(unitLength)
      } else if (asMorse[x] === '-') {
        vibrateArray.push(unitLength * 3)
        vibrateArray.push(unitLength)
      }
    }
    navigator.vibrate(vibrateArray)
  });

  vibrateStopMorse.addEventListener('click', function() {
    navigator.vibrate(0)
  })

})()
