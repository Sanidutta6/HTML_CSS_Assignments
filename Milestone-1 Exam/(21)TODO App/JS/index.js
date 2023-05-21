// TODO: Todo obj structure -
// const todoObj = {
//     "title": "TODO-title",
//     "description": "TODO-desc",
//     "date": Date.now()
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
    // const saveNewTodoDraft = document.getElementById("save-draft");
    const deleteNewTodo = document.getElementById("delete");
    const labelCreateBtn = document.getElementById("create-label");
    const labelCloseBtn = document.getElementById("cancel");

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

        // const date = new Date();
        const newTodo = {
            "title": title,
            "description": description,
            "date": today(),
            "draft": false,
            "checked": false,
            "starred": false,
            "tags": ""
        }

        todoObjList.push(newTodo);
        TODOCounter++;
        const todoElement = `
        <div class="todo" data-id="${TODOCounter}">
            <div class="checkbox" aria-checked="false">
                <span class="checkmark"></span>
            </div>
            <div class="date">${newTodo["date"]}</div>
            <div class="todo-title">${newTodo["title"]}</div>
        </div>`;
        document.getElementById("todo-items").innerHTML += todoElement;
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
        if(!newLabel) {
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
    })
});