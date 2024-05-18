import User from "../db/models/User.js";
import jwt from "jsonwebtoken";

export const findByEmail = (email) => User.findOne({ email });

export const updateUserWithToken = async (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 3600 });
  return await User.findByIdAndUpdate(id, { token }, { new: true });
};
export const createUser = async (userData) => {
  const newUser = new User(userData);
  await newUser.hashPassword();

  await newUser.save();
  return await updateUserWithToken(newUser._id);
};
