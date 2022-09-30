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

function getLetter(e){
    let activeDiv = getActiveDiv();
    console.log(activeDiv)
    const key = e.key
    if(key == 'Backspace' && letterCount != 0){
        removeLetter(activeDiv)
        populate(activeDiv)
    }
    else if(key === 'Enter' && letterCount === 5){
        // if(checkWord()){
        //     alert('ACERTOU')
        // }else{
        //     changeRows(activeDiv)
        // }
        const validate = isValidWord(wordTyped)
        console.log(validate.body, validate)
        if(validate){
            if(checkWord()){
                alert('ACERTOU')
            }else{
                changeRows(activeDiv)
            }
        }
        
        console.log('fahjkl')
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
    console.log(words, wordTyped)
    words[rowIndex].pop()
    letterCount--
    wordTyped[letterCount] = ''
    populate(activeDiv)
}

window.addEventListener('keydown', getLetter)
