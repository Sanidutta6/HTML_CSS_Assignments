// Implement an arrow function to calculate the total cost of items,
// based on the unit price and quantity of each item.

const calcTotalPrice = (customerCart) => {
    let totalPrice = 0;

    customerCart.forEach((priceAndQuantity) => {
        totalPrice += priceAndQuantity['unit price'] * priceAndQuantity['quantity'];
    });

    return totalPrice.toFixed(2);
}

const retailItems = [
    { itemName: "Shirt", "unit price": 20.99, "quantity": 5 },
    { itemName: "Jeans", "unit price": 39.99, "quantity": 3 },
    { itemName: "Socks", "unit price": 5.99, "quantity": 10 },
    { itemName: "Shoes", "unit price": 69.99, "quantity": 2 }
];

console.log(`Total Price: ${calcTotalPrice(retailItems)}/-`);