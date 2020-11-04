const { body } = require("express-validator");

const registerValidator = [
  body("name")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Name is required"),
  body("email").isEmail().withMessage("Enter valid email address"),
];

const loginValidator = [
  body("email").isEmail().withMessage("Enter valid email address"),
];

module.exports = { registerValidator, loginValidator };
