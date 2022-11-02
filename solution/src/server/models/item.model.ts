import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from ".";

/** @desc Initialize Item model */
export default class Item extends Model<
  InferAttributes<Item>,
  InferCreationAttributes<Item>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number;
  declare calories: number;
}

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

/**
 * @desc Get all items
 * @returns {Promise<Item[]>} All items
 */
export const getItems = async (): Promise<Item[]> => {
  const items = await Item.findAll();
  return items;
};

/**
 * @desc Update an item
 * @param {number} id
 * @param {Item} item
 * @returns {Promise<[affectedCount: number]>} Updated item
 */
export const updateItem = async (
  id: number,
  item: Item
): Promise<[affectedCount: number]> => {
  const updatedItem = await Item.update(item, {
    where: { id },
  });
  return updatedItem;
};

/**
 * @desc Create a new item
 * @param {Item} item
 * @returns {Promise<Item>} Created item
 */
export const createItem = async (item: Item): Promise<Item> => {
  const newItem = await Item.create(item);
  return newItem;
};

/**
 * @desc Delete an item
 * @param {number} id
 * @returns {Promise<number>} Deleted item
 */
export const deleteItem = async (id: number): Promise<number> => {
  const deletedItem = await Item.destroy({
    where: { id },
  });
  return deletedItem;
};
