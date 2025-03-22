const Category = require("../models/categoryModel");
const Service = require("../models/serviceModel");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Category name is required" });

    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) return res.status(400).json({ message: "Category already exists" });

    const newCategory = await Category.create({ name });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    category.name = name || category.name;
    await category.save();

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const serviceCount = await Service.count({ where: { categoryId } });
    if (serviceCount > 0) {
      return res.status(400).json({ message: "Cannot delete category with services" });
    }

    await category.destroy();
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};

module.exports = { createCategory, getAllCategories, updateCategory, deleteCategory };
