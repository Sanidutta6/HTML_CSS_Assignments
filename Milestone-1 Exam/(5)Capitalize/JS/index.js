function Capitalize(string) {
    const splitedString = string.split(" ");

    for (let i = 0; i < splitedString.length; i++) {
        let tmp = splitedString[i];
        splitedString[i] = (tmp[0] === tmp[0].toLowerCase()) ? (tmp[0].toUpperCase() + tmp.slice(1, tmp.length)) : tmp;
    }

    return splitedString.join(" ");
}

document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-btn');
    const clearBtn = document.getElementById('clear-btn');
    const modal = document.getElementById("popup-modal");
    const modalCloseBtn = document.getElementsByClassName("close")[0];

    // Timer in seconds
    let timer = 10;

    // Adding 'Click' Event Listener to submit button.
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Values of all input fields.
        const fullName = document.getElementById('full-name').value;
        const DOB = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;
        const programmingLang = document.getElementById('program-lang').value;

        // Reference to output field resides inside the modal.
        const userInfo = document.getElementById('user-info');

        // If Any input field is empty.
        if (fullName == "" || DOB == "" || address == "" || email == "" || programmingLang == "") {
            userInfo.innerHTML = "Please Fill Up All the Fields."
        } else {
            const enteredInfo = `Name: ${Capitalize(fullName)},<br />
            Date Of Birth: ${DOB},<br />
            Address: ${address},<br />
            Email: ${email},<br />
            Programming Languages: ${programmingLang}<br />`;

            userInfo.innerHTML = enteredInfo;
        }


        // Changing display value of modal from none to block.
        modal.style.display = "block";

        // Start the countdown timer
        let countdown = setInterval(function () {
            // Decrease timer by 1 second
            timer--;

            // If the timer reaches 0, close the modal
            if (timer == 0) {
                clearInterval(countdown);
                modal.style.display = "none";
                timer = 10; // Reset timer to default value
            }
        }, 1000);
    });

    // Adding 'Click' Event Listener to clear button
    // which will reset values of all input fields.
    clearBtn.addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('full-name').value = "";
        document.getElementById('dob').value = "";
        document.getElementById('address').value = "";
        document.getElementById('email').value = "";
        document.getElementById('program-lang').value = "";
    });

    // Close the modal when the user clicks on the close button
    modalCloseBtn.addEventListener('click', function () {
        modal.style.display = "none";
        timer = 10; // Reset timer to default value
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            timer = 10; // Reset timer to default value
        }
    }
});