// take string and return the reverse of it

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("school"));