
function rotateLetter(activeDiv){
    const letras = activeDiv.children
    anime({
        targets: letras,
        rotateY: 360,
        duration: 500,
        easing: 'easeInOutSine',
        direction: 'normal'
    })
}