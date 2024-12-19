import React, { useState } from "react";

import { IoMdAdd } from "react-icons/io";
import { useUtils } from "../utils/UtilsContext";

const InputField = () => {
  const { inputValue, setInputValue, task, setTask } = useUtils();

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a task object with id, content, and completed
    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      content: inputValue, // Content from the input field
      important: false, // Initially, the task is not imp
      completed: false, // Initially, the task is not completed
    };

    if (!inputValue) return alert("Task cannot be empty!"); //nul input value

    // Check for duplicate content
    const isDuplicate = task.some((t) => t.content === inputValue);
    if (isDuplicate) {
      alert("Task already exists!");
      setInputValue(""); // Clear the input field
      return;
    }

    setTask((prevTask) => [...prevTask, newTask]); // Add the task to the task array
    setInputValue(""); // Clear the input field
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative  top-[580px] md:top-0 md:text-[15px]  text-sm md:w-[790px] flex flex-col  items-center my-2">
        <IoMdAdd className="absolute left-4 text-gray-400 md:left-11 top-[38%]  text-xl " />
        <input
          className="outline-none border border-gray-600 my-4
                 bg-white text-black md:px-6 px-10 py-2 rounded-xl
                 md:w-[90%] w-[320px] "
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Add a task"
        />
      </div>
    </form>
  );
};

export default InputField;
