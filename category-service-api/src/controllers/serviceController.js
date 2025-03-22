const Service = require("../models/serviceModel");
const Category = require("../models/categoryModel");

// @desc    Create a new service in a category
// @route   POST /category/:categoryId/service
const createService = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, type } = req.body;

    if (!name || !type) {
      return res.status(400).json({ message: "Name and type are required" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const service = await Service.create({ categoryId, name, type });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error });
  }
};

// @desc    Get all services in a category
// @route   GET /category/:categoryId/services
const getServices = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const services = await Service.findAll({ where: { categoryId } });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
};

// @desc    Update a service in a category
// @route   PUT /category/:categoryId/service/:serviceId
const updateService = async (req, res) => {
  try {
    const { categoryId, serviceId } = req.params;
    const { name, type } = req.body;

    const service = await Service.findOne({ where: { id: serviceId, categoryId } });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.update({ name, type });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error });
  }
};

// @desc    Delete a service from a category
// @route   DELETE /category/:categoryId/service/:serviceId
const deleteService = async (req, res) => {
  try {
    const { categoryId, serviceId } = req.params;

    const service = await Service.findOne({ where: { id: serviceId, categoryId } });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.destroy();
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error });
  }
};

module.exports = { createService, getServices, updateService, deleteService };
