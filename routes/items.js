
const express = require("express");
const router = express.Router();

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} = require("../controllers/itemsController");

const { validateItem } = require("../validators/itemValidator");

// Routes
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validateItem, createItem);
router.put("/:id", validateItem, updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
