import { Request, Response, NextFunction } from "express";

export const unknownEndpoint = (request: Request, response: Response) => {
  response.status(400).json(`Unknown endpoint`);
};
