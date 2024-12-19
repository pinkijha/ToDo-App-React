import React from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { useUtils } from "../utils/UtilsContext";
import { FaStar } from "react-icons/fa6";

const TaskContainer = () => {
  const { task, setTask, setImportantTask, setCompletedTasks } = useUtils();

  const handleDelete = (id) => {
    setTask((prevTask) => prevTask.filter((t) => t.id !== id));
  };

  // Important task handler function
  const handleImportant = (id) => {
    setTask((prevTask) =>
      prevTask.map((t) =>
        t.id === id ? { ...t, important: true } : t
      ));

      const importantTask = task.find((t) => t.id === id);
      if(importantTask){
        setImportantTask((previmp) => [...previmp, importantTask]);
        setTask((prevTask) => prevTask.filter((t) => t.id === id));
      }

  }

  // Completed Task handler function
  const handleComplete = (id) => {
    setTask((prevTask) =>
      prevTask.map((t) =>
        t.id === id ? { ...t, completed: true } : t
      )
    );

    setTimeout(() => {
      const completedTask = task.find((t) => t.id === id);
      if (completedTask) {
        setCompletedTasks((prevCompleted) => [...prevCompleted, completedTask]);
        setTask((prevTask) => prevTask.filter((t) => t.id !== id));
      }
    }, 2000);
  };

  return (
    <div
      className="flex flex-col px-4 overflow-y-scroll md:my-4 p-4 space-y-2 md:w-[700px] w-[350px] h-[440px] md:h-[400px]
                 md:bg-slate-300 md:shadow-sm scrollbar-hide md:shadow-blue-200 md:rounded-xl"
    >
      {task.map(({ id, content, important, completed }) => (
        <div
          key={id}
          className={`relative md:text-lg text-sm flex p-2 space-x-1 bg-slate-100
                         md:w-full rounded-md border-spacing-8 border-gray-500 ${
                           completed ? "line-through text-gray-500" : ""
                         }`}
        >
          <input
            type="radio"
            onClick={() => handleComplete(id)}
            disabled={completed} // Disable if already completed
          />
          <p className="cursor-pointer text-sm">{content}</p>
          <div className="absolute space-x-2 right-1 flex items-center">
            <CiStar onClick={() => handleImportant(id)}
            className={`text-orange-600 cursor-pointer 
                         ${important ? <FaStar className="text-orange-600" /> : ''}`} />
            <MdModeEditOutline className="text-blue-600 cursor-pointer" />
            <MdDelete
              onClick={() => handleDelete(id)}
              className="text-red-600 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskContainer;
