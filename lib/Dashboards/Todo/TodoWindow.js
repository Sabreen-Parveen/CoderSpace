import { useState } from "react";
import uniqid from "uniqid";
import Todo from "../../../components/UI/Todo/Todo";

const TodoWindow = (props) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (value === "") return;
    const newTodos = [...todos];

    newTodos.push({
      id: uniqid(),
      completed: false,
      text: value,
    });
    setTodos(newTodos);
    setValue("");
  };

  return (
    <div className="flex flex-col h-128 font-[600] justify-center items-center text-2xl">
      <div className="w-1/2 h-128 bg-gray-800 flex flex-col text-white p-2  items-center space-y-4">
        <h1 className="text-center">Todo List</h1>
        <form
          className="flex space-x-2 text-[0.9em] w-[80%] "
          onSubmit={handleAddTodo}
        >
          <input
            className="outline-none bg-gray-900 text-black rounded-[5px] text-[0.5em] p-2 flex-grow"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-gray-800 px-2 rounded-[5px] active:bg-gray-600">
            Add
          </button>
        </form>
        <div className="w-[80%] min-h-[60%] border-[1px] rounded-[5px] border-gray-400 flex flex-col items-start px-4">
          {todos.map(({ id, text, completed }) => {
            return (
              <Todo
                id={id}
                text={text}
                completed={completed}
                setTodos={setTodos}
                todos={todos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoWindow;
