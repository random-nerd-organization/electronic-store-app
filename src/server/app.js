const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// setup routes
require("./routes")(app);

// setup database
const env = process.env.NODE_ENV || "development";
const config = require("./config/config")[env];
require("./config/db")(config);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
