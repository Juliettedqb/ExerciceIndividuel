console.log("hello")
let date1 = "11/02/2011"
let date2 = "12/02/2011"

    // ETAPE 1 

const unEvenMonth = [01,03,05,07,08,10,12]
const evenMonth = [02,04,06,09,11]

function isValidDate(date){
    const splittedDate = date.split("/");
    const dateObject = {day : parseInt(splittedDate[0]), month : parseInt(splittedDate[1]), year : parseInt(splittedDate[2])};
    if(dateObject.day >= 1 && dateObject.day <= 29){
        return true
    } else if(dateObject.day == 31 && unEvenMonth.indexOf(dateObject.month) !== -1){
        return true
    } else if (dateObject.day == 30 && EvenMonth.indexOf(dateObject.month) !== -1){
        return true 
    } else {
        return false
    }
}

    // ETAPE 2 

//je convertis la date format jj/mm/aaa en nombre format jjmmaaa
function dateToNumber(date){
    let dateBis = date.replace('/','');
    let dateTer = dateBis.replace('/','');
    return dateTer
}
console.log(dateToNumber(date1))

//je "renverse" le nombre obtenu dans la fonction précédente => aaaammjj
function reverse(date){
    let result = dateToNumber(date)
    const reverse = (result) => parseInt(String(result)
    .split("")
    .reverse()
    .join(""), 10);
    return reverse(result);
}
console.log(reverse(date1))

//est-ce que ma date est la même dans les 2 sens de lecture ? 
function isPalindrome (date){
    if (dateToNumber(date) == reverse(date)){
        return true
    } else {
        return false
    }
}
console.log(isPalindrome(date1))

    // ETAPE 3 VERSION GAETAN 

function getNextPalindromes(x) {
    let date = new Date()
    //console.log(date.toLocaleDateString())
    let palindromes = []
    //date.setDate(date.getDate() +1)
    //console.log(date.toLocaleDateString())
    for (i = 0; palindromes.length < x; i++) {
      date.setDate(date.getDate() + 1)
      //console.log(date.toLocaleDateString())
      if (isPalindrome(date.toLocaleDateString()) == true) {
        //console.log("pi")
        palindromes.push(date.toLocaleDateString())
      }
    }
    return palindromes
  }
