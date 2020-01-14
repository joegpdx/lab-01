import isYes from './isYes.js';

console.log("Hello")

const quizButton = document.getElementById('quizbutton');
const total = document.getElementById('Score');

quizbutton.addEventListener('click', () => {
    console.log('buttonworks');
    const name = prompt('What\'s your name?');
    const question1 = prompt('Do I like key-lime Pie?');
    const question2 = prompt('Do I love Stere\'s');
    const question3 = prompt('Do I love Polenta?');
    let answers = 0;
    if (!isYes(question1)) { count++ }
    if (isYes(question2)) { count++ }
    if (isYes(question3)) { count++ }
    total.textContent = '${name}, you got ${count}, correct';
})
