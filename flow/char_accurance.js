// Given a character in a string that determines
// it's third occurance in a string

let char = 'x';
let string = 'xzdsdgxdxsx';
let counter = 0;

function findThirdOccur(char, string) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === char) {
      counter++;
      if (counter === 3) {
        return index;
      }
    }
  }
}

console.log(findThirdOccur(char, string));