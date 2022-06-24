const iss_api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function createMap(){
    const data = await getISS();
    const coordinates = [data.latitude, data.longitude]
    let map = L.map('map').setView([0, 0], 0);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attibuition: '© https://www.openstreetmap.org/copyright'
    }).addTo(map);

    const marker = L.marker(coordinates).addTo(map);

    marker.bindPopup(`<p>Lat: ${coordinates[0]} Lon: ${coordinates[1]}</p>`).openPopup();
}

async function getISS(){
    const response = await fetch(iss_api_url);
    const data = await response.json();

    const {latitude, longitude} = data;

    console.log(latitude, longitude);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;

    return {latitude, longitude}
}

setInterval(getISS, 3000)
createMap();