const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', sendGeolocation);

function sendGeolocation(){
    if('geolocation' in navigator){
        console.log('geolocation available')
        navigator.geolocation.getCurrentPosition(async position => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            document.getElementById('longitude').textContent = lon;
            document.getElementById('latitude').textContent = lat

            // console.log(position.coords.latitude)
            // console.log(position.coords.longitude)

            const data = {lat, lon};

            const options = {
                method: 'POST', //Escrever na database
                body: JSON.stringify(data), //data é o nome da variável criada na linha 14
                headers: { //Especifica metadados extra para o servidor
                    'Content-Type': 'application/json'
                }
            }

            const response = await fetch('/api', options);
            const responseJSON = await response.json();
            console.log(responseJSON)
            

        })
    }else{
        console.log('Geolocation not available')
    }
}

