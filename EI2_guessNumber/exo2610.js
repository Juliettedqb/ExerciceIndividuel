// let givenNumber;
// let rightNumber;

// function didIwin(rightNumber){
//   givenNumber = prompt("Pick a number x, 0<x<50");
// if(givenNumber<=0 || givenNumber>=50) {
//   alert("This number doesn't belong to ]0;50[")
// } else if(givenNumber<rightNumber) {
//   alert("Higher")
// } else if (givenNumber>rightNumber) {
//   alert("Lower")
// } else {
//   alert("You won")
// };
// }

// function gamePlay(rightNumber){
//   do {
//     didIwin(rightNumber);
//   } while (givenNumber != rightNumber);
// }

// gamePlay(22);

let rightNumber = 22;

function handleNumberInput(){
  let quantity = document.getElementById("quantity"); //        <input type="number" id="quantity" min="1" max="50">
  let value = quantity.value;
  let history = document.getElementById("history"); //          <p id="history"></p>
  if(value<0 || value>50){
    history.innerText += "\n This number does not belong to [0;50]"
  } else if(value<rightNumber){
    history.innerText += "\n Higher"
  } else if(value>rightNumber){
    history.innerText += "\n Lower"
  } else if(value==rightNumber){
    history.innerText += "\n You won"
  } 
}



















// function askPlayerOne() {
//   var askNumber = Number(prompt("Donne un nombre à faire deviner, entre 0 et 50", "0 - 50"))

//   if (askNumber >= 0 && askNumber <= 50) {
//       gamePlay(askNumber)
//   } else {
//       while (askNumber < 0 || askNumber > 50)
//           askNumber = Number(prompt("Entre 0 et 50 !", "0 - 50"))
//       gamePlay(askNumber)
//   }
// }

// function gamePlay(findNumber) {
//   var givenNumber = Number(prompt("Tente un nombre entre 0 et 50 !", "0 - 50"))

//   while (didWin(givenNumber, findNumber) == false) {
//       givenNumber = Number(prompt("Un autre?"))
//   }
// }

// function didWin(givenNumber, findNumber) {
//   do {
//       if (givenNumber < findNumber) {
//           alert("Plus grand !")
//           return false
//       } else if (givenNumber > findNumber) {
//           alert("Plus petit !")
//           return false
//       }
//   } while (findNumber != givenNumber)

//   if (givenNumber == findNumber) {
//       document.getElementById("resultPlayer").innerHTML += `Bravo ! Vous avez deviné le nombre, ${findNumber}`
//       return true
//   }
// }

// askPlayerOne()
