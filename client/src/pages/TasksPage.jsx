import React from "react";
import TaskComponent from "../components/TaskComponent";
import { useTasks } from "../hooks/useTasksHook";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  React.useEffect(() => {
    loadTasks();
  }, [tasks]);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No tasks yet</h1>;
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
