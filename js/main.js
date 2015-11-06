var selectLabel = document.getElementById('section-label')
var sectionSelector = document.getElementById('section-selector')

var updateSelected = function() {

  // Remove the current active pane, if it exists
  var currentActivePane = document.getElementById('panes').getElementsByClassName('active');
  if (currentActivePane.length > 0) {
    currentActivePane[0].classList.remove('active');
  }


  var selectedOption = sectionSelector.options[sectionSelector.selectedIndex];
  selectLabel.innerHTML = selectedOption.innerHTML;
  document.getElementById(selectedOption.value).classList.add('active');
  window.location = '#' + selectedOption.value;
  window.scrollTo(0,0)
}

sectionSelector.addEventListener('change', updateSelected, false);
if (window.location.hash.length > 1) {
  // We already have a pane selected
  for (var x = 0; x < sectionSelector.options.length; x++) {
    if (sectionSelector.options[x].value === window.location.hash.substr(1)) {
      sectionSelector.selectedIndex = x;
      break;
    }
  }
}
updateSelected();
