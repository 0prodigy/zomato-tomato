const { default: Axios } = require("axios");
const dotenv = require("dotenv");
const { v4 } = require("uuid");
const Razorpay = require("razorpay");
const User = require("../../Auth/Model/User");

dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_KEY_SECRET,
});

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findOne({ id: id });
    if (user) {
      return res.json({ err: false, message: "Success", user: user });
    } else {
      return res.status(404).json({ err: true, message: "Invalid user Id" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

const addAddress = async (req, res) => {
  const { id, address, type } = req.body;
  try {
    let user = await User.findOne({ id: id });
    if (user) {
      user.address = [...user.address, { address: address, type: type }];
      await user.save();
      return res.json({ err: false, message: "Success", user: user });
    } else {
      return res.status(404).json({ err: true, message: "Invalid user Id" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

const addPhonenumber = async (req, res) => {
  const { id, phoneNumber } = req.body;
  try {
    let user = await User.findOne({ id: id });
    if (user) {
      user.phone = phoneNumber;
      await user.save();
      return res.json({
        err: false,
        message: "Successfully updated mobile number",
        user: user,
      });
    } else {
      return res.status(404).json({ err: true, message: "Invalid user Id" });
    }
  } catch (err) {
    console.log("The error while adding user phone number is", err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

const getOrderId = async (req, res) => {
  console.log(req.query);
  try {
    const options = {
      amount: req.query.amount * 100,
      currency: "INR",
      receipt: v4(),
      payment_capture: 0,
    };
    instance.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json({ message: "Something went wrong" });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    let response = await Axios({
      method: "POST",
      url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
      data: {
        amount: req.body.amount * 100,
        currency: "INR",
      },
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.data)
      .then(async (res) => {
        let user = await User.findOne({ id: req.body.userId });
        let timeStamp = new Date();
        if (user) {
          user.orders.push({
            totalOrder: [...req.body.order],
            timeStamp: timeStamp,
            orderId: req.body.order_id,
            restaurantDetails: req.body.restaurantDetails,
          });
          await user.save();
        }
        return res;
      });
    return res.json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

module.exports = {
  getUser,
  addAddress,
  addPhonenumber,
  getOrderId,
  capturePayment,
};
