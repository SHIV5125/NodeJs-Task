const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Category = require("./categoryModel");

const Service = sequelize.define("Service", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "id",
    },
    onDelete: "CASCADE",
    field: "category_id",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("Normal", "VIP"),
    allowNull: false,
  },
}, {
  timestamps: false  
});

module.exports = Service;
