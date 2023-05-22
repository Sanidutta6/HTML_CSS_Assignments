document.addEventListener('DOMContentLoaded', function() {
    const validateBtn = document.getElementById('validate-btn');
    
    validateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        let passwordStr = password.value;
        let confirmPasswordStr = confirmPassword.value;

        if(!(passwordStr && confirmPasswordStr)) {
            document.getElementsByClassName("show-validity")[0].textContent = "Please fill both password fields.";
            return;
        }

        if(passwordStr == confirmPasswordStr) {
            confirmPassword.style.boxShadow = "0 0 5pt 2pt green";
            // console.log("Password Matched. Password validation Successful.");
            document.getElementsByClassName("show-validity")[0].textContent = "Password Matched. Password validation Successful.";
        } else {
            confirmPassword.style.boxShadow = "0 0 5pt 2pt red";
            // console.log("Password didn't match. Password validation unsuccessful");
            document.getElementsByClassName("show-validity")[0].textContent = "Password didn't match. Password validation unsuccessful.";
        }
    });
});