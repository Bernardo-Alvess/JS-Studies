async function fetchText(){
    const response = await fetch('poem.txt');
    document.getElementById('para').innerText = await response.text();
}

fetchText().catch(error =>{
    console.error(error)
});