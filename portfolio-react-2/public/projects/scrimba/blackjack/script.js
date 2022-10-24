// array of cards in hand
let cards = [];


let sum = 0;
console.log("Contents of sum: ", sum);

// track win state for game
let hasBlackjack = false;

// tracks if game is still active
let isAlive = false;

// for communicating to player
let message = "";
// for outputing messages to browser
let cardsEL = document.getElementById("cards-el");

// more dynamic way to grab css selectors that getElementbyID. must use # to specify is id. use . for classes
let sumEL = document.querySelector("#sum-el");
let messageEL = document.getElementById("message-el");

// player object
let player ={
    chips : 145,
    name : "Amanda"
}


let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name + ": $" + player.chips;



// ----------------------- getRandomCard -------------------------------

function getRandomCard(){
    // number between 1 and 13
    let randomNum = Math.floor(Math.random() * 13) + 1;
    console.log(randomNum);
    if (randomNum === 1){
        console.log("Random num is 1, returning 11");
        return 11;
    } else if (randomNum <11){
        console.log("Random num is <11, returning randomNum");
        return randomNum;
    } else {
        console.log("Random num is 11 or >, returning 10");
        return 10;
    }
// return randomNum;
}

// --------------------- startGame -----------------------------
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
renderGame();
}

// --------------------- renderGame ----------------------------
function renderGame(){
//to win total must be exactly 21

// output cards in hand
cardsEL.textContent = "Cards:  ";
for(let n=0;n<cards.length; n++){
    cardsEL.textContent += " " + cards[n];
}

// output hand total
sumEL.textContent = "Sum: " + sum;

    // determine game status
    if (sum <= 20) {
        console.log("Contents of sum: ", sum);
        message="Cards less than 21. Do you want to draw a new card?";
        messageEL.textContent = message;
        console.log("IsAlive: ", isAlive)
    } else if (sum === 21) {
        hasBlackjack = true;
        isAlive = false; 
        message = "Exactly 21! You've got blackjack!"
        messageEL.textContent = message;
        console.log("IsAlive: ", isAlive)
    } else {
        isAlive = false;
        message = "Over 21! Sorry, you are out of the game!";
        messageEL.textContent = message;
        console.log("IsAlive: ", isAlive)
    }
}

// ------------------------newCard------------------------------
function newCard(){
    console.log("new card button clicked");

    // only grant new card if game still in play
    if(isAlive===true && hasBlackjack===false){
    let card = getRandomCard();
    // update listed card output
    cards.push(card);
    console.log(cards);
    sum+=card;
    sumEL.textContent = "Sum: " + sum;
    renderGame();
    } else{
        console.log("Cannot give new card, game over.");
    }
}
