import { config } from "dotenv";
config();

export const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT, APP_PORT } =
  process.env;

  console.log(DB_PASSWORD);