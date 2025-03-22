const express = require("express");
const {
  getServicePrices,
  addServicePrice,
  updateServicePrice,
  deleteServicePrice,
} = require("../controllers/servicePriceController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

// Add service price
router.post("/:categoryId/service/:serviceId/price", authenticateToken, addServicePrice);

// Get all service prices for a service
router.get("/:categoryId/service/:serviceId/price-options", authenticateToken, getServicePrices);

// Update a service price
router.put("/:categoryId/service/:serviceId/price/:priceId", authenticateToken, updateServicePrice);

// Delete a service price
router.delete("/:categoryId/service/:serviceId/price/:priceId", authenticateToken, deleteServicePrice);

module.exports = router;
