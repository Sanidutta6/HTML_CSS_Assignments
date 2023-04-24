document.addEventListener('DOMContentLoaded', function() {
    const incrementBtn = document.getElementById('incr-btn');
    const decrementBtn = document.getElementById('decr-btn');
    const resetBtn = document.getElementById('reset-btn');
    const display = document.getElementById('display');

    incrementBtn.addEventListener('click', function() {
        // Increment value on display
        display.textContent = parseInt(display.textContent || 0) + 1;
    });

    decrementBtn.addEventListener('click', function() {
        // Decrement value on display
        display.textContent = parseInt(display.textContent || 0) - 1;
    });

    resetBtn.addEventListener('click', function() {
        // Resey value on display
        display.textContent = 0;
    });
});