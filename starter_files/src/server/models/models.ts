import sequelize from "./db";
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyCreateAssociationMixin,
  NonAttribute,
  Association,
  ForeignKey,
} from "sequelize";

/** @desc Initialize User model */
export class User extends Model<
  InferAttributes<User, { omit: "items" }>,
  InferCreationAttributes<User, { omit: "items" }>
> {
  declare username: string;
  declare email: string;
  declare password: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getItems: HasManyGetAssociationsMixin<Item>;
  declare addItem: HasManyAddAssociationMixin<Item, "id">;
  declare removeItem: HasManyRemoveAssociationMixin<Item, "id">;
  declare createItem: HasManyCreateAssociationMixin<Item>;

  get userName(): NonAttribute<string> {
    return this.username;
  }

  declare items?: NonAttribute<Item[]>;

  declare static associations: { items: Association<User, Item> };
}

/** @desc Initialize Item model */
export class Item extends Model<
  InferAttributes<Item>,
  InferCreationAttributes<Item>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number;
  declare calories: number;
  declare userId: ForeignKey<User["username"]>;
  declare owner?: NonAttribute<User>;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
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

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Item",
    tableName: "items",
    createdAt: false,
    updatedAt: false,
  }
);

User.hasMany(Item, {
  foreignKey: "userId",
  sourceKey: "username",
  as: "items",
});

Item.belongsTo(User, {
  targetKey: "username",
});
