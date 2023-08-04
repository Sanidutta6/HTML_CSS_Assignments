import React from "react";

const TodoCard = ({ todoNo, todo, status, handleDelete, updateTodoStatus }) => {
    return (
        <div className="max-w-sm p-6 bg-[#24273D] rounded-lg shadow">
            <a href="$">
                <h5 className="mb-2 min-h-[100px] text-2xl font-bold tracking-tight text-white">
                    {`${todoNo}. ${todo}`}
                </h5>
            </a>
            <p className="mb-3 font-normal text-white">Status: {status}</p>
            <div
                className="w-full mb-3 flex items-center px-3 py-2 text-md font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 cursor-pointer"
                onClick={() => {
                    updateTodoStatus(todoNo);
                }}
            >
                Update Status
            </div>
            <div
                className="w-full flex items-center px-3 py-2 text-md font-medium justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 cursor-pointer"
                onClick={() => {
                    handleDelete(todoNo);
                }}
            >
                Remove
            </div>
        </div>
    );
};

export default TodoCard;