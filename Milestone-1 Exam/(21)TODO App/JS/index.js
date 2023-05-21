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

document.addEventListener("DOMContentLoaded", function() {
    let todoObjList = [];
    const editor = document.getElementById("new-todo-editor");
    const composeTodo = document.getElementById("compose-todo");
    const closeEditor = document.getElementById("close");
    const addLabel = document.getElementById("add-label");
    const saveNewTodo = document.getElementById("save");
    // const saveNewTodoDraft = document.getElementById("save-draft");
    const deleteNewTodo = document.getElementById("delete");

    // Opens Editor for new Todo.
    composeTodo.addEventListener("click", function() {
        editor.style.display = "block";
    });

    // Closes the editor
    closeEditor.addEventListener("click", function() {
        document.getElementById("todo-title").value = "";
        document.getElementById("description").value = "";
        editor.style.display = "none";
    })

    // Adds New Label.
    addLabel.addEventListener("click", function() {
        console.log("ADD label Clicked");
    });

    // Save New Todo, if all fields are not empty.
    saveNewTodo.addEventListener("click", function() {
        const title = document.getElementById("todo-title").value;
        const description = document.getElementById("description").value;
        if(!(title && description)) {
            console.log("Please Fill Up all the Fields");
            return;
        }
        
        console.log("Save TODO Clicked");
    });

    // Delete New Todo.
    deleteNewTodo.addEventListener("click", function() {
        document.getElementById("todo-title").value = "";
        document.getElementById("description").value = "";
        editor.style.display = "none";
    });
});