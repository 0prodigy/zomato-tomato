const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
  },
  address: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  image: {
    type: String,
    default: "https://img.icons8.com/color/2x/spyro.png",
  },
});

module.exports = mongoose.model("User", userSchema);
