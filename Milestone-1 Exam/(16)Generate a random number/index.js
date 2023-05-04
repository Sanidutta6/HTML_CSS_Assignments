// Generates a random number between 1 and 100 when the program starts
// Uses self-invoking function to generate the random number.

const randNo = (function() {
    return (Math.random() * 100);
})();

console.log(randNo);