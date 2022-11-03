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
  /** @todo Implement the function */
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
  /** @todo Implement the function */
};

/**
 * @desc Generate a JWT token
 * @param user
 * @returns {string} JWT token
 */
const generateAccessToken = (user: any): string => {
  /** @todo Implement the function */
  return ""; // This is to make the compiler happy
};
