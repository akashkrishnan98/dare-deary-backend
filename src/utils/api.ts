import axios from "axios";
import { Response } from "express";
import NODE_ENV from "../config";
import { IGetAuthStatusResponse } from "../interfaces/api-interfaces";

const AUTH_DOMAIN = NODE_ENV.AUTH_DOMAIN || "http://localhost:3001";

const ENDPOINTS = {
  GET_AUTH_STATUS: (token: string): string =>
    `${AUTH_DOMAIN}/api/verify-token?accessToken=${token}`,
};

export const getAuthStatus = (
  token: string
): Promise<IGetAuthStatusResponse> => {
  const authStatus = axios
    .get<IGetAuthStatusResponse>(ENDPOINTS.GET_AUTH_STATUS(token))
    .then((res) => res.data);
  return authStatus;
};

export const sendAPIErrorResponse = (
  res: Response,
  status: number,
  message: string
): Response => {
  return res.status(status).send({ code: status, message: message });
};
