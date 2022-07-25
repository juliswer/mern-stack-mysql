import { pool } from "../db.js";

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
  try {
    const [result] = await pool.query(`SELECT * FROM tasks WHERE id = ?`, [id]);

    if (result.length === 0) {
      res.status(404).json({
        success: true,
        message: "Task not found",
      });
    } else {
      res.status(200).json({
        success: true,
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
    if (typeof id !== "number") {
      error.message = "ID must be a number";
    }
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

export const updateTask = async (req, res) => {
  const { taskId: id } = req.params;
  const { title, description } = req.body;
  const bodyUpdatedTask = {
    title,
    description,
  };
  try {
    const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      bodyUpdatedTask,
      id,
    ]);
    if (result.affectedRows === 1 && result.changedRows === 1) {
      res.status(200).json({
        success: true,
        data: result,
        taskUpdated: {
          id,
          bodyUpdatedTask,
        },
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Task not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { taskId: id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({
        success: true,
        message: "Task not found",
      });
    } else if (result.affectedRows === 1) {
      res.status(200).json({
        success: true,
        message: "Task Deleted",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
