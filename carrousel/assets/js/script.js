const changeImages = (images, mode) => {
    const display = document.getElementById('display');
    const currentImage = display.getAttribute('src');
    let currentImageIndex = images.indexOf(currentImage);
    switch(mode){
        case 'previous':
            if(currentImageIndex === 0){
                display.src = images[images.length - 1]
            }else{
                display.src = images[currentImageIndex - 1];
            }
            break;
        case 'next':
            if(currentImageIndex === images.length - 1){
                display.src = images[0];
            }else{
                display.src = images[currentImageIndex + 1];
            }
            break;
    }
    
}

const images = ['assets/imgs/zoro.jpg', 'assets/imgs/kimetsu.jpg', 'assets/imgs/jujutsu.jpg', 'assets/imgs/berserk.jpg', 'assets/imgs/shingeki.jpg'];

const nextImageButton = document.getElementById('next');
const previousImageButton = document.getElementById('previous');

nextImageButton.addEventListener('click', () =>{
    changeImages(images, 'next');
    anime({
        targets: '#next',
        translateX: 300,
        duration: 50,
        direction: 'alternate',
        easing: 'easeInOutElastic'
    })
})
previousImageButton.addEventListener('click', () =>{
    changeImages(images, 'previous');
    anime({
        targets: '#previous',
        translateX: -300,
        duration: 50,
        direction: 'alternate',
        easing: 'easeInOutElastic'
    })
})

