const { validationResult } = require("express-validator");
const City = require("../models/City");

const validateBody = validationResult.withDefaults({
  formatter: (err) => {
    return {
      err: true,
      message: err.msg,
    };
  },
});

const addCity = async (req, res) => {
  const errors = validateBody(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.status(422).json({ err, message });
  } else {
    try {
      let city = new City({ ...req.body });
      await city.save();
      return res.json({
        err: false,
        message: "city added successfully",
        city: city,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something Went wrong" });
    }
  }
};

module.exports = { addCity };
