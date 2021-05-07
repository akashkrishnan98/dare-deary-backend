import { Response } from "express";

import { IAuthRequest, IBearerUser } from "../interfaces/app-interfaces";
import { getAuthStatus, sendAPIErrorResponse } from "./api";

const authenticateToken = (
  req: IAuthRequest,
  res: Response,
  next: () => void
): void | Express.Application => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .send({ code: 401, message: "Bearer token not received" });

  getAuthStatus(token)
    .then((user) => {
      req.user = user as IBearerUser;
    })
    .then(() => next())
    .catch((err) => {
      console.log(err);
      return sendAPIErrorResponse(res, 403, err.message);
    });
};

export { authenticateToken };
