function randomColorGenerator() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0;i < 6;i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }

    return color;
}

document.addEventListener("DOMContentLoaded", function() {
    const changeColorBtn = document.getElementById("change-color-btn");

    changeColorBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = randomColorGenerator();
    });
});