let teste = [
    {
        "name": "Casa da Lavoura",
        "numberOfEmployees": 17,
        "ceo": "João Carlos",
        "rating": 7
    },
    {
        "name": "Sul Camisetas",
        "numberOfEmployees": 2,
        "ceo": "Véio loco",
        "rating": 2
    }
]

let requestUrl = 'user.json'
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json'
request.send();

request.onload = function(){
    let user = request.response;
    console.log(user.name)
}