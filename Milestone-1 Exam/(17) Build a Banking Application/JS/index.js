document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.getElementById("dashboard");
    const controls = document.getElementById("controls");
    const debitCredit = document.getElementById("debit-credit");
    const grievance = document.getElementById("grievance");
    const faq = document.getElementById("faq");

    const dashboardView = document.getElementById("dashboard-view");
    const controlsView = document.getElementById("controls-view");
    const debitCreditView = document.getElementById("transaction-view");
    const grievanceView = document.getElementById("grievance-view");
    const faqView = document.getElementById("faq-view");

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

    debitCredit.addEventListener("click", function () {
        if (prevView !== debitCreditView) {
            prevView.style.display = "none";
            debitCreditView.style.display = "block";
            prevView = debitCreditView;
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
});