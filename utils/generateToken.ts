import jwt from "jsonwebtoken";
import mongoose from "mongoose";
/**
 * Generate a jsonwebtoken for a user
 * @param id The id of the user
 */
const generateToken = (id: mongoose.Types.ObjectId) => {
  if (process.env.JWT_SECRET !== undefined) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  }
};

export default generateToken;
