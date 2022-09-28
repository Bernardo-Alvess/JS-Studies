let letterCount = 0;
const word = ['', '', '', '', '']


function getLetter(event){    
    const key = event.key
    const activeDivs = getLetterDivs();
    if(key === 'Backspace' && letterCount != 0){
        removeLetter(word);
        letterCount--;
        displayWord(word, activeDivs, letterCount)
        return;
    }

    if(!filterKeys(key)){
        if(letterCount < 5){
            word[letterCount] = key
            displayWord(word, activeDivs, letterCount)
            letterCount++
        }    
    }
    console.log(word)
    
}

function displayWord(word, activeDivs, letterCount){
    activeDivs[letterCount].innerHTML = `<span>${word[letterCount]}</span>`
}

function filterKeys(key){
    const filter = [
    'Escape',
    'F1', 'F2', 'F3', 'F4', 'F6', 'F7', 'F8', 'F9', 'F10', 'F12',
    '-', '=', "'",
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
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

function removeLetter(word){
    word.pop()
    return word
}

function getLetterDivs(){
    const row = document.querySelector('.active')
    const divs = row.children
    return divs;
}
window.addEventListener('keydown', getLetter);