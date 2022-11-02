import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from ".";

/** @desc Initialize User model */
export default class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

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
 * @param {User} user
 * @returns {Promise<User | boolean>} Created user or false if user already exists
 */
export const createUser = async (user: User): Promise<User | boolean> => {
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
 * @desc Check if user exists and return user
 * @param {User} user object
 * @returns {Promise<User | null>} Username or false if user does not exist or password is incorrect
 */
export const loginUser = async (user: User): Promise<User | null> => {
  // Check if user exists
  const userExists = await User.findOne({
    where: {
      username: user.username,
    },
  });
  return userExists;
};
