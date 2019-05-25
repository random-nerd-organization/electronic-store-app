const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

// setup database
const env = process.env.NODE_ENV || "development";
const config = require("./config/config")[env];
require("./config/db")(config);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// setup routes
require("./routes")(app);

module.exports.handler = serverless(app);
