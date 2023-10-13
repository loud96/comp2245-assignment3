document.addEventListener("DOMContentLoaded", function () {
  
  "use strict";
  const squares = document.querySelectorAll("#board > div");
  
    // Add the appropriate class to each square
    squares.forEach((square) => {
      square.classList.add("square");

      square.addEventListener('mouseover', function(e) {
        e.target.classList.add('hover');
      });
      square.addEventListener("mouseout", function(e) {
        e.target.classList.remove('hover');        
      });

      square.addEventListener("click", function() {
        if (square.classList.contains("square")) {
          square.classList.add("X");
          square.textContent = "X";
        }
      });
  });
});