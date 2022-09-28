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
