'use strict';

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

//Secret Number
function randomNumGenerator() {
  return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = randomNumGenerator();
// Score
let score = 20;
//High score
let highscore = 0;

//Message
const displayMsg = msg => {
  document.querySelector('.message').textContent = msg;
};

//Secret Number Msg
const displayNum = num => {
  document.querySelector('.number').textContent = num;
};

//Score Number
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMsg('⛔ No Number!');
  } //When player wins
  else if (guess === secretNumber) {
    displayMsg('🎉 Correct Number!');
    displayNum(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMsg('💥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumGenerator();

  displayScore(score);
  displayMsg('Start guessing...');
  document.querySelector('.guess').value = '';
  displayNum('?');
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
