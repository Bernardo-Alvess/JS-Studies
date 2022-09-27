let word = setWord();
let rowIndex = 0
let letterCount = 0;
let wordTyped = [];
// let activeDiv = document.querySelector('.active')
const words = [
    [],
    [],
    [],
    [],
    [],
    []
]
const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

function makeKeyboard(){

    let firstRow = document.querySelector('#firstRow')
    let secondRow = document.querySelector('#secondRow')
    let thirdRow = document.querySelector('#thirdRow')

    for(let i = 0; i < keys.length; i++){
        const div = document.createElement('div')
        if(i <= 9){
            div.classList.add('keyboardLetter')
            div.dataset.key=`${keys[i]}`
            div.textContent = keys[i]
            firstRow.appendChild(div)
        }else if(i <= 18){
            div.classList.add('keyboardLetter')
            div.dataset.key=`${keys[i]}`
            div.textContent = keys[i]
            secondRow.appendChild(div)
        }else{
            div.classList.add('keyboardLetter')
            div.dataset.key=`${keys[i]}`
            div.textContent = keys[i]
            thirdRow.appendChild(div)
        }
        
    }
}

makeKeyboard()

function getActiveDiv(){
    let activeDiv = document.querySelector('.active')
    return activeDiv
}

async function setWord(){
    word = await getGameWord();
    word = await word.word
}

function filterKeys(key){
    const filter = [
    'Escape',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    '-', '=', "'",
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Clear', 'Home', 'PageUp',
    'Backspace', 'Enter', 'ScrollLock', 'Pause', 'ScrollLock', 'Insert', 'Delete', 'End', 'PageDown', 'NumLock',
    '/', '*', '-', '+', ',',
    'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 
    'Control', 'Shift', 'Control', 'AltGraph', 'ContextMenu',
    ';', '.', ',', '<', '>', ':', '?', '}', ']', '{', '[',
     'Dead', 'Alt', 'Tab', 'CapsLock', 'Control', ' ']
    if(filter.includes(key)){
        return true;
    }
    return false;
}

function changeRows(activeDiv){
    wordTyped = []
    let data = activeDiv.dataset.row;
    rowIndex++;
    letterCount = 0;
    activeDiv.classList.remove('active')
    const termo = document.querySelector('#termo')
    const nextDiv = termo.children[parseInt(data)+1].classList.add('active')
    return nextDiv;
}

function checkWord(){
    let activeDiv = getActiveDiv()
    wordTyped = words[rowIndex].join('')
    wordArray = word.split('')
    console.log(wordTyped, word)
    for(let i = 0; i < wordTyped.length; i++){
        if(wordTyped[i] === wordArray[i]){
            activeDiv.children[i].classList.add('green')
        }
        else if(wordArray.includes(wordTyped[i])){
            activeDiv.children[i].classList.add('yellow')
        }
    }
    if(wordTyped == word){
        return true;
    }
    return false
}

function removeLetter(activeDiv){
    console.log(words, wordTyped)
    words[rowIndex].pop()
    letterCount--
    wordTyped[letterCount] = ''
    populate(activeDiv)
}
function getLetter(e){
    let activeDiv = getActiveDiv();
    console.log(activeDiv)
    const key = e.key
    if(!keys.includes(key)){
        keys.push(key)
    }
    if(key == 'Backspace' && letterCount != 0){
        removeLetter(activeDiv)
        populate(activeDiv)
    }
    else if(key === 'Enter' && letterCount === 5){
        if(checkWord(rowIndex)){
            alert('ACERTOU')
        }else{
            alert('ERROU')
        }
        changeRows(activeDiv)
        return
    }
    else if(!filterKeys(key) && words[rowIndex].length != 5){
        words[rowIndex].push(key);
        wordTyped[letterCount] = key;
        populate(activeDiv)
        console.log(words[rowIndex])
        letterCount++
        console.log(letterCount)
    }else{
        console.log('invalid')
    }
}

function populate(activeDiv){
    let letters = activeDiv.children
    for(let i = 0; i < 5; i++){
        letters[i].textContent = wordTyped[i]
    }
}

// async function getRandom(){
//     let response = await fetch('/words')
//     console.log(response)
// }

window.addEventListener('keydown', getLetter)