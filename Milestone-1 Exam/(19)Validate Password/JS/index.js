document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const display = document.getElementById("show-status");

        const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

        if(emailRegex.test(email) == false || password.length < 8) {
            display.innerText = 'Invalid email or password!';
            display.style.color = "red";
        } else {
            display.innerText = 'Valid email and password!';
            display.style.color = "green";
        }
    });
});