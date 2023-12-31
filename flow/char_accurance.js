// Given a character in a string that determines
// it's third occurance in a string

let char = 'x';
let string = 'xzdsdgxdxsx';
let iterator = 0;
let counter = 0;

function findThirdOccur(char, string) {
  while (iterator < string.length) {
    if (string[iterator] === char) {
      counter++;
      if (counter === 3) {
        return iterator;
      }
    }
    iterator++; 
  }
}

console.log(findThirdOccur(char, string));