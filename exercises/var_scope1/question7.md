What will the following code log to the console and why? Don't run it until you have tried to answer.

```JavaScript
let num = 1;
while (num < 3) {
    let num = 5;
    num += 1;
}

console.log(num);
```

### Solution
This doesn't log anything to the console. This code results in an infinite loop, which will time out. Line 4 declares and initializes a variable num to the 5, it is this num that is incremented on line 5. The condition for the while loop, however, references the num declared on line 1, not the one within the scope of the block. The condition for ending the while loop is therefore never met, resulting in an infinite loop.
