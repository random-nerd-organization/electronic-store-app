module.exports = app => {
  const baseUrl = "/.netlify/functions/app";

  const main = require("./main");
  const products = require("./products");
  const cart = require("./cart");

  // app.use(`${baseUrl}`, main);
  app.use(`${baseUrl}/products`, products);
  app.use(`${baseUrl}/cart`, cart);
};
