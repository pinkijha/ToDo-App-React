import { createContext, useContext, useState } from "react";
import { getLocalStorageTodoData } from "../components/TodoLocalStorage";

const UtilsContext = createContext();

export const UtilsContextProvider = ({ children }) => {
  const [ inputValue, setInputValue ] = useState();
  const [ task, setTask ] = useState(() => getLocalStorageTodoData());
  const [completedTasks, setCompletedTasks] = useState([]);
  const [ importantTask, setImportantTask ] = useState([]);
  const [editingId, setEditingId] = useState();  // Track the task being edited
  const [newContent, setNewContent] = useState("");  // Store new content for the task
  return (
    <UtilsContext.Provider value={{ inputValue, setInputValue, task, setTask, 
    completedTasks, setCompletedTasks, importantTask, setImportantTask, editingId, 
    setEditingId,  newContent, setNewContent}}>
      
      {children}
    </UtilsContext.Provider>
  );
};

// custome hook
export const useUtils = () => {
  const utilsContext = useContext(UtilsContext);
  if (!utilsContext) {
    throw new Error("useUtils must be used within a UtilsContextProvider");
  }
  return utilsContext;
};
