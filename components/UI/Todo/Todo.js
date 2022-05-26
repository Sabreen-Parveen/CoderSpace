import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import EditIcon from "./EditIcon";

const Todo = ({ text, id, completed, todos, setTodos }) => {
  const [editMode, setEditMode] = useState(false);
  const [editVal, setEditVal] = useState(text);
  const deleteTodo = (e) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    const index = newTodos.findIndex((el) => el.id === id);
    newTodos[index] = {
      ...newTodos[index],
      text: editVal,
    };
    setTodos(newTodos);
    setEditMode(false);
  };
  const handleCheckBoxToggle = (e) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((el) => el.id === id);
    newTodos[index] = {
      ...newTodos[index],
      completed: e.currentTarget.checked,
    };
    setTodos(newTodos);
    setEditMode(false);
  };
  return (
    <div className="flex space-x-2 w-[100%] justify-between items-center ">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="rounded-[5px]"
          checked={completed}
          onChange={handleCheckBoxToggle}
        />
        {editMode ? (
          <form onSubmit={handleEdit}>
            {" "}
            <input
              className="text-[0.6em] bg-gray-800 outline-none"
              value={editVal}
              onChange={(e) => setEditVal(e.target.value)}
            />
          </form>
        ) : (
          <div className="text-[0.6em]">{text}</div>
        )}
      </div>

      <div className="flex space-x-1">
        <EditIcon
          className="w-6 hover:cursor-pointer transition-all hover:opacity-80"
          onClick={(e) => setEditMode(true)}
        />
        <FaTrashAlt
          className="w-3 hover:cursor-pointer transition-all hover:opacity-80"
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
};

export default Todo;
