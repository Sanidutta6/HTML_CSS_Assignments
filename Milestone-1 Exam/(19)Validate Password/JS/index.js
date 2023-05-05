document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

        if(emailRegex.test(email) == false || password.length < 8) {
            console.log('Invalid email or password!');
        }
    });
});