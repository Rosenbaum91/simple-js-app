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


    function add(pokemon) {   
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("Pokemon is not correct");
      }
    }
  
    function getAll() {    
      return pokemonList;  
    }
  
    function addListItem(pokemon) {  
      let pokemonList = document.querySelector(".pokemon-list");  
      let pokemonItem = document.createElement("li");
      pokemonList.classList.add("group-list-item");
      pokemonList.classList.add("col-sm-4", "col-md-6", "col-lg-12");
      let buttonItem = document.createElement("button");  
      buttonItem.classList.add("pokemonButton");
      buttonItem.innerText = pokemon.name;
      buttonItem.setAttribute("data-toggle", "modal");
      buttonItem.setAttribute("data-target", "#pokemon-modal");
      $(buttonItem).addClass('button-class btn-block btn m1');
      pokemonItem.appendChild(buttonItem);  
      pokemonList.appendChild(pokemonItem);  
      buttonItem.addEventListener("click", function (button) {
         showDetails(pokemon);
  
       });
     }
     function loadlist(){
      if (pokemon.height < 2 && pokemon.height > 0.1) {
        document.write(`<p>${pokemon.name} This is a small body!</p>`);
      }
      else if (pokemon.height < 3) {
        document.write(`<p>${pokemon.name} This is a normal body!</p>`);
      } else { document.write(`<p>${pokemon.name} This is a big body,wow!</p>`); }
     }
     function showDetails(pokemon) {
      console.log(pokemon);

     }
     
    return {
      add: add,         
      getAll: getAll,   
      addListItem: addListItem,  
      showDetails: showDetails,
      
    }
  })();
  function loadList()
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
    });
      pokemonRepository.addListItem(pokemon);
    });