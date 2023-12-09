What will the following code log to the console and why? Don't run it until you have tried to answer.

```JavaScript
let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);
```

### Solution
This logs 10 to the console. The variable num declared and initialized to 5 on line 1 is accessible within the schope of the myFunc function. When that function is invoked, num is reassigned to 10.