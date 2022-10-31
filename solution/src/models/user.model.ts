import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from ".";
import bcrypt from "bcrypt";

/** @desc Initialize User model */
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
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
 * @desc Login a user
 * @param {User} user object
 * @returns {Promise<string | boolean>} Username or false if user does not exist or password is incorrect
 */
export const login = async (user: User): Promise<string | boolean> => {
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
    userExists.password
  );
  if (!passwordCorrect) {
    return false;
  }
  // Return user
  return userExists.username;
};
