const animeCharacters = ['imgs/eren.png', 'imgs/gojo.png', 'imgs/luffy.jpg'];

async function fetchCharacters(filenames){
    for(let i = 0; i < filenames.length; i++){
        let response = await fetch(filenames[i]);
        let blob = await response.blob();
        let img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.width =  '400'
        document.getElementById('container').appendChild(img);
    }
}

fetchCharacters(animeCharacters).then(response => {
    console.log('MAOEH')
}).catch(error =>{
    console.error(error);
});
