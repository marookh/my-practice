let a = 20;

let readlineSync = require('readline-sync');
let number = Number(readlineSync.question('Guess the number: '));
if (number ==  a) {
    console.log('Correct number')
} else if (number > a) {
    console.log('High amount');
    number = Number(readlineSync.question('Guess a new number: '));
} else if (number < a) {
    console.log('Lower amount')
    number = Number(readlineSync.question('Guess a new number: '));
} else {
    console.log('Error occured')
    number = Number(readlineSync.question('Guess a new number: '));
}