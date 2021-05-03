import dotenv from "dotenv";
dotenv.config();

const NODE_ENV = {
  PORT: process.env.PORT,
};

export default NODE_ENV;
