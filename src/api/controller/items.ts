import * as model from "../model/item";

export const getItemsController = async (req: any, res: any) => {
  const items = await model.getItems();
  res.send({
    items: items,
    url: req.originalUrl,
  });
};

export const updateItemController = async (req: any, res: any) => {
  const id = req.params.id;
  const item = req.body;
  const updatedItem = await model.updateItem(id, item);
  res.send({
    updatedItem: updatedItem,
    url: req.originalUrl,
  });
};

export const createItemController = async (req: any, res: any) => {
  const item = req.body;
  const createdItem = await model.createItem(item);
  res.send({
    createdItem: createdItem,
    url: req.originalUrl,
  });
};

export const deleteItemController = async (req: any, res: any) => {
  const id = req.params.id;
  const deletedItem = await model.deleteItem(id);
  res.send({
    deletedItem: deletedItem,
    url: req.originalUrl,
  });
};
