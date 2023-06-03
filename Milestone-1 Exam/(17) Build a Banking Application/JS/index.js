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

        const firstTransaction = {};
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

    const totalAmount = document.querySelector("#dashboard-view>.card-wrapper>.card:nth-child(1)>h2");
    const totalUsers = document.querySelector("#dashboard-view>.card-wrapper>.card:nth-child(2)>h2");
    const totalTransactions = document.querySelector("#dashboard-view>.card-wrapper>.card:nth-child(3)>h2");

    function updatedDashboardInfo() {
        totalAmount.innerHTML = `$${customerList.reduce((prev, curr) => prev + curr["balance"], 0)}`;
        totalUsers.innerHTML = `${customerList.length}`;
        totalTransactions.innerHTML = `${customerList.reduce((prev, curr) => prev + curr["transactions"].length, 0)}`;
    }

    updatedDashboardInfo();

    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        });
    });

    let prevView = dashboardView;

    function showView(view) {
        if (prevView !== view) {
            prevView.style.display = "none";
            view.style.display = "block";
            prevView = view;
        }
    }

    dashboard.addEventListener("click", function () {
        showView(dashboardView);
    });

    controls.addEventListener("click", function () {
        showView(controlsView);
    });

    grievance.addEventListener("click", function () {
        showView(grievanceView);
    });

    faq.addEventListener("click", function () {
        showView(faqView);
    });

    addCustomer.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Add Customer";
        document.getElementById("add-customer-display").style.display = "block";
        document.querySelector("#add-customer-display>input[type='submit']").addEventListener("click", function (event) {
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
            document.getElementById("add-customer-display").style.display = "none";
            updatedDashboardInfo();
        });
    });

    removeCustomer.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Remove Customer";
        document.getElementById("customer-account-number").style.display = "block";
        const searchBtn = document.querySelector("#customer-account-number>input[type='submit']");
        searchBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const accountNo = parseInt(document.querySelector("#customer-account-number>.input-group>input").value);
            const desiredCustomer = customerList.find((customer) => customer["account no"] === accountNo);
            if (!desiredCustomer) {
                // red the border-bottom
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            document.getElementById("output-account-no").value = desiredCustomer["account no"];
            document.getElementById("output-name").value = desiredCustomer["name"];
            document.getElementById("output-address").value = desiredCustomer["address"];
            document.getElementById("output-dob").value = desiredCustomer["dob"];
            document.getElementById("output-phone-no").value = desiredCustomer["phone no"];
            document.getElementById("output-DOO").value = desiredCustomer["opening date"];

            document.getElementById("customer-account-number").style.display = "none";
            document.querySelector("#customer-account-number>.input-group>input").value = "";
            document.getElementById("customer-info-display").style.display = "block";
            document.querySelector("#customer-info-display>input[value='Remove']").style.display = "inline";
        }, { once: true});

        document.querySelector("#customer-info-display>input[value='Remove']").addEventListener("click", function() {
            console.log("Removed");
        }, { once: true});
    });

    showCustomer.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Show Customer";
        document.getElementById("customer-account-number").style.display = "block";
        const searchBtn = document.querySelector("#customer-account-number>input[type='submit']");
        searchBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const accountNo = parseInt(document.querySelector("#customer-account-number>.input-group>input").value);
            const desiredCustomer = customerList.find((customer) => customer["account no"] === accountNo);
            if (!desiredCustomer) {
                // red the border-bottom
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            document.getElementById("output-account-no").value = desiredCustomer["account no"];
            document.getElementById("output-name").value = desiredCustomer["name"];
            document.getElementById("output-address").value = desiredCustomer["address"];
            document.getElementById("output-dob").value = desiredCustomer["dob"];
            document.getElementById("output-phone-no").value = desiredCustomer["phone no"];
            document.getElementById("output-DOO").value = desiredCustomer["opening date"];

            document.getElementById("customer-account-number").style.display = "none";
            document.querySelector("#customer-account-number>.input-group>input").value = "";
            document.getElementById("customer-info-display").style.display = "block";
            document.querySelector("#customer-info-display>input[value='Edit']").style.display = "inline";
        }, { once: true});

        document.querySelector("#customer-info-display>input[value='Edit']").addEventListener("click", function() {
            document.getElementById("output-name").disabled = false;
            document.getElementById("output-address").disabled = false;
            document.getElementById("output-dob").disabled = false;
            document.getElementById("output-phone-no").disabled = false;

            document.querySelector("#customer-info-display>input[value='Edit']").style.display = "none";
            document.querySelector("#customer-info-display>input[value='Update']").style.display = "inline";

            console.log("Edit");
        }, { once: true});

        document.querySelector("#customer-info-display>input[value='Update']").addEventListener("click", function() {
            document.getElementById("output-name").disabled = true;
            document.getElementById("output-address").disabled = true;
            document.getElementById("output-dob").disabled = true;
            document.getElementById("output-phone-no").disabled = true;
            document.querySelector("#customer-info-display>input[value='Update']").style.display = "none";

            console.log("Update");
        }, { once: true});
    });

    debitCredit.addEventListener("click", function () {
        let desiredCustomer = {};
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Debit / Credit";
        document.getElementById("customer-account-number").style.display = "block";
        const searchBtn = document.querySelector("#customer-account-number>input[type='submit']");
        searchBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const accountNo = parseInt(document.querySelector("#customer-account-number>.input-group>input").value);
            desiredCustomer = customerList.find((customer) => customer["account no"] === accountNo);
            if (!desiredCustomer) {
                // red the border-bottom
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            document.getElementById("customer-account-number").style.display = "none";
            document.getElementById("debit-credit-display").style.display = "block";
            document.querySelector("#customer-account-number>.input-group>input").value = "";
        }, { once: true});

        document.querySelector("#debit-credit-display>input[value='Credit']").addEventListener("click", function () {
            console.log(desiredCustomer);
            const amount = parseInt(document.getElementById("amount").value);
            if (amount < 10) {
                return;
            }
            const transaction = {
                "amount": amount,
                "type": "credit",
                "time": new Date()
            }
            desiredCustomer["balance"] += amount;
            desiredCustomer["transactions"].push(transaction);
            document.getElementById("debit-credit-display").style.display = "none";
            onClickDisplay.style.zIndex = "-1";
            updatedDashboardInfo();
        });
        document.querySelector("#debit-credit-display>input[value='Debit']").addEventListener("click", function () {
            console.log(desiredCustomer);
            const amount = parseInt(document.getElementById("amount").value);
            if (amount >= desiredCustomer["balance"]) {
                return;
            }
            const transaction = {
                "amount": amount,
                "type": "debit",
                "time": new Date()
            }
            desiredCustomer["balance"] -= amount;
            desiredCustomer["transactions"].push(transaction);
            document.getElementById("debit-credit-display").style.display = "none";
            onClickDisplay.style.zIndex = "-1";
            updatedDashboardInfo();
        });
    });

    balanceInquiry.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Balance Inquiry";
        document.getElementById("customer-account-number").style.display = "block";
        const searchBtn = document.querySelector("#customer-account-number>input[type='submit']");
        searchBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const accountNo = parseInt(document.querySelector("#customer-account-number>.input-group>input").value);
            const desiredCustomer = customerList.find((customer) => customer["account no"] === accountNo);
            if (!desiredCustomer) {
                // red the border-bottom
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            document.getElementById("customer-account-number").style.display = "none";
            document.querySelector("#customer-account-number>.input-group>input").value = "";
            document.getElementById("balance-inquiry-display").style.display = "block";
            document.querySelector("#balance-inquiry-display>div:nth-child(1)").innerHTML = `<b>Name:</b> ${desiredCustomer["name"]}`;
            document.querySelector("#balance-inquiry-display>div:nth-child(2)").innerHTML = `<b>Account No:</b> ${desiredCustomer["account no"]}`;
            document.querySelector("#balance-inquiry-display>div:nth-child(3)").innerHTML = `<b>Balance:</b> ${desiredCustomer["balance"]}`;
        }, { once: true});
    });

    transactionHistory.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Transaction History";
        document.getElementById("customer-account-number").style.display = "block";
        const searchBtn = document.querySelector("#customer-account-number>input[type='submit']");
        searchBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const accountNo = parseInt(document.querySelector("#customer-account-number>.input-group>input").value);
            const desiredCustomer = customerList.find((customer) => customer["account no"] === accountNo);
            if (!desiredCustomer) {
                // red the border-bottom
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(255, 0, 0)";
                return;
            } else {
                document.querySelector("#customer-account-number>.input-group>input").style.borderBottomColor = "rgb(0, 0, 0)";
            }

            document.getElementById("customer-account-number").style.display = "none";
            document.querySelector("#customer-account-number>.input-group>input").value = "";
            document.getElementById("list-display").style.display = "block";

            const list = document.createElement("ul");
            const desiredTransactions = desiredCustomer["transactions"];
            for (let i = 0; i < desiredTransactions.length; i++) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<div>${desiredTransactions[i]["time"]}</div> <div>${desiredTransactions[i]["type"]}</div> <div>${desiredTransactions[i]["amount"]}</div>`;
                list.appendChild(listItem);
            }
            document.getElementById("list-display").innerHTML = "";
            document.getElementById("list-display").appendChild(list);
        }, { once: true});
    });

    showCustomerList.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "1";
        displayHeaderText.innerText = "Show Customer List";
        document.getElementById("list-display").style.display = "block";
        const list = document.createElement("ul");

        for (let i = 0; i < customerList.length; i++) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<div>${customerList[i]["account no"]}</div><div>${customerList[i]["name"]}</div>`;
            listItem.setAttribute("data-id", customerList[i]["account no"]);
            list.appendChild(listItem);

            listItem.addEventListener("click", function (event) {
                let accountNo = "";
                if (event.target.tagName === "DIV") {
                    // find nearest parent
                    accountNo = event.target.parentNode.getAttribute("data-id");
                } else {
                    accountNo = event.target.getAttribute("data-id");
                }
                const selectedCustomer = customerList.find((customer) => {
                    return customer["account no"] === parseInt(accountNo);
                });
                const list = document.createElement("ul");

                for (let key in selectedCustomer) {
                    if (key !== "transactions") {
                        const listItem = document.createElement("li");
                        listItem.innerHTML = `<div><b>${key}</b>: ${selectedCustomer[key]}</div>`;
                        list.appendChild(listItem);
                    }
                }
                document.getElementById("list-display").innerHTML = "";
                document.getElementById("list-display").appendChild(list);
            });
        }
        document.getElementById("list-display").innerHTML = "";
        document.getElementById("list-display").appendChild(list);
    });

    cancelDisplay.addEventListener("click", function () {
        onClickDisplay.style.zIndex = "-1";
        document.getElementById("customer-account-number").style.display = "none";
        document.getElementById("add-customer-display").style.display = "none";
        document.getElementById("customer-info-display").style.display = "none";
        document.querySelector("#customer-info-display>input[value='Edit']").style.display = "none";
        document.querySelector("#customer-info-display>input[value='Update']").style.display = "none";
        document.querySelector("#customer-info-display>input[value='Remove']").style.display = "none";
        document.getElementById("debit-credit-display").style.display = "none";
        document.getElementById("balance-inquiry-display").style.display = "none";
        document.getElementById("list-display").innerHTML = "";
        document.getElementById("list-display").style.display = "none";
    });
});