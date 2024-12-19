import { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export const UtilsContextProvider = ({ children }) => {
  const [ inputValue, setInputValue ] = useState();
  const [ task, setTask ] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [ importantTask, setImportantTask ] = useState([]);
  return (
    <UtilsContext.Provider value={{ inputValue, setInputValue, task, setTask, 
    completedTasks, setCompletedTasks, importantTask, setImportantTask }}>
      
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
