import { User } from "./models";
import { Item } from "./models";

/**
 * @desc Create a new user
 * @param {User} user
 * @returns {Promise<User | boolean>} Created user or false if user already exists
 */
export const createUser = async (user: User): Promise<User | boolean> => {
  /** @todo Implement the function */
  // Remove this return statement
  return false; // This is to make the compiler happy
};

/**
 * @desc Check if user exists and return user
 * @param {User} user object
 * @returns {Promise<User | null>} Username or false if user does not exist or password is incorrect
 */
export const loginUser = async (user: User): Promise<User | null> => {
  /** @todo Implement the function */
  // Remove this return statement
  return null; // This is to make the compiler happy
};

/**
 * @desc Get all items owned by user
 * @param {string} username
 * @returns {Promise<Item[]>} All items owned by user
 * @throws {Error} If user does not exist
 */
export const getItems = async (username: string): Promise<Item[]> => {
  /** @todo Implement the function */
  // Remove this return statement
  return [
    new Item({
      id: 1,
      name: "placeholder",
      price: 0,
      calories: 0,
      userId: "placeholder",
    }),
  ]; // This is to make the compiler happy
};

/**
 * @desc Create a new item
 * @param {string} username
 * @param {Item} item
 * @returns {Promise<Item>} Created item
 * @throws {Error} If user does not exist
 */
export const createItem = async (
  username: string,
  item: Item
): Promise<Item | boolean> => {
  /** @todo Implement the function */
  // Remove this return statement
  return false; // This is to make the compiler happy
};
