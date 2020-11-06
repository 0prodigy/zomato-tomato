const { body } = require("express-validator");

const cityIdValidation = [
  body("long")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Longitude is required"),
  body("lat")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Latitude is required"),
];

module.exports = { cityIdValidation };
