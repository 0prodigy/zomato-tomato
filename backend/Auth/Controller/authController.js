const nodemailer = require("nodemailer");
const Otp = require("../Model/Otp");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
const User = require("../Model/User");
const { v4 } = require("uuid");
dotenv.config();

const validateBody = validationResult.withDefaults({
  formatter: (err) => {
    return {
      err: true,
      message: err.msg,
    };
  },
});

const sendOtp = async (email, name) => {
  let min = 10000;
  let max = 99999;
  let otp = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(process.env.EMAIL);

  let transprter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let mailOption = {
    form: process.env.EMAIL,
    to: email,
    subject: "Otp for verification",
    html: `<h3>You verification OTP is<h3>  <br> <h1>${otp} </h1>`,
  };

  transprter.sendMail(mailOption, async (err) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      try {
        let user = await Otp.findOne({ email: email });
        if (user) {
          await Otp.updateOne({ email: email }, { otp: otp });
        } else {
          let token = new Otp({ email: email, name: name, otp: otp });
          await token.save();
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  });

  return otp;
};

const register = async (req, res) => {
  const errors = validateBody(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.json({ err, message });
  } else {
    const { name, email } = req.body;
    let otp = sendOtp(email, name);
    console.log(otp);
    if (otp) {
      return res.json({ err: false, message: "Otp sent to your email" });
    }
  }
  return res.status(400).json({ err: true, message: "Something went wrong" });
};

const verifyRegisterOtp = async (req, res) => {
  const { otp, email } = req.body;

  try {
    let user = await Otp.find({ email: email, otp: otp });
    if (user) {
      let regUser = new User({ name: user.name, email: user.email, id: v4() });
      await regUser.save();
    } else {
      return res.status(401).json({ err: true, message: "Wrong otp" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
  return res.json({ err: false, message: "User register successfully" });
};

module.exports = { register, verifyRegisterOtp };
