//Data from https://pokeapi.co/

let apiURL = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemon(id){

    //Chamando a PokéAPI
    apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(apiURL);
    const pokemon = await response.json()

    //Definindo os dados do JSON dentro de constantes
    const name = pokemon.name;
    const hp = pokemon.stats[0].base_stat;
    const attack = pokemon.stats[1].base_stat;
    const defense = pokemon.stats[2].base_stat;
    const specialAttack = pokemon.stats[3].base_stat;
    const specialDefense = pokemon.stats[4].base_stat;
    const speed = pokemon.stats[5].base_stat;
    const sprite = pokemon.sprites.front_default;
    const type = pokemon.types[0].type.name;

    return {name, hp, attack, defense, specialAttack, specialDefense, speed, sprite, type}
}

async function createPokemon(){
    //Loop para receber todos os pokémons de primeira geração;
    for(let i = 1; i < 152; i++){
        const pokemon = await getPokemon(i);

        //criando elementos html
        let pokemonContainerDiv = document.createElement('div');
        let pokemonName = document.createElement('h1');
        let pokemonDiv = document.createElement('div')
        let pokemonImg = document.createElement('img');

        //atribuindo os valores para esses elemento
        pokemonName.innerText = pokemon.name;
        pokemonImg.src = pokemon.sprite;

        //adicionando as classes de estilização
        pokemonContainerDiv.classList.add("pokemon-container", `${pokemon.type}`);
        pokemonContainerDiv.id = `${pokemon.name}`
        pokemonName.classList.add("pokemon-name");
        pokemonDiv.classList.add("pokemon-div");
        pokemonImg.classList.add("pokemon-img");

        //Criando um bloco de HTML       
        pokemonContainerDiv.appendChild(pokemonName);
        pokemonContainerDiv.appendChild(pokemonDiv)
        pokemonDiv.appendChild(pokemonImg)

        //adicionando tudo ao documento
        document.getElementById('pokedex-selector').appendChild(pokemonContainerDiv);
    }

    getDivs();
}

createPokemon();


function getDivs(){
    
    const pokemonDivArr = document.getElementsByClassName('pokemon-container');

    for(let i = 0; i < pokemonDivArr.length; i++){
        pokemonDivArr[i].addEventListener('click', getSpecificPokemon)
    }
}

async function getSpecificPokemon(){
    const id = this.id;
    const pokemon = await getPokemon(id);
    showSelectedPokemon(pokemon.name, pokemon.sprite, [pokemon.attack, pokemon.defense], pokemon.type)
}

function showSelectedPokemon(name, sprite, stats, type){

    const div = 
    `<div class="pokemon-selected-screen">
        <div class="selected-name-div">
            <h1 class="pokemon-selected-name">${name}</h1>
            <p>${type}</p>
        </div>
        <img src="${sprite}" alt="${name}" class="pokemon-selected-img">
        <div class="pokemon-selected-stats">
            <p>Attack: ${stats[0]}</p>
            <p>Defense: ${stats[1]}</p>
        </div>
        
    </div>`;

    const pokedexScreen = document.getElementById('pokedex-screen');
    pokedexScreen.innerHTML = div;
}

