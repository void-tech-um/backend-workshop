import { Model, DataTypes } from "sequelize";
import sequelize from "./config";
import bcrypt from "bcrypt";

interface IUser {
  id?: number;
  username: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/** @desc Initialize User model */
class User extends Model<IUser> {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

/**
 * @desc Create a new user
 * @param user User object
 * @returns Created user
 */
export const createUser = async (user: IUser) => {
  // Check if user already exists
  const userExists = await User.findOne({
    where: {
      username: user.username,
    },
  });
  if (userExists) {
    return false;
  }
  // Create user
  const newUser = await User.create(user);
  return newUser;
};

/**
 * @desc Login a user
 * @param user User object
 * @returns Logged in user's username
 * @returns false if user does not exist
 * @returns false if password is incorrect
 */
export const login = async (user: IUser) => {
  // Check if user exists
  const userExists = await User.findOne({
    where: {
      username: user.username,
    },
  });
  if (!userExists) {
    return false;
  }
  // Check if password is correct
  const passwordCorrect = await bcrypt.compare(
    user.password,
    userExists.getDataValue("password")
  );
  if (!passwordCorrect) {
    return false;
  }
  // Return user
  return userExists.getDataValue("username");
};
