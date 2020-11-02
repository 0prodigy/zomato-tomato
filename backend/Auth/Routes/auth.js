const express = require("express");
const { register } = require("../Controller/authController");
const { registerValidator } = require("../validation/authValidation");
const router = express.Router();

router.post("/register", register);

module.exports = router;
