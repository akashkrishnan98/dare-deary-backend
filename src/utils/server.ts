import express, { Express } from "express";
import http from "http";
import NODE_ENV from "../config";

const APP_PORT = NODE_ENV.PORT ?? 3000;

const EXPRESS_APP = express();

const useExpressJSON = (): Express => EXPRESS_APP.use(express.json());

const listerToServer = (): http.Server =>
  EXPRESS_APP.listen(APP_PORT, () =>
    console.log(`Listening on port ${APP_PORT}..`)
  );

export default EXPRESS_APP;
export { listerToServer, useExpressJSON };
