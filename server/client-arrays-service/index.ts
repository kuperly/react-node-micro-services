import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

dotenv.config({ path: "../.env" });
const app = express();
app.use(bodyParser.json());

routes(app);

// socket.io on('connection', () => {...})
// socket.io emit('message', () => {...})

app.listen(process.env.CLIENT_ARRAYS_PORT, () => {
  console.log(
    "up and running! -- Main service " + process.env.CLIENT_ARRAYS_PORT
  );
});
