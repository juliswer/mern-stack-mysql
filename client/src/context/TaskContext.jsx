import { createContext, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const res = await getTasksRequest();
    setTasks(res.data.data);
  }

  return (
    <TaskContext.Provider value={{ tasks, loadTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
