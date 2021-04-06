import { getPokedex } from '../local-storage-utils.js';



const tryAgain = document.getElementById('playAgain');

tryAgain.addEventListener('click', () => {

    localStorage.clear();
    window.location = '../index.html';

});


var ctx = document.getElementById('myChart').getContext('2d');

const pokeDex = getPokedex();
const names = [];
const encounterd = [];
const captured = [];

for (let pokemon of pokeDex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encounterd.push(pokemon.encounterd);
}

var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Captured Pokemon',
                data: captured,
                backgroundColor: 'lightpink',
                borderColor: 'magenta',
                borderWidth: 1

            },
            {
                label: 'Encounterd Pokemon',
                data: encounterd,
                backgroundColor: 'lightblue',
                borderColor: 'blue',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});