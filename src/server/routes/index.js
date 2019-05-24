module.exports = app => {
  const products = require("./products");
  const cart = require("./cart");

  app.use("/api/products", products);
  app.use("/api/cart", cart);
};
