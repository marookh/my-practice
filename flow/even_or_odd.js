
function numberRange (number) {
    if (number < 0) {
        console.log(`${number} is less than zero.`);
    } else if (number <= 50) {
        console.log(`${number} is between 0 and 50`); 
    } else if (number <= 100) {
        console.log(`${number} is between 50 and 100.`);
    } else {
        console.log(`${number} is greater than 100.`)
    }
}

numberRange(44);
numberRange(3);
numberRange(129);
numberRange(-22);