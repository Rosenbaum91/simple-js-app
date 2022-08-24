let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Mew',
      height: 0.4,
      weight: 4,
      types: ['Psychic']
    },
    
    {
      name: 'Mewtwo',
      height: 2,
      weight: 122,
      types: ['Psychic']
    },
    
    {
      name: 'Kangaskhan',
      height: 2.2,
      weight: 80,
      types: ['normal']
    },
      
    {
      name: 'Groudon',
      height: 3.5,
      weight: 950,
      types: ['ground']
    }
  ];

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {  
    let pokemonList = document.querySelector('.pokemon-List');  
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(event) {
        showDetails(pokemon)
     });
   }

   function showDetails(pokemon) {
    console.log(pokemon)
  }

  function add(pokemon) {
    pokemonList.push(pokemon)
  }

  return {
    getAll: getAll,
    addListItem: addListItem,
    add: add,
    showDetails: showDetails,
  }
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});