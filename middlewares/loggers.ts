import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

export const logRequests = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { method, url } = req;
  const message = `${method} ${url}`;

  logger.info(message);
  next();
};
