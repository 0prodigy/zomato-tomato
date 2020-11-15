const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Otp", otpSchema);
