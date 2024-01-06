
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner (choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'rock')) {

    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}
function prompt(message) {
  console.log(`=> ${message}`);
}


while (true) {
  prompt(`Choose one:${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
  }

  let randomeIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomeIndex];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLocaleLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "no".');
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer[0] !== 'y') break;
}

