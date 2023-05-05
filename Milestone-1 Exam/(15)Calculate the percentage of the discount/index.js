// Given the original price and the discounted price of a product,
// implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.

const calcDiscount = (originalPrice, discountedPrice) => {
    let discountPercent = ((discountedPrice / originalPrice) * 100);
    discountPercent = discountPercent.toFixed(2);
    return discountPercent;
}

let actualCost = 2100, discountedCost = 1575;
let discount = calcDiscount(actualCost, discountedCost);

console.log(`Discount Given: ${discount}%`);