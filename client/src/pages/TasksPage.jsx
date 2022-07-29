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

  function renderMain() {
    if(tasks.length === 0) {
      return <h1>No tasks yet</h1>
    }
    return tasks.map((task) => <TaskComponent task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>tasks</h1>
      {renderMain()}
    </div>
  );
}

export default TasksPage;
