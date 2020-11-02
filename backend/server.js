const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
