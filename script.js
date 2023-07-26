'use strict';
let diap = Number(
  prompt('Введіть діапазон цифр для відгадування (максимально можливе число):')
);
document.querySelector('.diap').textContent = diap;
let secretNum = Math.trunc(Math.random() * diap) + 1;
let userScore = Number(prompt('Введіть максимальну кількість спроб:'));
let score = userScore;
let highScore = 0;

const displayGuessMessage = function (target) {
  document.querySelector('.guess-message').textContent = target;
};

document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', function () {
  document.body.classList.remove('game-win');
  document.body.classList.remove('game-over');
  secretNum = Math.trunc(Math.random() * diap) + 1;
  score = userScore;
  document.querySelector('.score').textContent = score;
  // document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMessage('Починай вгадувати!');
  document.querySelector('.number-input').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const inputNum = Number(document.querySelector('.number-input').value);
  if (!inputNum) {
    displayGuessMessage('Вибери число!');
  } else if (inputNum === secretNum) {
    displayGuessMessage('Правильно!');
    // document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.body.classList.add('game-win');
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (inputNum !== secretNum) {
    if (score > 1) {
      displayGuessMessage(
        inputNum > secretNum ? 'Занадто багато!' : 'Занадто мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Гру закінчено!');
      document.body.classList.add('game-over');
      document.querySelector('.score').textContent = 0;
      // document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});
