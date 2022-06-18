'use strict';

const name = prompt(
  'Hello , my name is pranav here is my first simple web application , Please enter your name to start :) '
);
let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter a number bruh❗';
  }

  //  when wins
  else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `${name} ,you win the game 🎉😂`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   when guess number is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your guess is high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😂';
      document.querySelector('.score').textContent = score;
    }
  }
  //   when guess number is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your guess is low 😄';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guess';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
});
