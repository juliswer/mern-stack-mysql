import { Router } from "express";
import {
  getTasks,
  getTask,
  deleteTask,
  createTask,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:taskId", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:taskId", updateTask);

router.delete("/tasks/:taskId", deleteTask);

export default router;
