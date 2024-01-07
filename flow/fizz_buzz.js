// Given a collection of numbers
// Iterate through numbers from one to 100
// For each number print "Fizz" if it's devisible by 3
// "Buzz" if it's devisible by 5
// "FizzBuzz" if it's devisible by both 3 and 5
// if non of these conditions met simply print the number

// SET numbers = 100
// SET number = 1
// WHILE number < 100  => number + 1
// IF number devisible by 3
// PRINT "Fizz"
// IF/ELSE number devisible by 5
// PRINT "Buzz"
// IF/ELSE number devisible by 3 and 5
// PRINT "FizzBuzz"
// ELSE PRINT number

let numbers = 100;

for (let number = 0; number <= numbers; number++) {
    if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(number);
    }
}