// Write a program that takes an array of numbers
// and prints all the numbers that are divisible by 3,
// but not by 2. Use a for loop and continue statement.

const fs = require('fs');

function divisibility(number, divBy = 3, notDivBy = 2) {
    return ((number % divBy == 0) && (number % notDivBy != 0))
}

let data = "";

try {
    data = fs.readFileSync('input.txt', 'utf8');
    data = data.split(", ");
} catch (err) {
    console.error(err);
}

for(let i = 0;i < data.length;i++) {
    let value = parseInt(data[i])
    if(divisibility(value) != true) {
        continue;
    }
    console.log(value);
}