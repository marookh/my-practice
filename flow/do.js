let answer;
let rlSync = require('readline-sync');

do {
    answer = rlSync.question('Do you want to do that again? ');
} while (answer === 'y'); 


if (answer === 'n') {
    console.log('Why? ');
    answer = rlSync.question('Let us play another game? ');
} else if (answer === 'ok') {
    answer = rlSync.question('What game would you like to play? ');
} else {
    console.log("Nothing selected :(");
}

 
