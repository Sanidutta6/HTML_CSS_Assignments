function Capitalize(string) {
    const splitedString = string.split(" ");
    for(let i = 0;i < splitedString.length;i++) {
        let tmp = splitedString[i];
        splitedString[i] = (tmp[0] === tmp[0].toLowerCase())?(tmp[0].toUpperCase() + tmp.slice(1, tmp.length)):tmp;
    }

    return splitedString.join(" ");
}

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const clearBtn = document.getElementById('clear-btn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('full-name');
        const DOB = document.getElementById('dob');
        const address = document.getElementById('address');
        const email = document.getElementById('email');
        const programmingLang = document.getElementById('program-lang');
    });

    clearBtn.addEventListener('click', function(event) {
        event.preventDefault();

        document.getElementById('full-name').value = "";
        document.getElementById('dob').value = "";
        document.getElementById('address').value = "";
        document.getElementById('email').value = "";
        document.getElementById('program-lang').value = "";
    });
});