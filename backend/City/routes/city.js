const { addCity } = require("../controllers/city-controller");
const { addCityValidation } = require("../validations/cityValidations");

const router = require("express").Router();

router.post("/add", addCityValidation, addCity);

module.exports = router;
