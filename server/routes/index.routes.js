import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  try {
    const [rows, result] = await pool.query("SELECT 1 + 1 as result");

    res.status(200).json({
      message: "pong",
      rows,
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
