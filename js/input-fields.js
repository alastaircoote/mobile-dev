(function() {

  // Datetime value update

  var dtInput = document.getElementById('datetime-input');
  var dtValue = document.getElementById('datetime-value');

  dtInput.addEventListener('change', function() {
    dtValue.innerHTML = this.value
  }, false)
})();

(function() {

  // Show preview from file input

  var fileInput = document.getElementById('file-input');
  var fileInputResult = document.getElementById('file-input-result');

  fileInput.addEventListener('change', function(evt) {
    var tgt = evt.target || window.event.srcElement;
    var files = tgt.files;

    // If there are no files or no FileReader support, exit
    if (!files || !FileReader) return;

    // Clear out any previous results
    fileInputResult.innerHTML = "";

    for (var x = 0; x < files.length; x++) {
      var file = files[x];

      var targetElementTagName = file.type.indexOf("video/") === 0 ? "video" : "img";
      var targetElement = document.createElement(targetElementTagName);
      fileInputResult.appendChild(targetElement)

      var fr = new FileReader();
      fr.onload = function () {
          targetElement.src = fr.result;
      }
      fr.readAsDataURL(file);
    }




  }, false);

})();
