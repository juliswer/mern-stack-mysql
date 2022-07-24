import express from "express";
import { APP_PORT as PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import {errorHandlerInit} from './error/errorsHandler.js'

const app = express();

app.use(express.json());

app.use(errorHandlerInit);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      success: false,
      status: error.status || 500,
      message: error.message,
    },
  });
});

app.use(indexRoutes);
app.use("/api", tasksRoutes);
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
