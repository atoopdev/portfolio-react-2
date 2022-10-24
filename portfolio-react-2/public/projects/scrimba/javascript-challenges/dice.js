let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;

let diceRoll;

// message at top of screen indicating who has current turn
const gameMessage = document.getElementById("game-message");
// output player current score
const scorePlayer1 = document.getElementById("score-player-one");
const scorePlayer2 = document.getElementById("score-player-two");
// output roll
const rollPlayer1 = document.getElementById("player1-roll");
const rollPlayer2 = document.getElementById("player2-roll");
// buttons
const rollBtn = document.getElementById("roll-dice-el");
const resetBtn = document.getElementById("reset-game-btn");

rollPlayer1.textContent = "-";
rollPlayer2.textContent = "-";
gameMessage.textContent = "Let's play!"

rollBtn.addEventListener("click", function(){
    diceRoll = rollDice();
    if(playerOneTurn){
        console.log("It is player 1's turn.");
        rollPlayer1.classList.add("active-player");
        rollPlayer2.classList.remove("active-player");
        gameMessage.textContent = "It is player 1's turn.";
        console.log("player 1 rolled: ", diceRoll);
        rollPlayer1.textContent = diceRoll;
        playerOneScore+=diceRoll;
        scorePlayer1.textContent = playerOneScore;
        if(playerOneScore>19){
            gameMessage.textContent = "Player One has won!";
            rollBtn.style.display = "none";
        }
    } else{
        console.log("It is player 2's turn.");
        rollPlayer2.classList.add("active-player");
        rollPlayer1.classList.remove("active-player");
        gameMessage.textContent = "It is player 2's turn.";
        console.log("player 2 rolled: ", diceRoll);
        rollPlayer2.textContent = diceRoll;
        playerTwoScore+=diceRoll;
        scorePlayer2.textContent = playerTwoScore;
        if(playerTwoScore>19){
            gameMessage.textContent = "Player Two has won!"
            rollBtn.style.display = "none";
        }
    }
    playerOneTurn =!playerOneTurn;
    
});
resetBtn.addEventListener("click", resetGame);

function rollDice(){
    // console.log("Roll dice clicked.")
    // number between 1 and 6
    const randomNum = Math.floor(Math.random() * 6) +1;
    console.log(randomNum);
    return randomNum;
}

function resetGame(){
    console.log("Reset button clicked.")
    rollBtn.style.display = "inline-block";
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneTurn = true;
    gameMessage.textContent = "Let's play!"
    rollPlayer1.textContent = "-";
    rollPlayer2.textContent = "-";
    scorePlayer1.textContent = " ";
    scorePlayer2.textContent = " ";
    rollPlayer1.classList.add("active-player");
    rollPlayer2.classList.remove("active-player");
}

