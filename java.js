// declare variabe and value
let player = {// player name
    name: "Adeolu",
    chips: 220
};
let cards = []; // cards variable
let totalCard = 0;
let hasBlackJack = false;
let isAlive = false;
let bots = ""// message alart 
//getting ids from html document and render it to function
let botsEl = document.querySelector("#bots-el");
let totalEl = document.getElementById("total-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

 
playerEl.textContent = player.name + ': $' + player.chips;
playerEl.className = "botsqusion";

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    /* 0 to 12 i get 0 to 12
    from the range of 1 -> 13 the + 1 add
     1 to the range the total range is now 14 */
    if (randomNum >= 10) {
        return 10;
    } else if (randomNum === 1) {
        return 11;
    }
    return randomNum;
}

// calling the startGame function from html startGame by redering renderGame inside startGame function
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    totalCard = firstCard + secondCard;
    isAlive = true
    renderGame()
}

// creating a functtion 
function renderGame() {
    cardsEl.textContent = "Cards: ";
    cardsEl.className = "scores"
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }

    totalEl.textContent = "Total:" + ' ' + totalCard;
    totalEl.classList = "scores";

    if (totalCard <= 20) {
        bots = "Do you want draw another card ?";
        botsEl.className = "botsqusion"
    } else if(totalCard === 21) {
        bots = "! You've got blackJack !";
        botsEl.className = "win";
        hasBlackJack = true;
    } else {
        bots = "You are out of the Game!"
        botsEl.className = "loss";
        isAlive = false
    }
    botsEl.textContent = bots;
}

const newCard = () => {
    if(isAlive === true && hasBlackJack === false) {
        /* usese if statement and logical oparator
         to check if isAlive is true and
          if hasBlackJack is false so the
           bots can stop giving new cards*/
      let card = getRandomCard();
      totalCard += card;
      cards.push(card);
      renderGame();
    }
    
}
