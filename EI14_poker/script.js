
//ETAPE 1

let numbers =["1","2","3","4","5","6","7","8","9","10","V","D","R"];
let symbols = ["♠","♥","♦","♣"];
let cards = [];

function createDeck() {
  for (let i = 0; i < symbols.length; i++) {
    numbers.forEach((e) => cards.push(e + symbols[i]));
  }

  const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());

  return cards;
}

let deck = createDeck();
console.log(deck)

//ETAPE 2

function deal(n) {
  return deck.splice(-n);
}

const player1 = deal(2)
const player2 = deal(2)

console.log(player1, player2)
console.log(deck)

  //add html stuff
  function playerOneHand() {
    document.getElementById("player1").innerHTML = player1;

  }
  function playerTwoHand() {
    document.getElementById("player2").innerHTML = player2;

  }

//ETAPE 3










    



