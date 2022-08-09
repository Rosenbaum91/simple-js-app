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
  })();
   

  console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());
});

pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonList = document.querySelector('.list-group');
  
  let pokemonListItem = document.createElement('li');
  pokemonListItem.classList.add('list-group-item', 'col-6', 'mx-auto', 'border-0');

  
  let pokemonButton = document.createElement('button');
  pokemonButton.innerText = pokemon.name;
  pokemonButton.classList.add('btn', 'btn-default', 'btn-block', 'font-weight-bold');
  pokemonButton.setAttribute("data-toggle", "modal");
  pokemonButton.setAttribute("data-target", "#pokemon-modal");

  pokemonListItem.appendChild(pokemonButton);
  pokemonList.appendChild(pokemonListItem);
  
  pokemonButton.addEventListener('click', function() {
    showDetails(pokemon);
  });

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button1");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function()
    {showDetails(pokemon)});
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
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});


