import dotenv from "dotenv";
dotenv.config();

const decodeBase64 = (base64string: string): string => {
  const bufferObj = Buffer.from(base64string, "base64");
  return bufferObj.toString("utf8");
};

const NODE_ENV = {
  PORT: process.env.PORT,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  AUTH_KEY: decodeBase64(process.env.AUTH_KEY || ""),
};

export default NODE_ENV;
