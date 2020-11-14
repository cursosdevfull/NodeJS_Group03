import { Request, Response, NextFunction } from "express";

export default class SchemaValidator {
  static validate(schemaValidation: any) {
    return (req: Request, res: Response, next: NextFunction) => {};
  }
}
