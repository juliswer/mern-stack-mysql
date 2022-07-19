import { config } from "dotenv";
config();

export const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } =
  process.env;

export const PORT = 4000;
