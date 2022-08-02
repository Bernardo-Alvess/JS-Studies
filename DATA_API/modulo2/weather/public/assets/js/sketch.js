const checkIn = document.getElementById('check-in');
const latitude = document.getElementById('lat');
const longitude = document.getElementById('lon');

const getGeolocation = () => {
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(async pos => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            const timestamp = new Date().getTime();
            const date = new Date(timestamp);
            const time = date.toLocaleString('sv')

            latitude.textContent = lat;
            longitude.textContent = lon;

            const data = {lat, lon, time};

            const api_url = `/weather`;
            const response = await fetch(`${api_url}/${data.lat}/${data.lon}`);
            const json = await response.json();
            console.log(json)

            data.country = json.location.country;
            data.city = json.location.name;
            data.temperature = json.current.temp_c;
            data.day_night = json.current.is_day
            data.condition = json.current.condition;
            data.wind = json.current.wind_kph;
            data.feels_like = json.current.feelslike_c;

            const options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            fetch('/api', options)
        })
    }
}

checkIn.onclick = () => {
    getGeolocation();
};