'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);

let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', function () {
  //Again
  document.body.addEventListener('animationend', function () {
    document.body.classList.remove('game-win');
  });
  document.body.addEventListener('animationend', function () {
    document.body.classList.remove('game-over');
  });

  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.guess-message').textContent = 'Починай вгадувати!';
  document.querySelector('.number-input').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const inputNum = Number(document.querySelector('.number-input').value);

  // No input
  if (!inputNum) {
    document.querySelector('.guess-message').textContent = 'Вибери число!';

    //Player won
  } else if (inputNum === secretNum) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNum;
    document.body.classList.add('game-win');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // To high
  } else if (inputNum > secretNum) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Занадто багато!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Гру закінчено!';
      document.querySelector('.score').textContent = 0;
    }

    // To low
  } else if (inputNum < secretNum) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Занадто мало!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Game over
    else {
      document.querySelector('.guess-message').textContent = 'Гру закінчено!';
      document.querySelector('.score').textContent = 0;
      // document.querySelector('body').style.backgroundColor = '#ff0000';
      document.body.classList.add('game-over');
    }
  }
});
//test git
