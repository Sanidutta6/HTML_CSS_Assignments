// Function that takes in the cost of each dish and the number of people sharing it
// and returns an object that contains the total bill and
// the bill to be paid by each person in the group.

function billSplitter(costOfEachDishes, noOfPeoples) {
    let totalBill = costOfEachDishes.reduce((prev, curr) => { return (prev + curr); });
    totalBill = totalBill.toFixed(2);

    let billPerHead = (totalBill / noOfPeoples);
    billPerHead = billPerHead.toFixed(2);

    return {totalBill, billPerHead};
}

const costOfEachDishes = [10, 15, 20];
const numPeople = 3;
const result = billSplitter(costOfEachDishes, numPeople);
console.log(`Total Bill: ${result['totalBill']}, \nBill Per Head: ${result['billPerHead']}`);