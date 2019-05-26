const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// setup database
const env = process.env.NODE_ENV || "development";
const config = require("./config/config")[env];
require("./config/db")(config);

// setup routes
require("./routes")(app);

module.exports.handler = serverless(app);
