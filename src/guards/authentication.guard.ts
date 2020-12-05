import { Console } from "console";
import { Request, Response, NextFunction } from "express";
import { access } from "fs";
import { Tokens } from "../auth/application/auth.service";

export class AuthenticationGuard {
  static canActivate(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    const headers = req.headers;
    const authorization: any = headers["authorization"];

    if (authorization) {
      const partsAuthorization = authorization.split(" ");
      if (partsAuthorization.length < 2) {
        res.status(401).send("User not logged");
      } else {
        const accessToken = partsAuthorization[1];
        Tokens.validateAccessToken(accessToken).then(
          (payload) => {
            res.locals.payload = payload;
            next();
          },
          (error: any) => {
            res.status(error.status).send(error.message);
          }
        );
      }
    } else {
      res.status(401).send("User not logged");
    }
  }
}
