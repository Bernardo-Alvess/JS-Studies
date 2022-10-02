function getActiveDiv(){
    let activeDiv = document.querySelector('.active')
    return activeDiv
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

function populate(activeDiv){
    let letters = activeDiv.children
    for(let i = 0; i < 5; i++){
        letters[i].textContent = wordTyped[i]
    }
}

function gameWin(activeDiv){
    const row = activeDiv.dataset.row
    console.log(row)
    alert(`Parabéns, você acertou a palavra: ${word} na linha ${parseInt(row) + 1}`)
}

function gameLost(){
    alert(`Infelizmente não foi dessa vez. \nA palavra era: ${word}`)
}