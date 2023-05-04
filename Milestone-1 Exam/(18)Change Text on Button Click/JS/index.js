function toggleString(str1, str2) {
    let currentStr = str1;

    return function () {
        currentStr = (str1 === currentStr) ? str2 : str1;
        return currentStr;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const togglerBtn = document.getElementById("toggler-btn");  // Ref to toggler-btn from DOM.
    const heading = document.getElementById("heading");

    // Strings to toggle between
    const string1 = "The most affordable learning platform";
    const string2 = "PW Skills";

    // toggle() to toggle between strings.
    const toggle = toggleString(string1, string2);

    // Adding Event Listener for toggling between strings.
    togglerBtn.addEventListener("click", function() {
        heading.innerText = toggle();
    });
});