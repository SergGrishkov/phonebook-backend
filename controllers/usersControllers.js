import HttpError from "../helpers/HttpError.js";
import { findByEmail } from "../services/usersServices.js";
import { createUser, updateUserWithToken } from "../services/usersServices.js";
import gravatar from "gravatar";

export const createUserCont = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await findByEmail(email);

    if (user) {
      throw HttpError(409);
    }

    const avatar = gravatar.url(email);
    const newUser = await createUser({ ...req.body, avatar });

    res.status(201).json({
      user: {
        email: newUser.email,
        name: newUser.name,
        avatar: newUser.avatar,
      },
      token: newUser.token,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await findByEmail(email);

    if (!user) {
      throw HttpError(401, "Wrong credentials");
    }

    const checkPass = await user.checkPassword(password);
    
    if (!checkPass) {
      throw HttpError(401, "Wrong credentials");
    }

    const updatedUser = await updateUserWithToken(user._id);

    res.json({
      user: {
        email: updatedUser.email,
        name: updatedUser.name,
        avatar: updatedUser.avatar,
      },
      token: updatedUser.token,
    });
  } catch (error) {
    next(error);
  }
};
