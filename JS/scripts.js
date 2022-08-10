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

  function add(pokemon) {
    pokemonList.push(pokemon)
  }

  return {
    getAll: getAll,
    add: add
  }

  function addListItem(pokemon) {
    button.innerText = pokemon.name;
    button.classList.add("button1");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    }

})();


pokemonRepository.getAll().forEach(function (pokemon) {
let pokemonList = document.querySelector(".pokemon-list");
let pokemonListItem = document.createElement('li');
document.createElement('button');
listButton.classList.add('mb-2', 'btn', 'btn-secondary');
listItem.appendChild(button);
pokemonDisplay.appendChild(listItem);
listButtonEventListener(listButton, pokemon);
pokemonListItem.classList.add('list-group-item', 'col-6', 'mx-auto', 'border-0');
});

function listButtonEventListener(listButton, pokemon) {
  listButton.addEventListener('click', function() {
    showDetails(pokemon);
});
