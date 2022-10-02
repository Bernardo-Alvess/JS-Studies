function makeKeyboard(){
    const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    let firstRow = document.querySelector('#firstRow')
    let secondRow = document.querySelector('#secondRow')
    let thirdRow = document.querySelector('#thirdRow')

    for(let i = 0; i < keys.length; i++){
        const div = document.createElement('div')
        if(i <= 9){
            div.classList.add('keyboardLetter')
            div.classList.add(`${keys[i]}`)
            div.textContent = keys[i]
            firstRow.appendChild(div)
        }else if(i <= 18){
            div.classList.add('keyboardLetter')
            div.classList.add(`${keys[i]}`)
            div.textContent = keys[i]
            secondRow.appendChild(div)
        }else{
            div.classList.add('keyboardLetter')
            div.classList.add(`${keys[i]}`)
            div.textContent = keys[i]
            thirdRow.appendChild(div)
        }
        
    }
}

makeKeyboard()

function updateKeyboard(validArr, invalidArr, IncorrectArr){
    console.log('update colors')
    changeKeyboardColor(validArr, 'green', '#firstRow')
    changeKeyboardColor(invalidArr, 'opaque', '#secondRow')
    changeKeyboardColor(IncorrectArr, 'yellow', '#thirdRow')
}

function changeKeyboardColor(arr, color, row){
    row = document.querySelector(row)
    for(let i = 0; i < arr.length; i++){
        let keyboardLetter = document.querySelector(`.${arr[i]}`)
        keyboardLetter.classList.add(color)
    }
}