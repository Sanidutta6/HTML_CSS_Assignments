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
    // [TODO]: Get References to number buttons, Operator buttons & Display.
    // [TODO]: Add event listeners to those buttons.
});