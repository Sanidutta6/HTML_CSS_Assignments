
const fs = require("fs");

function multiplyByTwo(shoppingCart) {
    for(let i = 0;i < shoppingCart.length;i++) {
        shoppingCart[i].quantity = parseInt(shoppingCart[i].quantity) * 2;
        shoppingCart[i].quantity = Math.floor(shoppingCart[i].quantity);
    }

    return shoppingCart;
}

const data = fs.readFileSync("input.txt", "utf-8");
let shoppingCart = JSON.parse(data);

console.log(`Before correcting Bug: \n${JSON.stringify(shoppingCart)}\n`);

shoppingCart = multiplyByTwo(shoppingCart);

console.log(`After correcting Bug: \n${JSON.stringify(shoppingCart)}\n`);