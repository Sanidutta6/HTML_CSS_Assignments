document.addEventListener("DOMContentLoaded", function () {
    const listItems = [
        "HTML and Semantics",
        "Starting with CSS",
        "Working Template",
        "Mobile responsive webpages",
        "Grid and Flex-box in CSS",
        "Projects using HTML & CSS",
        "Version Control and Git",
        "Getting Started with JavaScript",
        "Advance JavaScript",
        "Working with DOM",
        "Making Projects using HTML, CSS and JavaScript",
        "Understanding Fundamental of Computer Science",
        "Getting Started with Database",
        "Understanding the Database",
        "Starting with NodeJS and Express",
        "Understanding React and its Fundamentals",
        "Understanding Hooks and Routers",
        "Starting and Completing Full Fledge Projects"
    ];

    let iterator = listItems.entries();
    const list = document.getElementsByClassName("list")[0];
    const emptyLisImg = document.getElementById("empty-list-img");
    const addItem = document.getElementById("add-item");
    const cleatList = document.getElementById("clear");

    if (list.childElementCount === 0) {
        emptyLisImg.style.display = "block";
    }

    addItem.addEventListener("click", function () {
        const nextListItem = iterator.next();

        if (emptyLisImg.style.display === "block") {
            emptyLisImg.style.display = "none";
            list.style.display = "flex";
        }

        if (!nextListItem.done) {
            const newItem = document.createElement("li");
            newItem.textContent = nextListItem.value['1'];
            list.appendChild(newItem);
            newItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            console.log("Empty List");
        }
    });

    cleatList.addEventListener("click", function() {
        list.innerHTML = "";
        emptyLisImg.style.display = "block";
        list.style.display = "none";
        iterator = listItems.entries();
    });
});