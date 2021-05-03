import express, { Express } from "express";
import http from "http";
import NODE_ENV from "../config";

const PORT = NODE_ENV.PORT ?? 3000;

const EXPRESS_APP = express();

const useExpressJSON = (): Express => EXPRESS_APP.use(express.json());

const listerToServer = (): http.Server =>
  EXPRESS_APP.listen(PORT, () => console.log(`Listening on port ${PORT}..`));

export default EXPRESS_APP;
export { listerToServer, useExpressJSON };
