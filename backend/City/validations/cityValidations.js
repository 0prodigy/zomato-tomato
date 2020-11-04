const { body } = require("express-validator");

const addCityValidation = [
  body("city_id")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("city id is required"),
  body("city_name")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("city name is required"),
  body("latitude")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("city latitude is required"),
  body("longitude")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("city longitude is required"),
];

module.exports = { addCityValidation };
