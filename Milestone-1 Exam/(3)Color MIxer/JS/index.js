function outputColor(color1, color2) {
    if((color1 === "red" && color2 === 'blue') || (color1 === "blue" && color2 === "red")) {
        return "purple";
    } else if ((color1 === "red" && color2 === 'yellow') || (color1 === "yellow" && color2 === "red")) {
        return "green";
    } else {
        return "Invalid color combination";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const mixBtn = document.getElementById("mix-btn");
    const clearBtn = document.getElementById("clear-btn");

    mixBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const colorOneInput = document.getElementById("input-color-1");
        const colorTwoInput = document.getElementById("input-color-2");

        const colorOutput = document.getElementById("output-color");

        const outputC = outputColor(colorOneInput.value, colorTwoInput.value);
        colorOutput.value = outputC;

        if(outputC != "Invalid color combination") {
            colorOutput.style.backgroundColor = outputC;
        }
    });

    clearBtn.addEventListener('click', function(event) {
        event.preventDefault();

        document.getElementById("input-color-1").value = "";
        document.getElementById("input-color-2").value = "";

        const colorOutput = document.getElementById("output-color");
        colorOutput.value = "";
        colorOutput.style.backgroundColor = "white";
    });
});