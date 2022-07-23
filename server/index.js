import express from "express";
import { APP_PORT as PORT } from "./config.js";

const app = express();

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
