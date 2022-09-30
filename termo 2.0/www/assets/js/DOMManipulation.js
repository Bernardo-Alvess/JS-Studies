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