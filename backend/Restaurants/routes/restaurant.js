const express = require("express");
const {
  addRestaurant,
  addPhoto,
  addMenu,
  getRestaurant,
} = require("../controllers/restaurantController");
const router = express.Router();

router.post("/add", addRestaurant);
router.post("/addPhoto", addPhoto);
router.post("/addMenu", addMenu);
router.post("/:id", getRestaurant);

module.exports = router;
