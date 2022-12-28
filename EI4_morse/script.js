// ETAPE 1

function getLatinCharacterList(text) {
    return text.split("")
}

//console.log(getLatinCharacterList("Hello world"))

// ETAPE 2

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinToMorse(letter) {
    return latinToMorse[letter]
}

//console.log(translateLatinToMorse("A"))

// ETAPE 3

function encode(text) {
    let newText = getLatinCharacterList(text.toUpperCase());
    let arrMorse = [];
    for(let i=0; i< newText.length; i++) {
        arrMorse.push(translateLatinToMorse(newText[i]));
    }
    return arrMorse.toString()
}

//console.log(encode("hello world"))

// ETAPE 4

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  }

function getMorseCharacterList(morseStuff) {
	return morseStuff.split(" ")
}

//console.log(getMorseCharacterList(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))

function translateMorseCaracter(morse) {
	return morseToLatin[morse]
}

//console.log(translateMorseCaracter("...."))

function decode(morseStuff) {
  let newMorseStuff = getMorseCharacterList(morseStuff);
  let arrText = [];
  for (let i = 0; i < newMorseStuff.length; i++) {
    if (newMorseStuff[i] == "/") {
      arrText.push(" ");
    } else {
      arrText.push(translateMorseCaracter(newMorseStuff[i]));
    }
  }
  return arrText.join("")
}

//console.log(decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))

// ETAPE 5

function getValue() {
	let input = document.getElementById("in").value;
	document.getElementById("morseTranslation").innerHTML += encode(input);
}

function getValueBis() {
	let input = document.getElementById("inBis").value;
	document.getElementById("normalTranslation").innerHTML += decode(input);
}
