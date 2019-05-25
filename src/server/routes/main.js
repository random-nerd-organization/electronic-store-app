const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js THIS IS MAIN ROUTE!</h1>");
  res.end();
});

module.exports = router;
