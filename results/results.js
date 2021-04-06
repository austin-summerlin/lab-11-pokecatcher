import { getPokedex, createTableRow } from '../local-storage-utils.js';

const resultsTable = document.querySelector('table');

const pokedex = getPokedex();

for (let pokedexPoke of pokedex) {

    const resultsData = createTableRow(pokedexPoke);

    resultsTable.append(resultsData);

}

const tryAgain = document.getElementById('playAgain');

tryAgain.addEventListener('click', () => {

    localStorage.clear();
    window.location = '../index.html';

});