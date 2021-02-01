import express from "express";

import { controller } from "./controller";

export const routes = (app: express.Express) => {
  app.route("/api/array/:arrayLength").get(controller.generateArray);
  app.route("*").get(controller.notFound);
};
