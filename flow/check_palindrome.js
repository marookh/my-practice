// This program checks whether a string is palindrome or not
// save the palindrome string
// reverse the stirng and save it
// iterate through palindrome
// if the current character is equal to the reverse
// return true
// if not equal
// return the result

let rlSync = require("readline-sync");
let userInput = rlSync.question("Type a word: ");

function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < reversedString.length; j++) {
      if (string[i] === reversedString[j]) {
        return "The word " + string + " is a palindrome.";
      }
    }
  }
  return `The word ${string} is not a palindrome.`;
}

console.log(isPalindrome(userInput));
