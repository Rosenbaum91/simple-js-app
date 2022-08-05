let pokemonList = [
	{	name: 'Mew', 
		height: 0.4,
		weight: 4, 
		types: ['Psychic']},
	
    {	name: 'Mewtwo',
		height: 2,
		weight: 122,
		types: ['Psychic']},
	
    {	name: 'Kangaskhan',
		height: 2.2,
		weight: 80,
		types: ['normal']},
    
    {   name: 'Groudon',
        height: 3.5,
        weight: 950,
        types: ['ground']}
];


  pokemonList.forEach(function (pokemon) {
    if (pokemon.height < 2 && pokemon.height > 0.1) {
      document.write(pokemon.name + "This is a small body/ ");
    }
    else if (pokemon.height < 3) {
      document.write(pokemon.name + "This is a normal body/ ");
    } else { document.write(pokemon.name + "This is a big body,wow!/"); }
  });

  let pokemonRepository = (function () {
    let repository = [ ];
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return repository;
    }
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