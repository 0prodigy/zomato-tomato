const express = require("express");
const { register, verifyRegisterOtp } = require("../Controller/authController");
const { registerValidator } = require("../validation/authValidation");
const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/verifyRegister", verifyRegisterOtp);

module.exports = router;
