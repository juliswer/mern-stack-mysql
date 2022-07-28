import React from "react";
import { getTasksRequest } from "../api/tasks.api";

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
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}

    </div>
  );
}

export default TasksPage;
