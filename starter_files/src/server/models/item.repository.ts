import { Item } from "./models";

/**
 * @desc Get all items
 * @returns {Promise<Item[]>} All items
 */
export const getItems = async (): Promise<Item[]> => {
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
 * @desc Update an item
 * @param {number} id
 * @param {Item} item
 * @returns {Promise<[affectedCount: number]>} Updated item
 */
export const updateItem = async (
  id: number,
  item: Item
): Promise<[affectedCount: number]> => {
  /** @todo Implement the function */
  return [0]; // This is to make the compiler happy
};

/**
 * @desc Create a new item
 * @param {Item} item
 * @returns {Promise<Item>} Created item
 */
export const createItem = async (item: Item): Promise<Item> => {
  /** @todo Implement the function */
  return item; // This is to make the compiler happy
};

/**
 * @desc Delete an item
 * @param {number} id
 * @returns {Promise<number>} Deleted item
 */
export const deleteItem = async (id: number): Promise<number> => {
  /** @todo Implement the function */
  return 0; // This is to make the compiler happy
};
