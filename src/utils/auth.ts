import { Response } from "express";
import jwt from "jsonwebtoken";
import { ACCESS_PUBLIC_KEY, ACCESS_VERIFY_OPTIONS } from "../configs/auth";
import { IAuthRequest, IBearerUser } from "../interfaces/app-interfaces";
import { sendAPIErrorResponse } from "./api";

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

  try {
    const user = verifyAccessToken(token);
    req.user = user as IBearerUser;
    next();
  } catch (err) {
    return sendAPIErrorResponse(res, 403, err.message);
  }
};

const verifyAccessToken = (
  accessToken: string
  // eslint-disable-next-line @typescript-eslint/ban-types
): string | object =>
  jwt.verify(accessToken, ACCESS_PUBLIC_KEY, ACCESS_VERIFY_OPTIONS);

export { authenticateToken };
