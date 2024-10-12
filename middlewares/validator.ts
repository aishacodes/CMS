import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validator = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: "Validation error",
        details: error.details.map((detail) => detail.message),
      });
    } else {
      next();
    }
  };
};
