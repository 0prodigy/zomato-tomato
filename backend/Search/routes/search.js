const express = require("express");
const { body } = require("express-validator");
const {
  getCityId,
  getCollection,
  getLocalities,
  getRestaurant,
} = require("../controllers/searchController");
const { cityIdValidation } = require("../validations/searchValidation");
const router = express.Router();

router.post("/cityId", cityIdValidation, getCityId);
router.post(
  "/collection",
  [
    body("city_id")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage("City id is required"),
  ],
  getCollection
);

router.post(
  "/localities",
  [
    body("city_id")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage("City id is required"),
  ],
  getLocalities
);

router.get("/restaurant", getRestaurant);

module.exports = router;
