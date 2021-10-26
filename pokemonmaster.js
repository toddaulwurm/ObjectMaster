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
// b pokemon by name
const bListPkmn = pokémon.filter( p => p.name[0] === "B" ).map(p => p.name);
console.log(bListPkmn)
// just ids
const pkmnIds = pokémon.map( p => p.id )
console.log(pkmnIds)

// 1
const divThree = pokémon.filter(p => p.id%3 == 0).map(p => `Name: ${p.name} ID: ${p.id}`);
console.log(divThree);

// 2
const fire = pokémon.filter(p => p.types == "fire").map(p => `Name: ${p.name} ID: ${p.id} Type: ${p.types}`);
console.log(fire);

// 3
const twoType = pokémon.filter(p => p.types[1]).map(p => `Name: ${p.name} ID: ${p.id}     Type: ${p.types}`);
console.log(twoType);

// 4
const names = pokémon.map(p => `Name: ${p.name}`);
console.log(names);

// 5
const up99 = pokémon.filter(p => p.id > 99).map(p => `Name: ${p.name}`);
console.log(up99);

// 6
const poisononly = pokémon.filter(p => p.types == "poison" && !p.types[1]).map(p => `Name: ${p.name}`);
console.log(poisononly);

// 7
const fly = pokémon.filter(f => f.types[1] == "flying").map(f => `Name: ${f.name} ID: ${f.id}   Type: ${f.types[0]}`)
console.log(fly)

// 8
const normal = pokémon.filter(p => p.types[0]== "normal" || p.types[1]== "normal").map(p => `Name: ${p.name} ID: ${p.id}     Type: ${p.types}`)
console.log(normal)