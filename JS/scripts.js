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
    let pokemonListElement = document.querySelector('.pokemon-list');  
    let pokemonItem = document.createElement("li");
    let button = document.createElement('Mew');
    let button = document.createElement('MewTwo');
    let button = document.createElement('Kangaskhan');
    let button = document.createElement('Groudon');
    buttonItem.classList.add("pokemonButton");
    pokemonItem.appendChild(buttonItem);  
    pokemonList.appendChild(pokemonItem);  
    buttonItem.addEventListener("click", function (button) {
       showDetails(pokemon); 

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