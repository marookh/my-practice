What will the following code log to the console and why? Don't run it until you have tried to answer.

```JavaScript
let num = 5;

function myFunc(num) {
    num = 10;
}

myFunc();
console.log(num);
```

### Solution
This logs 5 to the console. When the myFunc funcion is invoked a parameter named num is declared within the scope of variable. This blocks or "shadows" access to the global variable with the same name. Thus, it can't be reassigned by the function.