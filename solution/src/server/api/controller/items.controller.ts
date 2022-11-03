import db from "../../models";

/**
 * @route GET /api/items
 * @desc Get all items
 * @param req Request
 * @param res Response
 * @returns {Promise<void>}
 */
export const getItemsController = async (req: any, res: any): Promise<void> => {
  if (req.query.username) {
    const username = req.query.username;
    const items = await db.user.getItems(username);
    return res.send({
      items: items,
      url: req.originalUrl,
    });
  }
  const items = await db.item.getItems();
  res.send({
    items: items,
    url: req.originalUrl,
  });
};

/**
 * @route POST /api/items/<id>
 * @desc Update an item
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
  const updatedItem = await db.item.updateItem(id, item);
  res.send({
    updatedItem: updatedItem,
    url: req.originalUrl,
  });
};

/**
 * @route POST /api/items
 * @desc Create a new item
 * @param {any} req
 * @param {any} res
 * @returns {Promise<void>}
 */
export const createItemController = async (
  req: any,
  res: any
): Promise<void> => {
  const item = req.body;
  const { user } = req.user;
  console.log(user.username);
  const createdItem = await db.user.createItem(user.username, item);
  res.send({
    createdItem: createdItem,
    url: req.originalUrl,
  });
};

/**
 * @route DELETE /api/items/<id>
 * @desc Delete an item
 * @param {any} req
 * @param {any} res
 * @returns {Promise<void>}
 */
export const deleteItemController = async (
  req: any,
  res: any
): Promise<void> => {
  const id = req.params.id;
  const deletedItem = await db.item.deleteItem(id);
  res.send({
    deletedItem: deletedItem,
    url: req.originalUrl,
  });
};
