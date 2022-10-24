import express, { Request as Req, Response as Res } from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken";

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

/**
 * Authenticate user and get token
 * @routes POST /api/users/login
 */
export const loginUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const user = await User.findOne({ email: req.body.email });
    const password = user?.password as string;

    if (user) {
      if (!bcrypt.compareSync(req.body.password, password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      }
    }
  }
);
