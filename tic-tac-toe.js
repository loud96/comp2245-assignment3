document.addEventListener("DOMContentLoaded", function () {
  
  "use strict";
  const squares = document.querySelectorAll("#board > div");
  let Player = "X";
  //Board grid as an array
  const board = ["", "", "", "", "", "", "", "", ""]
  
    // Add the appropriate class to each square
    squares.forEach((square, index) => {
      square.classList.add("square");

      //Changes class to hover and back once mouse hovers each square
      square.addEventListener('mouseover', function(e) {
        e.target.classList.add('hover');
      });
      square.addEventListener("mouseout", function(e) {
        e.target.classList.remove('hover');        
      });

      //Listens for a click - if the square is empty, adds "X" or "O"
      square.addEventListener("click", function() {
        if (!square.classList.contains("X") && (!square.classList.contains("O"))) {
          square.classList.remove("X", "O");
          square.classList.add(Player);
          square.textContent = Player;


          //Update the board with the latest move
          board[index] = Player;

          if(winCheck()) {
            alert(Player)
          }

          //Switches players
          Player = Player === "X" ? "O" : "X";
        }
      });
  });
});