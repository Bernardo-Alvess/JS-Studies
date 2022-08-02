function createMap(coords, zoom){
    let map = L.map('map').setView(coords, zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker(coords);

    marker.bindPopup("Your location");
    marker.addTo(map);
}

if('geolocation' in navigator){
    console.log("Geolocation is available");
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;

        const data = {lat, lon};
        console.log(data)
        const options = {
            method: 'POST',
            Headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch('/api', options).then(response =>{
            console.log(response.json())
        })

        createMap([lat, lon], 13);
    })

    
}else{
    console.log("Geolocation is NOT available");
}

