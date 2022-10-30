import { Model, DataTypes } from "sequelize";
import sequelize from "./config";

interface IItem {
  id?: number;
  name: string;
  price: number;
  calories: number;
}

/** @desc Initialize Item model */
class Item extends Model<IItem> {}

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

/** @desc Get all items */
export const getItems = async () => {
  const items = await Item.findAll();
  return items;
};

/**
 * @desc Update an item
 * @param id Item id
 * @param item Item object
 * @returns {Promise<[affectedCount: number]>} Updated item
 */
export const updateItem = async (
  id: number,
  item: IItem
): Promise<[affectedCount: number]> => {
  const updatedItem = await Item.update(item, {
    where: { id },
  });
  return updatedItem;
};

/**
 * @desc Create a new item
 * @param item IItem
 * @returns {Promise<Item>} Created item
 */
export const createItem = async (item: IItem): Promise<Item> => {
  const newItem = await Item.create(item);
  return newItem;
};

/**
 * @desc Delete an item
 * @param id Item id'
 * @returns {Promise<number>} Deleted item
 */
export const deleteItem = async (id: number): Promise<number> => {
  const deletedItem = await Item.destroy({
    where: { id },
  });
  return deletedItem;
};
