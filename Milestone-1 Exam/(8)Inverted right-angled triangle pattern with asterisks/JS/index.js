document.addEventListener('DOMContentLoaded', function() {
    const createPatternBtn = document.getElementById('create-pattern-btn');
    const clearBtn = document.getElementById('clear-pattern-btn');

    createPatternBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const noOfStars = document.getElementById('input-stars').value;
        const display = document.getElementById('display');

        if(noOfStars < 1) {
            display.innerHTML = "Minimum Input Value Should be 1.";
            return;
        }

        let starPattern = '';
        let asterisk = '*'
        for(let i = noOfStars;i > 0;i--) {
            starPattern += asterisk.repeat(i);
            starPattern += "<br />";
        }
        display.innerHTML = starPattern;
    });

    clearBtn.addEventListener('click', function(event) {
        event.preventDefault();

        document.getElementById('input-stars').value = "";
        document.getElementById('display').innerHTML = "";
    })
});