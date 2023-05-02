function highlight(word) {
    return (word.length > 8) ? true : false;
}

async function loremIpsumGenerator(contentType="sentences", count="5") {
    const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&${contentType}=${count}&format=text`);
    const text = await response.text();

    return text;
}

document.addEventListener('DOMContentLoaded', function () {
    const highlightBtn = document.getElementById("highlight-text-btn");
    const generateBtn = document.getElementById("generate-text-btn");

    highlightBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const textPara = document.getElementById("text-section");
        const text = textPara.innerText;
        const textArray = text.split(" ");

        for (let i = 0; i < textArray.length; i++) {
            if (highlight(textArray[i])) {
                textArray[i] = `<span>${textArray[i]}</span>`;
            }
        }

        textPara.innerHTML = textArray.join(" ");
    });

    generateBtn.addEventListener('click', async function(event) {
        event.preventDefault();

        const count = document.getElementById("count").value;
        const contentType = document.getElementById("content-type").value;
        const textPara = document.getElementById("text-section");
        const text = await loremIpsumGenerator(contentType, count);
        textPara.innerText = text;
    });
});