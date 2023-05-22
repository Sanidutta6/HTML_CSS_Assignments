const fs = require('fs');

function calculator(num1, num2, op) {
    switch(op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
        default: return "Invalid Operator."
    }
}

let data = "";

try {
    data = fs.readFileSync('input.txt', 'utf8');
    data = data.split("\n");
} catch (err) {
    console.error(err);
}

console.log(`Result of (${data[0]} ${data[2]} ${data[1]}) is: ${calculator(parseInt(data[0]), parseInt(data[1]), data[2])}`);