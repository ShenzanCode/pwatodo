import React, { useState, useEffect } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border rounded ${
              task.completed ? "bg-green-100 line-through" : ""
            }`}
          >
            <span
              className="cursor-pointer"
              onClick={() => toggleTask(index)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
