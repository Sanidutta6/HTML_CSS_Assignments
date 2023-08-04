import React, { useContext } from "react";
import TodoContext from "../Context/TodoContext";

const AddTodo = () => {
    const [todos, setTodos] = useContext(TodoContext);

    const handleClick = (e) => {
        e.preventDefault();
        const todoInput = document.getElementById("todo");

        if (todoInput.value === "") {
            console.log("Empty TODO");
            return;
        }

        setTodos([...todos, { todo: todoInput.value, status: "pending" }]);
        localStorage.setItem("ReactTODOs", JSON.stringify([...todos, { todo: todoInput.value, status: "pending" }]));
        todoInput.value = "";
    }

    return (
        <div className="w-full h-48 flex justify-center items-center">
            <form>
                <div className="p-4 bg-white rounded-xl text-xl">
                    <input
                        className="inline-flex outline-none w-96"
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Give TODO"
                    />
                    <input
                        className="bg-[#621877] text-white px-12 py-2 rounded-xl"
                        type="submit"
                        name="todo-submit"
                        id="todo-submit"
                        value="Add"
                        onClick={handleClick}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddTodo;