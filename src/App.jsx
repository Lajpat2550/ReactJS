import { useState } from "react";
import "./App.css";
import { FaPlus } from "react-icons/fa";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editableID, setEditableId] = useState(false);

  const updateTask = () => {
    if (editableID) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editableID ? { ...task, text: input.charAt(0).toUpperCase() + input.slice(1) } : task
        )
      );
      setInput("");
      setEditableId(false);
    } else if (input.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: input.charAt(0).toUpperCase() + input.slice(1), checked: false }]);
      setInput("");
    }
  };

  const toggleCheck = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-40 shadow-lg max-h-[100vh] overflow-auto bg-blue-100/60 p-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded outline-1"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-700 text-white p-2 rounded w-[15%] flex justify-center items-center" onClick={updateTask}>
          <FaPlus />
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border-b overflow-auto">
            <input
              type="checkbox"
              className="checked:accent-green-500"
              checked={task.checked}
              onChange={() => toggleCheck(task.id)}
            />
            <span className={task.checked ? "line-through decoration-red-100  m-5 max-w-[60%] flex-grow break-words " : "m-5 max-w-[60%] flex-grow break-words "}>
              {task.text}
            </span>
            <div className="flex gap-2 whitespace-nowrap">
              <button
                onClick={() => {
                  setInput(task.text);
                  setEditableId(task.id);
                }}
                className="text-white bg-yellow-500 p-1 rounded w-15"
              >
                Edit
              </button>
              <button
                onClick={() => setTasks(tasks.filter((taskItem) => taskItem.id !== task.id))}
                className="text-white bg-red-500 p-1 rounded w-10"
              >
                Del
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
