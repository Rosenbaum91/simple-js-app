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

document.write('<div class="pokemonList">');
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.7) {
        document.write('<div class="pokemon--big">');
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
        document.write(' - Wow, that\'s big!');
    } else {
        document.write('<div class="pokemon">');
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    }
    document.write('</div>');
}
document.write('</div>');