import jwt, { Secret } from "jsonwebtoken";
import { Response, Request, NextFunction } from "../types/express";
import { IUser } from "../types/express";

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;

  const secret: Secret = process.env.JWT_SECRET || "benjo";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, secret) as IUser;
      req.user = decoded;
      next();
    } catch (err) {
      console.log(err);
      throw new Error("Not authorized, token failed");
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
