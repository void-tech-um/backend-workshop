import * as model from "../../models/user.repository";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

/**
 * @route POST /api/auth/register
 * @desc Register a new user and return a JWT token
 * @access Public
 * @param {any} req
 * @param {any} res
 * @returns {Promise<void>}
 */
export const createUserController = async (
  req: any,
  res: any
): Promise<void> => {
  const user = req.body;
  const createdUser = await model.createUser(user);
  if (!createdUser) {
    return res.status(400).send({
      message: "User already exists",
    });
  }
  const token = generateAccessToken(user.username);
  res.send({
    createdUser: createdUser,
    token: token,
    url: req.originalUrl,
  });
};

/**
 * @route POST /api/auth/login
 * @desc Login a user and return a JWT token
 * @access Public
 * @param {any} req
 * @param {any} res
 * @returns {Promise<void>}
 */
export const loginController = async (req: any, res: any): Promise<void> => {
  const user = req.body;
  const loggedInUser = await model.loginUser(user);

  if (!loggedInUser) return res.sendStatus(401);

  const passwordCorrect = await bcrypt.compare(
    user.password,
    loggedInUser.password
  );
  if (!passwordCorrect) {
    return res.status(400).send({
      message: "Incorrect password",
    });
  }
  const token = generateAccessToken(loggedInUser);
  res.send({
    loggedInUser: loggedInUser,
    token: token,
    url: req.originalUrl,
  });
};

/**
 * @desc Generate a JWT token
 * @param user
 * @returns {string} JWT token
 */
const generateAccessToken = (user: any): string => {
  return jwt.sign({ user: user }, process.env.TOKEN_SECRET as string, {
    expiresIn: "15m",
  });
};
