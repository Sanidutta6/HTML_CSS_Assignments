document.addEventListener('DOMContentLoaded', function() {
    const validateBtn = document.getElementById('validate-btn');
    
    validateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        let passwordStr = password.value;
        let confirmPasswordStr = confirmPassword.value;

        if(passwordStr == confirmPasswordStr) {
            confirmPassword.style.boxShadow = "0 0 5pt 2pt green";
            console.log("Password Matched. Password validation Successful.");
        } else {
            confirmPassword.style.boxShadow = "0 0 5pt 2pt red";
            console.log("Password didn't match. Password validation unsuccessful");
        }
    });
});