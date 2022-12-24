// ETAPE 1 & 3

let matches = 50

let x = prompt("How many matches would you like to remove")

function remainingMatches(x) {
    if (x<7 && x>0) {
        matches = matches - x;
    } else { 
        alert("Please remove 1 to 6 matches");
    }
    return matches
}
remainingMatches(x);

// ETAPE 2

function keepPlaying () {
    do {
        let x = prompt("There's " + matches + " matches left. How many matches would you like to remove ?");
        remainingMatches(x);
    } while (matches != 0);   
    if (matches == 0) {
        alert("GAME OVER")
    }
}
keepPlaying();

// ETAPE 4 



// VERSION KLERVY 
// let lastPlayer
// var alumNow = 50

// function howMany(){
//     var arrayNumPlayers=[]
//     if (arrayNumPlayers.length==0){
//     var numPlayers = prompt("Combien de joueurs",3)
//     for (let i=1 ; i<=numPlayers ; i++){
//         arrayNumPlayers.push(i)
//         console.log(arrayNumPlayers)
//     }}
//     return arrayNumPlayers
// }

// function subAlumette (subAlum, player){
    
//     lastPlayer = player
//     alumNow -= subAlum
//     console.log(alumNow)
// }

// function win (alumNow){
//     if (alumNow <= 0 ) {
//         return true
//     }else{
//         return false
//     }
// }


// function askPlayer(array){
//     for (i=1; i<array.length+1;i++){
//         var givenNumber = parseInt (prompt(`joueur ${[i]} Donne moi un nombre d'alumettes entre 1 & 6 s'il te plait.`))
//         if (givenNumber>0 && givenNumber<7 ){
//             subAlumette(givenNumber, [i])
//             if (win(alumNow)){
//                 alert (`gg ${[i]}`)
//                 i=array.length
//                 return true
//             }
            
//         }else{
//             do { 
//                 alert ("Nope, entre 1 & 6 on a dit !")
//                 givenNumber = parseInt (prompt(`Joueur ${[i]}  Donne moi un nombre d'alumettes entre 1 & 6 s'il te plait.`))
//             } while (givenNumber<0 || givenNumber>7)
    
//             subAlumette(givenNumber, [i])
//             if (win(alumNow)){
//                 alert (`gg ${[i]}`)
//                 i=array.length
//                 return true
//             }

//         }
//     }



// }
// function newTurn(){
//     arrayNumPlayers=howMany()
//     do {askPlayer(arrayNumPlayers)}
//     while (askPlayer(arrayNumPlayers)!==true)
// }


// newTurn()



// VERSION THEO
// var matches = 50

// function matchesRemains(nbMatches) {
//     matches = matches - nbMatches
//     return matches
// }

// function askPlayer(nb) {
//     let nbMatches = prompt(`Joueur ${nb}, combien d'allumettes voulez-vous enlever ?`)
//     if (nbMatches > 0 && nbMatches <= 6) {
//         matchesRemains(nbMatches)
//     } else {
//         alert(`Vous devez enlever entre 1 et 6 allumettes`)
//         askPlayer(nb)
//     }
//     return nbMatches
// }

// function askHowManyPlayers() {
//     let nbPlayers = prompt("Combien de joueurs ?")
//     if (nbPlayers < 2) {
//         alert("Vous devez être au moins 2 joueurs")
//         askHowManyPlayers()
//     } else if (nbPlayers >= 2) {
//         alert(`Vous avez choisi de jouer à ${nbPlayers} joueurs`)
//         return nbPlayers
//     } else {
//         alert("Vous devez choisir entre 1 et 4 joueurs")
//         askHowManyPlayers()
//     }
// }

// function launchGame() {
//     let nbPlayers = askHowManyPlayers()
//     while (matches > 0) {
//         for (let i = 1; i <= nbPlayers; i++) {
//             alert(`Il reste ${matches} allumettes`)
//             askPlayer(i)
//             if (matches == 0) {
//                 alert(`Joueur ${i}, vous avez gagné !`)
//                 break
//             }
//         }
//     }
// }

// launchGame()