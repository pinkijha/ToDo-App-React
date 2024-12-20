

  // handling delete function
  export const handleDelete = (id, setTask) => {
    setTask((prevTask) => prevTask.filter((t) => t.id !== id));
  };

  // handling important function
  export const handleImportant = (id, task, setTask, setImportantTask) => {
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

    // handling completed function
  export const handleComplete = (id, task, setTask, setCompletedTasks) => {
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