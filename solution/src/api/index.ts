import express from "express";
import authRouter from "./routes/auth.routes";
import itemsRouter from "./routes/items.routes";

const router = express.Router();

/** @route GET /api */
router.get("/", (req, res) => {
  res.send({
    items: "/api/items",
    url: req.originalUrl,
  });
});

router.use("/items", itemsRouter);
router.use("/auth", authRouter);

export default router;
