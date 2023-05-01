function celciusToFahrenheit(celciusTemp) {
    return ((celciusTemp * 1.8) + 32);
}

function fahrenheitToCelcius(fahrenheitTemp) {
    return (((fahrenheitTemp - 32) * 5) / 9).toFixed(3);
}

document.addEventListener('DOMContentLoaded', function() {
    // Collect input and output fields.
    const celciusTemp = document.getElementsByName("celcius-input")[0];
    const fahrenheitTemp = document.getElementsByName("farenheit-input")[0];

    // Add event listener to temperature fields.
    celciusTemp.addEventListener('input', function(event) {
        fahrenheitTemp.value = celciusToFahrenheit(event.target.value);
        console.log(fahrenheitTemp.value);
    });

    fahrenheitTemp.addEventListener('input', function(event) {
        celciusTemp.value = fahrenheitToCelcius(event.target.value);
        console.log(celciusTemp.value);
    });
});