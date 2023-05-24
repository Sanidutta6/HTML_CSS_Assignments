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

document.addEventListener("DOMContentLoaded", function () {
    let todoObjList = [], labelList = [];
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
    const editTODO = document.getElementById("edit-todo");
    const deleteTODO = document.getElementById("delete-todo");

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
            "draft": false,
            "checked": false,
            "starred": false,
            "tags": "Starred"
        }

        todoObjList.push(newTodo);

        const todoElement = document.createElement("div");
        todoElement.classList.add('todo');
        todoElement.setAttribute('data-id', newTodo["id"]);
        todoElement.innerHTML = `
            <div class="checkbox" aria-checked="false">
                <span class="checkmark"></span>
            </div>
            <div class="date">${newTodo["date"]}</div>
            <div class="todo-title">${newTodo["title"]}</div>`;

        todoElement.addEventListener("click", function (event) {
            const todoId = event.target.closest('.todo').getAttribute("data-id");
            console.log(todoId);
            const todoObj = todoObjList.find(todo => todo.id === todoId);
            console.log(todoObj);

            document.getElementById("todo-items").style.display = "none";
            document.getElementById("view-todo").style.display = "flex";
            document.getElementById("TODO-show-menu").style.display = "flex";
            document.getElementById("view-todo").setAttribute("data-id", todoId);

            document.querySelector("#view-todo>h1").innerHTML = todoObj["title"];
            document.querySelector("#view-todo>p").innerHTML = todoObj["description"];
            document.querySelector("#view-todo>div>.created-on").innerHTML = `On ${todoObj["date"]}`;
            document.querySelector("#view-todo>div>.tags").innerHTML = todoObj["tags"];
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
            console.log(todoObjList);
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

        returnToTODOList();
    });
});