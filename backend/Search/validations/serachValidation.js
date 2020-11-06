const { body } = require("express-validator");

const cityIdValidation = [
  body("long")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Longituded is required"),
  body("lat")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Latituded is required"),
];

module.exports = { cityIdValidation };
