import compare from '../compare.js';

const triesremaining = document.getElementById('tries-remaining');
const lowhigh = document.getElementById('lowhigh');
const result = document.getElementById('result');
const guessbutton = document.getElementById('guess-button');
const userInput = document.getElementById('enter-guess');

let tries = 4;
let correct = 12;


guessbutton.addEventListener('click', () => {
    tries--;
    triesremaining.textContent = tries;

    if (compare(Number(userInput.value), correct) === 0) {
        result.textContent = 'win!!!';
        guessbutton.disabled = true;
    }
    if (compare(Number(userInput.value), correct) === -1) {
        lowhigh.textContent = 'Too low!';
    }
    if (compare(Number(userInput.value), correct) === 1) {
        lowhigh.textContent = 'Too High!';
    }
    if (tries === 0 && compare(Number(userInput.value), correct) !== 0) {
        result.textContent = 'You Lost';
    }
});