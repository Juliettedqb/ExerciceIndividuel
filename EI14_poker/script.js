
//ETAPE 1

let numbers =["1","2","3","4","5","6","7","8","9","10","V","D","R"];
let symbols = ["♠","♥","♦","♣"];
let allCards = [];

function createDeck() {
  for (let i = 0; i < symbols.length; i++) {
    numbers.forEach((e) => allCards.push(e + symbols[i]));
  }

  const shuffledArray = allCards.sort((a, b) => 0.5 - Math.random());

  return allCards;
}
let deck = createDeck();

//ETAPE 2

function deal(n) {
  return deck.splice(-n);
}
const player1 = deal(2);
const player2 = deal(2);

  //add html 
  function playerOneHand() {
    document.getElementById("player1").innerHTML = player1;
  }
  function playerTwoHand() {
    document.getElementById("player2").innerHTML = player2;
  }

//ETAPE 3

function flop() {
  deck.pop();
  const firstRound = deal(3);
  deck.pop();
  const secondRound = deal(1);
  deck.pop();
  const thirdRound = deal(1);
  const cards = firstRound + secondRound + thirdRound;
  return cards
}
const cards = flop()

  //add html 
  function checkoutFlop() {
    document.getElementById("flop").innerHTML = cards;
  }










    



