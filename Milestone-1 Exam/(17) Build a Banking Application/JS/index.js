// const customerObj = {
//     "account no": 12 digit integer,
//     "name": String,
//     "address": String,
//     "balance": integer
//     "transaction": [array of trasaction obj]
// }

// const transactionObj = {
//     "time": "time",
//     "type": "debit" || "credit",
//     "amount": integer,
// }

document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.getElementById("dashboard");
    const controls = document.getElementById("controls");
    const grievance = document.getElementById("grievance");
    const faq = document.getElementById("faq");

    const dashboardView = document.getElementById("dashboard-view");
    const controlsView = document.getElementById("controls-view");
    const grievanceView = document.getElementById("grievance-view");
    const faqView = document.getElementById("faq-view");

    const addCustomer = document.getElementById("add-customer");
    const removeCustomer = document.getElementById("remove-customer");
    const showCustomer = document.getElementById("show-customer");
    const debitCredit = document.getElementById("debit-credit");
    const balanceInquiry = document.getElementById("balance-inquiry");
    const transactionHistory = document.getElementById("transaction-history");

    const onClickDisplay = document.getElementById("on-click-display");
    const cancelDisplay = document.getElementById("cancel-display");
    const displayHeaderText = document.querySelector("#display-header>h3");

    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        });
    });

    let prevView = dashboardView;

    dashboard.addEventListener("click", function () {
        if (prevView !== dashboardView) {
            prevView.style.display = "none";
            dashboardView.style.display = "block";
            prevView = dashboardView;
        }
    });

    controls.addEventListener("click", function () {
        if (prevView !== controlsView) {
            prevView.style.display = "none";
            controlsView.style.display = "block";
            prevView = controlsView;
        }
    });

    grievance.addEventListener("click", function () {
        if (prevView !== grievanceView) {
            prevView.style.display = "none";
            grievanceView.style.display = "block";
            prevView = grievanceView;
        }
    });

    faq.addEventListener("click", function () {
        if (prevView !== faqView) {
            prevView.style.display = "none";
            faqView.style.display = "block";
            prevView = faqView;
        }
    });

    addCustomer.addEventListener("click", function() {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Add Customer";
        document.getElementById("customer-display-template").style.display = "block";
        console.log("Click");
    });

    removeCustomer.addEventListener("click", function() {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Remove Customer";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    showCustomer.addEventListener("click", function() {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Show Customer";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    debitCredit.addEventListener("click", function() {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Debit / Credit";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    balanceInquiry.addEventListener("click", function() {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Balance Inquiry";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    transactionHistory.addEventListener("click", function() {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Transaction History";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    cancelDisplay.addEventListener("click", function() {
        onClickDisplay.style.zIndex = "-1";
        document.getElementById("customer-display-template").style.display = "none";
        document.getElementById("customer-account-number-template").style.display = "none";
    })
});