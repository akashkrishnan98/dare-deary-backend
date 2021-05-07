import dotenv from "dotenv";
dotenv.config();

const NODE_ENV = {
  PORT: process.env.PORT,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
};

export default NODE_ENV;
