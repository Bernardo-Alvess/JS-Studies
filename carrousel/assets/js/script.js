// const nextImage = (imagesArr) => {
//     const display = document.getElementById('display');
//     let path = display.src.substring(22, display.src.length);
//     let currentImage = imagesArr.indexOf(path);
//     if(currentImage == imagesArr.length - 1){
//         display.src = imagesArr[0];
//     }else{
//         display.src = imagesArr[currentImage + 1]
//     }
// }

// const previousImg = (imagesArr) =>{
//     const display = document.getElementById('display');
//     let path = display.src.substring(22, display.src.length);
//     let currentImage = imagesArr.indexOf(path);
//     if(currentImage == 0){
//         display.src = imagesArr[imagesArr.length - 1];
//     }else{
//         display.src = imagesArr[currentImage - 1]
//     }
// }

// const images = ['assets/imgs/zoro.jpg', 'assets/imgs/kimetsu.jpg', 'assets/imgs/jujutsu.jpg'];

// document.getElementById('next').addEventListener('click', function() {nextImage(images)});
// document.getElementById('previous').addEventListener('click', function(){previousImg(images)});



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

const images = ['assets/imgs/zoro.jpg', 'assets/imgs/kimetsu.jpg', 'assets/imgs/jujutsu.jpg'];

const nextImageButton = document.getElementById('next');
const previousImageButton = document.getElementById('previous');

nextImageButton.addEventListener('click', function() {changeImages(images, 'next')});
previousImageButton.addEventListener('click', function(){changeImages(images, 'previous')});
