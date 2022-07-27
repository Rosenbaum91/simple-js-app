let pokemonList = [
    {   
        name: 'Pikachu',
        height: 0.4,
        types: [
            'ELECTRIC'
        ]
    },
	{
		name: 'Mew',
		height: 0.4,
		types: ['psychic']
	},
	{
		name: 'Mewtwo',
		height: 2,
		types: ['psychic']
	},
	{
		name: 'Charizard',
		height: 17,
		types: ['fire', 'flying']
	},
	{
		name: 'Dragonite',
		height: 22,
		types: ['dragon', 'flying']
	},
];

// loop that iterates over pokemonList and writes names and heights
for (let i = 0; i < pokemonList.length; i++) {
	if (pokemonList[i].height > 15) {
		document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - Wow, that\'s a big Pokemon!')
	} else if (pokemonList[i].height <= 15 && pokemonList[i].height > 10) {
		document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - That\'s a normal size.')
	} else	if (pokemonList[i].height < 10) {
		document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - That\'s a tiny Pokemon!')
	}
}