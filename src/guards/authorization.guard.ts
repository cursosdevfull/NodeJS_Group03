import { Request, Response, NextFunction } from "express";

export class AuthorizationGuard {
  canActivate(...rolesAllowed: Array<string>) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { roles } = res.locals.payload;
    };
  }
}
