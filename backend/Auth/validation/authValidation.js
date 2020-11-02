const { body } = require("express-validator");

const registerValidator = [
  body("name")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Name is required"),
  body("email")
    .exists({ checkNull: true, checkFalsy: true })
    .isEmail("Enter valid email address"),
];

module.exports = { registerValidator };
