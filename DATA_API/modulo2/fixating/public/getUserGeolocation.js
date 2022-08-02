function setup(){
    const submitBtn = document.getElementById('submitBtn');+

    noCanvas();
    const video = createCapture(VIDEO);
    video.size(320, 240)

    const getData = () => {                
        video.loadPixels();
        const image64 = video.canvas.toDataURL();

        if('geolocation' in navigator){
            console.log('Geolocation available')
            
            navigator.geolocation.getCurrentPosition(async position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const name = document.getElementById('name').value;
                const data = {lat, lon, name, image64}
                console.log(data)
                const response = await sendDataToServer(data);
                console.log(response);
                document.getElementById('latitude').textContent = response.lat;
                document.getElementById('longitude').textContent = response.lon;
    
            })
            
        
        }else{
            console.log('Geolocation not available')
        }
    }
    
    const sendDataToServer = async (data) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch('/api', options);
        const responseJson = await response.json();
        return responseJson;
    }
    
    submitBtn.addEventListener('click', getData);
}
