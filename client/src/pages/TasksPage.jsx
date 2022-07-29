import React from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskComponent from "../components/TaskComponent";

function TasksPage() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    async function loadTasks() {
      const res = await getTasksRequest();
      setTasks(res.data.data);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>tasks</h1>

      {tasks.map((task) => (
        <TaskComponent task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksPage;
