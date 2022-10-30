import express from "express";
import * as controller from "../controller/items";
import { authenticateToken } from "../middleware";

const itemsRouter = express.Router();

itemsRouter.get("/", authenticateToken, controller.getItemsController);
itemsRouter.post("/", authenticateToken, controller.createItemController);
itemsRouter.put("/:id", controller.updateItemController);
itemsRouter.delete("/:id", controller.deleteItemController);

export default itemsRouter;
