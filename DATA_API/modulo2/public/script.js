if('geolocation' in navigator){
console.log("Geolocation is available");

navigator.geolocation.getCurrentPosition(function (position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lon;
})

}else{
    console.log("Geolocation is NOT available");
}
