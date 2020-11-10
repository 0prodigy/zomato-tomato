const express = require("express");
const {
  getUser,
  addAddress,
  getOrderId,
  capturePayment,
} = require("../controller/userController");
const router = express.Router();

router.get("/findById/:id", getUser);
router.post("/addAddress", addAddress);
router.get("/orderId", getOrderId);
router.post("/capture/:paymentId", capturePayment);

module.exports = router;
