What will the following code log to the console and why? Don't run it until you have tried to answer.

``` JavaScript
let num = 5;
function myFunc() {
    console.log(num);
    let num = 10;
}

myFunc();
console.log(num); 
```
### Solution
This won't log anything to the console. Instead, this code will raise a ReferenceError. On line 5 we declare a new num variable within the scope myFunc function.The console.log on line 4 is attempting to log the value of that num variable, not the one declared and initialized on line one. Since the variable hasn't been initialized yet however, we get a reference error.
