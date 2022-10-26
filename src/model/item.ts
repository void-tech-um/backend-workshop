import { Model, DataTypes } from "sequelize";
import sequelize from "./config";

interface IItem {
  id?: number;
  name: string;
  price: number;
  calories: number;
}

// Initialize Item model
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

export const getItems = async () => {
  const items = await Item.findAll();
  return items;
};

export const updateItem = async (id: number, item: IItem) => {
  const updatedItem = await Item.update(item, {
    where: { id },
  });
  return updatedItem;
};

export const createItem = async (item: IItem) => {
  const newItem = await Item.create(item);
  return newItem;
};

export const deleteItem = async (id: number) => {
  const deletedItem = await Item.destroy({
    where: { id },
  });
  return deletedItem;
};
