const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Product.find().exec();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
