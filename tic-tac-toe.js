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

          const winner = winCheck();
          if(winCheck()) {
            const winMessage = document.getElementById("status");
            winMessage.textContent = "Congratulations! " + winner + " is the Winner!";
            winMessage.classList.add("you-won");
          } else {

          //Switches players
          Player = Player === "X" ? "O" : "X";
          }
        }
      });
  });

  function winCheck() {
    const winCombos =  [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], //row wins
      [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns wins
      [0, 4, 8], [2, 4, 6]             //diagonal wins
    ];
    //For every combo, check of spot a has a value and that value is a combo value
    //Then repeats and compares if that is the equal to b and then c
    for (const combo of winCombos) {
      const [a,b,c] = combo;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        // Returns the winning letter
        return board[a];
      }
    }
    //Returns nothing. Game continues
    return null;
  }




});