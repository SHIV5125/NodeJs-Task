const express = require("express");
const {
  createService,
  getServices,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:categoryId/service", authenticateToken, createService);
router.get("/:categoryId/service", authenticateToken, getServices);
router.put("/:categoryId/service/:serviceId", authenticateToken, updateService);
router.delete("/:categoryId/service/:serviceId", authenticateToken, deleteService);

module.exports = router;
