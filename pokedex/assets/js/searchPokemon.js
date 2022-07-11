const searchPokemon = () => {
    const search = document.getElementById('searchBar');
    const filter = search.value.toUpperCase();
    const divs = document.getElementsByClassName('pokemon-container');

    for(i = 0; i < divs.length; i++){
        const id = divs[i].id;
        if(id.toUpperCase().indexOf(filter) == -1){
            divs[i].style.display = "none";
        }else{
            divs[i].style.display = '';
        }
    }

}
