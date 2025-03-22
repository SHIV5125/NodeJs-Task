const express = require("express");
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateToken, createCategory);
router.get("/", authenticateToken, getAllCategories);
router.put("/:categoryId", authenticateToken, updateCategory);
router.delete("/:categoryId", authenticateToken, deleteCategory);

module.exports = router;
