function Calculate(num1, num2, op) {
    switch (op) {
        case "+": return num1 + num2;

        case "-": return num1 - num2;

        case "x": return num1 * num2;

        case "/": return num1 / num2;

        default: return "Unknown Operator";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let operatorKeyPressed = false, isFloat = false;
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
    function resetVariables() {
        display.innerHTML = "0";  // Reseting display section value to 0;
        num1 = '';
        num2 = '';
        op = '';
        isFloat = false;
        operatorKeyPressed = false;
    }

    allClear.addEventListener('click', resetVariables);

    // Adding event listener to backspace button to remove last character from display section.
    backspace.addEventListener('click', function () {
        if (display.innerHTML != "0") {
            const removedChar = display.innerHTML[display.innerHTML.length - 1];

            if (removedChar == "+" || removedChar == "-" || removedChar == "x" || removedChar == "/") {
                operatorKeyPressed = false;
            }

            const temp = display.innerHTML.slice(0, display.innerHTML.length - 1);
            display.innerHTML = (temp != "") ? temp : "0";
        }
    });

    // Adding event listener to operator buttons.
    Array.from(operators).forEach(function (operator) {
        if (operator.textContent === ".") {
            operator.addEventListener('click', function () {
                display.innerHTML += ".";
                if (operatorKeyPressed != true) {
                    num1 += ".";
                } else {
                    num2 += ".";
                }
                isFloat = true;
            });
        } else {
            operator.addEventListener('click', function () {
                if (operatorKeyPressed != true && display.innerHTML != "0") {
                    display.innerHTML += `<br /> ${operator.textContent} `;
                    operatorKeyPressed = true;
                    op = operator.textContent;
                }
            });
        }
    });

    // Adding event listener to number buttons.
    Array.from(numbers).forEach(function (number) {
        number.addEventListener('click', function () {
            if (display.textContent == "0") {
                // No number button or only zero button is clicked yet,
                // assign the number.
                display.textContent = number.textContent;
            } else {
                // Atleast one number button is clicked, append the number.
                display.innerHTML += number.textContent;
            }

            if (operatorKeyPressed != true) {
                num1 += number.innerHTML;
            } else {
                num2 += number.innerHTML;
            }
        });
    });

    // Adding event listener to equal button.
    equal.addEventListener('click', function () {
        // If both number are entered and operator key is pressed.
        if (num1 != "" && num2 != "" && operatorKeyPressed) {
            if (isFloat) {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
            } else {
                num1 = parseInt(num1);
                num2 = parseInt(num2)
            }

            // Calculate the eqn value & show inside the display section.
            console.log(num1, num2);
            display.innerHTML = Calculate(num1, num2, op);
            num1 = '';
            num2 = '';
            op = '';
            isFloat = false;
            operatorKeyPressed = false;
        }
    });
});