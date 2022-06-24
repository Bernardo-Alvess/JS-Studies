async function getCrimeData(){
    const response = await fetch('assets/csv/atlcrimecrop.csv');
    const crimeInfo = []; //assets/csv/teste.csv 
    if(response.ok){
        const text = await response.text();
        const table = await text.split('\n').splice(1);
        

        table.forEach(row => {
            const data = row.split(',');
            const lat = data[8];
            const lon = data[9];
            const crime = data[1];
            const date = data[3];
            let coords = [lat, lon, crime, date]
            crimeInfo.push(coords);
        })
    }else{
        console.log('NÃO')
    }

    return {crimeInfo};
}

async function createMap(){
    const atlantaCoordinates = [33.762496, -84.404822];
    
    let map = L.map('map').setView(atlantaCoordinates, 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);
    const data = await getCrimeData();
    for(let i = 0; i < data.crimeInfo.length; i++){
        let marker = L.marker([data.crimeInfo[i][0], data.crimeInfo[i][1]]).addTo(map);
        marker.bindPopup(`<b>${data.crimeInfo[i][2]}</b><br><p>${data.crimeInfo[i][3]}</p>`);
        console.log('passou')
    }
}

createMap();