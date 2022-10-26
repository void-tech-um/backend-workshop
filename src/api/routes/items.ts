import express from "express";
import * as controller from "../controller/items";

const itemsRouter = express.Router();

itemsRouter.get("/", controller.getItemsController);
itemsRouter.post("/", controller.createItemController);
itemsRouter.put("/:id", controller.updateItemController);
itemsRouter.delete("/:id", controller.deleteItemController);

export default itemsRouter;
