import pokeData from './pokedata.js';

export function findById(array, id) {
    return array.find(item => id === item.id);
}

export function findPokemonByName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}