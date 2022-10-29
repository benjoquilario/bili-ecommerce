import { Request as Req, Response as Res } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
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

/**
 * Authenticate user and get token
 * @routes POST /api/users/login
 */

const secret = "benjo";
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res
        .status(500)
        .json({ message: "Please enter a correct email and password!" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(401).json({ password: "Invalid Credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "30d" }
    );

    return res.send({
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Please enter a correct email and password.!" });
  }
};

export const authenticatedUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModal.findOne({ _id: req.user._id }).select(
      "-password"
    );

    if (!user) return;

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
