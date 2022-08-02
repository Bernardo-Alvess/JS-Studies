const loadLocations = async () => {
    const response = await fetch('/api');
    const data = await response.json()

    data.forEach(item => {
        const x = `        
        <div class="entries">
            <p>Latitude: <span id="lat"></span>&deg;</p>
            <p>Longitude: <span id="lon"></span>&deg;</p>
        </div>
        `
        const root = document.createElement('div');
        const lat = document.createElement('p');
        const lon = document.createElement('p');
        const time = document.createElement('p');
        const cityCountry = document.createElement('p');
        const condition = document.createElement('p')

        const weather = document.createElement('span');
        const country = document.createElement('span');
        const city = document.createElement('span');
        const icon = document.createElement('img');
        const temp = document.createElement('span');
        const feeling = document.createElement('span');
        const latSpan = document.createElement('span')
        const lonSpan = document.createElement('span')
        const timeSpan = document.createElement('span');


        latSpan.textContent = `${item.lat}° `;
        lonSpan.textContent = `${item.lon}° `;
        timeSpan.textContent = `${item.time}`;
        country.textContent = `Country: ${item.country} `
        city.textContent = `| City: ${item.city}`
        weather.textContent = `${item.condition.text}`
        temp.textContent = `${item.temperature}`
        icon.src = `${item.condition.icon}`

        lat.textContent = 'Latitude: '
        lon.textContent = 'Longitude: '
        time.textContent = 'Date: '
        
        lat.appendChild(latSpan);
        lon.appendChild(lonSpan);
        time.appendChild(timeSpan);
        cityCountry.appendChild(country)
        cityCountry.appendChild(city)
        condition.appendChild(weather)
        condition.appendChild(icon)
        condition.appendChild(temp)
        root.appendChild(lat);
        root.appendChild(lon);
        root.appendChild(time);
        root.appendChild(cityCountry);
        root.appendChild(condition);
        root.classList.add('entries');
        document.getElementById('entries-resume').appendChild(root)
    });

    console.log(data);
}

loadLocations();