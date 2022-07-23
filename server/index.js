import express from "express";
import { APP_PORT as PORT } from "./config.js";
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(indexRoutes)
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
