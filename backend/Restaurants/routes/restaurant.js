const express = require("express");
const {
  addRestaurant,
  addPhoto,
  addMenu,
  getRestaurant,
  getAllRestaurant,
  fillterdRestaurant,
} = require("../controllers/restaurantController");
const router = express.Router();

router.post("/add", addRestaurant);
router.post("/addPhoto", addPhoto);
router.post("/addMenu", addMenu);
router.get("/all", getAllRestaurant);
router.post("/filterd", fillterdRestaurant);
router.get("/:id", getRestaurant);

module.exports = router;
