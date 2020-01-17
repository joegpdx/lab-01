import isYes from './AboutMe-isYes.js';

const quizButton = document.getElementById('quiz-button');
const total = document.getElementById('Score');

quizButton.addEventListener('click', () => {
    const name = prompt('What\'s your name?');
    const confirmation = confirm(`${name}, are you sure you want to take the quiz?`);
    if (confirmation === false) return;
    const question1 = prompt('Do I like key-lime Pie?');
    const question2 = prompt('Do I love Stere\'s?');
    const question3 = prompt('Do I love Polenta?');
    let count = 0;
    if (count >= 1) { count = 0; }
    if (!isYes(question1)) { count++; }
    if (isYes(question2)) { count++; }
    if (!isYes(question3)) { count++; }
    total.textContent = `${name}, you got ${count}, correct out of 3`;
});
