import { findById } from './utils.js';
let captured = 1;
const POKEDEX = 'POKEDEX';
const button = document.querySelector('button');

// - get pokedex
export function getPokedex() {
    const stringPokedex = localStorage.getItem(POKEDEX);

    if (!stringPokedex) return [];

    const parsedPokedex = JSON.parse(stringPokedex);

    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringPokedex);
}
// - encounter pokemon
export function encounterPokemon(pokemon) {
    // - take in a pokemon
    // - get the pokedex
    const pokedex = getPokedex();
    // - ask "is this pokemon already in there"
    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);

    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;
    } else {
        const newPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexItem);
    }
    setPokedex(pokedex);

    return pokedex;
}

export function capturePokemon(pokemon) {

    const pokedex = getPokedex();
    const caughtPoke = document.querySelector('#pokeCaught');
    const matchingPokemon = findById(pokedex, pokemon.pokemon);


    matchingPokemon.captured++;
    caughtPoke.textContent = `Total Pokemon Caught: ${captured++}`;

    setPokedex(pokedex);

    if (captured === 11) {
        button.disabled = true;
        alert('Congratulations! You Have Caught 10 Pokemon. Please See Profesor Oak for Further Instructions.');
    }

    return pokedex;
}