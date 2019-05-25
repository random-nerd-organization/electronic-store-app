const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Product.find().exec();
    res.setHeader('Content-Type', 'application/json');
    res.json(JSON.stringify(data));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  res.end();
});

module.exports = router;
