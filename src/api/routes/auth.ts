import express from "express";
import * as controller from "../controller/auth";

const authRouter = express.Router();

authRouter.post("/signup", controller.createUserController);

export default authRouter;
