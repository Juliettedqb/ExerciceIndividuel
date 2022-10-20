const prompt1 = prompt("Comment tu t'appelles ?")
const prompt2 = prompt('Quelle est ton année de naissance ?')
const prompt3 = prompt('Quel est ton mois de naissance ?')
const prompt4 = prompt ('En quelle année sommes nous')
const prompt5 = prompt ('Quel est le mois actuel ?')

const askName = "Hello " + prompt1
const askBirthYear = "Vous avez " + (prompt4-prompt2) + " ans et " + (prompt5-prompt3) + " mois"


// let h2 = document.getElementById("name")
// h2.innerText = askName

document.body.innerHTML += '<h2>' +askName+ '</h2>'
document.body.innerHTML += '<h3>' +askBirthYear+ '<h3>'

// const element = document.createElement("h2");
//     element.innerText = askName;
//     element.style ="color: red";
// document.body.appendChild(element);

