const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Product.find().exec();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
