const loadPokemonPage = () => {
    const search = document.getElementById('pokemon-dedicated-search');

    const pokemon = getPokemon(search.value.toLower());

    const main = document.getElementsByTagName('main');
    main.innerHTML = `<img src="${pokemon.sprite}"></img>`;
}