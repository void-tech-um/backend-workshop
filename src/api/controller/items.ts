import * as model from "../../model/item";

/**
 * @route GET /api/items
 * @desc Get all items
 * @access Public
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
export const getItemsController = async (req: any, res: any): Promise<void> => {
  const items = await model.getItems();
  res.send({
    items: items,
    url: req.originalUrl,
  });
};

/**
 * @route POST /api/items/<id>
 * @desc Update an item
 * @access Public
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
export const updateItemController = async (
  req: any,
  res: any
): Promise<void> => {
  const id = req.params.id;
  const item = req.body;
  const updatedItem = await model.updateItem(id, item);
  res.send({
    updatedItem: updatedItem,
    url: req.originalUrl,
  });
};

/**
 * @route POST /api/items
 * @desc Create a new item
 * @access Public
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
export const createItemController = async (req: any, res: any) => {
  const item = req.body;
  const createdItem = await model.createItem(item);
  res.send({
    createdItem: createdItem,
    url: req.originalUrl,
  });
};

/**
 * @route DELETE /api/items/<id>
 * @desc Delete an item
 * @access Public
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
export const deleteItemController = async (
  req: any,
  res: any
): Promise<void> => {
  const id = req.params.id;
  const deletedItem = await model.deleteItem(id);
  res.send({
    deletedItem: deletedItem,
    url: req.originalUrl,
  });
};
