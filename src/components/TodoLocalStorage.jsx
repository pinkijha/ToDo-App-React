


const todokey = 'task';


export const getLocalStorageTodoData = () => {
    // Retrieve tasks from local storage or initialize with an empty array
    const savedTasks = localStorage.getItem(todokey);
    return savedTasks ? JSON.parse(savedTasks) : [];
};

 // Save tasks to local storage whenever the tasks state changes
export const setLocalStorageTodoData = (task) => {
   return localStorage.setItem(todokey, JSON.stringify(task));
}