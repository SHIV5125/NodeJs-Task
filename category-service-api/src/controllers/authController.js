const jwt = require("jsonwebtoken");
const credentials = require("../config/auth");

const login = (req, res) => {
  const { email, password } = req.body;

  if (email !== credentials.email || password !== credentials.password) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};

module.exports = { login };
