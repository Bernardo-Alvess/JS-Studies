console.log('About to fetch a rainbow');

async function catchRainbow(){
    const response = await fetch('rainbow.png');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
    console.log(blob)
}

catchRainbow();
