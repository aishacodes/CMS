import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { method, url } = req;
  const message = `${method} ${url} - ${err.message}`;

  logger.error(message, { stack: err.stack });
  res.status(500).json({ message: "Internal server error" });
};
