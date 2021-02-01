import asyncHandler from "express-async-handler";
import express from "express";
import { services } from "./services";

export const controller = {
  generateArray: asyncHandler(
    async (req: express.Request, res: express.Response) => {
      if (isNaN(+req.params.arrayLength)) {
        res.status(400).send({ error: "Required query params missing" });
      }

      const response = await services.generateArray(+req.params.arrayLength);
      services.sendToLogger(response);
      res.status(200).send(response);
    }
  ),
  notFound: (req: express.Request, res: express.Response) =>
    res.status(404).send("missing 404"),
};
