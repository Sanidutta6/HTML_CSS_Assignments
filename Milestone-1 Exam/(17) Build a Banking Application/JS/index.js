// const customerObj = {
//     "account no": 12 digit integer,
//     "name": String,
//     "address": String,
//     "phone no": "phone number"
//     "balance": integer
//     "transaction": [array of trasaction obj]
// }

// const transactionObj = {
//     "time": "time",
//     "type": "debit" || "credit",
//     "amount": integer,
// }

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateUser(userNo = 10) {
    const customerList = [];

    for (let i = 0; i < userNo; i++) {
        const customer = {};
        const accountNo = generateRandomNumber(1000000000000000, 9999999999999999);
        const firstName = "John"; // Replace with code to generate a random first name
        const lastName = `Doe -${i}`; // Replace with code to generate a random last name
        const address = "123 Main St"; // Replace with code to generate a random address

        // Generate date of birth to ensure the user is at least 18 years old
        const dobEnd = new Date();
        const dobStart = new Date();
        dobStart.setFullYear(dobStart.getFullYear() - 60); // Minimum age: 60 years
        dobEnd.setFullYear(dobEnd.getFullYear() - 18); // Maximum age: 18 years
        const dob = getRandomDate(dobStart, dobEnd);

        // Generate the opening date based on the user's age at account creation
        const openingDateEnd = new Date();
        const openingDateStart = new Date(dob.getFullYear(), dob.getMonth(), dob.getDate() + 1); // Minimum age: 18 years
        const openingDate = getRandomDate(openingDateStart, openingDateEnd);

        const age = Math.floor((new Date() - dob) / (1000 * 60 * 60 * 24 * 365));
        const phoneNumber = "123-456-7890"; // Replace with code to generate a random phone number

        customer["account no"] = accountNo;
        customer["name"] = firstName + " " + lastName;
        customer["address"] = address;
        customer["dob"] = dob.toISOString().split('T')[0];
        customer["phone no"] = phoneNumber;
        customer["opening date"] = openingDate.toISOString().split('T')[0];
        customer["balance"] = 0;
        customer["transactions"] = [];

        const firstTransaction = [];
        firstTransaction["time"] = openingDate.toISOString();
        firstTransaction["type"] = "credit";
        firstTransaction["amount"] = generateRandomNumber(10, 1000);
        customer["transactions"].push(firstTransaction);
        customer["balance"] += firstTransaction["amount"];

        const transactionCount = generateRandomNumber(999, 2000);
        let transactionDate = new Date(openingDate.getTime() + 24 * 60 * 60 * 1000); // Start from the day after opening

        for (let j = 1; j < transactionCount; j++) {
            const transaction = [];
            transaction["time"] = transactionDate.toISOString();
            transaction["type"] = Math.random() < 0.5 ? "debit" : "credit";
            if (transaction["type"] === "debit") {
                transaction["amount"] = generateRandomNumber(50, customer["balance"]);
            } else {
                transaction["amount"] = generateRandomNumber(10, 1000);
            }
            customer["transactions"].push(transaction);

            if (transaction["type"] === "debit") {
                customer["balance"] -= transaction["amount"];
            } else {
                customer["balance"] += transaction["amount"];
            }

            // Increment the transaction date
            transactionDate = new Date(transactionDate.getTime() + 24 * 60 * 60 * 1000);
        }

        customerList.push(customer);
    }

    return customerList;
}

document.addEventListener("DOMContentLoaded", function () {
    const customerList = generateUser();
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
    const showCustomerList = document.getElementById("show-customer-list");

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

    addCustomer.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Add Customer";
        document.getElementById("customer-display").style.display = "block";
        document.querySelector("#customer-display>input[type='submit']").addEventListener("click", function (event) {
            event.preventDefault();
            // Add new customer object
            const customer = {};
            customer["account no"] = generateRandomNumber(1000000000000000, 9999999999999999);
            customer["name"] = document.getElementById("name").value;
            customer["address"] = document.getElementById("address").value;
            customer["dob"] = document.getElementById("dob").value;
            customer["phone no"] = document.getElementById("phone-no").value;
            customer["balance"] = parseInt(document.getElementById("balance").value);
            customer["opening date"] = new Date();
            customer["transactions"] = [{
                "time": customer["opening date"],
                "type": "credit",
                "amount": customer["balance"]
            }];

            if (customer["name"] === "") {
                document.getElementById("name").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.getElementById("name").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            if (customer["address"] === "") {
                document.getElementById("address").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.getElementById("address").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            if (customer["dob"] === "") {
                document.getElementById("address").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.getElementById("address").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            if (customer["phone no"] === "") {
                document.getElementById("phone-no").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.getElementById("phone-no").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            if (customer["balance"] < 10) {
                document.getElementById("balance").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.getElementById("balance").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            document.getElementById("name").value = "";
            document.getElementById("address").value = "";
            document.getElementById("dob").value = "";
            document.getElementById("phone-no").value = "";
            document.getElementById("balance").value = "";
            customerList.push(customer);
            onClickDisplay.style.zIndex = "-1";
            document.getElementById("customer-display").style.display = "none";
        });
        console.log("Click");
    });

    removeCustomer.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Remove Customer";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    showCustomer.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Show Customer";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    debitCredit.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Debit / Credit";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    balanceInquiry.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Balance Inquiry";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    transactionHistory.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Transaction History";
        document.getElementById("customer-account-number-template").style.display = "block";
        console.log("Click");
    });

    showCustomerList.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Show Customer List";
        document.getElementById("general-display").style.display = "block";
        const list = document.createElement("ul");
        for (let i = 0; i < customerList.length; i++) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<div>${customerList[i]["account no"]}</div><div>${customerList[i]["name"]}</div>`;
            listItem.setAttribute("data-id", customerList[i]["account no"]);
            list.appendChild(listItem);

            listItem.addEventListener("click", function (event) {
                const accountNo = event.target.getAttribute("data-id");
                const customer = customerList.find((customer) => customer["account no"] === accountNo);
                // document.getElementById("general-display").style.display = "none";
                list.remove();
                const list = document.createElement("ul");
                for (let key in customer) {
                    if (key !== "transactions") {
                        const listItem = document.createElement("li");
                        listItem.innerHTML = `<div>${customer["account no"]}</div><div>${customer["name"]}</div>`;
                        list.appendChild(listItem);
                    }
                }
                document.getElementById("general-display").appendChild(list);
            });
        }
        document.getElementById("general-display").appendChild(list);
    });

    cancelDisplay.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "-1";
        document.getElementById("customer-display").style.display = "none";
        document.getElementById("customer-account-number-template").style.display = "none";
        document.getElementById("customer-list-display").style.display = "none";
        document.getElementById("general-display").style.display = "none";
    });
});