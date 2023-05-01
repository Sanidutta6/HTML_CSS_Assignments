function calculateCost(carType, noOfDays) {
    let rentalCost = 0;

    switch (carType) {
        case 'economy': rentalCost = 4000;
            break;
        case 'midsize': rentalCost = 10000;
            break;
        case 'luxury': rentalCost = 20000;
            break;
        default: alert('Please select a car type.');
            return;
    }

    return (rentalCost * noOfDays);  // Total Cost
}

function getDaysBetweenDates(date1, date2) {
    const millisecondsPerDay = 86400000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const time1 = new Date(date1).getTime();
    const time2 = new Date(date2).getTime();
    const diff = Math.abs(time2 - time1);
    return Math.ceil(diff / millisecondsPerDay);
  }

document.addEventListener('DOMContentLoaded', function() {
    const calculate = document.getElementById('calculate');
    const clear = document.getElementById('clear');

    
    calculate.addEventListener('click', function(event) {
        event.preventDefault();  // Stops page from reloading.

        const pickUpDate = document.getElementById('pick-up-date').value;
        const dropOffDate = document.getElementById('drop-off-date').value;
        const carType = document.getElementById('car-type').value;

        const totalCostInput = document.getElementById('total-cost');

        if(pickUpDate > dropOffDate) {
            console.log(`[WARNING]: ${pickUpDate} is after ${dropOffDate}`);
            return;
        }
        if(carType == "") {
            console.log(`[WARNING]: Please enter a car type`);
            return;
        }

        const totalDays = getDaysBetweenDates(dropOffDate, pickUpDate);
        const totalCost = calculateCost(carType, totalDays);

        totalCostInput.value = `$${totalCost}`;
    });

    // Adding event listener to clear button
    clear.addEventListener('click', function(event) {
        event.preventDefault();  // Stops page from reloading.

        document.getElementById('pick-up-date').value = "";
        document.getElementById('drop-off-date').value = "";
        document.getElementById('car-type').value = "";
        document.getElementById('total-cost').value = "0";
    });
});