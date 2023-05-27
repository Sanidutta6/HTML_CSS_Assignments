document.addEventListener("DOMContentLoaded", function() {
    const dashboard = document.getElementById("dashboard");
    const controls = document.getElementById("controls");
    const debitCredit = document.getElementById("debit-credit");
    const grievance = document.getElementById("grievance");
    const faq = document.getElementById("faq");

    dashboard.addEventListener("click", function() {
        console.log("Dashboard");
    });

    controls.addEventListener("click", function() {
        console.log("Controls");
    });

    debitCredit.addEventListener("click", function() {
        console.log("Debit/Credit");
    });

    grievance.addEventListener("click", function() {
        console.log("Grievance");
    });

    faq.addEventListener("click", function() {
        console.log("FAQ");
    });
});