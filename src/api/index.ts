import express from "express";
import authRouter from "./routes/auth";
import itemsRouter from "./routes/items";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    items: "/api/items",
    url: req.originalUrl,
  });
});

router.use("/items", itemsRouter);
router.use("/auth", authRouter);

export default router;
