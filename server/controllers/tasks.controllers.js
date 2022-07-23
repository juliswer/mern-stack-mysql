import { pool } from "../db.js";

export const getTasks = (req, res) => {
  res.send("Getting Tasks");
};

export const getTask = (req, res) => {
  res.send("Getting a Task");
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT into tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      message: "Task Created",
      id: result.insertedId,
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
