require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const servicePriceRoutes = require("./routes/servicePriceRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/category", categoryRoutes);
app.use("/category", serviceRoutes);
app.use("/category", servicePriceRoutes); // Fixed to match the correct route structure

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
