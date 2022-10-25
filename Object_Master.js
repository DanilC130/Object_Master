//////// .map()
// Map will make a copy of an array and apply our own twist to it
// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map( item => `<li>${item}</li>` );

// We can also use map with an array of numbers

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map( val => val**3 );
// copy
// This will create list of cubed numbers. [1, 8, 27, 64, 125]

//////// .filter()
// const values = [1, 2, 3, 4, 5];
// const evens = values.filter( val => val % 2 === 0 );
// copy
// This will create a list of only the even values... [2, 4] if we wanted the odds we could get them by changing the === to !==

// If we want only the groceries that have the letter "o" in them we could write...

// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const oFoods = groceries.filter( item => item.includes("o") );

// We can do anything we want with that callback function as long as it returns true or false. We can even chain filter and map together if we want to.

// const values = [1, 2, 3, 4, 5];
// const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
// copy
// This will filter out the even numbers and cube the ones that are left over. [1, 27, 125]

const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
const idByThrees = pokémon.filter( p => p.id % 3 === 0 );
console.log(idByThrees)

// an array of pokémon objects that are "fire" type
const fireTypeArr = pokémon.filter(p => p.types[0] === "fire")
console.log(fireTypeArr)

// an array of pokémon objects that have more than one type
const moreThanOneTypeArr = pokémon.filter(p => p.types > p.types[0])
console.log(moreThanOneTypeArr)

// // an array with just the names of the pokémon
const listOfPokémonNames = pokémon.map(p => p.name)
console.log(listOfPokémonNames)

// an array with just the names of pokémon with an id greater than 99
const namesWithIdOver99 = pokémon.map(p => p.name[0] > 99)
console.log(pokémon.filter(element => element.id > 99).map(element => element.name));

// an array with just the names of the pokémon whose only type is poison
console.log(pokémon.filter(p => p.types[0] === "poison").map(p => p.name));

// an array containing just the first type of all the pokémon whose second type is "flying"
console.log(pokémon.filter(p => p.types[1] === "flying").map(p => p.types[0]));

// a count of the number of pokémon that are "normal" type
console.log(pokémon.filter(p => p.types[0] === "normal").length);