function Calculate(num1, num2, op) {
    switch (op) {
        case '+': return num1 + num2;
            break;

        case '-': return num1 - num2;
            break;

        case '*': return num1 * num2;
            break;

        case '/': return num1 / num2;
            break;

        default: return "Unknown Operator";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let operatorKeyPressed = false;
    let num1 = "", num2 = "", op = "";

    // References to number all-clear, backspace, operator, number & equal.
    const allClear = document.getElementById("all-clear");
    const backspace = document.getElementById("backspace");
    const equal = document.getElementById("equal");
    const operators = document.getElementsByClassName("operator");
    const numbers = document.getElementsByClassName("number");

    const display = document.getElementById("display");

    // [TODO]: Add event listeners to those buttons.
    // Adding event listener to allClear button to clear display section.
    allClear.addEventListener('click', function() {
        display.innerHTML = "0";  // Reseting display section value to 0;
        num1 = '';
        num2 = '';
        op = '';
        operatorKeyPressed = false;
    });

    // Adding event listener to backspace button to remove last character from display section.
    backspace.addEventListener('click', function() {
        if(display.innerHTML != "0") {
            display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
            console.log("Backsapce Clicked");
        }
    });

    // Adding event listener to operator buttons.
    Array.from(operators).forEach(function(operator) {
        operator.addEventListener('click', function() {
            if (operatorKeyPressed != true && display.innerHTML != "0") {
                display.innerHTML += `<br /> ${operator.textContent}`;
                operatorKeyPressed = true;
                op = operator.textContent;
            }
        });
    });

    // Adding event listener to number buttons.
    Array.from(numbers).forEach(function(number) {
        number.addEventListener('click', function() {
            if(display.textContent == "0") {
                // No number button or only zero button is clicked yet,
                // assign the number.
                display.textContent = number.textContent;
            } else {
                // Atleast one number button is clicked, append the number.
                display.textContent += number.textContent;
            }

            if (operatorKeyPressed != true) {
                num1 += number.textContent;
            } else {
                num2 += number.textContent;
            }
        });
    });

    // Adding event listener to equal button.
    equal.addEventListener('click', function() {
        // If both number are entered and operator key is pressed.
        if( num1 != "" && num2 != "" && operatorKeyPressed) {
            // Calculate the eqn value & show inside the display section.
            display.innerHTML = Calculate(parseInt(num1), parseInt(num2), op);
        }
    });
});