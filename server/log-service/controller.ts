import express from "express";

export const controller = {
  saveLog: (req: express.Request, res: express.Response) => {
    console.log("log -> ", req.body);
    res.send("success");
  },
  notFound: (req: express.Request, res: express.Response) =>
    res.status(404).send("missing 404"),
};
