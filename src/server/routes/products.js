const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>HELLO CART COMPONENTPAGE</h1>");
  res.end();

  // try {
  //   const data = await Product.find().exec();
  //   res.status(200).send(data);
  // } catch (err) {
  //   res.status(500).send({ error: err.message });
  // }
});

module.exports = router;
