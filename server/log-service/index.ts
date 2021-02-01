import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

dotenv.config({ path: "../.env" });
const app = express();
app.use(bodyParser.json());

routes(app);

app.listen(process.env.LOGGER_PORT, () => {
  console.log("up and running! -- Logger service" + process.env.LOGGER_PORT);
});
