// import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { Request, Response } from "../types/express";

/**
 * POST login user
 * @routes POST /users/login
 * @access Private
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
      {
        _id: existingUser._id,
        email: existingUser.email,
        name: existingUser.name,
        isAdmin: existingUser.isAdmin,
      },
      secret,
      { expiresIn: "30d" }
    );

    return res.status(200).json({
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

export const authUser = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.json({ message: "Unanthenticated" });

    const user = await User.findOne({ _id: req.user._id }).select("-password");

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
