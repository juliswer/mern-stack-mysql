import express from "express";
import { APP_PORT as PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import apiErrorHandler from './error/api-error-handler.js';

const app = express();

app.use(express.json());

app.use(apiErrorHandler)

app.use(indexRoutes);
app.use("/api", tasksRoutes);
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
