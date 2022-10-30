import express from "express";
import * as controller from "../controller/auth";
import { hashPassword } from "../middleware";

const authRouter = express.Router();

/** @route POST /api/auth/signup */
authRouter.post("/signup", hashPassword, controller.createUserController);

/** @route POST /api/auth/login */
authRouter.post("/login", controller.loginController);

export default authRouter;
