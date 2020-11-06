const express = require("express");
const { getCityId } = require("../controllers/searchController");
const { cityIdValidation } = require("../validations/serachValidation");
const router = express.Router();

router.get("/cityId", cityIdValidation, getCityId);

module.exports = router;
