import express from "express";
import * as controller from "../controller/auth";
import { hashPassword } from "../middleware";

const authRouter = express.Router();

authRouter.post("/signup", hashPassword, controller.createUserController);
authRouter.post("/login", controller.loginController);

export default authRouter;
