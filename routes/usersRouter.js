import express  from "express";
import { createUserSchema, loginUserSchema } from "../schemas/usersShcemas.js";
import validateBody from "../helpers/validateBody.js";
import { createUserCont, loginUser } from "../controllers/usersControllers.js";

const userRouter = express.Router();

userRouter.post("/signup", validateBody(createUserSchema), createUserCont);
userRouter.post("/login", validateBody(loginUserSchema), loginUser);
userRouter.post("/logout");
userRouter.get("/current");

export default userRouter;