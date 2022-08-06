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
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height < 2 && pokemon.height > 0.1) {
      document.write(`<p>${pokemon.name} This is a small body!</p>`);
    }
    else if (pokemon.height < 3) {
      document.write(`<p>${pokemon.name} This is a normal body!</p>`);
    } else { document.write(`<p>${pokemon.name} This is a big body,wow!</p>`); }
  });