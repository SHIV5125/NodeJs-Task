const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Service = require("./serviceModel");

const ServicePrice = sequelize.define("ServicePrice", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Service,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  duration: {
    type: DataTypes.ENUM("Hourly", "Weekly", "Monthly"),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("Normal", "VIP"), // ✅ Ensure it's ENUM like serviceModel.js
    allowNull: false,
  },
});

module.exports = ServicePrice;
