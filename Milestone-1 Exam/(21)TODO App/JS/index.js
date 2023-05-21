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

    // Opens Editor for new Todo.
    composeTodo.addEventListener("click", function() {
        editor.style.display = "block";
    });

    // Closes the editor
    closeEditor.addEventListener("click", function() {
        editor.style.display = "none";
    })

    // Adds New Label.
    addLabel.addEventListener("click", function() {
        console.log("ADD label Clicked");
    });
});