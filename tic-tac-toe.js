document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const squares = document.querySelectorAll("#board > div");
  let Player = "X";

  //Board grid as an array
  const board = ["", "", "", "", "", "", "", "", ""]
  const statusMessage = document.getElementById("status");
  const original = statusMessage.textContent
  
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

        //Winner is returned with winCheck
        const winner = winCheck();
        
        //If this returns true print message
        if(winCheck()) {
          
          statusMessage.textContent = "Congratulations! " + winner + " is the Winner!";
          statusMessage.classList.add("you-won");

        //If all spaces are filled with no winner show try again message
        } else if (board.every((s) => s !== "")){
          statusMessage.textContent = "No one wins. Try again";
        
        } else {

        //Switches players as usual
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

//Game restart function
const newGame = document.querySelector(".btn");

//On click message is reverted and square are cleared
newGame.addEventListener("click", function() {
  statusMessage.textContent = original;
  statusMessage.classList.remove("you-won");
  squares.forEach((square) => {
    square.textContent = "";
    square.classList.remove("X", "O");

  });

  //Clear board positions
  board.fill("");
  
});



});