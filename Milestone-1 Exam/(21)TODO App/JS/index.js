// TODO: Todo obj structure -
// const todoObj = {
//     "id": "todoId",
//     "title": "TODO-title",
//     "description": "TODO-desc",
//     "date": today(),
//     "draft": false,
//     "checked": false,
//     "starred": false,
//     "tags": ""
// }

function today() {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return `${dd}-${mm}-${yyyy}`;
}

function createTODOElement(todoId, creationDate, todoTitle) {
    const todoElement = document.createElement("div");
    todoElement.classList.add('todo');
    todoElement.setAttribute('data-id', todoId);

    const checkBoxElement = document.createElement("div");
    checkBoxElement.classList.add('checkbox');
    checkBoxElement.setAttribute('aria-checked', "false");
    checkBoxElement.innerHTML = `<span class="checkmark"></span>`;

    const todoInfoElement = document.createElement("div");
    todoInfoElement.classList.add("todo-info");
    todoInfoElement.innerHTML = `
            <div class="date">${creationDate}</div>
            <div class="todo-title">${todoTitle}</div>`;

    todoElement.appendChild(checkBoxElement);
    todoElement.appendChild(todoInfoElement);

    return { todoElement, checkBoxElement, todoInfoElement };
}

document.addEventListener("DOMContentLoaded", function () {
    let todoObjList = [], labelList = ["Starred"];
    let TODOCounter = 0;
    const editor = document.getElementById("new-todo-editor");
    const composeTodo = document.getElementById("compose-todo");
    const closeEditorBtn = document.getElementById("close");
    const addLabel = document.getElementById("add-label");
    const saveNewTodo = document.getElementById("save");
    const deleteNewTodo = document.getElementById("delete");
    const labelCreateBtn = document.getElementById("create-label");
    const labelCloseBtn = document.getElementById("cancel");
    const back = document.getElementById("back");
    const changeLabel = document.getElementById("change-label");
    const changeLabels = document.getElementById("change-labels");
    const editTODO = document.getElementById("edit-todo");
    const deleteTODO = document.getElementById("delete-todo");
    const deleteTODOs = document.getElementById("delete-todos");

    // closes the editor upon calling.
    function closeEditor() {
        document.getElementById("todo-title").value = "";
        document.getElementById("description").value = "";
        editor.style.display = "none";
    }

    // closes the label window upon calling.
    function closeLabelEditor() {
        document.getElementById("label-name").value = "";
        document.getElementById("new-label").style.display = "none";
    }

    // Returns to TODO List
    function returnToTODOList() {
        document.getElementById("TODO-show-menu").style.display = "none";
        document.getElementById("view-todo").style.display = "none";
        document.getElementById("todo-items").style.display = "block";
        document.getElementById("default-menu").style.display = "flex";
    }

    // Opens Editor for new Todo.
    composeTodo.addEventListener("click", function () {
        editor.style.display = "block";
    });

    // Closes the editor
    closeEditorBtn.addEventListener("click", closeEditor)

    // Adds New Label.
    addLabel.addEventListener("click", function () {
        document.getElementById("new-label").style.display = "block";
    });

    // Save New Todo, if all fields are not empty.
    saveNewTodo.addEventListener("click", function () {
        const title = document.getElementById("todo-title").value;
        const description = document.getElementById("description").value;
        if (!(title && description)) {
            console.log("Please Fill Up all the Fields");
            return;
        }

        TODOCounter++;
        const newTodo = {
            "id": TODOCounter.toString(),
            "title": title,
            "description": description,
            "date": today(),
            "checked": "false",
            "tags": "Starred"
        }

        todoObjList.push(newTodo);

        const { todoElement, checkBoxElement, todoInfoElement } = createTODOElement(newTodo["id"], newTodo["date"], newTodo["title"]);
        // console.log(todoElement);
        // console.log(checkBoxElement);

        todoInfoElement.addEventListener("click", function (event) {
            const todoId = event.target.closest('.todo').getAttribute("data-id");
            const todoObj = todoObjList.find(todo => todo.id === todoId);

            document.getElementById("todo-items").style.display = "none";
            document.getElementById("view-todo").style.display = "flex";
            document.getElementById("TODO-show-menu").style.display = "flex";
            document.getElementById("default-menu").style.display = "none";
            document.getElementById("view-todo").setAttribute("data-id", todoId);

            document.querySelector("#view-todo>h1").innerHTML = todoObj["title"];
            document.querySelector("#view-todo>p").innerHTML = todoObj["description"];
            document.querySelector("#view-todo>div>.created-on").innerHTML = `On ${todoObj["date"]}`;
            document.querySelector("#view-todo>div>.tags").innerHTML = todoObj["tags"];
        });

        checkBoxElement.addEventListener("click", function (event) {
            const todoId = event.target.closest('.todo').getAttribute("data-id");

            const todoObj = todoObjList.find(todo => todo.id == todoId);
            todoObj["checked"] = (todoObj["checked"] === "true")?"false":"true"; // toggles value

            event.target.setAttribute("aria-checked", todoObj["checked"]);

            if (todoObj["checked"] === "true") {
                // show menu
                document.getElementById("check-menu").style.display = "flex";
            } else {
                // check for every other todo objs if all them aren't checked.
                let todoChecked = false;
                for (let i = 0; i < todoObjList.length; i++) {
                    if (todoObjList[i]["checked"] === "true") {
                        todoChecked = true;
                        break;
                    }
                }

                if (!todoChecked) {
                    // Stop showing header menu.
                    document.getElementById("check-menu").style.display = "none";
                }
            }
        });

        document.getElementById("todo-items").appendChild(todoElement);
        document.getElementById("empty-todo").style.display = "none";
        document.getElementById("todo-items").style.display = "block";

        closeEditor();
    });

    // Delete New Todo.
    deleteNewTodo.addEventListener("click", closeEditor);

    // Closes the window for creating the label.
    labelCloseBtn.addEventListener("click", closeLabelEditor);

    // Saves new Label
    labelCreateBtn.addEventListener("click", function () {
        const newLabel = document.getElementById("label-name").value;
        if (!newLabel) {
            console.log("Please Fill the input field.");
            return;
        }

        labelList.push(newLabel);

        const labelElement = `
                    <div class="label">
                        <div class="label-color"></div>
                        <div class="label-text">${newLabel}</div>
                    </div>`;
        document.getElementById("labels-list").innerHTML += labelElement;
        closeLabelEditor();
    });

    // Returns to main list showing.
    back.addEventListener("click", returnToTODOList);

    // Change Label of a todo.
    changeLabel.addEventListener("click", function () {
        const labelMenu = document.querySelector("#change-label>.label-menu");
        labelMenu.innerHTML = "";
        labelMenu.style.display = (labelMenu.style.display === "none")?"block":"none";

        labelList.forEach(function(label) {
            const labelItem = document.createElement("li");
            labelItem.textContent = label;
            labelMenu.appendChild(labelItem);
            labelItem.addEventListener("click", function(event) {
                labelMenu.style.display = "none";
                event.stopPropagation(); // Stop event propagation

                const todoId = document.getElementById("view-todo").getAttribute("data-id");
                const todo = todoObjList.find((todo) => todo.id === todoId);
                todo.tags = event.target.textContent;
                document.querySelector("#view-todo>div>.tags").textContent = event.target.textContent;
            });
        });
    });

    // Change Label of TODOs.
    changeLabels.addEventListener("click", function () {
        const labelMenu = document.querySelector("#change-labels>.label-menu");
        labelMenu.innerHTML = "";
        labelMenu.style.display = (labelMenu.style.display === "none")?"block":"none";

        labelList.forEach(function(label) {
            const labelItem = document.createElement("li");
            labelItem.textContent = label;
            labelMenu.appendChild(labelItem);
            labelItem.addEventListener("click", function(event) {
                labelMenu.style.display = "none";
                event.stopPropagation(); // Stop event propagation

                todoObjList.forEach((todo) => {
                    if(todo.checked === "true") {
                        todo.tags = event.target.textContent;
                        todo.checked = "false";
                        document.querySelector(`.todo[data-id='${todo.id}']>.checkbox`).setAttribute("aria-checked", "false");
                    }
                });
                document.getElementById("check-menu").style.display = "none";
            });
        });
        console.log("Click");
    });

    // Edits the TODO
    editTODO.addEventListener("click", function () {
        const todoHeader = document.querySelector("#view-todo>h1");
        const todoDesc = document.querySelector("#view-todo>p");
        todoHeader.contentEditable = true;
        todoDesc.contentEditable = true;
        document.getElementById("update").style.display = "block";

        document.getElementById("update").addEventListener("click", function () {
            const todoId = document.getElementById("view-todo").getAttribute("data-id");

            todoHeader.contentEditable = false;
            todoDesc.contentEditable = false;
            document.getElementById("update").style.display = "none";

            const todoObj = todoObjList.find(todo => todo.id == todoId);
            todoObj["title"] = todoHeader.textContent;
            todoObj["description"] = todoDesc.textContent;

            document.querySelector(`.todo[data-id="${todoId}"] .todo-title`).innerHTML = todoObj["title"];
        });
    });

    // Deletes TODO
    deleteTODO.addEventListener("click", function () {
        const todoId = document.getElementById("view-todo").getAttribute("data-id");

        // Remove the element from the JavaScript array
        todoObjList = todoObjList.filter(todo => todo.id !== todoId);

        // Remove the element from the HTML document
        const todoElement = document.querySelector(`.todo[data-id="${todoId}"]`);
        if (todoElement) {
            todoElement.remove();
        }
        if (document.querySelectorAll(`.todo`).length === 0) {
            document.getElementById("empty-todo").style.display = "flex";
            document.getElementById("todo-items").style.display = "none";
        }

        returnToTODOList();
    });

    // Delete TODOs
    deleteTODOs.addEventListener("click", function () {
        todoObjList = todoObjList.filter(todo => todo.checked != "true");
        // Select all .todo elements
        const todoElements = document.querySelectorAll('.todo');

        // Loop through each .todo element
        todoElements.forEach(todoElement => {
            // Get the checkbox element within the .todo element
            const checkbox = todoElement.querySelector('.checkbox');

            // Get the aria-checked attribute value
            const ariaChecked = checkbox.getAttribute('aria-checked');

            // Check if the aria-checked is "true"
            if (ariaChecked === 'true') {
                // Remove the .todo element from the DOM
                todoElement.remove();
            }
        });
    });
});