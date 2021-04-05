import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

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
    const matchingPokemon = findById(pokemon);

    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const newPokedexItem = {
            name: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexItem);
    }
    setPokedex(pokedex);

    return pokedex;
}
// - capture pokemon
export function capturePokemon(pokemon) {
    // - take in a pokemon
    // - get the pokedex
    const pokedex = getPokedex();
    // - ask "is this pokemon already in there"
    const matchingPokemon = findById(pokemon);

    if (matchingPokemon) {
        matchingPokemon.captured++;
    }
    setPokedex(pokedex);

    return pokedex;
}