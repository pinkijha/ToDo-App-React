
import { useUtils } from "../utils/UtilsContext";

const { task, setTask, setImportantTask, setCompletedTasks } = useUtils();

  export const handleDelete = (id) => {
    setTask((prevTask) => prevTask.filter((t) => t.id !== id));
  };

  export const handleImportant = (id) => {
    setTask((prevTask) =>
      prevTask.map((t) => {
        if (t.id === id) {
          const updatedTask = { ...t, important: !t.important };
          if (!t.important) {
            setImportantTask((prevImportant) => [...prevImportant, updatedTask]);
          } else {
            setImportantTask((prevImportant) =>
              prevImportant.filter((impTask) => impTask.id !== id)
            );
          }
          return updatedTask;
        }
        return t;
      })
    );
  };

  export const handleComplete = (id) => {
    setTask((prevTask) =>
      prevTask.map((t) => (t.id === id ? { ...t, completed: true } : t))
    );

    setTimeout(() => {
      const completedTask = task.find((t) => t.id === id);
      if (completedTask) {
        setCompletedTasks((prevCompleted) => [...prevCompleted, completedTask]);
        setTask((prevTask) => prevTask.filter((t) => t.id !== id));
      }
    }, 2000);
  };