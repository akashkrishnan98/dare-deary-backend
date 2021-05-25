import jwt from "jsonwebtoken";
import NODE_ENV from "./env";

export const ACCESS_PUBLIC_KEY = NODE_ENV.AUTH_KEY;

export const ACCESS_VERIFY_OPTIONS: jwt.VerifyOptions = {
  issuer: "Dare Deary",
  algorithms: ["RS512"],
};
