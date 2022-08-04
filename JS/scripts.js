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

for (let i = 0; i < pokemonList.length; i++) { //conditionals added for weight
	if (pokemonList[i].weight > 40) { //If Pokemon weighs over 40 declares wow thats big
		document.write('<p>' + pokemonList[i].name + ' (weight: ' + pokemonList[i].weight + ') - Wow, that\'s big!')
	} else if (pokemonList[i].weight <= 40 && pokemonList[i].weight > 20) { //If Pokemon is between 20 and 40 declares thats a decent size
		document.write('<p>' + pokemonList[i].name + ' (weight: ' + pokemonList[i].weight + ') - That\'s a decent size.')
	} else	if (pokemonList[i].weight < 20) { //if Pokemon weighs under 20 declares awe thats tiny
		document.write('<p>' + pokemonList[i].name + ' (weight: ' + pokemonList[i].weight + ') - Awe, that\'s tiny!')
	}}

  // this is for task 1.5 JS
  pokemonlist.forEach(function (pokemon) {
    if (pokemon.height < 2 && pokemon.height > 0.1) {
      document.write(pokemon.name + "This is a small body/ ");
    }
    else if (pokemon.height < 3) {
      document.write(pokemon.name + "This is a normal body/ ");
    } else { document.write(pokemon.name + "This is a big body,wow!/"); }
  });
  
  let pokemon1 = "Mew(Height:0.4)";
  document.write(pokemon1);
  let pokemon2 = "MewTwo(Height:2)-wow , this is big";
  document.write(pokemon2);
  let pokemon3 = "machop(Height:2.2)";
  document.write(pokemon3);
  let pokemon4 = "Groudon(Height:3.5)";
  document.write(pokemon4);