// ETAPE 1

function getLatinCharacterList(text) {
    return text.split("")
}

//console.log(getLatinCharacterList("Hello world"))

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

// ETAPE 2

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

// console.log(encode("hello world"))

// ETAPE 4
