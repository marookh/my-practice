What will the following code log to the console and why? Don't run it until you have tried to answer.

```JavaScript
let num = 1;

while (num < 3) {
    num +=1;
}

console.log(num);
```
### Solution
This logs 3 to the console. This happens twice, while num is less than 3 and so the condition for the while loop to execute is met. Once num reaches 3, the while loop no longer runs and so program execution continues to the console.log on line 7, which logs the reassigned value of num.
