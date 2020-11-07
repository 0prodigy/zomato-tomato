const express = require("express");
const {
  register,
  verifyRegisterOtp,
  login,
  verifyLoginOtp,
  googleRegister,
  googleLogin,
} = require("../Controller/authController");
const {
  registerValidator,
  loginValidator,
} = require("../validation/authValidation");
const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
router.post("/verifyRegister", verifyRegisterOtp);
router.post("/verifyLogin", verifyLoginOtp);
router.post("/googleRegister", registerValidator, googleRegister);
router.post("/googleLogin", loginValidator, googleLogin);

module.exports = router;
