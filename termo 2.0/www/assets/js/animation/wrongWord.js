function shakeTermo(activeDiv){
    anime({
        targets: activeDiv,
        translateX: [
            {value: 25, duration: 250},
            {value: -25, duration: 250},
            {value: 0, duration: 250}
        ],
        easing: 'easeInOutQuad'
    })
}

