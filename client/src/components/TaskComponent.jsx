import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../api/tasks.api";

function TaskComponent({ task }) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteTaskRequest(task.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✅" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
    </div>
  );
}

export default TaskComponent;
