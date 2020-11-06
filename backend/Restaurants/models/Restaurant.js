const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
  establishment: {
    type: Array,
  },
  highlights: { type: Array },
  establishment_type: {},
  average_cost_for_two: {},
  price_range: {
    type: String,
  },
  currency: {
    type: String,
  },
  thumb: {
    type: String,
    required: true,
  },
  featured_image: {
    type: String,
  },
  user_rating: {},
  has_online_delivery: {},
  is_delivering_now: {},
  timings: {},
  has_table_booking: {},
  cuisines: {},
  all_reviews_count: {},
  photo_count: {},
  phone_numbers: {},
  photos: {
    type: Array,
  },
  all_reviews: {
    type: Array,
  },
  menu: {
    type: Array,
    default: [],
  },
  collection_id: { type: Array, default: [] },
});

module.exports = mongoose.model("Restaurants", restaurantSchema);
