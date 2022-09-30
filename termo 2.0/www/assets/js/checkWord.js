let word = setWord();
let invalidLetters = []
let validLetters = []
let incorrectPlacementLetters = []

function checkWord(){
    console.log('entrow')
    let activeDiv = getActiveDiv()
    wordTyped = words[rowIndex].join('')
    wordTyped = wordTyped.toLowerCase()
    let wordArray = word.split('')

    for(let i = 0; i < wordTyped.length; i++){
        if(wordTyped[i] === wordArray[i]){
            activeDiv.children[i].classList.add('green')

            pushLetterToArray(wordTyped[i].toUpperCase(), validLetters)
        }
        else if(wordArray.includes(wordTyped[i])){
            activeDiv.children[i].classList.add('yellow')
            pushLetterToArray(wordTyped[i].toUpperCase(), incorrectPlacementLetters)
        }
        else{
            pushLetterToArray(wordTyped[i].toUpperCase(), invalidLetters)
        }
    }

    updateKeyboard(validLetters, invalidLetters, incorrectPlacementLetters)

    if(wordTyped == word){
        return true;
    }
    return false
}

function pushLetterToArray(letter, arr){
    if(!arr.includes(letter)){
        arr.push(letter)
    }
}

async function isValidWord(wordTyped){
    console.log(wordTyped)
    let data = {wordTyped}
    const OPTIONS = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch('/verify', OPTIONS)
    const isValid = await response.json()
    console.log(typeof(isValid))
    return isValid
}