import { Request as Req, Response as Res, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IUser {
  user?: {
    _id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
  };
}

type Request = Req & IUser;
type Response = Res & IUser;

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, "benjo", (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};
