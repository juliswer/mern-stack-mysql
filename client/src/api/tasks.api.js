import axios from "axios";

export const getTasksRequest = async () => {
  return await axios.get("http://localhost:4000/api/tasks");
};

export const getTaskRequest = async (id) => {
  return await axios.get(`http://localhost:4000/api/tasks/${id}`);
};

export const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/api/tasks", task);
};

export const deleteTaskRequest = async (id) => {
  return await axios.delete(`http://localhost:4000/api/tasks/${id}`);
};

export const updateTaskRequest = async (id, task) => {
  return await axios.put(`http://localhost:4000/api/tasks/${id}`, task);
};
