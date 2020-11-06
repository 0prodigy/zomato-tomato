const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city_id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  city_name: {
    type: String,
    required: true,
  },
  cords: {
    type: [],
    required: true,
  },
  cusine: {
    type: Array,
    default: [],
  },
  collections: {
    type: Array,
    default: [],
  },
  tagline: {
    type: String,
  },
});

module.exports = mongoose.model("City", citySchema);
