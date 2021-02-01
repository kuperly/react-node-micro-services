import express from "express";
import { controller } from "./controller";

export const routes = (app: express.Express) => {
  app.route("/api/log").post(controller.saveLog);
  app.route("*").get(controller.notFound);
};
