import * as Handlers from "./handler";
import * as Methods from "../methods";

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case Methods.GET:
      return await Handlers.handlerGet(req, res);
    default:
      res.status(400).json({
        message: "400 Bad Request : invalid method",
      });
  }
}
