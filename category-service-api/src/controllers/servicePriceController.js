const ServicePrice = require("../models/servicePriceModel");
const Service = require("../models/serviceModel");

// @desc    Get all price options for a service
// @route   GET /category/:categoryId/service/:serviceId/price-options
const getServicePrices = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const prices = await ServicePrice.findAll({ where: { serviceId } });

    if (!prices.length) {
      return res.status(404).json({ message: "No price options found for this service" });
    }

    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching price options", error: error.message });
  }
};

// @desc    Add price option for a service
// @route   POST /category/:categoryId/service/:serviceId/price
const addServicePrice = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { duration, price, type } = req.body;

    if (!duration || !price || !type) {
      return res.status(400).json({ message: "Duration, price, and type are required" });
    }

    // Validate the service exists
    const service = await Service.findByPk(serviceId);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Validate allowed types
    const allowedTypes = ["Hourly", "Weekly", "Monthly"];
    if (!allowedTypes.includes(duration)) {
      return res.status(400).json({ message: "Invalid duration. Allowed values: Hourly, Weekly, Monthly" });
    }

    // Create the service price
    const servicePrice = await ServicePrice.create({ serviceId, duration, price, type });
    res.status(201).json(servicePrice);
  } catch (error) {
    res.status(500).json({ message: "Error adding service price", error: error.message });
  }
};

// @desc    Update a service price option
// @route   PUT /category/:categoryId/service/:serviceId/price-options/:priceId
const updateServicePrice = async (req, res) => {
  try {
    const { priceId } = req.params;
    const { duration, price, type } = req.body;

    const servicePrice = await ServicePrice.findByPk(priceId);
    if (!servicePrice) {
      return res.status(404).json({ message: "Service price not found" });
    }

    await servicePrice.update({ duration, price, type });
    res.status(200).json(servicePrice);
  } catch (error) {
    res.status(500).json({ message: "Error updating service price", error });
  }
};

// @desc    Delete a service price option
// @route   DELETE /category/:categoryId/service/:serviceId/price/:priceId
const deleteServicePrice = async (req, res) => {
  try {
    const { priceId } = req.params;

    const servicePrice = await ServicePrice.findByPk(priceId);
    if (!servicePrice) {
      return res.status(404).json({ message: "Service price not found" });
    }

    await servicePrice.destroy();
    res.status(200).json({ message: "Service price deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service price", error: error.message });
  }
};

module.exports = { getServicePrices, addServicePrice, updateServicePrice, deleteServicePrice };
