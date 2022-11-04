import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @desc Hash a password
 * @param req Request
 * @param res Response
 * @param next Next
 * @returns {Promise<void>}
 */
export const hashPassword = async (
  req: any,
  res: any,
  next: any
): Promise<void> => {
  /** @todo Implement the function */
  next();
};

/**
 * @desc Authenticate a JWT token
 * @param req Request
 * @param res Response
 * @param next Next
 * @returns {any} Error if token is invalid or not present
 */
export const authenticateToken = (req: any, res: any, next: any): any => {
  /** @todo Implement the function */
  next(); // Move this to the correct place
};
