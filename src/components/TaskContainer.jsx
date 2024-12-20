import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import {handleComplete, handleDelete, handleImportant,} from "../utils/HandleFunctions";
import { useUtils } from "../utils/UtilsContext";
import { getLocalStorageTodoData, setLocalStorageTodoData} from "./TodoLocalStorage";
import Edit from "./Edit";

const TaskContainer = () => {
  const {
    task,
    setTask,
    setImportantTask,
    setCompletedTasks,
    editingId,
    newContent,
    setNewContent,
  } = useUtils();

  // Load tasks from local storage on component mount
  useEffect(() => {
    const savedTasks = getLocalStorageTodoData();
    setTask(savedTasks);
  }, [setTask]);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  return (
    <div
      className="flex flex-col px-4 overflow-y-scroll  md:my-4 p-4 space-y-2 md:w-[700px] w-[350px] h-[440px] md:h-[400px]
                 md:bg-slate-300 bg-slate-200 md:shadow-sm scrollbar-hide md:shadow-blue-200 md:rounded-xl rounded-lg"
    >
      {task.map(({ id, content, important, completed }) => (
        <div
          key={id}
          className={`relative md:text-lg text-sm flex p-2 space-x-1 bg-white md:bg-slate-100
                     md:w-full rounded-md border-spacing-8 border-gray-500 ${
                       completed ? "line-through text-gray-500" : ""
                     }`}
        >
          <input
            type="radio"
            onClick={() => handleComplete(id, task, setTask, setCompletedTasks)}
            disabled={completed}
          />
          {/* Task content */}
          {editingId === id ? (
            <input
              type="text"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="flex-1"
            />
          ) : (
            <p className="cursor-pointer text-sm">{content}</p>
          )}
          <div className="absolute space-x-2 right-1 flex items-center">
            <div
              onClick={() =>
                handleImportant(id, task, setTask, setImportantTask)
              }
              className="cursor-pointer"
            >
              {important ? (
                <FaStar className="text-orange-400" />
              ) : (
                <CiStar className="text-orange-600" />
              )}
            </div>
            <Edit id={id} content={content} />
            <MdDelete
              onClick={() => handleDelete(id, setTask)}
              className="text-red-600 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskContainer;
