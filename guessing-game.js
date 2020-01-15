import compare from './compare.js';

const triesremaining = document.getElementById('tries-remaining');
const guessnumber = getElementById('guess-number');
const highlow = getElementById('high-low');
const losewin = getElementById('lose-win');

let tries = 4;
let number = 7;

button.addEventListener('click,' => {
    tries--;
triesDisplay.textContent = tries;
console.log('Hello', Number(userInput.value));
if (compareNumbers(Number(userInput.value), correctNumber) === -1) {
    tempDisplay.textContent = 'too low';
    tempContainer.classList.remove('hidden');
);