'use strict';

const score0 = document.querySelector('#score--0').textContent = 0;
// Alternative way instead when using I'ds instead of Classses
const  score1 = document.getElementById('score--1').textContent = 0;
const Current0 = document.querySelector('#current--0').textContent = 0;
const Current1 = document.querySelector('#current--1').textContent = 0;
const dice = document.querySelector('#dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Stating Conditions
// score0.textContent = 0;
// score1.textContent = 0;

dice.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

//Rolling Dice Functionality

 btnRoll.addEventListener('click', function () {
    // 1. Generating  Random dice roll.
    const dice = Math.trunc(Math.random () * 6) + 1;
    console.log(dice);

    // 2. Display Dice.
    dice.classList.remove('hidden');
    dice.src = `dice-${dice}.png`;

    // 3. Check for rolled 1.
    if(!dice == 1) {
        // Adding dice to the current Score
        currentScore = currentScore + dice;
        Current0.textContent = currentScore;
    } else {
        //Switch to the Next Player.
        activePlayer = activePlayer === 0 ? 1 : 0;   //Ternary Operator;
    }
});