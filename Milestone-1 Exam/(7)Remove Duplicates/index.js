// Program to solve the problem of duplicate items in the cart by removing duplicates.

const fs = require("fs");

// function removeDuplicates(arr) {
//     // First creating a Set from input array, and then converting it to array again.
//     return Array.from(new Set(arr));
// }

function removeDuplicates(arr) {
    // Checking if index of current item is same as index of first occurence of the item,
    // then we keeing the value, otherwise ignoring it.
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const shoppingCartItems = fs.readFileSync("input.txt", "utf-8");  // Reading input cart items from input.txt
const cartArray = Array.from(shoppingCartItems.split(",\n"));  //  Converting the string read from input.txt into an array.
console.log(`Before removing duplicates (if any): \n${cartArray.join(", ")}\n`);

const newCartArray = removeDuplicates(cartArray);  // Removing duplicates from the array.
console.log(`After removing duplicates (if any): \n${newCartArray.join(", ")}\n`);