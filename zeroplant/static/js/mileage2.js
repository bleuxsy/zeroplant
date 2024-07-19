
  // Get the popup
  var popup = document.getElementById("myPopup");

  // Get the <span> element that closes the popup
  var span = document.getElementsByClassName("close")[0];

  // Show the popup 2 seconds after page load
  window.onload = function() {
      setTimeout(function() {
          popup.style.display = "block";
      }, 3000);
  }

  // When the user clicks on <span> (x), close the popup
  span.onclick = function() {
      popup.style.display = "none";
  }

  // When the user clicks anywhere outside of the popup, close it
  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  }
