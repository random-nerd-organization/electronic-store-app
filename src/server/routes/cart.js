const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>HELLO CART COMPONENTPAGE</h1>");
  res.end();
});

module.exports = router;
