var header = document.querySelector('header');
var section = document.querySelector('section');

//Chamando o arquivo JSON
var requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'; 
var request = new XMLHttpRequest();
request.open('GET', requestUrl);
//Definindo o tipo do arquivo e enviando a request
request.responseType = 'json';
request.send();

request.onload = function(){
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(obj){
    var myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);7

    var myParagraph = document.createElement('p');
    myParagraph.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myParagraph);
}

function showHeroes(obj){
    var heroes = obj.members;

    for(let i = 0; i < heroes.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
        myPara2.textContent = `Age: ${heroes[i].age}`;
        myPara3.textContent = 'Superpowers:'

        let superPowers = heroes[i].powers;
        for(let j = 0; j < superPowers.length; j++){
            let listItem = document.createElement('li');
            listItem.textContent = superPowers[j]
            myList.appendChild(listItem);
        }

            
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}