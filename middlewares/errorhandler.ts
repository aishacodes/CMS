import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { method, url } = req;
  const message = `${method} ${url} - ${err.message}`;

  res.status(500).json({ message: "Internal server error" });
};
