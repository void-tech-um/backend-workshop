import express from "express";
import * as controller from "../controller/items";
import { authenticateToken } from "../middleware";

const itemsRouter = express.Router();

/** @route GET /api/items */
itemsRouter.get("/", authenticateToken, controller.getItemsController);

/** @route POST /api/items */
itemsRouter.post("/", authenticateToken, controller.createItemController);

/** @route POST /api/items/<id> */
itemsRouter.put("/:id", authenticateToken, controller.updateItemController);

/** @route DELETE /api/items/<id> */
itemsRouter.delete("/:id", authenticateToken, controller.deleteItemController);

export default itemsRouter;
