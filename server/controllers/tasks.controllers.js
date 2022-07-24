import { pool } from "../db.js";
import ApiError from "../error/ApiError.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createdAt ASC"
    );
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getTask = async (req, res, next) => {
  const { taskId: id } = req.params;
  if (!id) {
    console.log("no id");
  } else if (typeof id !== "number") {
    next(ApiError(400, "id must be a number"));
    return;
  }
  try {
    const [result] = await pool.query(`SELECT * FROM tasks WHERE id = ${id}`);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT into tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    console.log(result.insertId);
    res.json({
      message: "Task Created",
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

export const updateTask = (req, res) => {
  res.send("Updating a Task");
};

export const deleteTask = (req, res) => {
  res.send("Deleting a Task");
};
