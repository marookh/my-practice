What will the following code log to the console and why? Don't run it until you have tried to answer.

```JavaScript
let num = 5;

function myFunc() {
    console.log(num);
    num = 10;
}

myFunc();
console.log(num);
```
### Solution 
This first logs 5 to the console, and then logs 10 to the console. The variable num declared and initialized to 5 on line 1 is accessible within the scope of the myFanc function. When that function is invoked it first logs the value of num, which at this point in execution is 5, and then reassigns num to 10. The reassigned value is then logged on the last line of the code snippet.