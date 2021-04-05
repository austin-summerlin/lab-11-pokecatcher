import { generateThreePokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js';
import { findPokemonByName } from './utils.js';

const button = document.querySelector('button');

function createPokemonDom() {
    const pokeRadio1 = document.querySelector('#poke-radio1');
    const pokeRadio2 = document.querySelector('#poke-radio2');
    const pokeRadio3 = document.querySelector('#poke-radio3');

    const pokeLabel1 = document.querySelector('#poke-label1');
    const pokeLabel2 = document.querySelector('#poke-label2');
    const pokeLabel3 = document.querySelector('#poke-label3');

    const threePokemon = generateThreePokemon();

    const img1 = document.querySelector('#poke-img1');

    img1.src = threePokemon[0].url_image;
    pokeLabel1.append(img1);
    pokeRadio1.value = threePokemon[0].pokemon;

    const img2 = document.querySelector('#poke-img2');

    img2.src = threePokemon[1].url_image;
    pokeLabel2.append(img2);
    pokeRadio2.value = threePokemon[1].pokemon;

    const img3 = document.querySelector('#poke-img3');

    img3.src = threePokemon[2].url_image;
    pokeLabel3.append(img3);
    pokeRadio3.value = threePokemon[2].pokemon;
}

createPokemonDom();

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input:checked');

    const pokeObject = findPokemonByName(selectedRadio.value);
    capturePokemon(pokeObject);
    createPokemonDom();


});