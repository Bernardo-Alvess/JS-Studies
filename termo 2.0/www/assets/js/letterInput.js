let rowIndex = 0;
let letterCount = 0;
let wordTyped = [];
const words = [
    [],
    [],
    [],
    [],
    [],
    []
]

async function getLetter(e){
    let activeDiv = getActiveDiv();
    const key = e.key
    if(key == 'Backspace' && letterCount != 0){
        removeLetter(activeDiv)
        populate(activeDiv)
    }
    else if(key === 'Enter' && letterCount === 5){
        const validate = await isValidWord(wordTyped)
        if(validate == 'true'){
            rotateLetter(activeDiv)
            if(!checkWord()){
                changeRows(activeDiv)
            }
        }else{
            shakeTermo(activeDiv)
            return
        }
    }
    else if(!filterKeys(key) && words[rowIndex].length != 5){
        words[rowIndex].push(key);
        wordTyped[letterCount] = key;
        populate(activeDiv)
        console.log(words[rowIndex])
        letterCount++
        console.log(letterCount)
    }
}

function removeLetter(activeDiv){
    words[rowIndex].pop()
    letterCount--
    wordTyped[letterCount] = ''
    populate(activeDiv)
}

window.addEventListener('keydown', getLetter)
