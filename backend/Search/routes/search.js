const express = require("express");
const { body } = require("express-validator");
const {
  getCityId,
  getCollection,
  getLocalities,
  getRestaurant,
} = require("../controllers/searchController");
const { cityIdValidation } = require("../validations/serachValidation");
const router = express.Router();

router.get("/cityId", cityIdValidation, getCityId);
router.get(
  "/collection",
  [
    body("city_id")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage("City id is required"),
  ],
  getCollection
);

router.get(
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
